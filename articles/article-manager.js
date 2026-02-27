// 記事管理システム
class ArticleManager {
    constructor() {
        this.articles = [];
        this.currentLanguage = this.getCurrentLanguage();
        this.init();
    }

    getCurrentLanguage() {
        // Check if language manager is available
        if (window.languageManager) {
            return window.languageManager.currentLanguage;
        }
        
        // Fallback to localStorage or browser detection
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage && ['ja', 'en', 'zh'].includes(storedLanguage)) {
            return storedLanguage;
        }
        
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];
        
        if (langCode === 'zh' || browserLang.startsWith('zh')) {
            return 'zh';
        } else if (langCode === 'ja' || browserLang.startsWith('ja')) {
            return 'ja';
        } else {
            return 'en';
        }
    }

    async init() {
        await this.loadArticles();
        this.renderArticleList();
        
        // Wait for language manager to be available
        const waitForLanguageManager = () => {
            if (window.languageManager) {
                // Override switchLanguage method to update articles
                const originalSwitchLanguage = window.languageManager.switchLanguage.bind(window.languageManager);
                window.languageManager.switchLanguage = (lang) => {
                    originalSwitchLanguage(lang);
                    this.currentLanguage = lang;
                    this.renderArticleList();
                };
                
                // Listen for language changes via custom event
                document.addEventListener('languageChanged', (e) => {
                    this.currentLanguage = e.detail.language;
                    this.renderArticleList();
                });
            } else {
                setTimeout(waitForLanguageManager, 100);
            }
        };
        waitForLanguageManager();
    }

    async loadArticles() {
        try {
            // 記事フォルダから記事データを読み込む
            const response = await fetch('./articles/articles.json');
            if (response.ok) {
                const data = await response.json();
                this.articles = data.articles.sort((a, b) => new Date(b.date) - new Date(a.date));
            }
        } catch (error) {
            console.log('記事データの読み込みに失敗しました。フォールバックを使用します。');
            // フォールバック：既存の記事を手動で設定
            this.articles = [
                {
                    id: 'homepage-announcement',
                    title: {
                        'ja': 'ホームページ公開しました！',
                        'en': 'Official Website Launch!',
                        'zh': '官方网站发布！'
                    },
                    subtitle: {
                        'ja': 'AI開発の活動拠点として、色々なプロジェクトを紹介していきます',
                        'en': 'As a hub for AI development activities, we will introduce various projects',
                        'zh': '作为AI开发活动的基地，我们将介绍各种项目'
                    },
                    date: '2024年2月28日',
                    category: {
                        'ja': 'お知らせ',
                        'en': 'Announcement',
                        'zh': '公告'
                    },
                    excerpt: {
                        'ja': 'この度、AInohogosyaのホームページを公開しました！AI開発のことやGitHubで公開してるプロジェクトについて、ここで色々お話ししていきたいと思います。',
                        'en': 'We are pleased to announce the launch of the AInohogosya official website. We have established this as a platform to systematically organize overviews, usage guides, and development history for repositories published on GitHub.',
                        'zh': '我们很高兴地宣布AInohogosya官方网站的发布。我们将其建立为一个平台，系统性地整理在GitHub上发布的仓库概览、使用指南和开发历史。'
                    },
                    tags: {
                        'ja': ['お知らせ', 'ホームページ', 'AI開発'],
                        'en': ['Announcement', 'Website', 'AI Development'],
                        'zh': ['公告', '网站', 'AI开发']
                    },
                    url: './articles/homepage-announcement.html'
                },
                {
                    id: 'vexis-1-1',
                    title: {
                        'ja': 'VEXIS-1.1 - 次世代AI画面操作自動化ツール',
                        'en': 'VEXIS-1.1 - Next-Generation AI Screen Automation Tool',
                        'zh': 'VEXIS-1.1 - 下一代AI屏幕自动化工具'
                    },
                    subtitle: {
                        'ja': 'VEXIS-1から記憶維持機能を大幅に改善したバージョン',
                        'en': 'Version with significantly improved memory retention from VEXIS-1',
                        'zh': '从VEXIS-1大幅改善记忆维持功能的版本'
                    },
                    date: '2024年2月28日',
                    category: {
                        'ja': 'プロジェクト',
                        'en': 'Project',
                        'zh': '项目'
                    },
                    excerpt: {
                        'ja': 'VEXIS-1.1は、AIの視覚的認識能力と自然言語理解を融合させた操作自動化ツールです。前バージョンから記憶維持機能を大幅に改善し、より長く複雑なタスクシーケンスを正確に実行できるようになりました。',
                        'en': 'VEXIS-1.1 is an automation tool that combines AI visual recognition capabilities with natural language understanding. Memory retention has been significantly improved from the previous version, enabling accurate execution of longer and more complex task sequences.',
                        'zh': 'VEXIS-1.1是结合AI视觉识别能力和自然语言理解的自动化工具。从上一版本大幅改善了记忆维持功能，能够准确执行更长更复杂的任务序列。'
                    },
                    tags: {
                        'ja': ['AI', '画面操作', 'Computer Vision', 'Python', '自動化', 'VEXIS'],
                        'en': ['AI', 'Screen Automation', 'Computer Vision', 'Python', 'Automation', 'VEXIS'],
                        'zh': ['AI', '屏幕自动化', 'Computer Vision', 'Python', '自动化', 'VEXIS']
                    },
                    url: './articles/vexis-1-1.html'
                }
            ];
        }
    }

    renderArticleList() {
        const container = document.querySelector('.articles-grid');
        if (!container) return;

        container.innerHTML = '';

        this.articles.forEach(article => {
            const articleCard = this.createArticleCard(article);
            container.appendChild(articleCard);
        });
    }

    createArticleCard(article) {
        const card = document.createElement('article');
        card.className = 'article-card';
        
        // Helper function to get localized content with fallback
        const getLocalizedContent = (field) => {
            if (typeof field === 'object' && field !== null) {
                return field[this.currentLanguage] || field['ja'] || field['en'] || '';
            }
            return field || '';
        };

        // Format date based on language
        const formatDate = (dateStr) => {
            // Handle Japanese date format like '2024年2月26日'
            const jpMatch = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
            if (jpMatch) {
                const [, year, month, day] = jpMatch;
                const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                if (this.currentLanguage === 'ja') {
                    return dateStr; // Keep original Japanese format
                } else if (this.currentLanguage === 'zh') {
                    return `${year}年${month}月${day}日`;
                } else {
                    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                }
            }
            
            // Handle other date formats
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) {
                return dateStr; // Return original if invalid
            }
            
            if (this.currentLanguage === 'ja') {
                return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
            } else if (this.currentLanguage === 'zh') {
                return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
            } else {
                return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            }
        };

        // Helper function to get translation text
        const getTranslation = (key) => {
            if (window.languageManager && window.languageManager.translations[this.currentLanguage][key]) {
                return window.languageManager.translations[this.currentLanguage][key];
            }
            // Fallback translations
            const fallbacks = {
                'article-read-more': {
                    'ja': '続きを読む →',
                    'en': 'Read more →',
                    'zh': '阅读更多 →'
                }
            };
            return fallbacks[key]?.[this.currentLanguage] || fallbacks[key]?.['en'] || key;
        };

        const title = getLocalizedContent(article.title);
        const subtitle = getLocalizedContent(article.subtitle);
        const category = getLocalizedContent(article.category);
        const excerpt = getLocalizedContent(article.excerpt);
        const tags = getLocalizedContent(article.tags);
        const url = getLocalizedContent(article.url);
        const formattedDate = formatDate(article.date);
        const readMoreText = getTranslation('article-read-more');

        card.innerHTML = `
            <div class="article-header">
                <div class="article-meta">
                    <span class="article-date">${formattedDate}</span>
                    <span class="article-category">${category}</span>
                </div>
                <h2 class="article-title">
                    <a href="${url}">${title}</a>
                </h2>
                ${subtitle ? `<p class="article-subtitle">${subtitle}</p>` : ''}
            </div>
            <div class="article-excerpt">
                <p>${excerpt}</p>
            </div>
            <div class="article-footer">
                <a href="${url}" class="read-more">${readMoreText} <i class="fas fa-arrow-right"></i></a>
                <div class="article-tags">
                    ${Array.isArray(tags) ? tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                </div>
            </div>
        `;
        
        return card;
    }

    // 新しい記事を追加するメソッド
    addArticle(articleData) {
        this.articles.unshift(articleData);
        this.saveArticles();
        this.renderArticleList();
    }

    // 記事データを保存するメソッド（将来的な拡張用）
    async saveArticles() {
        // 今は手動で articles.json を更新する必要があります
        console.log('記事データを更新しました。articles.json ファイルを手動で更新してください。');
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', () => {
    new ArticleManager();
});
