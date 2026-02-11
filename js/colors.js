/**
 * CONFIGURAÇÃO DE CORES DO SISTEMA
 * Paleta moderna com tons de azul profundo (água/tecnologia)
 * O script injeta essas cores como variáveis CSS no :root.
 */
const systemColors = {
    // Cores Principais - Azul Profundo Premium
    primary: "#0369a1",        // Azul Oceano Vibrante
    primaryHover: "#0284c7",   // Azul Oceano Claro
    secondary: "#0f172a",      // Azul Escuro Profundo
    dark: "#020617",           // Quase Preto Azulado
    
    // Cores de Apoio
    light: "#f1f5f9",          // Cinza Azulado Claro
    white: "#FFFFFF",          // Branco puro
    black: "#0f172a",          // Preto Azulado
    
    // Textos
    textMain: "#334155",       // Cinza Azulado para texto
    textMuted: "#64748b",      // Texto secundário
    textLight: "#f8fafc",      // Texto sobre fundo escuro
    
    // Gradientes (Cores de parada)
    gradientPrimaryEnd: "#0ea5e9",     // Cyan Vibrante
    gradientDarkEnd: "#1e293b",        // Azul Escuro Suave
    gradientGoldStart: "#0891b2",      // Cyan Escuro
    gradientGoldMid: "#06b6d4",        // Cyan Médio
    gradientGoldEnd: "#22d3ee",        // Cyan Claro
    
    // WhatsApp
    whatsappStart: "#22c55e",
    whatsappEnd: "#15803d",
    
    // Backgrounds específicos
    bgBodyStart: "#f8fafc",
    bgBodyEnd: "#e2e8f0",
    bgSectionAlt: "#f1f5f9",
    
    // Sombras e Overlays
    shadowColor: "rgba(15, 23, 42, 0.1)",
    glowColor: "rgba(3, 105, 161, 0.4)"
};

// Função para aplicar as cores no CSS
function applySystemColors() {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(systemColors)) {
        root.style.setProperty(`--color-${key}`, value);
    }
}

// Executa a aplicação das cores
applySystemColors();
