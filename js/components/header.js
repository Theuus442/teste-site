/**
 * CARTÕES E IMPRESSOS - Componente: Header
 * Renderiza a Top Bar e o Header principal
 */

function renderHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    const whatsappLink = CONFIG.whatsapp.getLink('mais informações');

    headerContainer.innerHTML = `
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="container">
                <p class="top-bar-text">
                    Entre em contato conosco direto pelo
                    <a href="${whatsappLink}" class="top-bar-cta" target="_blank">Whatsapp</a>
                </p>
            </div>
        </div>

        <!-- Header -->
        <header class="header">
            <div class="container">
                <div class="header-content">
                    <a href="index.html" class="logo">
                        <img src="images/logo-1.svg" alt="${CONFIG.company.name}">
                    </a>
                    <nav class="nav">
                        <ul class="nav-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Produto</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                        <button class="mobile-menu-btn" aria-label="Menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    `;
}

// Inicializa o header quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHeader);
} else {
    renderHeader();
}
