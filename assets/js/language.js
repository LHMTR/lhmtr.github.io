// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    
    if (languageBtn && languageDropdown) {
        // 切换下拉菜单显示/隐藏
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
            
            // 关闭其他下拉菜单
            const sourcecodeDropdown = document.getElementById('sourcecode-dropdown');
            if (sourcecodeDropdown && sourcecodeDropdown.classList.contains('active')) {
                sourcecodeDropdown.classList.remove('active');
            }
        });

        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', function() {
            languageDropdown.classList.remove('active');
        });

        // 阻止下拉菜单内部的点击事件冒泡
        languageDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // 获取当前页面的路径和文件名
        function getCurrentPageInfo() {
            const currentPath = window.location.pathname;
            const segments = currentPath.split('/');
            // 找到文件名（最后一个非空段）
            let fileName = segments.pop();
            while (!fileName && segments.length > 0) {
                fileName = segments.pop();
            }
            return fileName || 'index.html';
        }

        // 为语言选项添加正确的链接
        const currentPage = getCurrentPageInfo();
        
        // 简体中文
        const zhHansLink = document.getElementById('zh-hans-link');
        if (zhHansLink) {
            zhHansLink.href = `../zh-hans/${currentPage}`;
        }

        // 繁体中文
        const zhHantLink = document.getElementById('zh-hant-link');
        if (zhHantLink) {
            zhHantLink.href = `../zh-hant/${currentPage}`;
        }

        // 英文
        const enLink = document.getElementById('en-link');
        if (enLink) {
            enLink.href = `../en/${currentPage}`;
        }

        // 高亮当前语言
        function highlightCurrentLanguage() {
            const currentLang = getCurrentLanguage();
            document.querySelectorAll('.language-dropdown a').forEach(link => {
                link.classList.remove('active');
                if (link.id === `${currentLang}-link`) {
                    link.classList.add('active');
                }
            });
        }

        function getCurrentLanguage() {
            const path = window.location.pathname;
            if (path.includes('/zh-hant/')) return 'zh-hant';
            if (path.includes('/en/')) return 'en';
            return 'zh-hans'; // 默认
        }

        highlightCurrentLanguage();
    }

    // 源代码下拉菜单功能
    const sourcecodeBtn = document.getElementById('sourcecode-btn');
    const sourcecodeDropdown = document.getElementById('sourcecode-dropdown');
    
    if (sourcecodeBtn && sourcecodeDropdown) {
        // 切换下拉菜单显示/隐藏
        sourcecodeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            sourcecodeDropdown.classList.toggle('active');
            
            // 关闭其他下拉菜单
            const languageDropdown = document.getElementById('language-dropdown');
            if (languageDropdown && languageDropdown.classList.contains('active')) {
                languageDropdown.classList.remove('active');
            }
        });

        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', function() {
            sourcecodeDropdown.classList.remove('active');
        });

        // 阻止下拉菜单内部的点击事件冒泡
        sourcecodeDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});