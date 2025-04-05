async function loadComponents() {
    // 加载 header
    const headerResponse = await fetch('/components/header.html');
    const headerHtml = await headerResponse.text();
    document.querySelector('#header-container').innerHTML = headerHtml;

    // 加载 footer
    const footerResponse = await fetch('/components/footer.html');
    const footerHtml = await footerResponse.text();
    document.querySelector('#footer-container').innerHTML = footerHtml;

    // 初始化菜单功能
    initializeMenu();
}

function initializeMenu() {
    const menuButton = document.querySelector('.menu-button');
    const drawer = document.querySelector('.drawer');
    const overlay = document.querySelector('.drawer-overlay');

    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        drawer.classList.add('active');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', () => {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', loadComponents);