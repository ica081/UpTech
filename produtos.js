// =============================================
// 📦 BANCO DE DADOS DA UP TECH - PRODUTOS REAIS
// =============================================
const products = [
    // ==========================================
    // 📹 CÂMERA DE SEGURANÇA
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
    // 🎧 FONE M10
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
    // 🔌 CARREGADOR DE BATERIA VEICULAR
    // ==========================================
    {
        id: 3,
        name: "Carregador de Bateria para Veículos",
        emoji: "🔌",
        price: "R$ 00,00",
        shortDesc: "Carregador de bateria automotiva. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: ["📝 Especificações em breve"],
        images: [],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 4
    },

    // ==========================================
    // 🔦 LANTERNA LED RECARREGÁVEL
    // ==========================================
    {
        id: 4,
        name: "Lanterna LED Recarregável Onistek",
        emoji: "🔦",
        price: "R$ 59,90",
        shortDesc: "Compacta, potente, USB e função power bank.",
        fullDesc: "Tenha iluminação potente sempre à mão! A Lanterna LED Recarregável Onistek é compacta, leve e prática, ideal para uso em casa, carro, camping, trilhas, pesca, viagens e situações de emergência. Oferece iluminação de alta intensidade com excelente alcance para diferentes situações. A bateria recarregável dispensa pilhas descartáveis: basta recarregar via USB e ter sua lanterna sempre pronta para usar. Também possui função de bateria portátil (power bank), podendo ser utilizada para manter seus dispositivos carregados em situações de emergência. Resistente a respingos de água, é perfeita para o uso cotidiano em ambientes externos. Compacta e leve, com aproximadamente 15 cm de comprimento e 150 g, cabe na mochila, bolsa ou porta-luvas.",
        specs: [
            "💡 Iluminação de alta intensidade (até 7.360 modos/alcance)",
            "🔋 Bateria recarregável (dispensa pilhas)",
            "⚡ Função power bank para emergências",
            "💧 Resistente a respingos de água e chuva leve",
            "📏 Comprimento: 15 cm",
            "📐 Diâmetro do corpo: 3 cm",
            "⚖️ Peso aproximado: 150 g",
            "🔌 Recarga via USB",
            "🎨 Cor: Preto",
            "🏕️ Ideal para camping, trilhas, pesca e emergências"
        ],
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_863576-MLB115963686022_092026-F-kit-2-lanternas-led-taticas-recarregaveis-usb-300m.webp"
        ],
        includes: "1x Lanterna LED Onistek, 1x Cabo Micro USB e 1x Cabo USB-C.",
        stock: 2
    },

    // ==========================================
    // 🔗 CABO USB TIPO C 2M (X-Cell 25W)
    // ==========================================
    {
        id: 5,
        name: "Cabo Turbo USB-C 2M X-Cell 25W",
        emoji: "🔗",
        price: "R$ 19,90",
        shortDesc: "2 metros, 25W Turbo, USB-A para USB-C.",
        fullDesc: "Procurando um cabo resistente, longo e com carregamento ultra rápido? O Cabo X-Cell XC-CD-146 de 25W oferece a máxima eficiência para carregar seus dispositivos e transferir arquivos com alta velocidade e segurança. Com 2 metros de comprimento, você garante total comodidade para usar seu smartphone ou tablet enquanto ele carrega, seja no sofá, na cama ou no escritório. Fabricado com materiais de alta qualidade para evitar quebras e garantir maior durabilidade nos conectores. Funciona com todos os dispositivos com entrada USB-C (Samsung, Xiaomi, Motorola, LG, entre outros).",
        specs: [
            "⚡ Carregamento Turbo 25W (Fast Charge / Quick Charge)",
            "📏 Comprimento: 2 metros",
            "🔄 Transferência de dados: até 480 Mbps",
            "🔌 Conectores: USB-A para USB Type-C",
            "🛡️ Construção reforçada contra quebras",
            "📱 Compatível com Samsung, Xiaomi, Motorola, LG e outros",
            "🎨 Cor: Preto",
            "🏷️ Marca: X-Cell | Modelo: XC-CD-146",
            "🧵 Material: PVC e cobre de alta condutividade"
        ],
        images: [
            // 👈 ADICIONAR IMAGEM AQUI (o link do Google que você mandou pode expirar)
        ],
        includes: "1x Cabo Turbo USB para Type-C 2M X-Cell XC-CD-146.",
        stock: 2
    },

    // ==========================================
    // 📱 CAPINHA MAGNÉTICA IPHONE 13 PRO MAX
    // ==========================================
    {
        id: 6,
        name: "Capinha Magnética Transparente iPhone 13 Pro Max",
        emoji: "📱",
        price: "R$ 00,00",
        shortDesc: "Capinha magnética transparente. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: ["📝 Especificações em breve"],
        images: [],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 3
    },

    // ==========================================
    // 🎧 FONE BLUETOOTH COM APOIO PARA ORELHA
    // ==========================================
    {
        id: 7,
        name: "Fone Bluetooth com Apoio para Orelha",
        emoji: "🎧",
        price: "R$ 00,00",
        shortDesc: "Fone Bluetooth com apoio para orelha. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: ["📝 Especificações em breve"],
        images: [],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 2
    },

    // ==========================================
    // 💇 DEPILADOR FEMININO 4 EM 1
    // ==========================================
    {
        id: 8,
        name: "Depilador Elétrico Feminino 4 em 1",
        emoji: "💇‍♀️",
        price: "R$ 59,90",
        shortDesc: "Rosto e corpo, 4 cabeçotes, bivolt, sem irritação.",
        fullDesc: "Depilador elétrico feminino 4 em 1 para rosto e corpo. Quatro cabeçotes intercambiáveis, acabamento suave sem puxar ou machucar. Indicado para uso diário inclusive em peles sensíveis. Remove pelos sem arrancar, reduzindo irritações. Portátil e leve, é ideal para levar em viagens ou usar no dia a dia. Encaixe o cabeçote adequado à área desejada, ligue no botão deslizante frontal e deslize suavemente sobre a pele limpa e seca no sentido contrário ao crescimento dos pelos. Após o uso, remova o cabeçote e limpe com a escova inclusa. Produto verificado antes do envio. Enviamos com agilidade e cuidado na embalagem.",
        specs: [
            "✨ 4 em 1: depilador corporal, aparador facial, de sobrancelhas e de nariz",
            "🔌 Bivolt (127/220V)",
            "📦 Acompanha 4 cabeçotes e escova de limpeza",
            "🌸 Remove pelos sem arrancar, reduzindo irritações",
            "💆‍♀️ Indicado para axilas, braços, buço, nariz, virilha, pernas, rosto e sobrancelhas",
            "🪶 Portátil e leve",
            "🔇 Ruído moderado",
            "✂️ Pelos longos devem ser aparados antes do uso",
            "⚠️ Não indicado para pelos grossos ou muito longos",
            "🛡️ Garantia do vendedor: 7 dias contra defeitos de fabricação"
        ],
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_887143-MLB114706939588_082026-F-depilador-feminino-4-em-1-eletrico-rosto-corpo-pelos-intimos.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_657750-MLB113771007385_062026-F-depilador-feminino-4-em-1-eletrico-rosto-corpo-pelos-intimos.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_948375-MLB113770127403_062026-F-depilador-feminino-4-em-1-eletrico-rosto-corpo-pelos-intimos.webp"
        ],
        includes: "1x Depilador Elétrico Feminino 4 em 1, 4 cabeçotes intercambiáveis, escova de limpeza e manual de instruções.",
        stock: 1
    },

    // ==========================================
    // 💇 APARADOR DE CORPO MASCULINO
    // ==========================================
    {
        id: 9,
        name: "Aparador de Corpo Masculino",
        emoji: "💇‍♂️",
        price: "R$ 00,00",
        shortDesc: "Aparador de corpo masculino. Descrição em breve.",
        fullDesc: "Descrição completa em breve. Este produto será atualizado com todas as informações técnicas e detalhes.",
        specs: ["📝 Especificações em breve"],
        images: [],
        includes: "📦 Itens inclusos serão adicionados em breve.",
        stock: 1
    }
];