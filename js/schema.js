/**
 * Gera e injeta o Schema.org (LocalBusiness) dinamicamente com base no content.js
 */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof pageContent !== 'undefined' && pageContent.schema) {
        const schema = pageContent.schema;
        
        const schemaData = {
            "@context": "https://schema.org",
            "@type": schema.type || "LocalBusiness",
            "name": schema.name,
            "image": schema.image,
            "description": schema.description,
            "telephone": schema.phone,
            "email": schema.email,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": schema.address.street,
                "addressLocality": schema.address.city,
                "addressRegion": schema.address.region,
                "postalCode": schema.address.zip,
                "addressCountry": schema.address.country
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": schema.geo.lat,
                "longitude": schema.geo.lng
            }
        };

        // Adiciona horários de funcionamento se existirem
        if (schema.openingHours && schema.openingHours.length > 0) {
            schemaData.openingHoursSpecification = schema.openingHours.map(item => ({
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": item.day,
                "opens": item.opens,
                "closes": item.closes
            }));
        }

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schemaData, null, 4);
        document.head.appendChild(script);
    }
});
