/**
 * CARTÕES E IMPRESSOS - Componente: Footer
 * Renderiza o Pre-footer e Footer principal
 */

function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    const currentYear = new Date().getFullYear();

    footerContainer.innerHTML = `
        <!-- Pre-Footer -->
        <section class="pre-footer">
            <div class="container">
                <div class="pre-footer-content">
                    <div class="pre-footer-text">
                        <p><strong>Desde ${CONFIG.company.since}</strong> entregando materiais de qualidade profissional<br>para nossos clientes e colorindo o mundo com nossas cores.</p>
                    </div>
                    <div class="pre-footer-logo">
                        <img src="images/logo-1.svg" alt="${CONFIG.company.name}">
                    </div>
                    <div class="pre-footer-social">
                        <a href="${CONFIG.social.instagram}" target="_blank" rel="nofollow" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 42.5 42.5">
                                <g>
                                    <path d="M32.6 10.5c-.1-.2-.3-.4-.5-.5-.4-.3-.9-.4-1.4-.4-.3 0-.6.1-.8.2-.2.1-.4.2-.5.4-.2.2-.3.4-.5.6-.3.6-.3 1.3 0 1.9.1.2.2.4.4.5.5.5 1.1.7 1.7.6.9-.1 1.7-.8 1.9-1.7v-.5c0-.3 0-.4-.1-.7 0 0-.1-.3-.2-.4z" fill="white"/>
                                    <path d="M31.7.3H11.1C5.3.3.6 5 .6 10.8v20.6C.6 37.3 5.3 42 11.1 42h20.6c5.8 0 10.5-4.8 10.5-10.5V10.8C42.4 4.9 37.6.3 31.7.3zm4.1 28.1c-.1 1.7-.3 2.9-.8 3.9-.3.6-.6 1.1-1.2 1.6-.5.5-.9.8-1.4 1-.9.5-1.9.7-3.2.8-.7.1-2 .1-3.4.1H17c-1.1 0-2.8-.1-3.5-.1-1.5-.1-2.7-.4-3.6-1-.6-.3-1.2-.9-1.7-1.5-.8-1-1.2-2.3-1.4-3.9-.1-.6-.1-1.9-.1-3.4v-9.6c0-1.1.1-2.2.1-2.8.1-1.5.4-2.6.9-3.6.3-.5.6-.9 1.1-1.4.7-.6 1.2-1 2.1-1.4.9-.4 1.9-.5 3.4-.6 1.8-.1 3-.1 7.6-.1 4.2 0 4.7 0 6.3.1 1.4.1 2.3.2 3.1.4 1 .3 1.8.7 2.5 1.4.6.5 1 1.1 1.3 1.8.5 1 .7 2.2.8 3.9.1 1.8.1 2.2.1 7.1-.1 5.1-.1 5.5-.2 7.3z" fill="white"/>
                                    <path d="M29.5 17.2c-1-2.1-2.8-3.7-5-4.6-1-.4-2.1-.6-3.2-.6s-2.2.2-3.2.6c-2.2.8-4 2.4-5 4.5-.6 1.1-.9 2.2-1 3.5v1.3c.1 1.8.7 3.4 1.8 4.9.5.6 1.1 1.2 1.7 1.7 1.7 1.4 3.9 2.1 6.2 2 1.1-.1 2.2-.3 3.2-.7l1-.5c1.9-1.1 3.4-3 4.1-5.1.2-.7.4-1.4.4-2.1v-1.5c-.2-1.3-.5-2.3-1-3.4zm-2.9 6.7c-.6 1.2-1.7 2.3-2.9 2.8-.9.4-1.7.5-2.7.5-1.2 0-2.5-.5-3.4-1.3-1-.8-1.8-1.9-2.1-3.2-.2-.7-.2-1.5-.1-2.3.2-1.6 1-3 2.3-3.9.9-.7 2-1.1 3.1-1.2H22c1.8.2 3.3 1.2 4.3 2.6 1.1 1.8 1.3 4.1.3 6z" fill="white"/>
                                </g>
                            </svg>
                        </a>
                        <a href="${CONFIG.whatsapp.getLink('mais informações')}" target="_blank" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="3.2 0.1 37.5 37.4">
                                <g>
                                    <path d="M17.6 26.3c1.4.9 3.1 1.3 4.7 1.3 5.1 0 9.3-4.2 9.3-9.3 0-5.1-4.2-9.3-9.3-9.3S13 13.2 13 18.3c0 1.7.5 3.4 1.4 4.8l.3.5-.9 3.2 3.3-.9.5.4zm-1.2-10.6c0-1 .4-2 1.1-2.6.4-.4 1.2-.6 1.8-.2.5.3.8.9 1 1.4l.1.2c.2.4.4 1 .3 1.5-.1.5-.4.8-.7 1.2l-.1.1c-.1.2-.1.2 0 .3.9 1.5 2.1 2.5 3.7 3.2.2.1.2 0 .2 0.1-.1.1-.2.2-.2.4-.2.4-.5.8-.9.9-.7.3-1.3-.1-1.9-.4-.1 0-.1-.1-.2-.1-.5-.3-1.1-.6-1.2-1.2-.1-.3 0-.6.1-1 .4-.9 1.2-1.5 2.3-1.7.2 0 .4-.1.6-.1.6 0 1.2.2 1.7.4l.2.1c.7.2 1.4.6 2.1 1 1.3.8 2.4 1.8 3.3 3.1.3.4.5.8.8 1.2.4.7.6 1.2.7 1.7v.8z" fill="white"/>
                                    <path d="M31.2.1H12.7C7.5.1 3.2 4.3 3.2 9.6V28c0 5.2 4.2 9.5 9.5 9.5h18.5c5.2 0 9.5-4.2 9.5-9.5V9.6C40.6 4.3 36.4.1 31.2.1zm-8.8 30.3c-2 0-3.9-.5-5.6-1.4L10 30.8l1.8-6.7c-1-1.8-1.5-3.7-1.5-5.7 0-6.6 5.4-12 12-12s12 5.4 12 12c.1 6.6-5.3 12-11.9 12z" fill="white"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <p class="footer-text">® ${currentYear} - ${CONFIG.company.name} | CNPJ: ${CONFIG.company.cnpj} | Todos os direitos reservados | ${CONFIG.company.owner}</p>
                </div>
            </div>
        </footer>
    `;
}

// Inicializa o footer quando o DOM estiver completamente carregado
// Usa window.onload para garantir que todo o conteúdo (incluindo imagens) esteja carregado
window.addEventListener('load', renderFooter);

// Fallback também para DOMContentLoaded (mais rápido)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
} else {
    // Se o DOM já estiver pronto, renderiza imediatamente
    if (document.getElementById('footer-container') && !document.getElementById('footer-container').hasChildNodes()) {
        renderFooter();
    }
}
