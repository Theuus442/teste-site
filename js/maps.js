// Google Business Profile Map Embed
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('gbp-map-container');
    if (mapContainer) {
        // GBP_BUSINESS_EMBED_CODE from customization
        const embedCode = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1871673.1660658775!2d-47.77114160920637!3d-23.61825666995018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce68c5cb0b8687%3A0xef741183257f7866!2sSao%20Paulo%20Metropolitan%20Area%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1768598526895!5m2!1spt-BR!2sbr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        
        mapContainer.innerHTML = embedCode;
    }
});

