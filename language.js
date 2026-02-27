// Language Management System
class LanguageManager {
    constructor() {
        this.translations = {
            en: {
                // Page Title
                'page-title': 'AInohogosya - AI Expert',
                'websites-page-title': 'Portfolio - AInohogosya',
                'tagline': 'GitHub Repository Introduction',
                
                // Navigation
                'nav-home': 'Home',
                'nav-websites': 'Articles',
                'nav-about': 'About',
                'nav-content': 'Projects',
                'nav-contact': 'Contact',
                
                // Hero Section
                'hero-title-1': 'AI Creator',
                'hero-title-welcome': 'Welcome!<br>I am <span class="gradient-text">AInohogosya</span>',
                'hero-subtitle': 'I develop AI agents and this site introduces them!<br>Machine learning, web development, and experimental code on GitHub!<br>Feel free to take a look if you\'re interested.',
                'btn-github': 'View GitHub',
                'btn-twitter': 'Follow on X',
                
                // About Section
                'about-title': 'About AInohogosya',
                'about-text-1': 'Hello! I\'m AInohogosya.<br>A developer who loves AI and machine learning,<br>creating various open source projects.',
                'about-text-2': 'I publish experimental code and practical tools on GitHub.<br>I welcome you to look at my code and participate through Issues and PRs!',
                'feature-education-title': 'Skills',
                'feature-education-desc': 'Python, PyTorch, TensorFlow, FastAPI',
                'feature-coding-title': 'Development Style',
                'feature-coding-desc': 'Machine learning, API development, experimental projects',
                'feature-trends-title': 'Activity Base',
                'feature-trends-desc': 'Publish code on GitHub, update development diary on X',
                
                // Content Section
                'content-title': 'Projects',
                'content-vexis-title': 'VEXIS-1.1',
                'content-vexis-desc': 'AI screen operation tool. Automate PC operations with natural language instructions. An experimental project integrating screen recognition and operation execution.',
                'content-vexis-link': 'View Details',
                'content-github-title': 'GitHub',
                'content-github-desc': 'Publishing AI-related open source projects. Machine learning, API development, experimental code, etc.',
                'content-github-link': 'View Repository',
                'content-twitter-title': 'Development Diary (X)',
                'content-twitter-desc': 'Sharing development progress, technical discoveries, and problems in real-time.',
                'content-twitter-link': 'Follow',
                
                // Contact Section
                'contact-title': 'Contact',
                'contact-message': 'Technical questions, collaboration proposals,<br>bug reports and feature requests are welcome!<br>Feel free to contact us!',
                'contact-github-title': 'GitHub',
                'contact-twitter-title': 'X (Twitter)',
                
                // Footer
                'footer-tagline': 'AI Creator',
                'footer-copyright': '© 2024 AInohogosya. Open source AI development',
                
                // Websites Page
                'websites-title': 'Articles',
                'websites-subtitle': 'Detailed information about articles and projects',
                'websites-back': '← Back to Home',
                'search-placeholder': 'Search projects...',
                'filter-all': 'All',
                'filter-ai': 'AI',
                'filter-tech': 'Technology',
                'filter-edu': 'Education',
                'filter-web': 'Websites',
                'no-results-title': 'No projects found',
                'no-results-desc': 'Try different search keywords or tags',
                'add-website-title': 'How to Add Projects',
                'add-website-desc': 'Simply add HTML files and they will automatically appear in the portfolio',
                'instruction-1-title': '1. Create HTML File',
                'instruction-1-desc': 'Add a new HTML file to this folder',
                'instruction-2-title': '2. Add Thumbnail',
                'instruction-2-desc': 'Place a thumbnail as "filename.jpg" in the images/thumbnails/ folder',
                'instruction-3-title': '3. Auto Reflection',
                'instruction-3-desc': 'Refresh the page and it will automatically appear in the list',
                'instruction-4-title': '4. Admin Panel',
                'instruction-4-desc': 'Detailed settings are available from the admin panel',
                
                // Admin Page
                'admin-title': 'Admin Panel',
                'admin-subtitle': 'AInohogosya Website Management System',
                'admin-add-website': 'Add New Website',
                'admin-drag-drop': 'Drag & Drop HTML Files',
                'admin-click-select': 'Or click to select files',
                'admin-manual-add': 'Add Manually',
                'admin-website-list': 'Website List',
                'admin-settings': 'Settings',
                'admin-auto-detect': 'Auto-detect HTML files',
                'admin-default-thumbnail': 'Default Thumbnail',
                'admin-save-settings': 'Save Settings',
                'admin-back-to-websites': '← Back to Website List',
                
                // Article Page
                'article-read-more': 'Read more →',
                'read-more': 'Read more →',
                'article-back-to-list': '← Back to Articles',
                'article-breadcrumb-home': 'Home',
                'article-breadcrumb-articles': 'Articles',
                
                // Announcement Page
                'announcement-page-title': 'Official Website Launch Announcement | AInohogosya',
                'announcement-current-page': 'Official Website Launch Announcement',
                'announcement-date': 'February 26, 2024',
                'announcement-category': 'Announcement',
                'announcement-title': 'Official Website Launch!',
                'announcement-subtitle': 'As a hub for AI development activities, we will introduce various projects',
                'announcement-intro': 'We are pleased to announce the launch of the AInohogosya official website. We have established this as a platform to systematically organize overviews, usage guides, and development history for repositories published on GitHub.',
                'announcement-section-1-title': '🎯 Why We Launched This Website',
                'announcement-section-1-para-1': 'While the number of repositories we publish on GitHub has been increasing, code alone cannot fully convey usage methods, development background, or technical context. Therefore, we created this website as detailed documentation for each repository.',
                'announcement-section-1-para-2': 'Here, we systematically organize and publish everything from project overviews to specific usage methods, development history, and technical features. We aim to help users gain a deeper understanding of projects and utilize them effectively.',
                'announcement-section-2-title': '📋 What We Publish Here',
                'announcement-section-2-para-1': 'On this site, we systematically introduce detailed information about repositories published on GitHub.',
                'announcement-section-2-subtitle': '📚 Repository Overview',
                'announcement-section-2-para-2': 'We provide detailed explanations of each GitHub repository\'s purpose, features, and technical stack. We clarify the overall picture of the project and what kind of problem-solving it aims to achieve.',
                'announcement-section-3-title': '🤝 Let\'s Connect!',
                'announcement-section-3-para-1': 'Since I\'m still learning programming, I might not notice bugs. If you find any bugs in the repositories, please let me know.',
                'announcement-cooperation-1-title': 'Let\'s Play on GitHub',
                'announcement-cooperation-1-desc': 'Star repositories, send bug reports and feature requests, write code together... Any form of participation is welcome! Pull requests are highly appreciated.',
                'announcement-cooperation-2-title': 'Let\'s Interact on X',
                'announcement-cooperation-2-desc': 'I share development progress and "What do you think about this?" in real-time. Feel free to follow and talk to me with replies!',
                'announcement-cooperation-3-title': 'Let\'s Discuss Technology',
                'announcement-cooperation-3-desc': 'Let\'s get excited about technical discussions through article comments and GitHub Discussions! I want to create interesting things while learning together.',
                'announcement-section-4-title': '📞 Contact Information',
                'announcement-section-4-para-1': 'We welcome any inquiries, including technical consultations, collaboration proposals, or media interview requests. Please feel free to contact us through the following channels:',
                'announcement-contact-1': '<strong>GitHub Issues</strong> - Technical questions and bug reports',
                'announcement-contact-2': '<strong>GitHub Discussions</strong> - Topics for everyone to discuss',
                'announcement-contact-3': '<strong>X(Twitter)</strong> - Casual conversations and real-time contact',
                'announcement-conclusion-para-1': 'AI is really interesting, isn\'t it? I hope this website becomes a place where everyone can share the fun of AI. I will continue to try various things and create interesting things!',
                'announcement-signature': 'Looking forward to working with you!<br><strong>AInohogosya</strong>',
                'announcement-github-btn': 'Follow on GitHub',
                'announcement-twitter-btn': 'Follow on X'
            },
            ja: {
                // Page Title
                'page-title': 'AInohogosya - AIの専門家',
                'websites-page-title': '作品一覧 - AInohogosya',
                'tagline': 'GitHubリポジトリ紹介',
                
                // Navigation
                'nav-home': 'ホーム',
                'nav-websites': '記事一覧',
                'nav-about': '自己紹介',
                'nav-content': 'プロジェクト',
                'nav-contact': '連絡先',
                
                // Hero Section
                'hero-title-1': 'AIクリエイター',
                'hero-title-welcome': 'ようこそ！<br><span class="gradient-text">AInohogosya</span>です',
                'hero-subtitle': '私はAIエージェントの開発などを行っており、このサイトはそれらを紹介するためのものです！<br>機械学習プログラム、AIエージェント、実験的なAIをGitHubで公開中！<br>ぜひみてください。',
                'btn-github': 'GitHubを見る',
                'btn-youtube': 'YouTubeチャンネル',
                'btn-twitter': 'Xをフォロー',
                
                // About Section
                'about-title': 'AInohogosyaについて',
                'about-text-1': 'こんにちは！AInohogosyaです。<br>AIが単に好きな学生で、<br>オープンソースリポジトリを公開していたりしています。',
                'about-text-2': '実験的なコードや実用的なツールをGitHubで公開しています。<br>コードを見ていただいたり、IssueやPRで参加していただける歓迎です！',
                'feature-education-title': '得意な技術',
                'feature-education-desc': 'バイブコーディング',
                'feature-coding-title': '開発スタイル',
                'feature-coding-desc': 'AIエージェント 機械学習AI',
                'feature-trends-title': '活動拠点',
                'feature-trends-desc': 'GitHubでコードを公開',
                
                // Content Section
                'content-title': 'プロジェクト',
                'content-vexis-title': '作っているもの',
                'content-vexis-desc': 'AIエージェント 機械学習AI',
                'content-vexis-link': '詳細を見る',
                'content-github-title': 'GitHub',
                'content-github-desc': 'オープンソースリポジトリを公開しています。',
                'content-github-link': 'リポジトリを見る',
                'content-twitter-title': '開発日記 (X)',
                'content-twitter-desc': '開発の進捗や技術的な発見、困ったことなどを共有しています。',
                'content-twitter-link': 'フォローする',
                
                // Contact Section
                'contact-title': '連絡先',
                'contact-message': '技術的な質問、コラボレーションの提案、<br>バグ報告や機能リクエストも大歓迎です！<br>気軽に連絡してください！',
                'contact-github-title': 'GitHub',
                'contact-twitter-title': 'X (Twitter)',
                
                // Footer
                'footer-tagline': 'AIクリエイター',
                'footer-copyright': '© 2024 AInohogosya. オープンソースでAI開発',
                
                // Websites Page
                'websites-title': '記事一覧',
                'websites-subtitle': '記事やプロジェクトの詳細情報',
                'websites-back': '← ホームに戻る',
                'search-placeholder': '作品を検索...',
                'filter-all': 'すべて',
                'filter-ai': 'AI',
                'filter-tech': 'テクノロジー',
                'filter-edu': '教育',
                'filter-web': 'ウェブサイト',
                'no-results-title': '該当する作品が見つかりません',
                'no-results-desc': '別の検索キーワードやタグでお試しください',
                'add-website-title': '作品の追加方法',
                'add-website-desc': 'HTMLファイルを追加するだけで、自動的に作品一覧に表示されます',
                'instruction-1-title': '1. HTMLファイルを作成',
                'instruction-1-desc': '新しいHTMLファイルをこのフォルダに追加します',
                'instruction-2-title': '2. サムネイルを追加',
                'instruction-2-desc': 'images/thumbnails/フォルダに「ファイル名.jpg」でサムネイルを配置',
                'instruction-3-title': '3. 自動反映',
                'instruction-3-desc': 'ページを更新すると自動的に一覧に表示されます',
                'instruction-4-title': '4. 管理画面',
                'instruction-4-desc': '管理画面から詳細な設定が可能です',
                
                // Admin Page
                'admin-title': '管理画面',
                'admin-subtitle': 'AInohogosyaウェブサイト管理システム',
                'admin-add-website': '新しいウェブサイトを追加',
                'admin-drag-drop': 'HTMLファイルをドラッグ＆ドロップ',
                'admin-click-select': 'またはクリックしてファイルを選択',
                'admin-manual-add': '手動で追加',
                'admin-website-list': 'ウェブサイト一覧',
                'admin-settings': '設定',
                'admin-auto-detect': 'HTMLファイルを自動検出する',
                'admin-default-thumbnail': 'デフォルトサムネイル',
                'admin-save-settings': '設定を保存',
                'admin-back-to-websites': '← ウェブサイト一覧に戻る',
                
                // Article Page
                'article-read-more': '続きを読む →',
                'read-more': '続きを読む →',
                'article-back-to-list': '← 記事一覧に戻る',
                'article-breadcrumb-home': 'ホーム',
                'article-breadcrumb-articles': '記事一覧',
                
                // Announcement Page
                'announcement-page-title': 'ホームページ公開のお知らせ | AInohogosya',
                'announcement-current-page': 'ホームページ公開のお知らせ',
                'announcement-date': '2024年2月26日',
                'announcement-category': 'お知らせ',
                'announcement-title': 'ホームページ公開しました！',
                'announcement-subtitle': 'AI開発の活動拠点として、色々なプロジェクトを紹介していきます',
                'announcement-intro': 'この度、AInohogosyaのホームページを公開しました！AI開発のことや、GitHubで公開してるプロジェクトについて、ここで色々お話ししていきたいと思います。',
                'announcement-section-1-title': '🎯 なぜホームページを作ったのか？',
                'announcement-section-1-para-1': '私は最近、GitHubでリポジトリを公開していたりしていて、そのリポジトリはどんどん増やしていこうと思っているのですが、それを紹介するサイトが欲しくなり、それを紹介するサイトをまとめるサイトが欲しくないり、このホームページを作りました。',
                'announcement-section-1-para-2': 'だからこのホームページを作りました！ここでは私がやっているAI開発のこと、技術的なお話、時には失敗談も含めて、ありのままをシェアできたらいいなと思っています。',
                'announcement-section-2-title': '📋 ここでは何を書いているのか？',
                'announcement-section-2-para-1': 'ここでは、私がやっているAI作成の活動、技術的な話、リポジトリの紹介など、ありのままをシェアできたらいいなと思っています。ブログのようなものです。',
                'announcement-section-2-subtitle': '作ったものの紹介',
                'announcement-section-2-para-2': 'GitHubで公開している私のリポジトリについて、どのように使うのか、どんな仕組みで動いているのかとかを詳しく書いています。VEXIS-1.1のようなAI画面操作ツールとか、今後作る予定の面白いものとかを紹介していきます！',
                'announcement-section-3-title': 'ぜひ話しかけてください！',
                'announcement-section-3-para-1': 'まだ全然プログラミングとかもできないので、バグとかにも気がついていなかったりするかもしれませんけれども、リポジトリからバグが見つかったら教えて欲しいです。',
                'announcement-cooperation-1-title': 'GitHubで遊ぼう',
                'announcement-cooperation-1-desc': 'リポジトリにスターをつけたり、バグ報告や機能リクエストを送ったり、コードを一緒に書いたり…。どんな形でもOKです！プルリクエストも大歓迎です。',
                'announcement-cooperation-2-title': 'Xで交流しよう',
                'announcement-cooperation-2-desc': '開発の進捗や「これどう思う？」っていう話をリアルタイムで投稿しています。気軽にフォローして、リプライで話しかけてください！',
                'announcement-cooperation-3-title': '技術談義しよう',
                'announcement-cooperation-3-desc': '記事へのコメントやGitHub Discussionsで、技術的な話で盛り上がりましょう！一緒に学びながら、面白いものを作っていきたいです。',
                'announcement-section-4-title': '📞 連絡はこちらから',
                'announcement-section-4-para-1': '技術的な質問、一緒に何か作りたいっていう話、メディアからの取材依頼など、どんなことでも大歓迎です！気軽に連絡してください：',
                'announcement-contact-1': '<strong>GitHub Issues</strong> - 技術的な質問やバグ報告',
                'announcement-contact-2': '<strong>GitHub Discussions</strong> - みんなで話したいこと',
                'announcement-contact-3': '<strong>X(Twitter)</strong> - カジュアルなお話やリアルタイム連絡',
                'announcement-conclusion-para-1': 'AIって本当に面白いですよね。このホームページが、みんなでAIの面白さを共有する場になれば嬉しいです。これからも色々試しながら、面白いものを作っていきます！',
                'announcement-signature': 'これからよろしくお願いします！<br><strong>AInohogosya</strong>',
                'announcement-github-btn': 'GitHubでフォロー',
                'announcement-twitter-btn': 'Xでフォロー'
            },
            zh: {
                // Page Title
                'page-title': 'AInohogosya - AI专家',
                'websites-page-title': '作品集 - AInohogosya',
                'tagline': 'GitHub仓库介绍',
                
                // Navigation
                'nav-home': '首页',
                'nav-websites': '文章列表',
                'nav-about': '关于',
                'nav-content': '项目',
                'nav-contact': '联系',
                
                // Hero Section
                'hero-title-1': 'AI创造者',
                'hero-title-welcome': '欢迎！<br>我是<span class="gradient-text">AInohogosya</span>',
                'hero-subtitle': '我开发AI代理等，这个网站就是为了介绍它们！<br>机器学习、Web开发、实验性代码在GitHub上公开！<br>有兴趣的话请来看看。',
                'btn-github': '查看GitHub',
                'btn-twitter': '在X上关注',
                
                // About Section
                'about-title': '关于AInohogosya',
                'about-text-1': '你好！我是AInohogosya。<br>喜欢AI和机器学习的开发者，<br>创建各种开源项目。',
                'about-text-2': '在GitHub上发布实验性代码和实用工具。<br>欢迎查看代码并通过Issue和PR参与！',
                'feature-education-title': '擅长技术',
                'feature-education-desc': 'Python, PyTorch, TensorFlow, FastAPI',
                'feature-coding-title': '开发风格',
                'feature-coding-desc': '机器学习、API开发、实验性项目',
                'feature-trends-title': '活动基地',
                'feature-trends-desc': '在GitHub上公开代码，在X上更新开发日记',
                
                // Content Section
                'content-title': '项目',
                'content-vexis-title': 'VEXIS-1.1',
                'content-vexis-desc': 'AI画面操作工具。用自然语言指示自动化PC操作。整合画面识别和操作执行的实验性项目。',
                'content-vexis-link': '查看详情',
                'content-github-title': 'GitHub',
                'content-github-desc': '发布AI相关的开源项目。机器学习、API开发、实验性代码等。',
                'content-github-link': '查看仓库',
                'content-twitter-title': '开发日记 (X)',
                'content-twitter-desc': '实时分享开发进度、技术发现和遇到的问题。',
                'content-twitter-link': '关注',
                
                // Contact Section
                'contact-title': '联系',
                'contact-message': '技术问题、合作提案、<br>bug报告和功能请求都欢迎！<br>请随时联系！',
                'contact-github-title': 'GitHub',
                'contact-twitter-title': 'X (Twitter)',
                
                // Footer
                'footer-tagline': 'AI创造者',
                'footer-copyright': '© 2024 AInohogosya. 开源AI开发',
                
                // Websites Page
                'websites-title': '文章列表',
                'websites-subtitle': '文章和项目的详细信息',
                'websites-back': '← 返回首页',
                'search-placeholder': '搜索项目...',
                'filter-all': '全部',
                'filter-ai': 'AI',
                'filter-tech': '技术',
                'filter-edu': '教育',
                'filter-web': '网站',
                'no-results-title': '未找到项目',
                'no-results-desc': '请尝试不同的搜索关键词或标签',
                'add-website-title': '添加项目方法',
                'add-website-desc': '只需添加HTML文件，项目就会自动显示在作品集中',
                'instruction-1-title': '1. 创建HTML文件',
                'instruction-1-desc': '将新的HTML文件添加到此文件夹',
                'instruction-2-title': '2. 添加缩略图',
                'instruction-2-desc': '在images/thumbnails/文件夹中以"文件名.jpg"放置缩略图',
                'instruction-3-title': '3. 自动反映',
                'instruction-3-desc': '刷新页面后会自动显示在列表中',
                'instruction-4-title': '4. 管理面板',
                'instruction-4-desc': '可以通过管理面板进行详细设置',
                
                // Admin Page
                'admin-title': '管理面板',
                'admin-subtitle': 'AInohogosya网站管理系统',
                'admin-add-website': '添加新网站',
                'admin-drag-drop': '拖放HTML文件',
                'admin-click-select': '或点击选择文件',
                'admin-manual-add': '手动添加',
                'admin-website-list': '网站列表',
                'admin-settings': '设置',
                'admin-auto-detect': '自动检测HTML文件',
                'admin-default-thumbnail': '默认缩略图',
                'admin-save-settings': '保存设置',
                'admin-back-to-websites': '← 返回网站列表',
                
                // Article Page
                'article-read-more': '阅读更多 →',
                'read-more': '阅读更多 →',
                'article-back-to-list': '← 返回文章列表',
                'article-breadcrumb-home': '首页',
                'article-breadcrumb-articles': '文章列表',
                
                // Announcement Page
                'announcement-page-title': '官方网站发布公告 | AInohogosya',
                'announcement-current-page': '官方网站发布公告',
                'announcement-date': '2024年2月26日',
                'announcement-category': '公告',
                'announcement-title': '官方网站发布！',
                'announcement-subtitle': '作为AI开发活动的基地，我们将介绍各种项目',
                'announcement-intro': '我们很高兴地宣布AInohogosya官方网站的发布。我们将其建立为一个平台，系统性地整理在GitHub上发布的仓库概览、使用指南和开发历史。',
                'announcement-section-1-title': '🎯 为什么要建立这个网站',
                'announcement-section-1-para-1': '虽然我们在GitHub上发布的仓库数量不断增加，但仅靠代码无法充分传达使用方法、开发背景或技术上下文。因此，我们创建了这个网站作为每个仓库的详细文档。',
                'announcement-section-1-para-2': '在这里，我们系统地组织和发布从项目概览到具体使用方法、开发历程和技术特色的所有内容。我们旨在帮助用户更深入地了解项目并有效利用它们。',
                'announcement-section-2-title': '📋 我们在这里发布什么',
                'announcement-section-2-para-1': '在本网站上，我们系统地介绍在GitHub上发布的仓库的详细信息：',
                'announcement-section-2-subtitle': '📚 仓库概览',
                'announcement-section-2-para-2': '我们提供每个GitHub仓库的目的、功能和技术栈的详细说明。我们阐明项目的整体情况以及它旨在解决什么样的问题。',
                'announcement-section-3-title': '🤝 请一定和我们交流！',
                'announcement-section-3-para-1': '我还不太会编程，可能没有注意到一些bug。如果在仓库中发现bug，请告诉我。',
                'announcement-cooperation-1-title': '在GitHub上一起玩',
                'announcement-cooperation-1-desc': '给仓库加星标、发送bug报告和功能请求、一起写代码…任何形式都可以！非常欢迎pull request。',
                'announcement-cooperation-2-title': '在X上交流',
                'announcement-cooperation-2-desc': '我实时分享开发进度和"你觉得这个怎么样？"之类的话题。请随意关注，用回复和我聊天！',
                'announcement-cooperation-3-title': '技术讨论',
                'announcement-cooperation-3-desc': '通过文章评论和GitHub Discussions，让我们在技术讨论中兴奋起来！我想一边学习一边创造有趣的东西。',
                'announcement-section-4-title': '📞 联系方式',
                'announcement-section-4-para-1': '我们欢迎任何咨询，包括技术咨询、合作提案或媒体采访请求。请随时通过以下渠道联系我们：',
                'announcement-contact-1': '<strong>GitHub Issues</strong> - 技术问题和bug报告',
                'announcement-contact-2': '<strong>GitHub Discussions</strong> - 大家讨论的话题',
                'announcement-contact-3': '<strong>X(Twitter)</strong> - 轻松交流和实时联系',
                'announcement-conclusion-para-1': 'AI真的很有趣，对吧？我希望这个网站成为大家分享AI乐趣的地方。今后我也会继续尝试各种事情，创造有趣的东西！',
                'announcement-signature': '请多关照！<br><strong>AInohogosya</strong>',
                'announcement-github-btn': '在GitHub上关注',
                'announcement-twitter-btn': '在X上关注'
            }
        };
        
        this.currentLanguage = this.detectLanguage();
        this.init();
    }
    
    detectLanguage() {
        // Check if language is stored in localStorage
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage && this.translations[storedLanguage]) {
            return storedLanguage;
        }
        
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0];
        
        // Map browser language to supported languages
        if (langCode === 'zh' || browserLang.startsWith('zh')) {
            return 'zh';
        } else if (langCode === 'ja' || browserLang.startsWith('ja')) {
            return 'ja';
        } else {
            return 'en'; // Default to English
        }
    }
    
    init() {
        this.updateLanguage();
        this.createLanguageSwitcher();
        this.bindEvents();
    }
    
    createLanguageSwitcher() {
        const navbar = document.querySelector('.nav-menu');
        if (!navbar) return;
        
        const languageSwitcher = document.createElement('li');
        languageSwitcher.className = 'nav-item language-switcher';
        languageSwitcher.innerHTML = `
            <div class="language-dropdown">
                <button class="language-btn" id="language-btn">
                    <i class="fas fa-globe"></i>
                    <span class="current-lang">${this.getLanguageDisplay(this.currentLanguage)}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="language-menu" id="language-menu">
                    <button class="language-option ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
                        <span class="flag">🇺🇸</span> English
                    </button>
                    <button class="language-option ${this.currentLanguage === 'ja' ? 'active' : ''}" data-lang="ja">
                        <span class="flag">🇯🇵</span> 日本語
                    </button>
                    <button class="language-option ${this.currentLanguage === 'zh' ? 'active' : ''}" data-lang="zh">
                        <span class="flag">🇨🇳</span> 中文
                    </button>
                </div>
            </div>
        `;
        
        navbar.appendChild(languageSwitcher);
    }
    
    getLanguageDisplay(lang) {
        const displays = {
            en: 'EN',
            ja: '日本語',
            zh: '中文'
        };
        return displays[lang] || 'EN';
    }
    
    bindEvents() {
        // Language button click
        const languageBtn = document.getElementById('language-btn');
        const languageMenu = document.getElementById('language-menu');
        
        if (languageBtn && languageMenu) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageMenu.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                languageMenu.classList.remove('show');
            });
            
            // Language option clicks
            const languageOptions = languageMenu.querySelectorAll('.language-option');
            languageOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const selectedLang = option.dataset.lang;
                    this.switchLanguage(selectedLang);
                    languageMenu.classList.remove('show');
                });
            });
        }
    }
    
    switchLanguage(lang) {
        if (!this.translations[lang]) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang === 'en' ? 'en' : lang === 'zh' ? 'zh-CN' : 'ja';
        
        // Update language display
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = this.getLanguageDisplay(lang);
        }
        
        // Update active state
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === lang);
        });
        
        // Update all translatable elements
        this.updateLanguage();
        
        // Dispatch custom event for other scripts
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    }
    
    updateLanguage() {
        // Update all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            const translation = this.translations[this.currentLanguage][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translation;
                } else if (element.tagName === 'TITLE') {
                    element.textContent = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
        
        // Update title tag
        const titleKey = document.querySelector('title').dataset.translate;
        if (titleKey) {
            document.title = this.translations[this.currentLanguage][titleKey] || document.title;
        }
        
        // Handle article page language switching
        this.handleArticleLanguageSwitch();
    }
    
    handleArticleLanguageSwitch() {
        // Check if we're on an article page
        const articleId = this.getArticleIdFromUrl();
        if (!articleId) return;
        
        // Load articles data to find the correct URL for current language
        this.loadArticlesData().then(articles => {
            const article = articles.articles.find(a => a.id === articleId);
            if (article && article.url && article.url[this.currentLanguage]) {
                const newUrl = article.url[this.currentLanguage];
                
                // Only redirect if the current URL is different from the target URL
                if (window.location.pathname !== newUrl) {
                    // Store scroll position to restore after redirect
                    const scrollY = window.pageYOffset;
                    sessionStorage.setItem('articleScrollPosition', scrollY);
                    
                    // Redirect to the correct language version
                    window.location.href = newUrl;
                } else {
                    // Restore scroll position if returning to same page
                    const savedScrollY = sessionStorage.getItem('articleScrollPosition');
                    if (savedScrollY) {
                        window.scrollTo(0, parseInt(savedScrollY));
                        sessionStorage.removeItem('articleScrollPosition');
                    }
                }
            }
        });
    }
    
    getArticleIdFromUrl() {
        const pathname = window.location.pathname;
        
        // Extract article ID from URL patterns like:
        // /articles/homepage-announcement.html
        // /articles/homepage-announcement-en.html
        // /articles/homepage-announcement-zh.html
        // /homepage-announcement.html (if in root)
        
        const match = pathname.match(/\/?([^\/]+)-(?:en|zh)?\.html$/);
        if (match) {
            let articleId = match[1];
            
            // Handle special case for files in articles directory
            if (pathname.includes('/articles/')) {
                articleId = pathname.replace('/articles/', '').replace(/-?(en|zh)?\.html$/, '');
            }
            
            return articleId;
        }
        
        return null;
    }
    
    async loadArticlesData() {
        try {
            const response = await fetch('articles/articles.json');
            return await response.json();
        } catch (error) {
            console.error('Failed to load articles data:', error);
            return { articles: [] };
        }
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.languageManager = new LanguageManager();
});
