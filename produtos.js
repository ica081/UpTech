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
        name: "Carregador de Bateria Veicular 12V Bivolt Automático",
        emoji: "🔌",
        price: "R$ 59,90",
        shortDesc: "Bivolt automático, 2A, para carros e motos.",
        fullDesc: "Garanta que seu veículo esteja sempre pronto para rodar! O Carregador de Bateria Veicular 12V é a solução prática e eficiente para recarregar e manter a carga da bateria de carros, motos e utilitários, evitando imprevistos no dia a dia. Com design compacto e operação inteligente, ele é ideal para guardar no porta-luvas ou porta-malas do seu veículo. Possui indicador LED que sinaliza o status do carregamento e é compatível com baterias chumbo-ácido de 12V.",
        specs: [
            "🔌 Bivolt Automático (12V a 240V)",
            "🔋 Tensão de saída: 12V",
            "⚡ Corrente de saída: 2 A",
            "💪 Potência: 30 W",
            "🔋 Compatível com baterias Chumbo-Ácido 12V",
            "🚗 Aplicações: Carros, motos e utilitários",
            "💡 Indicador LED integrado",
            "📏 Comprimento do cabo: 1 metro",
            "📐 Dimensões: 17 cm x 8 cm x 3,5 cm",
            "🐊 Conexão: Garras jacaré"
        ],
        images: [
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS1zcjrC6wP1EtzPgRVUNbEODcplhqt_8ux5ClV4lCRY2cJ4ypvut3dY6T3P3DYpX5zFBgwLowX0x4qKOq8Uk3e7X-B_bmEYPfWiD-CuZGC7CbWAonYEAJYSjy1vZE4yT2X-hiVoiI0rF0&usqp=CAc",
            "https://http2.mlstatic.com/D_NQ_NP_2X_678182-MLA111615934686_062026-F.webp"
        ],
        includes: "1x Carregador de Bateria Veicular 12V, 1x Cabo de Alimentação (1m) e 1x Par de Garras de Conexão (Jacaré).",
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
            "https://i.imgur.com/0ijfCm8.png",
            "https://http2.mlstatic.com/D_NQ_NP_2X_990804-MLB115963420162_092026-F-kit-2-lanternas-led-taticas-recarregaveis-usb-300m.webp"
        ],
        includes: "1x Lanterna LED Onistek, 1x Cabo Micro USB e 1x Cabo USB-C.",
        stock: 2
    },

    // ==========================================
    // 🔗 CABO USB TIPO C 2M (X-Cell 25W)
    // ==========================================
    {
        id: 5,
        name: "Cabo Turbo USB-C 2M",
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
            "https://i.imgur.com/DsQrxNx.png",
            "https://i.imgur.com/30Ig2zY.png"
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
        price: "R$ 24,90",
        shortDesc: "Anti Impacto, MagSafe, TPU e Policarbonato.",
        fullDesc: "Proteja seu iPhone 13 Pro Max com elegância e praticidade sem esconder o design original do aparelho. A capinha transparente com tecnologia MagSafe integrada foi desenvolvida para oferecer máxima proteção contra quedas e arranhões, garantindo perfeito alinhamento magnético. Possui bordas reforçadas e elevação nas áreas da câmera e tela para absorver choques e impactos do dia a dia. Preserva a cor e a beleza original do seu aparelho, com botões macios, recortes precisos e excelente aderência.",
        specs: [
            "🧲 Imã MagSafe Integrado",
            "🛡️ Proteção Anti Impacto (bordas reforçadas)",
            "✨ Transparência Cristalina",
            "📱 Encaixe Perfeito (botões e recortes precisos)",
            "🖐️ Pegada Confortável e antiderrapante",
            "🔄 Compatível com MagSafe e Padrão Qi",
            "🧵 Material: TPU de Alta Qualidade e Policarbonato",
            "📐 Compatibilidade: iPhone 13 Pro Max",
            "🎨 Cor: Transparente"
        ],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPWyoFzriQB1imzm2aexsHRGio8_2buZgmNWrG7swwA&s=10"
        ],
        includes: "1x Capinha Transparente MagSafe Para iPhone 13 Pro Max.",
        stock: 3
    },

    // ==========================================
    // 🎧 FONE BLUETOOTH COM APOIO PARA ORELHA
    // ==========================================
    {
        id: 7,
        name: "Fone Bluetooth com Apoio para Orelha DIXSG",
        emoji: "🎧",
        price: "R$ 64,90",
        shortDesc: "Bluetooth 5.3, Cancelamento Ativo de Ruído, design ergonômico.",
        fullDesc: "Fone de ouvido sem fio com tecnologia Bluetooth 5.3, que oferece conexão estável e transmissão de áudio de alta fidelidade sem interrupções, perfeito para músicas, chamadas e vídeos com qualidade superior. Com cancelamento ativo de ruído integrado, este fone reduz eficientemente sons ambientais, proporcionando uma experiência auditiva imersiva em qualquer ambiente, mesmo em locais barulhentos. Utiliza tecnologia híbrida para reproduzir áudio com clareza e profundidade, equilibrando graves potentes, médios nítidos e agudos definidos para um som de alta qualidade. Feito com material plástico de alta qualidade, o fone é leve e confortável para uso prolongado, com design ergonômico que se adapta perfeitamente ao ouvido, ideal para uso diário.",
        specs: [
            "📶 Bluetooth 5.3 (conexão estável)",
            "🎧 Transmissão de áudio de alta fidelidade",
            "🔇 Cancelamento Ativo de Ruído (ANC)",
            "🔊 Tecnologia híbrida (graves, médios e agudos equilibrados)",
            "🪶 Design ergonômico e leve em plástico",
            "👂 Apoio para orelha (estabilidade durante o uso)",
            "📱 Ideal para músicas, chamadas e vídeos",
            "⚡ Conexão sem fio (sem cabos)",
            "🎯 Uso diário confortável"
        ],
        images: [
            "https://ae-pic-a1.aliexpress-media.com/kf/Sd0e70480fe4b4108b1ecd69e10f40897n.jpg_220x220q75.jpg_.avif",
            "https://ae-pic-a1.aliexpress-media.com/kf/S7a106606b9bc4535b19c931b291dd39bt.jpg_220x220q75.jpg_.avif"
        ],
        includes: "1x Fone Bluetooth DIXSG, 1x estojo de carregamento e 1x cabo de carregamento USB.",
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
        name: "Aparador de Pelos Corporal Masculino Íntimo Prova D'água",
        emoji: "💇‍♂️",
        price: "R$ 64,90",
        shortDesc: "Prova d'água IPX7, sem fio, lâmina de cerâmica.",
        fullDesc: "Cuidar do visual e da higiene pessoal ficou muito mais simples, rápido e seguro! O Aparador de Pelos Corporal Masculino foi projetado para oferecer a máxima precisão em cortes corporais, desde a barba e cabelo até as áreas mais sensíveis, garantindo conforto total sem puxões ou irritações na pele. Sua lâmina de cerâmica de alta qualidade aliada ao motor de alta potência de 6.000 RPM entrega um resultado impecável com total segurança. É resistente à água (IPX7), totalmente lavável, facilitando a limpeza e possibilitando o uso durante o banho. Possui bateria recarregável de carga rápida via USB (1 hora) e oferece até 60 minutos de uso contínuo.",
        specs: [
            "🛡️ Lâmina de Cerâmica Segura (dentes arredondados)",
            "💧 Resistente à Água (IPX7) - lavável",
            "🔋 Bateria Recarregável (500 mAh) - carga via USB",
            "⚡ Motor Potente de 6.000 RPM",
            "⏱️ Até 60 minutos de uso contínuo",
            "🔌 Bivolt (127V/220V) - Recarregável via USB",
            "🎯 Zonas de aplicação: Barba, cabeça, peito, axilas, pernas e área íntima",
            "⚖️ Potência Nominal: 5W",
            "🔋 Tensão: 3,2V | Entrada: 5V (USB)",
            "📏 Material da lâmina: Cerâmica com dentes arredondados"
        ],
        images: [
            "https://ae-pic-a1.aliexpress-media.com/kf/Se342b01bf43b4bc4b9e0dd3671ec726dC.jpg?has_lang=1&ver=2_220x220q75.jpg_.avif",
            "https://ae-pic-a1.aliexpress-media.com/kf/Saf7815fd1ab6485792911fc51f3164f7U.jpg_220x220q75.jpg_.avif"
        ],
        includes: "1x Aparador de Pelos Principal, 1x Pente de Ajuste, 1x Cabo de Carregamento USB e 1x Escova de Limpeza.",
        stock: 1
    }
];