/**
 * CARTÕES E IMPRESSOS - Componente: Depoimentos
 * Carrega e exibe depoimentos de clientes aleatoriamente
 */

const TESTIMONIALS_CONFIG = {
    totalAvaliacoes: 43,
    avaliacoesParaMostrar: 12
};

function loadRandomTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    // Gerar array com números de 1 a total
    const todosNumeros = Array.from(
        {length: TESTIMONIALS_CONFIG.totalAvaliacoes},
        (_, i) => i + 1
    );

    // Embaralhar e selecionar N aleatórios
    const numerosAleatorios = todosNumeros
        .sort(() => Math.random() - 0.5)
        .slice(0, TESTIMONIALS_CONFIG.avaliacoesParaMostrar);

    container.innerHTML = '';

    numerosAleatorios.forEach(num => {
        const item = document.createElement('div');
        item.className = 'testimonial-item';
        item.innerHTML = `<img src="images/depoimentos/avaliacao-${num}.png" alt="Depoimento de cliente ${num}">`;
        container.appendChild(item);
    });
}

// Inicializa os depoimentos quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadRandomTestimonials);
} else {
    loadRandomTestimonials();
}
