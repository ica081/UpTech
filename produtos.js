// =============================================
// 📦 BANCO DE DADOS DA UP TECH - PRODUTOS REAIS
// =============================================
const products = [
    {
        id: 1,
        name: "Smartwatch Ultra 10 Plus Preto",
        emoji: "⌚",
        price: "R$ 109,90",
        shortDesc: "Tela AMOLED, Monitor Saúde, GPS e Bluetooth.",
        fullDesc: "O Smartwatch ULTRA PLUS combina desempenho, estilo e funcionalidades que tornam o seu dia mais eficiente e conectado. Com uma tela AMOLED vibrante, bateria de longa duração e monitoramento inteligente de saúde, o X10 ULTRA PLUS é mais do que um relógio, é seu novo parceiro para uma vida mais ativa e conectada. O X10 ULTRA PLUS oferece uma experiência visual confortável. A caixa requintada é elegante e generosa. Compatível com Android e iOS, conecta-se perfeitamente ao seu smartphone. Notificações em tempo real para que você não perca nenhuma informação importante. A função de ilha dinâmica torna sua vida inteligente mais vívida: chamadas, música, tudo está sob controle.",
        specs: [
            
            "📱 Compatível com Android e iOS",
            "🖥️ 8 estilos de menu interativo",
            "🔄 Coroa giratória funcional integrada ao sistema",
            "🔒 Bloqueio de tela por senha",
            "😴 Monitor do sono",
            "❤️ Monitores de saúde (pressão, oxigenação, frequência cardíaca e temperatura)",
            "🔦 Lanterna embutida",
            "🏃 Monitoramento de calorias, distância, tempo e passos",
            "🌤️ Previsão do tempo",
            "🧘 Exercícios de respiração",
            "⏱️ Cronômetro",
            "🖼️ Adicione fotos e vídeos da galeria como papel de parede"
        ],
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_792783-MLA99508638586_112025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_839472-MLA96657648716_112025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_809076-MLA94555401971_102025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_949131-MLA96657678474_112025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_857701-MLA94555372551_102025-F.webp"
        ],
        includes: "1 Smartwatch Ultra 10 Plus, pulseiras originais, 1 cabo carregador indutivo sem fio e 1 manual do usuário.",
        stock: 2  // 👈 ESTOQUE: 2 unidades
    },
    {
        id: 2,
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
        stock: 2  // 👈 ESTOQUE: 2 unidades
    },
    {
        id: 3,
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
        stock: 10  // 👈 ESTOQUE: 10 unidades
    },
    {
        id: 4,
        name: "Garrafa Térmica Lens Smart Cup (Branca)",
        emoji: "🧊",
        price: "R$ 49,90",
        shortDesc: "Inox 500ml com visor digital de temperatura.",
        fullDesc: "Mantém bebidas quentes por até 1 dia, ideal para um café fresco a qualquer hora. Capacidade de 500 mL para transporte fácil de café, chá ou água no seu dia a dia. Aço inoxidável garante durabilidade e resistência, sem BPA para segurança. Tampa de rosca evita vazamentos, assegurando transporte seguro na mochila. O visor digital permite monitorar a temperatura da bebida a qualquer momento. A parede dupla de isolamento conserva temperaturas por mais tempo sem condensação externa.",
        specs: [
            "🧊 Capacidade: 500 mL",
            "♻️ Material: Aço Inoxidável (sem BPA)",
            "🌡️ Visor digital de temperatura",
            "🕒 Mantém quente/frio por até 24 horas",
            "🔒 Tampa de rosca anti-vazamento",
            "🧱 Parede dupla com isolamento térmico",
            "🎨 Cor: Branca (design liso)",
            "🚫 Não forma condensação na parte externa"
        ],
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_919613-MLA99972974045_112025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_909283-MLU77998706140_082024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_753279-MLU79077551499_092024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_885849-MLU79077787181_092024-F.webp"
            
        ],
        includes: "1 Garrafa Térmica Lens Smart Cup (500ml) com visor digital.",
        stock: 3  // 👈 ESTOQUE: 3 unidades
    }
];