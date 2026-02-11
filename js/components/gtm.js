/**
 * CARTÕES E IMPRESSOS - Google Tag Manager (GTM)
 * Injeta as tags do GTM no head e no body
 */

(function() {
    'use strict';

    // =============================================
    // CONTEÚDO DAS TAGS DO GTM
    // =============================================

    const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TNKL3MN');`;

    const gtmBodyNoscript = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNKL3MN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    // =============================================
    // INJETAR TAG DO GTM NO HEAD
    // =============================================

    function injectGtmHead() {
        // Verifica se o GTM já foi injetado
        if (document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) {
            return; // Já existe, não injeta novamente
        }

        const script = document.createElement('script');
        script.textContent = gtmHeadScript;
        script.id = 'gtm-head-script';

        // Insere como o primeiro script do head para carregar o mais rápido possível
        const firstScript = document.querySelector('script');
        if (firstScript && firstScript.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
        } else {
            document.head.appendChild(script);
        }
    }

    // =============================================
    // INJETAR TAG DO GTM NO BODY
    // =============================================

    function injectGtmBody() {
        // Verifica se o noscript já foi injetado
        if (document.getElementById('gtm-body-noscript')) {
            return; // Já existe, não injeta novamente
        }

        // Cria o elemento noscript
        const noscript = document.createElement('noscript');
        noscript.id = 'gtm-body-noscript';
        noscript.innerHTML = gtmBodyNoscript;

        // Insere como o primeiro elemento do body
        document.body.insertBefore(noscript, document.body.firstChild);
    }

    // =============================================
    // EXECUTA INJEÇÃO IMEDIATAMENTE
    // =============================================

    // Injeta no head o mais rápido possível (assíncrono)
    if (document.head) {
        injectGtmHead();
    } else {
        // Fallback caso o head ainda não exista
        document.addEventListener('DOMContentLoaded', injectGtmHead);
    }

    // Injeta no body quando disponível
    if (document.body) {
        injectGtmBody();
    } else {
        // Fallback caso o body ainda não exista
        document.addEventListener('DOMContentLoaded', injectGtmBody);
    }

})();
