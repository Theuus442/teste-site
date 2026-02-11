/**
 * CARTÕES E IMPRESSOS - JavaScript Principal
 * Funcionalidades: Galeria de imagens, Menu mobile, Interações
 */

// Carrega o gtm.js dinamicamente (injeta tags do Google Tag Manager)
(function() {
    const gtmScript = document.createElement('script');
    gtmScript.src = 'js/components/gtm.js';
    gtmScript.async = false; // Carrega o mais rápido possível
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript) {
        firstScript.parentNode.insertBefore(gtmScript, firstScript);
    } else {
        document.head.appendChild(gtmScript);
    }
})();

// Carrega o gtag.js dinamicamente (injeta tag do Google Ads)
(function() {
    const gtagScript = document.createElement('script');
    gtagScript.src = 'js/gtag.js';
    gtagScript.async = false; // Carrega o mais rápido possível
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript) {
        firstScript.parentNode.insertBefore(gtagScript, firstScript);
    } else {
        document.head.appendChild(gtagScript);
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // ATUALIZA LINKS DO WHATSAPP COM TÍTULO DA PÁGINA
    // =============================================

    function updateWhatsappLinks() {
        const pageTitle = document.title;
        const budgetLink = CONFIG.whatsapp.getLink(pageTitle);

        // Atualiza botão de orçamento
        const budgetBtn = document.getElementById('btn-whatsapp-budget');
        if (budgetBtn) {
            budgetBtn.href = budgetLink;
        }
    }

    updateWhatsappLinks();

    // =============================================
    // MOVER FOOTER PARA APÓS SEÇÃO SEO
    // =============================================

    function moveFooterAfterSeoSection() {
        const footerContainer = document.getElementById('footer-container');
        const seoSection = document.querySelector('.seo-section');

        if (footerContainer && seoSection) {
            // Move o footer-container para logo após a seo-section
            seoSection.parentNode.insertBefore(footerContainer, seoSection.nextSibling);
        } else if (footerContainer) {
            // Fallback: se não encontrar seo-section, move para após o main
            const mainElement = document.querySelector('main');
            if (mainElement) {
                mainElement.parentNode.insertBefore(footerContainer, mainElement.nextSibling);
            }
        }
    }

    // Executa a movimentação após um pequeno delay para garantir que os elementos foram renderizados
    setTimeout(moveFooterAfterSeoSection, 100);

    // =============================================
    // GALERIA DE IMAGENS
    // =============================================

    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Função para trocar a imagem principal
    window.changeMainImage = function(src, clickedThumb) {
        if (!mainImage) return;

        // Atualiza a imagem principal com fade
        mainImage.style.opacity = '0';

        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
        }, 150);

        // Remove classe active de todas as miniaturas
        thumbnails.forEach(thumb => {
            thumb.classList.remove('active');
        });

        // Adiciona classe active na miniatura clicada
        if (clickedThumb) {
            clickedThumb.classList.add('active');
        }
    };

    // =============================================
    // MENU MOBILE
    // =============================================

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', function() {
            navList.classList.toggle('active');

            // Anima as linhas do botão hamburger
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });

        // Fecha o menu ao clicar em um link
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });

        // Fecha o menu ao clicar fora
        document.addEventListener('click', function(event) {
            if (!navList.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                navList.classList.remove('active');
            }
        });
    }

    // =============================================
    // SCROLL SUAVE PARA ÂNCORAS
    // =============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);

                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // =============================================
    // EFEITO DE ZOOM NA IMAGEM PRINCIPAL
    // =============================================

    const mainImageContainer = document.querySelector('.main-image-container');

    if (mainImageContainer && mainImage) {
        mainImageContainer.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100;
            const y = (e.clientY - rect.top) / rect.height * 100;

            mainImage.style.transformOrigin = `${x}% ${y}%`;
            mainImage.style.transform = 'scale(1.2)';
        });

        mainImageContainer.addEventListener('mouseleave', function() {
            mainImage.style.transformOrigin = 'center center';
            mainImage.style.transform = 'scale(1)';
        });
    }

    // =============================================
    // ANIMAÇÃO AO SCROLL
    // =============================================

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observa elementos para animação
    const animateElements = document.querySelectorAll('.testimonial-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Adiciona estilos para animação
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
