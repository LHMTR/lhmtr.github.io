// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 侧边栏整体折叠功能
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.toggle('collapsed');
                
                // 更新按钮文本
                const span = this.querySelector('span');
                if (span) {
                    if (sidebar.classList.contains('collapsed')) {
                        span.textContent = '展开侧边栏';
                    } else {
                        span.textContent = '折叠侧边栏';
                    }
                }
            }
        });
    }

    // 侧边栏分组折叠功能
    document.querySelectorAll('.sidebar-group-title').forEach(title => {
        title.addEventListener('click', function() {
            const group = this.parentElement;
            group.classList.toggle('collapsed');
        });
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 如果是移动端，点击后关闭菜单
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // 导航栏激活状态
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // 关闭移动端菜单当点击链接时
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // 设置当前页面侧边栏链接为激活状态
    function setActiveSidebarLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.sidebar-link').forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === 'index.html' && linkHref === './index.html') ||
                (currentPage === '' && linkHref === './index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // 设置当前页面导航链接为激活状态
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === 'index.html' && linkHref === './index.html') ||
                (currentPage === '' && linkHref === './index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // 初始化设置激活状态
    setActiveSidebarLink();
    setActiveNavLink();
});