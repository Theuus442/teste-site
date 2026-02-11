const pageContent = {
    general: {
        pageTitle: "C&A House Decor",
        favicon: "images/favicon.ico",
        whatsappNumber: "5511985641673",
        whatsappMessage: "Olá, gostaria de um orçamento para móveis e decoração."
    },
    schema: {
        type: "LocalBusiness",
        name: "C&A House Decor",
        image: "images/logo-header.webp",
        description: "A C&A House Decor é sua loja de móveis em São Paulo. Oferecemos sofás retráteis, móveis planejados, poltronas e soluções completas em decoração para sua casa em SP, ABC e litoral.",
        phone: "(11) 98564-1673",
        email: "contato@ceahousedecor.com.br",
        address: {
            street: "Jurubatuba",
            city: "São Paulo",
            region: "SP",
            zip: "01001-000",
            country: "BR"
        },
        geo: {
            lat: -23.5505,
            lng: -46.6333
        },
        openingHours: [
            { day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
            { day: ["Saturday"], opens: "08:00", closes: "12:00" }
        ]
    },
    header: {
        logo: "images/logo-header.webp",
        logoAlt: "C&A House Decor",
        workDescription: "Móveis e Decoração em São Paulo",
        address: "São Paulo, SP",
        addressIcon: "📍",
        phone: "(11) 98564-1673",
        phoneHref: "tel:5511985641673",
        phoneIcon: "📞",
        navLinks: [
            { text: "Sobre nós", href: "#s-about" },
            { text: "Serviços", href: "#s-solutions" },
            { text: "Contato", href: "#s-contact" }
        ]
    },
    banner: {
        buttons: [
            { text: "Orçamento Grátis", href: "https://wa.me/5511985641673?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20móveis.", class: "" },
            { text: "Ligue Agora", href: "tel:5511985641673", class: "btn-green" },
            { text: "Atendimento Rápido", href: "https://wa.me/5511985641673?text=Olá,%20gostaria%20de%20um%20atendimento%20para%20decoração.", class: "btn-dark" }
        ]
    },
    aboutUs: {
        title: "Sobre a C&A House Decor",
        description: "A <strong>C&A House Decor</strong> é referência em <strong>Móveis e Decoração</strong> em <strong>São Paulo</strong>. Nossa loja oferece uma curadoria exclusiva de sofás retráteis, poltronas, móveis planejados e modulares para transformar seu ambiente com elegância e conforto. Atendemos toda a região de São Paulo, ABC (Jurubatuba) e litoral (Santos), levando soluções personalizadas para salas, quartos e escritórios. Com anos de experiência no mercado de decoração, nosso compromisso é com a qualidade superior de nossos produtos e a satisfação total de nossos clientes, garantindo beleza e durabilidade em cada peça escolhida.",
        buttonText: "Ver Catálogo",
        buttonHref: "https://wa.me/5511985641673?text=Olá,%20gostaria%20de%20ver%20o%20catálogo%20de%20móveis.",
        image: "images/about-bg.webp",
        imageAlt: "Sobre a C&A House Decor"
    },
    features: {
        title: "Nossas Soluções em Móveis e Decoração",
        items: [
            {
                image: "images/service-1.webp",
                title: "Sofá Retrátil e Reclinável",
                description: "Máximo conforto e design moderno para sua sala com nossos sofás retráteis de alta qualidade.",
                link: "https://wa.me/5511985641673?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20sofá%20retrátil."
            },
            {
                image: "images/service-2.webp",
                title: "Móveis Planejados",
                description: "Projetos personalizados para aproveitar cada centímetro do seu espaço com elegância e funcionalidade.",
                link: "https://wa.me/5511985641673?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20móveis%20planejados."
            },
            {
                image: "images/service-3.webp",
                title: "Poltronas Decorativas",
                description: "Peças exclusivas que unem sofisticação e conforto para complementar a decoração de qualquer ambiente.",
                link: "https://wa.me/5511985641673?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20poltronas."
            },
            {
                image: "images/service-4.webp",
                title: "Guarda-Roupas e Dormitórios",
                description: "Soluções inteligentes para organização e estilo no seu quarto, com materiais de alta durabilidade.",
                link: "https://wa.me/5511985641673?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20guarda-roupas."
            },
            {
                image: "images/service-5.webp",
                title: "Móveis Modulares",
                description: "Praticidade e versatilidade com móveis modulares que se adaptam às suas necessidades e estilo de vida.",
                link: "https://wa.me/5511985641673?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20móveis%20modulares."
            },
            {
                image: "images/service-6.webp",
                title: "Painéis e Racks",
                description: "Design contemporâneo para sua área de entretenimento, com acabamentos premium e fiação organizada.",
                link: "https://wa.me/5511985641673?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20painéis%20e%20racks."
            }
        ]
    },
    testimonials: {
        title: "Excelência em Móveis em São Paulo",
        reviews: [
            {
                name: "Qualidade Premium",
                profession: "Móveis Duráveis",
                comment: "Trabalhamos apenas com materiais de primeira linha, garantindo que cada móvel da C&A House Decor seja um investimento em beleza e durabilidade para seu lar em SP."
            },
            {
                name: "Entrega e Montagem",
                profession: "Serviço Especializado",
                comment: "Nossa equipe de logística e montagem em São Paulo é treinada para garantir que seu novo móvel chegue e seja instalado com o máximo cuidado e perfeição."
            },
            {
                name: "Projetos Exclusivos",
                profession: "Design Personalizado",
                comment: "Ajudamos você a planejar seu ambiente em São Paulo com soluções sob medida que refletem sua personalidade e atendem às suas necessidades funcionais."
            }
        ]
    },
    footer: {
        description: "<strong>C&A House Decor</strong> é sua loja de móveis em São Paulo, especializada em sofás, planejados e decoração.<br><a href=\"mapa-do-site.html\" rel=\"nofollow\" style=\"color: inherit; text-decoration: underline; font-size: 13px; margin-top: 10px; display: inline-block; opacity: 0.8;\">Mapa do Site</a>",
        servicesTitle: "Nossos Produtos",
        servicesLinks: [
            { text: "Sofás Retráteis", href: "#" },
            { text: "Móveis Planejados", href: "#" },
            { text: "Poltronas", href: "#" }
        ],
        scheduleTitle: "Horário",
        schedule: [
            "Segunda a Sexta: 08:00 às 18:00",
            "Sábado: 08:00 às 12:00"
        ],
        contactTitle: "Contatos",
        address: "São Paulo, SP",
        addressIcon: "📍",
        phone: "(11) 98564-1673",
        phoneHref: "tel:5511985641673",
        phoneIcon: "📞",
        copyright: "Copyright © 2026 C&A House Decor. Todos os direitos reservados"
    }
};
