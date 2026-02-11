/**
 * CARTÕES E IMPRESSOS - Componente: Textos de UI
 * Injeta textos dinâmicos baseado no CONFIG
 */

function renderUITexts() {
    // Injeta texto do botão WhatsApp
    const whatsappBtnText = document.getElementById('whatsapp-button-text');
    if (whatsappBtnText) {
        whatsappBtnText.textContent = CONFIG.ui.whatsappButton;
    }

    // Injeta título da seção de depoimentos
    const testimonialsTitle = document.getElementById('testimonials-title');
    if (testimonialsTitle) {
        testimonialsTitle.textContent = CONFIG.ui.testimonialsTitle;
    }
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderUITexts);
} else {
    renderUITexts();
}
