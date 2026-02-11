/**
 * Google Ads (gtag.js) - Dynamic Injection
 * Injeta a tag do Google Ads de forma assíncrona
 */

(function() {
    'use strict';

    // Cria o script do Google Tag Manager
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-634302814';

    // Insere o script no head
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Configura o dataLayer e o gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }

    // Aguarda o script carregar antes de configurar
    script.onload = function() {
        gtag('js', new Date());
        gtag('config', 'AW-634302814');
    };
})();
