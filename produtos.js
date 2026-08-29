// =============================================
// 📦 BANCO DE DADOS DA UP TECH
// =============================================
const products = [
    {
        id: 1,
        name: "Fone Bluetooth Estéreo",
        emoji: "🎧",
        price: "R$ 39,90",
        shortDesc: "8h de bateria, som crystal clear.",
        fullDesc: "Experimente a liberdade do áudio sem fio com este fone Bluetooth de alta qualidade. Oferece som cristalino, graves potentes e isolamento de ruído passivo. Perfeito para academia, corrida ou uso diário. Bateria de longa duração garante até 8 horas de reprodução contínua.",
        specs: [
            "🔋 Bateria: 8 horas de reprodução",
            "📡 Bluetooth 5.0 (conexão estável)",
            "💧 Resistente a suor e respingos",
            "🎤 Microfone embutido para chamadas",
            "📦 Acompanha estojo de carregamento"
        ]
    },
    {
        id: 2,
        name: "Relógio Digital Smartwatch",
        emoji: "⌚",
        price: "R$ 89,90",
        shortDesc: "Monitora passos, batimentos e sono.",
        fullDesc: "Smartwatch moderno com tela digital de alta definição. Ideal para quem quer monitorar a saúde e praticar atividades físicas. Receba notificações do celular diretamente no pulso e acompanhe seu desempenho em tempo real.",
        specs: [
            "❤️ Monitor de batimentos cardíacos",
            "👣 Pedômetro (contador de passos)",
            "😴 Análise da qualidade do sono",
            "📱 Compatível com Android e iOS",
            "🔋 Bateria: até 5 dias de uso"
        ]
    },
    {
        id: 3,
        name: "Capinha de Celular (Silicone)",
        emoji: "📱",
        price: "R$ 15,00",
        shortDesc: "Para iPhone e Samsung. Cores variadas.",
        fullDesc: "Capinha protetora em silicone de alta qualidade. Proporciona aderência firme, absorve impactos contra quedas e preserva a integridade do seu celular. Disponível em diversas cores (preto, azul, rosa, verde, vermelho e transparente).",
        specs: [
            "🛡️ Silicone flexível e resistente",
            "📐 Ajuste perfeito para o modelo",
            "🎨 Diversas cores disponíveis",
            "🔘 Botões de fácil acesso",
            "📦 Consulte modelo antes de comprar"
        ]
    },
    {
        id: 4,
        name: "Cabo USB-C / Lightning",
        emoji: "🔌",
        price: "R$ 19,90",
        shortDesc: "Carregamento rápido e durável.",
        fullDesc: "Cabo de carregamento e transferência de dados com alta durabilidade. Possui reforço na extremidade para evitar quebras e suporta carregamento rápido de até 2.4A. Compatível com dispositivos USB-C e Lightning (iPhone).",
        specs: [
            "⚡ Carregamento rápido (2.4A)",
            "🔁 Transferência de dados rápida",
            "🧵 Trançado resistente a dobras",
            "📏 Comprimento: 1,2 metros",
            "🔌 Conectores: USB-A / USB-C ou Lightning"
        ]
    },
    {
        id: 5,
        name: "Power Bank 10000mAh",
        emoji: "🔋",
        price: "R$ 55,00",
        shortDesc: "Carregue até 3 dispositivos.",
        fullDesc: "Power Bank de alta capacidade com 10000mAh. Carregue até 3 dispositivos simultaneamente através das duas portas USB e uma entrada USB-C. Design compacto e leve, ideal para levar na bolsa ou mochila.",
        specs: [
            "🔋 Capacidade: 10000mAh",
            "🔌 2 portas USB + 1 entrada USB-C",
            "📱 Carrega até 3 dispositivos de uma vez",
            "⚡ Carregamento rápido (2.1A)",
            "💡 LED indicador de carga"
        ]
    }
];