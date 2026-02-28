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
            const response = await fetch('articles/articles.json');
            if (response.ok) {
                const data = await response.json();
                this.articles = data.articles.sort((a, b) => new Date(b.date) - new Date(a.date));
                return;
            }
        } catch (error) {
            console.log('記事データの読み込みに失敗しました。埋め込みデータを使用します。');
        }
        
        // 埋め込みデータを使用
        this.articles = [
            {
                id: 'ainohogosya-team-launch',
                date: '2026-02-28',
                category: {
                    'ja': 'お知らせ',
                    'en': 'Announcement',
                    'zh': '公告'
                },
                title: {
                    'ja': 'AInohogosya-Teamを始めました',
                    'en': 'Launching AInohogosya-Team',
                    'zh': '启动AInohogosya-Team'
                },
                subtitle: {
                    'ja': '複数人での協力開発によるプロジェクト品質向上と機能拡張',
                    'en': 'Improving project quality and expanding features through collaborative development',
                    'zh': '通过协作开发提高项目质量和扩展功能'
                },
                excerpt: {
                    'ja': '本日、AInohogosya-Teamを公開いたしました。これにより、複数人が協力してVEXISなどのバグ発見や修正、新機能の追加などを効率的に行える体制を整えました。ご興味がある方はAInohogosya@proton.meまでご連絡ください。',
                    'en': 'Today, we are launching AInohogosya-Team. This establishes a system where multiple people can efficiently collaborate on bug discovery and fixes, feature additions, and more for projects like VEXIS. If interested, please contact us at AInohogosya@proton.me.',
                    'zh': '今天，我们启动了AInohogosya-Team。这建立了一个多人协作的体系，可以高效地进行VEXIS等项目的错误发现和修复、新功能添加等工作。如有兴趣，请通过AInohogosya@proton.me联系我们。'
                },
                tags: {
                    'ja': ['お知らせ', 'チーム', '協力開発', 'VEXIS', 'オープンソース'],
                    'en': ['Announcement', 'Team', 'Collaborative Development', 'VEXIS', 'Open Source'],
                    'zh': ['公告', '团队', '协作开发', 'VEXIS', '开源']
                },
                url: {
                    'ja': 'articles/ainohogosya-team-launch.html',
                    'en': 'articles/ainohogosya-team-launch-en.html',
                    'zh': 'articles/ainohogosya-team-launch-zh.html'
                }
            },
            {
                id: 'homepage-announcement',
                date: '2026-02-28',
                category: {
                    'ja': 'お知らせ',
                    'en': 'Announcement',
                    'zh': '公告'
                },
                title: {
                    'ja': 'AInohogosya公式ホームページ公開',
                    'en': 'AInohogosya Official Website Launch',
                    'zh': 'AInohogosya官方网站发布'
                },
                subtitle: {
                    'ja': 'GitHubリポジトリの概要、使い方、開発経緯を体系的に公開するプラットフォーム',
                    'en': 'A platform to systematically publish GitHub repository overviews, usage guides, and development history',
                    'zh': '系统发布GitHub仓库概览、使用方法和开发历程的平台'
                },
                excerpt: {
                    'ja': 'AInohogosyaの公式ホームページを公開いたしました。GitHubで公開しているリポジトリの概要、使い方、開発経緯などを体系的にまとめるプラットフォームとして、各プロジェクトの詳細なドキュメンテーションを提供します。',
                    'en': 'We are pleased to announce the launch of the AInohogosya official website. As a platform to systematically organize repository overviews, usage guides, and development history published on GitHub, we provide detailed documentation for each project.',
                    'zh': '我们很高兴地宣布AInohogosya官方网站的发布。作为系统整理GitHub上发布的仓库概览、使用指南和开发历史的平台，我们为每个项目提供详细的文档。'
                },
                tags: {
                    'ja': ['お知らせ', 'ホームページ', 'GitHub', 'ドキュメンテーション'],
                    'en': ['Announcement', 'Website', 'GitHub', 'Documentation'],
                    'zh': ['公告', '网站', 'GitHub', '文档']
                },
                url: {
                    'ja': 'articles/homepage-announcement.html',
                    'en': 'articles/homepage-announcement-en.html',
                    'zh': 'articles/homepage-announcement-zh.html'
                }
            },
            {
                id: 'vexis-1-1',
                date: '2026-02-28',
                category: {
                    'ja': 'プロジェクト',
                    'en': 'Project',
                    'zh': '项目'
                },
                title: {
                    'ja': 'VEXIS-1.1 - 次世代AI画面操作自動化ツール',
                    'en': 'VEXIS-1.1 - Next-Generation AI Screen Operation Automation Tool',
                    'zh': 'VEXIS-1.1 - 新一代AI屏幕操作自动化工具'
                },
                subtitle: {
                    'ja': 'VEXIS-1から記憶維持機能を大幅に改善したバージョン',
                    'en': 'Version with significantly improved memory retention from VEXIS-1',
                    'zh': '从VEXIS-1大幅改进记忆维持功能的版本'
                },
                excerpt: {
                    'ja': 'VEXIS-1.1は、AIの視覚的認識能力と自然言語理解を融合させた操作自動化ツールです。前バージョンから記憶維持機能を大幅に改善し、より長く複雑なタスクシーケンスを正確に実行できるようになりました。',
                    'en': 'VEXIS-1.1 is an operation automation tool that combines AI visual recognition capabilities with natural language understanding. Memory retention has been significantly improved from the previous version, enabling more accurate execution of longer and more complex task sequences.',
                    'zh': 'VEXIS-1.1是一个结合AI视觉识别能力和自然语言理解的操作自动化工具。与前一版本相比，记忆维持功能得到了显著改善，能够更准确地执行更长、更复杂的任务序列。'
                },
                tags: {
                    'ja': ['AI', '画面操作', 'Computer Vision', 'Python', '自動化', 'VEXIS'],
                    'en': ['AI', 'Screen Operation', 'Computer Vision', 'Python', 'Automation', 'VEXIS'],
                    'zh': ['AI', '屏幕操作', '计算机视觉', 'Python', '自动化', 'VEXIS']
                },
                url: {
                    'ja': 'articles/vexis-1-1.html',
                    'en': 'articles/vexis-1-1-en.html',
                    'zh': 'articles/vexis-1-1-zh.html'
                }
            }
        ];
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
