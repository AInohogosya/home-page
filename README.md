# AInohogosya Website - 静的サイト版

AIの専門家としての活動を紹介するポートフォリオサイトです。現在はGitHub Pages対応の完全な静的サイトとして動作します。

## 特徴

- 🚀 **完全静的**: サーバー不要でGitHub Pagesで稼働
- 📱 **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- 🎨 **モダンUI**: パララックス効果、アニメーション、美しいデザイン
- � **コンテンツ管理**: ウェブサイトの追加・編集・削除機能
- 🔍 **検索・フィルター**: タグ検索とキーワード検索
- 💾 **ローカル保存**: localStorageを使用してデータを保存

## ローカルでの実行方法

### 方法1: Python（推奨）
```bash
python3 -m http.server 8000
```

### 方法2: Node.js
```bash
npm install
npm run serve-node
```

ブラウザで `http://localhost:8000` にアクセスしてください。

## GitHub Pagesへのデプロイ

1. このリポジトリをGitHubにプッシュ
2. リポジトリのSettings > Pagesに移動
3. Sourceを「Deploy from a branch」に設定
4. Branchを「main」、フォルダを「/root」に設定
5. Saveして数分待つ

## 機能詳細

### メインページ (index.html)
- ヒーローセクション with パララックス効果
- 自己紹介セクション
- コンテンツセクション
- お問い合わせセクション
- スムーズスクロールとアニメーション

### ウェブサイト管理 (websites.html)
- ウェブサイトカード表示
- 検索機能
- タグフィルター
- レスポンシブデザイン

### 管理画面 (admin.html)
- ウェブサイトの追加・編集・削除
- ファイルアップロード（ドラッグ＆ドロップ対応）
- データのエクスポート機能
- 設定管理

## ファイル構成

```
ホームページ/
├── index.html              # メインページ
├── websites.html           # ウェブサイト一覧ページ
├── admin.html              # 管理画面
├── example-website.html    # サンプルページ
├── homepage-announcement.html # お知らせページ
├── websites.json           # ウェブサイトデータ
├── script.js               # メインJavaScript
├── website-manager.js      # ウェブサイト管理機能
├── admin.js                # 管理画面機能
├── styles.css              # メインスタイルシート
├── websites.css            # ウェブサイトページ用スタイル
├── websites-client.css     # クライアントサイド追加スタイル
├── language.js             # 多言語対応
├── package.json            # npm設定
└── images/                 # 画像リソース
    └── thumbnails/
        └── default-thumbnail.jpg
```

## データ管理

### 静的データ
- `websites.json`: 基本的なウェブサイト情報を保存

### 動的データ
- localStorage: 追加・編集されたウェブサイト情報を保存
- 管理画面からデータのバックアップが可能

## カスタマイズ

### 新しいウェブサイトを追加
1. 管理画面にアクセス (`admin.html`)
2. 「手動で追加」ボタンをクリック
3. 必要情報を入力して保存

### スタイルの変更
- `styles.css`: メインのスタイル
- `websites.css`: ウェブサイトページ用スタイル
- `websites-client.css`: クライアントサイド追加スタイル

### JavaScript機能の拡張
- `script.js`: メイン機能
- `website-manager.js`: ウェブサイト管理
- `admin.js`: 管理画面機能

## ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## ライセンス

MIT License

---

注意: これは静的サイトバージョンです。サーバーサイド機能は不要で、すべての機能がブラウザで動作します。
