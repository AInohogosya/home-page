class AdminManager {
    constructor() {
        this.websites = [];
        this.config = null;
        this.init();
    }

    async init() {
        await this.loadConfig();
        await this.loadWebsites();
        this.renderWebsiteList();
        this.setupEventListeners();
        this.loadSettings();
    }

    async loadConfig() {
        try {
            const response = await fetch('websites.json');
            this.config = await response.json();
        } catch (error) {
            console.error('Failed to load config:', error);
            this.config = {
                websites: [],
                settings: {
                    autoDetect: true,
                    defaultThumbnail: "images/thumbnails/default-thumbnail.jpg",
                    supportedExtensions: [".html", ".htm"]
                }
            };
        }
    }

    async loadWebsites() {
        try {
            const response = await fetch('websites.json');
            const data = await response.json();
            this.websites = [...data.websites];
        } catch (error) {
            console.error('Failed to load websites:', error);
            this.websites = [];
        }
        
        try {
            const stored = localStorage.getItem('additionalWebsites');
            const additionalWebsites = stored ? JSON.parse(stored) : [];
            this.websites.push(...additionalWebsites);
        } catch (error) {
            console.error('Failed to load local websites:', error);
        }
    }

    saveWebsites() {
        try {
            // localStorageに追加されたウェブサイトを保存
            const configWebsites = this.websites.filter(w => this.config.websites.some(config => config.id === w.id));
            const additionalWebsites = this.websites.filter(w => !this.config.websites.some(config => config.id === w.id));
            
            localStorage.setItem('additionalWebsites', JSON.stringify(additionalWebsites));
            
            // 設定ファイルの更新をシミュレート（静的環境では実際のファイル保存は不可）
            this.config.websites = configWebsites;
            console.log('Websites saved to localStorage:', this.websites);
            
            // 管理者用にダウンロードリンクを生成（オプション）
            this.generateDownloadLink();
        } catch (error) {
            console.error('Failed to save websites:', error);
        }
    }

    generateDownloadLink() {
        // 現在のウェブサイトデータをダウンロード可能なJSONとして生成
        const dataStr = JSON.stringify({
            websites: this.websites,
            settings: this.config.settings
        }, null, 2);
        
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        // ダウンロードリンクを動的に作成（管理者画面用）
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'websites-backup.json';
        downloadLink.style.display = 'none';
        downloadLink.id = 'download-websites-backup';
        
        // 既存のリンクがあれば削除
        const existingLink = document.getElementById('download-websites-backup');
        if (existingLink) {
            existingLink.remove();
        }
        
        document.body.appendChild(downloadLink);
    }

    renderWebsiteList() {
        const container = document.getElementById('websiteList');
        if (!container) return;

        container.innerHTML = '';

        if (this.websites.length === 0) {
            container.innerHTML = '<p>ウェブサイトがありません</p>';
            return;
        }

        this.websites.forEach(website => {
            const item = this.createWebsiteItem(website);
            container.appendChild(item);
        });
    }

    createWebsiteItem(website) {
        const item = document.createElement('div');
        item.className = 'website-item';
        item.innerHTML = `
            <div class="website-info">
                <h4>${website.title}</h4>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0.25rem 0;">
                    ${website.url} 
                    <span class="status-indicator ${this.checkWebsiteExists(website.url) ? 'status-active' : 'status-inactive'}">
                        <i class="fas fa-circle"></i>
                        ${this.checkWebsiteExists(website.url) ? 'アクティブ' : '非アクティブ'}
                    </span>
                </p>
                <p style="color: var(--text-secondary); font-size: 0.8rem;">${website.description}</p>
            </div>
            <div class="website-actions">
                <a href="${website.url}" target="_blank" class="btn-small btn-view">
                    <i class="fas fa-eye"></i> 表示
                </a>
                <button class="btn-small btn-edit" onclick="adminManager.editWebsite('${website.id}')">
                    <i class="fas fa-edit"></i> 編集
                </button>
                <button class="btn-small btn-delete" onclick="adminManager.deleteWebsite('${website.id}')">
                    <i class="fas fa-trash"></i> 削除
                </button>
            </div>
        `;
        return item;
    }

    checkWebsiteExists(url) {
        // 静的環境では既知のファイルリストでチェック
        const knownFiles = ['index.html', 'websites.html', 'example-website.html', 'admin.html', 'homepage-announcement.html'];
        return knownFiles.includes(url);
    }

    setupEventListeners() {
        // ファイルアップロード
        const fileUploadArea = document.getElementById('fileUploadArea');
        const fileInput = document.getElementById('fileInput');

        if (fileUploadArea && fileInput) {
            fileUploadArea.addEventListener('click', () => fileInput.click());
            
            fileInput.addEventListener('change', (e) => {
                this.handleFileUpload(e.target.files);
            });

            // ドラッグ＆ドロップ
            fileUploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                fileUploadArea.classList.add('dragover');
            });

            fileUploadArea.addEventListener('dragleave', () => {
                fileUploadArea.classList.remove('dragover');
            });

            fileUploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                fileUploadArea.classList.remove('dragover');
                this.handleFileUpload(e.dataTransfer.files);
            });
        }

        // 手動追加ボタン
        const manualAddBtn = document.getElementById('manualAddBtn');
        if (manualAddBtn) {
            manualAddBtn.addEventListener('click', () => {
                this.showManualAddDialog();
            });
        }

        // 設定保存ボタン
        const saveSettingsBtn = document.getElementById('saveSettingsBtn');
        if (saveSettingsBtn) {
            saveSettingsBtn.addEventListener('click', () => {
                this.saveSettings();
            });
        }
    }

    async handleFileUpload(files) {
        for (const file of files) {
            if (file.name.endsWith('.html') || file.name.endsWith('.htm')) {
                try {
                    const content = await this.readFileAsText(file);
                    const metadata = this.extractMetadata(content, file.name);
                    
                    const newWebsite = {
                        id: this.generateId(file.name),
                        title: metadata.title,
                        description: metadata.description,
                        url: file.name,
                        thumbnail: this.getThumbnailPath(file.name),
                        tags: ['ウェブサイト'],
                        date: new Date().toISOString().split('T')[0]
                    };

                    this.websites.push(newWebsite);
                    this.saveWebsites();
                    this.renderWebsiteList();
                    
                    this.showSuccessMessage(`${file.name}を追加しました`);
                } catch (error) {
                    console.error('Failed to process file:', error);
                    this.showErrorMessage(`${file.name}の処理に失敗しました`);
                }
            }
        }
    }

    readFileAsText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }

    extractMetadata(content, filename) {
        const titleMatch = content.match(/<title>(.*?)<\/title>/i);
        const descriptionMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["'][^>]*>/i);
        
        return {
            title: titleMatch ? titleMatch[1] : this.generateTitle(filename),
            description: descriptionMatch ? descriptionMatch[1] : ''
        };
    }

    generateTitle(filename) {
        const name = filename.replace('.html', '').replace('.htm', '');
        return name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
    }

    generateId(filename) {
        return filename.replace('.html', '').replace('.htm', '').replace(/[^a-zA-Z0-9]/g, '-');
    }

    getThumbnailPath(filename) {
        const baseName = filename.replace('.html', '').replace('.htm', '');
        return `images/thumbnails/${baseName}.jpg`;
    }

    showManualAddDialog() {
        const dialog = document.createElement('div');
        dialog.className = 'add-website-dialog';
        dialog.innerHTML = `
            <div class="dialog-content">
                <h3>新しいウェブサイトを追加</h3>
                <form id="manual-add-form">
                    <div class="form-group">
                        <label for="manual-title">タイトル</label>
                        <input type="text" id="manual-title" required>
                    </div>
                    <div class="form-group">
                        <label for="manual-url">URL（ファイル名）</label>
                        <input type="text" id="manual-url" placeholder="example.html" required>
                    </div>
                    <div class="form-group">
                        <label for="manual-description">説明</label>
                        <textarea id="manual-description" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="manual-tags">タグ（カンマ区切り）</label>
                        <input type="text" id="manual-tags" placeholder="AI, テクノロジー, デモ">
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" onclick="this.closest('.add-website-dialog').remove()">キャンセル</button>
                        <button type="submit" class="btn btn-primary">追加</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(dialog);

        const form = document.getElementById('manual-add-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addWebsiteFromForm();
        });
    }

    addWebsiteFromForm() {
        const title = document.getElementById('manual-title').value;
        const url = document.getElementById('manual-url').value;
        const description = document.getElementById('manual-description').value;
        const tagsInput = document.getElementById('manual-tags').value;
        
        const newWebsite = {
            id: this.generateId(url),
            title,
            url,
            description,
            tags: tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : ['ウェブサイト'],
            thumbnail: this.getThumbnailPath(url),
            date: new Date().toISOString().split('T')[0]
        };

        this.websites.push(newWebsite);
        this.saveWebsites();
        this.renderWebsiteList();

        document.querySelector('.add-website-dialog').remove();
        this.showSuccessMessage('ウェブサイトを追加しました');
    }

    editWebsite(id) {
        const website = this.websites.find(w => w.id === id);
        if (!website) return;

        const dialog = document.createElement('div');
        dialog.className = 'add-website-dialog';
        dialog.innerHTML = `
            <div class="dialog-content">
                <h3>ウェブサイトを編集</h3>
                <form id="edit-form">
                    <div class="form-group">
                        <label for="edit-title">タイトル</label>
                        <input type="text" id="edit-title" value="${website.title}" required>
                    </div>
                    <div class="form-group">
                        <label for="edit-url">URL（ファイル名）</label>
                        <input type="text" id="edit-url" value="${website.url}" required>
                    </div>
                    <div class="form-group">
                        <label for="edit-description">説明</label>
                        <textarea id="edit-description" rows="3">${website.description}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="edit-tags">タグ（カンマ区切り）</label>
                        <input type="text" id="edit-tags" value="${website.tags.join(', ')}">
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" onclick="this.closest('.add-website-dialog').remove()">キャンセル</button>
                        <button type="submit" class="btn btn-primary">更新</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(dialog);

        const form = document.getElementById('edit-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateWebsite(id);
        });
    }

    updateWebsite(id) {
        const website = this.websites.find(w => w.id === id);
        if (!website) return;

        website.title = document.getElementById('edit-title').value;
        website.url = document.getElementById('edit-url').value;
        website.description = document.getElementById('edit-description').value;
        website.tags = document.getElementById('edit-tags').value.split(',').map(tag => tag.trim());

        this.saveWebsites();
        this.renderWebsiteList();

        document.querySelector('.add-website-dialog').remove();
        this.showSuccessMessage('ウェブサイトを更新しました');
    }

    deleteWebsite(id) {
        if (!confirm('本当に削除しますか？')) return;

        const index = this.websites.findIndex(w => w.id === id);
        if (index !== -1) {
            this.websites.splice(index, 1);
            this.saveWebsites();
            this.renderWebsiteList();
            this.showSuccessMessage('ウェブサイトを削除しました');
        }
    }

    loadSettings() {
        const autoDetect = document.getElementById('autoDetect');
        const defaultThumbnail = document.getElementById('defaultThumbnail');
        
        if (autoDetect && this.config.settings) {
            autoDetect.checked = this.config.settings.autoDetect;
        }
        
        if (defaultThumbnail && this.config.settings) {
            defaultThumbnail.value = this.config.settings.defaultThumbnail;
        }
    }

    saveSettings() {
        const autoDetect = document.getElementById('autoDetect');
        const defaultThumbnail = document.getElementById('defaultThumbnail');
        
        if (this.config.settings) {
            this.config.settings.autoDetect = autoDetect.checked;
            this.config.settings.defaultThumbnail = defaultThumbnail.value;
            
            localStorage.setItem('adminSettings', JSON.stringify(this.config.settings));
            this.showSuccessMessage('設定を保存しました');
        }
    }

    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }

    showErrorMessage(message) {
        this.showMessage(message, 'error');
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `${type}-message`;
        messageDiv.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            ${message}
        `;
        
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            box-shadow: var(--shadow-lg);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => messageDiv.remove(), 300);
        }, 3000);
    }
}

// アニメーションスタイルを追加
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 初期化
let adminManager;
document.addEventListener('DOMContentLoaded', function() {
    adminManager = new AdminManager();
});
