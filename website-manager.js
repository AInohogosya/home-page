class WebsiteManager {
    constructor() {
        this.websites = [];
        this.init();
    }

    async init() {
        await this.loadWebsites();
        this.renderWebsites();
        this.setupEventListeners();
    }

    async loadWebsites() {
        try {
            // 静的JSONファイルからウェブサイトリストを読み込み
            const response = await fetch('websites.json');
            const data = await response.json();
            this.websites = data.websites || [];
            
            // localStorageから追加されたウェブサイトを読み込み
            const stored = localStorage.getItem('additionalWebsites');
            const additionalWebsites = stored ? JSON.parse(stored) : [];
            this.websites.push(...additionalWebsites);
        } catch (error) {
            console.error('Failed to load websites:', error);
            // フォールバック: デフォルトのウェブサイトを表示
            this.websites = [
                {
                    id: 'main',
                    title: 'AInohogosya - AIの専門家',
                    description: '人工知能の可能性を探求し、最新技術を分かりやすくお届けします',
                    url: 'index.html',
                    thumbnail: 'images/thumbnails/default-thumbnail.jpg',
                    tags: ['AI', 'テクノロジー', '教育'],
                    date: '2024-01-01'
                }
            ];
        }
    }

    renderWebsites() {
        const container = document.getElementById('websites-container');
        if (!container) return;

        container.innerHTML = '';

        this.websites.forEach(website => {
            const card = this.createWebsiteCard(website);
            container.appendChild(card);
        });
    }

    createWebsiteCard(website) {
        const card = document.createElement('div');
        card.className = 'website-card';
        card.innerHTML = `
            <div class="website-thumbnail">
                <img src="${website.thumbnail || '/images/default-thumbnail.jpg'}" 
                     alt="${website.title}" 
                     onerror="this.src='/images/default-thumbnail.jpg'">
                <div class="website-overlay">
                    <a href="${website.url}" class="btn-view-site" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        サイトを表示
                    </a>
                </div>
            </div>
            <div class="website-info">
                <h3 class="website-title">${website.title}</h3>
                <p class="website-description">${website.description}</p>
                <div class="website-meta">
                    <span class="website-date">
                        <i class="fas fa-calendar"></i>
                        ${this.formatDate(website.date)}
                    </span>
                    <div class="website-tags">
                        ${website.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ja-JP');
    }

    setupEventListeners() {
        // 検索機能
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterWebsites(e.target.value);
            });
        }

        // タグフィルター
        const tagFilters = document.querySelectorAll('.tag-filter');
        tagFilters.forEach(filter => {
            filter.addEventListener('click', (e) => {
                this.filterByTag(e.target.dataset.tag);
            });
        });
    }

    filterWebsites(searchTerm) {
        const filtered = this.websites.filter(website => 
            website.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            website.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.renderFilteredWebsites(filtered);
    }

    filterByTag(tag) {
        if (tag === 'all') {
            this.renderWebsites();
        } else {
            const filtered = this.websites.filter(website => 
                website.tags.includes(tag)
            );
            this.renderFilteredWebsites(filtered);
        }
    }

    renderFilteredWebsites(websites) {
        const container = document.getElementById('websites-container');
        container.innerHTML = '';

        if (websites.length === 0) {
            container.innerHTML = '<p class="no-results">該当するウェブサイトが見つかりません</p>';
            return;
        }

        websites.forEach(website => {
            const card = this.createWebsiteCard(website);
            container.appendChild(card);
        });
    }

    // 新しいウェブサイトを追加するメソッド（静的版）
    async addWebsite(websiteData) {
        try {
            // localStorageに保存
            const stored = localStorage.getItem('additionalWebsites');
            const additionalWebsites = stored ? JSON.parse(stored) : [];
            
            const newWebsite = {
                id: Date.now().toString(),
                ...websiteData,
                date: new Date().toISOString().split('T')[0]
            };
            
            additionalWebsites.push(newWebsite);
            localStorage.setItem('additionalWebsites', JSON.stringify(additionalWebsites));
            
            await this.loadWebsites();
            this.renderWebsites();
            return true;
        } catch (error) {
            console.error('Failed to add website:', error);
        }
        return false;
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('websites-container')) {
        new WebsiteManager();
    }
});
