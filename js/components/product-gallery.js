/**
 * CARTÕES E IMPRESSOS - Componente: Galeria de Produtos
 * Carrega imagens aleatórias baseado no título da página
 */

/**
 * Normaliza texto para comparação (remove acentos, minúsculas)
 */
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .trim();
}

/**
 * Determina qual pasta de imagens usar baseado no título da página
 * Termos mais específicos (mais longos) são verificados primeiro
 */
function getImageFolderFromTitle(pageTitle) {
    const normalizedTitle = normalizeText(pageTitle);

    // Ordena palavras-chave por comprimento (decrescente)
    // Assim termos mais específicos como "grafica rapida" são verificados antes de "grafica"
    const sortedKeywords = Object.entries(CONFIG.imageFolders)
        .sort((a, b) => b[0].length - a[0].length);

    // Procura por palavras-chave no título (do mais específico ao mais genérico)
    for (const [keyword, folder] of sortedKeywords) {
        if (normalizedTitle.includes(normalizeText(keyword))) {
            return folder;
        }
    }

    // Padrão: cartão de visita
    return 'cartao-de-visita';
}

/**
 * Seleciona N imagens aleatórias do banco de imagens
 */
function getRandomImages(folder, count = 5) {
    const allImages = CONFIG.imagesDB[folder];

    if (!allImages || allImages.length === 0) {
        // Fallback para imagens padrão
        return CONFIG.defaultImages.map(src => ({
            src: src,
            alt: document.title
        }));
    }

    // Embaralha o array usando Fisher-Yates shuffle
    const shuffled = [...allImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Retorna as primeiras N imagens (ou todas se tiver menos que N)
    return shuffled.slice(0, Math.min(count, allImages.length));
}

/**
 * Obtém 5 imagens aleatórias para a página atual
 */
function getImagesForCurrentPage() {
    const pageTitle = document.title;
    const folder = getImageFolderFromTitle(pageTitle);

    // Seleciona 5 imagens aleatórias da pasta correspondente
    return getRandomImages(folder, 5);
}

function renderProductGallery() {
    const mainImage = document.getElementById('mainImage');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    if (!mainImage || !thumbnailContainer) return;

    // Obtém 5 imagens aleatórias baseadas no título da página
    const productImages = getImagesForCurrentPage();

    // Define imagem principal inicial
    mainImage.src = productImages[0].src;
    mainImage.alt = productImages[0].alt;

    // Renderiza thumbnails
    thumbnailContainer.innerHTML = productImages.map((img, index) => `
        <img
            src="${img.src}"
            alt="${img.alt}"
            class="thumbnail ${index === 0 ? 'active' : ''}"
            onclick="changeMainImage('${img.src}', this)"
        >
    `).join('');

    // Expõe as imagens globalmente para debug
    window.currentProductImages = productImages;
    window.currentFolder = getImageFolderFromTitle(document.title);
}

// Inicializa a galeria quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProductGallery);
} else {
    renderProductGallery();
}
