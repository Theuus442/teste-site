/**
 * CARTÕES E IMPRESSOS - Configurações Globais
 * Centraliza todas as configurações e dados compartilhados
 */

const CONFIG = {
    // Contato
    whatsapp: {
        number: '5515988209992',
        getMessage: (pageTitle) => {
            return `Olá! Gostaria de um orçamento para ${pageTitle}`;
        },
        getLink: (pageTitle) => {
            const message = encodeURIComponent(CONFIG.whatsapp.getMessage(pageTitle));
            return `https://wa.me/${CONFIG.whatsapp.number}?text=${message}`;
        }
    },

    // Empresa
    company: {
        name: 'CARTÕES E IMPRESSOS',
        cnpj: '48.684.928/0001-69',
        owner: 'Abner Terra Brito',
        since: 2019
    },

    // Endereço
    address: {
        street: 'Rua: Avelino dos Santos, 1018',
        neighborhood: 'Parque São Bento',
        city: 'Sorocaba - SP'
    },

    // Telefones
    phone: {
        display: '(15) 98820-9992'
    },

    // Horário
    hours: {
        display: 'Segunda a Sexta das<br>06 às 21 horas'
    },

    // Links sociais
    social: {
        instagram: 'https://www.instagram.com/cartoeseimpressos/',
        reclameaqui: 'https://www.reclameaqui.com.br/empresa/cartoes-e-impressos/',
        trabalheConosco: 'https://www.cartoeseimpressos.com.br/trabalhe-conosco'
    },

    // Mapeamento de páginas para pastas de imagens
    // Formato: palavra-chave -> pasta em images/produtos/
    // IMPORTANTE: Ordem não importa mais, o código ordena por comprimento automaticamente
    imageFolders: {
        // Termos mais específicos primeiro (maior prioridade)
        'grafica sorocaba': 'outras-fotos',
        'gráfica sorocaba': 'outras-fotos',
        'grafica em sorocaba': 'outras-fotos',
        'gráfica em sorocaba': 'outras-fotos',
        'grafica rapida perto de mim': 'outras-fotos',
        'gráfica rápida perto de mim': 'outras-fotos',
        'grafica perto de mim': 'outras-fotos',
        'gráfica perto de mim': 'outras-fotos',
        'grafica rapida': 'outras-fotos',
        'gráfica rápida': 'outras-fotos',
        'grafica perto': 'outras-fotos',
        'gráfica perto': 'outras-fotos',

        // Termos genéricos (menor prioridade)
        'cartao de visita': 'cartao-de-visita',
        'cartões de visita': 'cartao-de-visita',
        'cartao-visita': 'cartao-de-visita',

        'banner': 'banner-lonas-wind-banner',
        'lona': 'banner-lonas-wind-banner',
        'lonas': 'banner-lonas-wind-banner',
        'faixa': 'banner-lonas-wind-banner',
        'faixas': 'banner-lonas-wind-banner',

        'adesivo': 'adesivos',
        'adesivos': 'adesivos',
        'adesiva': 'adesivos',

        'panfleto': 'panfletos',
        'panfletos': 'panfletos',
        'folder': 'panfletos',
        'folders': 'panfletos'
    },

    // Imagens padrão (fallback)
    defaultImages: [
        'images/cartao-verniz-local.jpeg',
        'images/cartao-verniz-advocacia.jpeg',
        'images/cartao-canto-arredondado.jpeg',
        'images/cartao-kraft.jpeg',
        'images/cartao-hot-stamping.jpeg'
    ],

    // Banco de imagens disponíveis por categoria
    imagesDB: {
        'cartao-de-visita': [
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-comum-verniz-frente.jpeg', alt: 'Cartão de Visita Comum' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-em-kraft.jpeg', alt: 'Cartão de Visita em Kraft' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-em-papel-reciclado.jpeg', alt: 'Cartão de Visita em Papel Reciclado' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-fosco-com-verniz-local.jpeg', alt: 'Cartão de Visita com Verniz Local' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-fosco-com-verniz-local-advocacia.jpeg', alt: 'Cartão de Visita para Advocacia' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-fosco-com-verniz-local-e-canto-arredondado.jpeg', alt: 'Cartão de Visita com Canto Arredondado' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-fosco-com-verniz-local-e-cantos-arredondados.jpeg', alt: 'Cartão de Visita com Cantos Arredondados' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-fosco-com-verniz-local-e-corte-especial.jpeg', alt: 'Cartão de Visita com Corte Especial' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-fosco-com-verniz-local-e-corte-especial-clinica-de-estetica.jpeg', alt: 'Cartão de Visita para Clínica de Estética' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-fosco-com-verniz-local-para-pisicologo.jpeg', alt: 'Cartão de Visita para Psicólogo' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-hot-stamping-dourado.jpeg', alt: 'Cartão de Visita Hot Stamping Dourado' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-hot-stamping.jpeg', alt: 'Cartão de Visita Hot Stamping' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-para-doceria.jpeg', alt: 'Cartão de Visita para Doceria' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-para-fisioterapia-fisioterapeuta.jpeg', alt: 'Cartão de Visita para Fisioterapia' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-01.jpg', alt: 'Cartão de Visita 01' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-ana-xavier-5.jpg', alt: 'Cartão de Visita Ana Xavier' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-beatriz-carmo.jpg', alt: 'Cartão de Visita Beatriz Carmo' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-elegance-2.jpg', alt: 'Cartão de Visita Elegance' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita-monica.jpg', alt: 'Cartão de Visita Mônica' },
            { src: 'images/produtos/cartao-de-visita/cartao-de-visita_edited.jpg', alt: 'Cartão de Visita Edited' }
        ],
        'outras-fotos': [
            { src: 'images/produtos/outras-fotos/bloco-e-talao-personalizado.jpeg', alt: 'Bloco e Talão Personalizado' },
            { src: 'images/produtos/outras-fotos/calendario-personalizado.jpeg', alt: 'Calendário Personalizado' },
            { src: 'images/produtos/outras-fotos/canetas-personalizadas.jpeg', alt: 'Canetas Personalizadas' },
            { src: 'images/produtos/outras-fotos/carta-de-visita-em-couche-600g.jpg', alt: 'Cartão de Visita em Couché 600g' },
            { src: 'images/produtos/outras-fotos/cartao-de-visita-corte-folha-personalizado-ea-patrimonio.jpg', alt: 'Cartão de Visita Corte Folha Personalizado' },
            { src: 'images/produtos/outras-fotos/cartao-de-visita-em-hot-stamping.jpg', alt: 'Cartão de Visita em Hot Stamping' },
            { src: 'images/produtos/outras-fotos/cartao-de-visita-fosco-com-canto-arredondado.jpg', alt: 'Cartão de Visita Fosco com Canto Arredondado' },
            { src: 'images/produtos/outras-fotos/cartao-de-visita-fosco-com-verniz-localizado-personalizado.jpeg', alt: 'Cartão de Visita Fosco com Verniz Localizado' },
            { src: 'images/produtos/outras-fotos/certificados-personalizados.jpg', alt: 'Certificados Personalizados' },
            { src: 'images/produtos/outras-fotos/convite-de-casamento-em-hot-stamping.jpg', alt: 'Convite de Casamento em Hot Stamping' },
            { src: 'images/produtos/outras-fotos/dtf-uv-ou-textil-personalizado.jpg', alt: 'DTF UV ou Têxtil Personalizado' },
            { src: 'images/produtos/outras-fotos/imas-personalizados.jpeg', alt: 'Imãs Personalizados' },
            { src: 'images/produtos/outras-fotos/marcador-de-paginas-com-verniz-localizado-personalizado-frente-e-verso.jpg', alt: 'Marcador de Páginas com Verniz Frente e Verso' },
            { src: 'images/produtos/outras-fotos/marcador-de-paginas-com-verniz-localizado-personalizado.jpeg', alt: 'Marcador de Páginas com Verniz Localizado' },
            { src: 'images/produtos/outras-fotos/marcador-de-paginas-personalizado.jpeg', alt: 'Marcador de Páginas Personalizado' },
            { src: 'images/produtos/outras-fotos/pasta-personalizada.jpeg', alt: 'Pasta Personalizada' },
            { src: 'images/produtos/outras-fotos/poster-personalizado.jpeg', alt: 'Pôster Personalizado' },
            { src: 'images/produtos/outras-fotos/revista-personalizada-com-verniz-localizado.jpeg', alt: 'Revista Personalizada com Verniz Localizado' },
            { src: 'images/produtos/outras-fotos/ticket-de-evento-personalizado.jpg', alt: 'Ticket de Evento Personalizado' }
        ],
        'banner-lonas-wind-banner': [
            { src: 'images/produtos/banner-lonas-wind-banner/banner-lona-wind-banner-1.jpg', alt: 'Banner Lona Wind Banner 1' },
            { src: 'images/produtos/banner-lonas-wind-banner/banner-lona-wind-banner-2.jpg', alt: 'Banner Lona Wind Banner 2' },
            { src: 'images/produtos/banner-lonas-wind-banner/banner-lona-wind-banner-3.jpg', alt: 'Banner Lona Wind Banner 3' },
            { src: 'images/produtos/banner-lonas-wind-banner/banner-lona-wind-banner-4.jpg', alt: 'Banner Lona Wind Banner 4' },
            { src: 'images/produtos/banner-lonas-wind-banner/banner-lona-wind-banner-5.jpg', alt: 'Banner Lona Wind Banner 5' },
            { src: 'images/produtos/banner-lonas-wind-banner/banner-lona-wind-banner-6.jpg', alt: 'Banner Lona Wind Banner 6' },
            { src: 'images/produtos/banner-lonas-wind-banner/banner-lona-wind-banner-7.jpg', alt: 'Banner Lona Wind Banner 7' },
            { src: 'images/produtos/banner-lonas-wind-banner/banner-lona-wind-banner-8.jpg', alt: 'Banner Lona Wind Banner 8' },
            { src: 'images/produtos/banner-lonas-wind-banner/banner-lona-wind-banner-9.jpg', alt: 'Banner Lona Wind Banner 9' }
        ],
        'adesivos': [
            { src: 'images/produtos/adesivos/adesivo-corte-especial-vinil.jpeg', alt: 'Adesivo Corte Especial' },
            { src: 'images/produtos/adesivos/adesivo-couche.jpeg', alt: 'Adesivo Couché' },
            { src: 'images/produtos/adesivos/adesivo-em-bobina-para-loja-de-roupa.jpeg', alt: 'Adesivo em Bobina' },
            { src: 'images/produtos/adesivos/adesivo-em-bonina-personalizado.jpeg', alt: 'Adesivo em Bonina' },
            { src: 'images/produtos/adesivos/adesivo-pao-de-mel-da-luh.jpg', alt: 'Adesivo Pão de Mel' },
            { src: 'images/produtos/adesivos/adesivo-personalizado-em-bobina.jpeg', alt: 'Adesivo Personalizado' },
            { src: 'images/produtos/adesivos/adesivo-vinil-brilho.jpeg', alt: 'Adesivo Vinil Brilho' },
            { src: 'images/produtos/adesivos/adesivos-para-embalagem.jpeg', alt: 'Adesivos para Embalagem' },
            { src: 'images/produtos/adesivos/adesivos-personalizados-com-a-logo.jpeg', alt: 'Adesivos Personalizados' },
            { src: 'images/produtos/adesivos/adesivos-redondos-em-couche.jpeg', alt: 'Adesivos Redondos' },
            { src: 'images/produtos/adesivos/adesivo-vinil-brilho-cha-de-bebe.jpeg', alt: 'Adesivo Chá de Bebê' },
            { src: 'images/produtos/adesivos/etiqueta-para-embalagem.jpeg', alt: 'Etiqueta para Embalagem' },
            { src: 'images/produtos/adesivos/etiqueta-para-embalagens.jpeg', alt: 'Etiquetas para Embalagens' },
            { src: 'images/produtos/adesivos/adesivos.jpg', alt: 'Adesivos' }
        ],
        'panfletos': [
            { src: 'images/produtos/panfletos/panfleto-personalizado-confeitaria.jpg', alt: 'Panfleto para Confeitaria' },
            { src: 'images/produtos/panfletos/panfleto-personalizado-corretora-de-seguros.jpg', alt: 'Panfleto para Corretora' },
            { src: 'images/produtos/panfletos/panfleto-personalizado-moveis-planejados.jpg', alt: 'Panfleto para Móveis Planejados' },
            { src: 'images/produtos/panfletos/panfleto-world-cell-3.jpg', alt: 'Panfleto World Cell' },
            { src: 'images/produtos/panfletos/panfleto-bolo-caseiro.jpg', alt: 'Panfleto Bolo Caseiro' },
            { src: 'images/produtos/panfletos/panfleto-bolos-e-confeitaria.jpg', alt: 'Panfleto Bolos e Confeitaria' },
            { src: 'images/produtos/panfletos/panfleto-casa-de-racao-2.jpg', alt: 'Panfleto Casa de Ração' },
            { src: 'images/produtos/panfletos/panfletos-lanches.jpg', alt: 'Panfletos Lanches' },
            { src: 'images/produtos/panfletos/20231020_091554.jpg', alt: 'Panfleto 1' },
            { src: 'images/produtos/panfletos/20240703_133835.jpg', alt: 'Panfleto 2' },
            { src: 'images/produtos/panfletos/20250711_153258.jpg.jpeg', alt: 'Panfleto 3' },
            { src: 'images/produtos/panfletos/704ff523-d061-4cf5-b7d6-ec2337ff3336.jfif', alt: 'Panfleto 4' },
            { src: 'images/produtos/panfletos/f2563b8f-467c-4253-852f-bcbf8ad9567a.jfif', alt: 'Panfleto 5' }
        ]
    },

    // Textos de interface do usuário
    ui: {
        whatsappButton: 'Solicitar Orçamento',
        testimonialsTitle: 'O que nossos clientes dizem',
        contactTitle: 'Entre em Contato'
    }
};
