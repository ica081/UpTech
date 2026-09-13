// =============================================
// 📦 BANCO DE DADOS DA UP TECH - PRODUTOS REAIS
// =============================================
const products = [
    // ==========================================
    // 📹 CÂMERA DE SEGURANÇA (mantida)
    // ==========================================
    {
        id: 1,
        name: "Câmera de Segurança Wi-Fi 380 Pro Smart",
        emoji: "📹",
        price: "R$ 124,90",
        shortDesc: "1080p, Visão Noturna 25m, Áudio Bidirecional.",
        fullDesc: "Esta câmera de segurança foi pensada para monitorar áreas externas e internas com imagem em alta definição e acesso direto pelo celular. A proposta é facilitar o acompanhamento do ambiente em tempo real, com visualização ao vivo e controle pelo app. Ela trabalha com resolução 1080p, sensor CMOS progressivo e lente de 3,6 mm, recursos que ajudam a entregar uma leitura mais nítida da cena. O campo de visão de 360° e o movimento PTZ ampliam a cobertura e ajudam a reduzir pontos sem visualização. Para uso noturno, conta com visão noturna e alcance de até 25 m, algo útil em locais com pouca iluminação. Também traz alarme, sensor de movimento e alerta no celular para acompanhar mudanças no ambiente com mais praticidade. O áudio bidirecional com microfone permite ouvir e falar à distância, enquanto a redução de ruído ajuda na clareza da comunicação. A conexão via Wi-Fi e a alimentação por corrente elétrica simplificam o uso no dia a dia, sem depender de rede cabeada para transmitir a imagem.",
        specs: [
            "📹 Resolução: 1080p (Full HD)",
            "🔎 Sensor CMOS progressivo e lente 3.6mm",
            "🔄 Movimento PTZ e campo de visão 360°",
            "🌙 Visão noturna com alcance de até 25 metros",
            "🔔 Alarme e sensor de movimento com alerta no celular",
            "🎤 Áudio bidirecional com redução de ruído",
            "📶 Conexão Wi-Fi (sem fio)",
            "💾 Suporte para cartão SD de até 128GB",
            "⚡ Alimentação por corrente elétrica",
            "📦 Acompanha carregador, manual e parafusos"
        ],
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_799807-MLB116724213623_082026-F-kit-com-2-cameras-de-seguranca-externas-wifi-380-pro-smart.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_852528-MLB116723919031_082026-F-kit-com-2-cameras-de-seguranca-externas-wifi-380-pro-smart.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_932271-MLB115314188406_082026-F-kit-com-2-cameras-de-seguranca-externas-wifi-380-pro-smart.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_682722-MLB116724716409_082026-F-kit-com-2-cameras-de-seguranca-externas-wifi-380-pro-smart.webp"
        ],
        includes: "1 Câmera de Segurança 380 Pro Smart, carregador, manual e parafusos para instalação.",
        stock: 2
    },

    // ==========================================
    // 🎧 FONE M10 (mantido)
    // ==========================================
    {
        id: 2,
        name: "Fone M10 Bluetooth Wireless",
        emoji: "🎧",
        price: "R$ 44,90",
        shortDesc: "Graves potentes, Bluetooth 5.1 e 5h de bateria.",
        fullDesc: "QUALIDADE DE SOM IMPRESSIONANTE: Os fones M10 oferecem graves potentes, som estéreo de alta definição, cancelamento de ruído inteligente e chamadas com áudio limpo e claro. BATERIA DE LONGA DURAÇÃO: Até 4 a 5 horas de uso contínuo, case carregador com excelente autonomia, display LED indicador de bateria e carregamento rápido. CONEXÃO RÁPIDA E ESTÁVEL: Tecnologia Bluetooth 5.1, conexão automática ao retirar do estojo, compatível com Android e iOS e alcance de até 10 metros.",
        specs: [
            "🔊 Graves potentes e som estéreo HD",
            "🔇 Cancelamento de ruído inteligente",
            "🎤 Chamadas com áudio limpo e claro",
            "🔋 Bateria: 4 a 5 horas de uso contínuo",
            "📦 Case carregador com display LED indicador",
            "⚡ Carregamento rápido",
            "📶 Bluetooth 5.1 (conexão estável)",
            "🔄 Conexão automática ao retirar do estojo",
            "📱 Compatível com Android e iOS",
            "📏 Alcance de até 10 metros"
        ],
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_788201-MLB107524567451_022026-F-kit-atacado-10-fones-m10-bluetooth--qualidade-premium.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_843835-MLB107525005107_022026-F-kit-atacado-10-fones-m10-bluetooth--qualidade-premium.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_976027-MLB106848627854_022026-F-kit-atacado-10-fones-m10-bluetooth--qualidade-premium.webp"
        ],
        includes: "1 par de fones M10, estojo de carregamento e cabo USB para carregamento.",
        stock: 10
    },

    // ==========================================
    // 🔌 CARREGADOR DE BATERIA VEICULAR (4 unidades)
    // ==========================================
    {
        id: 3,
        name: "Carregador de Bateria para Veículos",
        emoji: "🔌",
        price: "R$ 00,00", // 👈 DEFINIR PREÇO
        shortDesc: "Carregador de bateria automotiva. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: [
            "📝 Especificações em breve"
        ],
        images: [
            // 👈 ADICIONAR IMAGENS AQUI
        ],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 4
    },

    // ==========================================
    // 🔦 LANTERNA RECARREGÁVEL (2 unidades)
    // ==========================================
    {
        id: 4,
        name: "Lanterna Recarregável",
        emoji: "🔦",
        price: "R$ 00,00", // 👈 DEFINIR PREÇO
        shortDesc: "Lanterna recarregável de alta potência. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: [
            "📝 Especificações em breve"
        ],
        images: [
            // 👈 ADICIONAR IMAGENS AQUI
        ],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 2
    },

    // ==========================================
    // 🔗 CABO USB TIPO C 2M (2 unidades)
    // ==========================================
    {
        id: 5,
        name: "Cabo USB Tipo C de 2 Metros",
        emoji: "🔗",
        price: "R$ 00,00", // 👈 DEFINIR PREÇO
        shortDesc: "Cabo USB-C de 2 metros. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: [
            "📝 Especificações em breve"
        ],
        images: [
            // 👈 ADICIONAR IMAGENS AQUI
        ],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 2
    },

    // ==========================================
    // 📱 CAPINHA MAGNÉTICA IPHONE 13 PRO MAX (3 unidades)
    // ==========================================
    {
        id: 6,
        name: "Capinha Magnética Transparente iPhone 13 Pro Max",
        emoji: "📱",
        price: "R$ 00,00", // 👈 DEFINIR PREÇO
        shortDesc: "Capinha magnética transparente. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: [
            "📝 Especificações em breve"
        ],
        images: [
            // 👈 ADICIONAR IMAGENS AQUI
        ],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 3
    },

    // ==========================================
    // 🎧 FONE BLUETOOTH COM APOIO PARA ORELHA (2 unidades)
    // ==========================================
    {
        id: 7,
        name: "Fone Bluetooth com Apoio para Orelha",
        emoji: "🎧",
        price: "R$ 00,00", // 👈 DEFINIR PREÇO
        shortDesc: "Fone Bluetooth com apoio para orelha. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: [
            "📝 Especificações em breve"
        ],
        images: [
            // 👈 ADICIONAR IMAGENS AQUI
        ],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 2
    },

    // ==========================================
    // 💇 APARADOR DE CORPO FEMININO (1 unidade)
    // ==========================================
    {
        id: 8,
        name: "Aparador de Corpo Feminino",
        emoji: "💇‍♀️",
        price: "R$ 00,00", // 👈 DEFINIR PREÇO
        shortDesc: "Aparador de corpo feminino. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: [
            "📝 Especificações em breve"
        ],
        images: [
            // 👈 ADICIONAR IMAGENS AQUI
        ],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 1
    },

    // ==========================================
    // 💇 APARADOR DE CORPO MASCULINO (1 unidade)
    // ==========================================
    {
        id: 9,
        name: "Aparador de Corpo Masculino",
        emoji: "💇‍♂️",
        price: "R$ 00,00", // 👈 DEFINIR PREÇO
        shortDesc: "Aparador de corpo masculino. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: [
            "📝 Especificações em breve"
        ],
        images: [
            // 👈 ADICIONAR IMAGENS AQUI
        ],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 1
    }
];