        // 主题切换功能
        function setTheme(theme) {
            if (theme === 'system') {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.body.dataset.theme = isDark ? 'dark' : 'light';
                localStorage.removeItem('theme');
            } else {
                document.body.dataset.theme = theme;
                localStorage.setItem('theme', theme);
            }
        }

        // 初始化主题
        const savedTheme = localStorage.getItem('theme') || 'system';
        setTheme(savedTheme);

        // 监听系统主题变化
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                setTheme('system');
            }
        });

        // 绑定主题切换事件
        document.querySelectorAll('[data-theme]').forEach(item => {
            item.addEventListener('click', () => {
                setTheme(item.dataset.theme);
            });
        });

        // 语言切换提示（实际项目中应使用国际化方案）
        document.querySelectorAll('.dropdown-item[href^="index-"]').forEach(item => {
            item.addEventListener('click', (e) => {
                if (!confirm('即将切换语言，是否继续？')) {
                    e.preventDefault();
                }
            });
        });
