function loadComponents() {
    // 直接插入 header HTML
    document.querySelector('#header-container').innerHTML = `
        <header>
            <h2><a href="index.html" class="logo">史普尼克</a></h2>
            <button class="menu-button" type="button">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>

        <div class="drawer-overlay"></div>
        <div class="drawer">
            <div class="drawer-content">
                <nav>
                    <ul>
                        <li><a href="hideaki.html">滨田英明</a></li>
                        <li><a href="kawauchi.html">川内伦子</a></li>
                        <li><a href="akiyama.html">秋山亮二</a></li>
                        <li><a href="about.html">关于我们</a></li>
                        <li><a href="contact.html">联系方式</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    `;

    // 直接插入 footer HTML
    document.querySelector('#footer-container').innerHTML = `
        <footer>
            <p class="subtitle">2025 © 史普尼克</p>
            <p class="subtitle">本站由河流空间提供服务</p>
        </footer>
    `;

    // 确保 DOM 完全加载后再初始化菜单
    setTimeout(() => {
        initializeMenu();
    }, 0);
}

function initializeMenu() {
    const menuButton = document.querySelector('.menu-button');
    const drawer = document.querySelector('.drawer');
    const overlay = document.querySelector('.drawer-overlay');

    if (!menuButton || !drawer || !overlay) {
        console.error('菜单元素未找到');
        return;
    }

    // 移除可能存在的旧事件监听器
    menuButton.removeEventListener('click', handleMenuClick);
    overlay.removeEventListener('click', handleOverlayClick);

    // 添加新的事件监听器
    menuButton.addEventListener('click', handleMenuClick);
    overlay.addEventListener('click', handleOverlayClick);
}

function handleMenuClick(e) {
    e.stopPropagation();
    const drawer = document.querySelector('.drawer');
    const overlay = document.querySelector('.drawer-overlay');
    drawer.classList.add('active');
    overlay.classList.add('active');
}

function handleOverlayClick() {
    const drawer = document.querySelector('.drawer');
    const overlay = document.querySelector('.drawer-overlay');
    drawer.classList.remove('active');
    overlay.classList.remove('active');
}

// 确保在 DOM 加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}