// Criado - Saulo Prado Versão 1.0 Junho de 2016 Versão 2.0 Março de 2026
import { LinkItem, SocialResponsibilityItem } from './types';

export const SOCIAL_RESPONSIBILITY: SocialResponsibilityItem[] = [
  { name: 'Alcoólicos Anônimos', url: 'https://www.aa.org.br/', description: 'Recuperação do alcoolismo' },
  { name: 'Doe Órgãos', url: 'https://www.gov.br/saude/pt-br/composicao/saes/snt', description: 'Doe Vida' },
  { name: 'Boldrini', url: 'https://www.boldrini.org.br/', description: 'Centro infantil' },
  { name: 'CVV', url: 'https://www.cvv.org.br/', description: 'Apoio Emocional 188' },
];

// --- FUTEBOL LISTS ---
export const FOOTBALL_BRASIL: LinkItem[] = [
  { id: 'fut_br_1', name: 'Flamengo', url: 'https://www.flamengo.com.br', category: 'Futebol' },
  { id: 'fut_br_2', name: 'Palmeiras', url: 'https://www.palmeiras.com.br', category: 'Futebol' },
  { id: 'fut_br_3', name: 'São Paulo', url: 'https://www.saopaulofc.net', category: 'Futebol' },
  { id: 'fut_br_4', name: 'Corinthians', url: 'https://www.corinthians.com.br', category: 'Futebol' },
  { id: 'fut_br_5', name: 'Atlético-MG', url: 'https://atletico.com.br', category: 'Futebol' },
  { id: 'fut_br_6', name: 'Fluminense', url: 'https://www.fluminense.com.br', category: 'Futebol' },
  { id: 'fut_br_7', name: 'Grêmio', url: 'https://gremio.net', category: 'Futebol' },
  { id: 'fut_br_8', name: 'Internacional', url: 'https://internacional.com.br', category: 'Futebol' },
  { id: 'fut_br_9', name: 'Botafogo', url: 'https://www.botafogo.com.br', category: 'Futebol' },
  { id: 'fut_br_10', name: 'Vasco', url: 'https://vasco.com.br', category: 'Futebol' },
  { id: 'fut_br_11', name: 'Cruzeiro', url: 'https://www.cruzeiro.com.br', category: 'Futebol' },
  { id: 'fut_br_12', name: 'Bahia', url: 'https://www.esporteclubebahia.com.br', category: 'Futebol' },
  { id: 'fut_br_13', name: 'Fortaleza', url: 'https://fortaleza1918.com.br', category: 'Futebol' },
  { id: 'fut_br_14', name: 'Athletico-PR', url: 'https://www.athletico.com.br', category: 'Futebol' },
  { id: 'fut_br_15', name: 'Santos', url: 'https://www.santosfc.com.br', category: 'Futebol' },
  { id: 'fut_br_16', name: 'Bragantino', url: 'https://www.redbullbragantino.com.br', category: 'Futebol' },
  { id: 'fut_br_17', name: 'Cuiabá', url: 'https://cuiabaesporteclube.com.br', category: 'Futebol' },
  { id: 'fut_br_18', name: 'Criciúma', url: 'https://www.criciuma.com.br', category: 'Futebol' },
  { id: 'fut_br_19', name: 'Juventude', url: 'https://www.juventude.com.br', category: 'Futebol' },
  { id: 'fut_br_20', name: 'Vitória', url: 'https://www.ecvitoria.com.br', category: 'Futebol' },
];

export const FOOTBALL_EUROPE: LinkItem[] = [
  { id: 'fut_eu_1', name: 'Real Madrid', url: 'https://www.realmadrid.com', category: 'Futebol' },
  { id: 'fut_eu_2', name: 'Barcelona', url: 'https://www.fcbarcelona.com', category: 'Futebol' },
  { id: 'fut_eu_3', name: 'Man. City', url: 'https://www.mancity.com', category: 'Futebol' },
  { id: 'fut_eu_4', name: 'Liverpool', url: 'https://www.liverpoolfc.com', category: 'Futebol' },
  { id: 'fut_eu_5', name: 'Bayern', url: 'https://fcbayern.com', category: 'Futebol' },
  { id: 'fut_eu_6', name: 'PSG', url: 'https://www.psg.fr', category: 'Futebol' },
  { id: 'fut_eu_7', name: 'Arsenal', url: 'https://www.arsenal.com', category: 'Futebol' },
  { id: 'fut_eu_8', name: 'Inter Milan', url: 'https://www.inter.it', category: 'Futebol' },
  { id: 'fut_eu_9', name: 'AC Milan', url: 'https://www.acmilan.com', category: 'Futebol' },
  { id: 'fut_eu_10', name: 'Juventus', url: 'https://www.juventus.com', category: 'Futebol' },
  { id: 'fut_eu_11', name: 'Chelsea', url: 'https://www.chelseafc.com', category: 'Futebol' },
  { id: 'fut_eu_12', name: 'Man. United', url: 'https://www.manutd.com', category: 'Futebol' },
  { id: 'fut_eu_13', name: 'B. Dortmund', url: 'https://www.bvb.de', category: 'Futebol' },
  { id: 'fut_eu_14', name: 'Atl. Madrid', url: 'https://en.atleticodemadrid.com', category: 'Futebol' },
];

export const FOOTBALL_FIFA: LinkItem[] = [
  { id: 'fut_fifa_1', name: 'Brasil (CBF)', url: 'https://www.cbf.com.br', category: 'Futebol' },
  { id: 'fut_fifa_2', name: 'Argentina (AFA)', url: 'https://www.afa.com.ar', category: 'Futebol' },
  { id: 'fut_fifa_3', name: 'França (FFF)', url: 'https://www.fff.fr', category: 'Futebol' },
  { id: 'fut_fifa_4', name: 'Bélgica', url: 'https://www.rbfa.be', category: 'Futebol' },
  { id: 'fut_fifa_5', name: 'Inglaterra', url: 'https://www.englandfootball.com', category: 'Futebol' },
  { id: 'fut_fifa_6', name: 'Portugal', url: 'https://www.fpf.pt', category: 'Futebol' },
  { id: 'fut_fifa_7', name: 'Holanda', url: 'https://www.onsoranje.nl', category: 'Futebol' },
  { id: 'fut_fifa_8', name: 'Espanha', url: 'https://rfef.es', category: 'Futebol' },
  { id: 'fut_fifa_9', name: 'Itália', url: 'https://www.figc.it', category: 'Futebol' },
  { id: 'fut_fifa_10', name: 'Croácia', url: 'https://hns-cff.hr', category: 'Futebol' },
  { id: 'fut_fifa_11', name: 'EUA', url: 'https://www.ussoccer.com', category: 'Futebol' },
  { id: 'fut_fifa_12', name: 'Alemanha', url: 'https://www.dfb.de', category: 'Futebol' },
  { id: 'fut_fifa_13', name: 'Uruguai', url: 'https://www.auf.org.uy', category: 'Futebol' },
  { id: 'fut_fifa_14', name: 'Japão', url: 'https://www.jfa.jp', category: 'Futebol' },
];

// --- JORNAIS / COMUNICAÇÃO LISTS ---
export const NEWSPAPERS_SP: LinkItem[] = [
    { id: 'j_sp_1', name: 'Folha de S.Paulo', url: 'https://www.folha.uol.com.br', category: 'Comunicação' },
    { id: 'j_sp_2', name: 'Estadão', url: 'https://www.estadao.com.br', category: 'Comunicação' },
    { id: 'j_sp_3', name: 'Agora São Paulo', url: 'https://agora.folha.uol.com.br', category: 'Comunicação' },
    { id: 'j_sp_4', name: 'Diário de S. Paulo', url: 'https://www.diariosp.com.br', category: 'Comunicação' },
];
export const NEWSPAPERS_RJ: LinkItem[] = [
    { id: 'j_rj_1', name: 'O Globo', url: 'https://oglobo.globo.com', category: 'Comunicação' },
    { id: 'j_rj_2', name: 'Extra', url: 'https://extra.globo.com', category: 'Comunicação' },
    { id: 'j_rj_3', name: 'O Dia', url: 'https://odia.ig.com.br', category: 'Comunicação' },
    { id: 'j_rj_4', name: 'Meia Hora', url: 'https://www.meiahora.com.br', category: 'Comunicação' },
];
export const NEWSPAPERS_MG: LinkItem[] = [
    { id: 'j_mg_1', name: 'Estado de Minas', url: 'https://www.em.com.br', category: 'Comunicação' },
    { id: 'j_mg_2', name: 'O Tempo', url: 'https://www.otempo.com.br', category: 'Comunicação' },
    { id: 'j_mg_3', name: 'Hoje em Dia', url: 'https://www.hojeemdia.com.br', category: 'Comunicação' },
];
export const NEWSPAPERS_SUL: LinkItem[] = [
    { id: 'j_sul_1', name: 'Zero Hora (GZH)', url: 'https://gzh.rs', category: 'Comunicação' },
    { id: 'j_sul_2', name: 'Correio do Povo', url: 'https://www.correiodopovo.com.br', category: 'Comunicação' },
    { id: 'j_sul_3', name: 'Gazeta do Povo', url: 'https://www.gazetadopovo.com.br', category: 'Comunicação' },
    { id: 'j_sul_4', name: 'Diário Catarinense', url: 'https://www.nsctotal.com.br/dc', category: 'Comunicação' },
];
export const NEWSPAPERS_OUTROS: LinkItem[] = [
    { id: 'j_out_1', name: 'Correio Braziliense', url: 'https://www.correiobraziliense.com.br', category: 'Comunicação' },
    { id: 'j_out_2', name: 'Jornal do Commercio', url: 'https://jc.ne10.uol.com.br', category: 'Comunicação' },
    { id: 'j_out_3', name: 'A Tarde', url: 'https://atarde.com.br', category: 'Comunicação' },
    { id: 'j_out_4', name: 'O Povo', url: 'https://www.opovo.com.br', category: 'Comunicação' },
];

export const GAME_ITEMS: LinkItem[] = [
  { id: 'g1', name: 'Roblox', url: 'https://www.roblox.com', category: 'Games' },
  { id: 'g2', name: 'Twitch', url: 'https://www.twitch.tv', category: 'Games' },
  { id: 'g3', name: 'Steam', url: 'https://store.steampowered.com', category: 'Games' },
  { id: 'g4', name: 'Discord', url: 'https://discord.com', category: 'Games' },
  { id: 'g5', name: 'Epic Games', url: 'https://store.epicgames.com', category: 'Games' },
  { id: 'g6', name: 'Chess.com', url: 'https://www.chess.com', category: 'Games' },
  { id: 'g7', name: 'PlayStation', url: 'https://www.playstation.com', category: 'Games' },
  { id: 'g8', name: 'Xbox Cloud', url: 'https://www.xbox.com/play', category: 'Games' },
  { id: 'g9', name: 'Gartic', url: 'https://gartic.com.br', category: 'Games' },
  { id: 'g10', name: 'Poki', url: 'https://poki.com/br', category: 'Games' },
  { id: 'g11', name: 'IGN Brasil', url: 'https://br.ign.com', category: 'Games' },
  { id: 'g12', name: 'The Enemy', url: 'https://www.theenemy.com.br', category: 'Games' },
  { id: 'g13', name: 'Nintendo', url: 'https://www.nintendo.com/pt-br/', category: 'Games' },
  { id: 'g14', name: 'Ubisoft', url: 'https://www.ubisoft.com/pt-br/', category: 'Games' },
  { id: 'g15', name: 'EA Games', url: 'https://www.ea.com/pt-br', category: 'Games' },
  // Mais 5 sites adicionados
  { id: 'g16', name: 'Nuuvem', url: 'https://www.nuuvem.com', category: 'Games' },
  { id: 'g17', name: 'Riot Games', url: 'https://www.riotgames.com', category: 'Games' },
  { id: 'g18', name: 'Battle.net', url: 'https://shop.battle.net', category: 'Games' },
  { id: 'g19', name: 'GOG.com', url: 'https://www.gog.com', category: 'Games' },
  { id: 'g20', name: 'Itch.io', url: 'https://itch.io', category: 'Games' },
];

export const INDICATOR_ITEMS: LinkItem[] = [
  { id: 'i1', name: 'Google Trends', url: 'https://trends.google.com.br', category: 'Indicadores' },
  { id: 'i2', name: 'TradingView', url: 'https://br.tradingview.com', category: 'Indicadores' },
  { id: 'i3', name: 'InfoMoney', url: 'https://www.infomoney.com.br/cotacoes/', category: 'Indicadores' },
  { id: 'i4', name: 'Climatempo', url: 'https://www.climatempo.com.br', category: 'Indicadores' },
  { id: 'i5', name: 'Speedtest', url: 'https://www.speedtest.net/pt', category: 'Indicadores' },
  { id: 'i6', name: 'CoinMarketCap', url: 'https://coinmarketcap.com/pt-br/', category: 'Indicadores' },
  { id: 'i7', name: 'Investing.com', url: 'https://br.investing.com', category: 'Indicadores' },
  { id: 'i8', name: 'IBGE', url: 'https://www.ibge.gov.br', category: 'Indicadores' },
  { id: 'i9', name: 'FlightRadar24', url: 'https://www.flightradar24.com', category: 'Indicadores' },
  { id: 'i10', name: 'Waze Live Map', url: 'https://www.waze.com/live-map', category: 'Indicadores' },
  { id: 'i11', name: 'Banco Central', url: 'https://www.bcb.gov.br', category: 'Indicadores' },
  { id: 'i12', name: 'IPEA', url: 'https://www.ipea.gov.br', category: 'Indicadores' },
  // Novos indicadores
  { id: 'i13', name: 'Status Invest', url: 'https://statusinvest.com.br', category: 'Indicadores' },
  { id: 'i14', name: 'Investidor10', url: 'https://investidor10.com.br', category: 'Indicadores' },
  { id: 'i15', name: 'SimilarWeb', url: 'https://www.similarweb.com', category: 'Indicadores' },
  { id: 'i16', name: 'Trading Economics', url: 'https://pt.tradingeconomics.com', category: 'Indicadores' },
  { id: 'i17', name: 'B3 (Bolsa)', url: 'https://www.b3.com.br', category: 'Indicadores' },
];

export const HOME_ITEMS: LinkItem[] = [
  // IA & Produtividade
  { id: '1', name: 'ChatGPT', url: 'https://chat.openai.com', category: 'IA & Produtividade' },
  { id: '2', name: 'Google Gemini', url: 'https://gemini.google.com', category: 'IA & Produtividade' },
  { id: '3', name: 'Claude', url: 'https://claude.ai', category: 'IA & Produtividade' },
  { id: '4', name: 'Canva', url: 'https://www.canva.com', category: 'IA & Produtividade' },
  { id: '5', name: 'Notion', url: 'https://www.notion.so', category: 'IA & Produtividade' },
  { id: '6', name: 'Trello', url: 'https://trello.com', category: 'IA & Produtividade' },
  { id: '7', name: 'GitHub', url: 'https://github.com', category: 'IA & Produtividade' },
  { id: '8', name: 'Figma', url: 'https://www.figma.com', category: 'IA & Produtividade' },
  { id: '9', name: 'WeTransfer', url: 'https://wetransfer.com', category: 'IA & Produtividade' },
  { id: '10', name: 'Zoom', url: 'https://zoom.us', category: 'IA & Produtividade' },

  // Redes Sociais
  { id: '11', name: 'WhatsApp Web', url: 'https://web.whatsapp.com', category: 'Redes Sociais' },
  { id: '12', name: 'Instagram', url: 'https://www.instagram.com', category: 'Redes Sociais' },
  { id: '13', name: 'TikTok', url: 'https://www.tiktok.com', category: 'Redes Sociais' },
  { id: '14', name: 'Facebook', url: 'https://www.facebook.com', category: 'Redes Sociais' },
  { id: '15', name: 'X (Twitter)', url: 'https://twitter.com', category: 'Redes Sociais' },
  { id: '16', name: 'LinkedIn', url: 'https://www.linkedin.com', category: 'Redes Sociais' },
  { id: '17', name: 'Pinterest', url: 'https://www.pinterest.com', category: 'Redes Sociais' },
  { id: '18', name: 'Reddit', url: 'https://www.reddit.com', category: 'Redes Sociais' },
  { id: '19', name: 'Telegram Web', url: 'https://web.telegram.org', category: 'Redes Sociais' },
  { id: '20', name: 'Threads', url: 'https://www.threads.net', category: 'Redes Sociais' },

  // Shopping & Varejo
  { id: '21', name: 'Mercado Livre', url: 'https://www.mercadolivre.com.br', category: 'Shopping & Varejo' },
  { id: '22', name: 'Amazon', url: 'https://www.amazon.com.br', category: 'Shopping & Varejo' },
  { id: '23', name: 'Shopee', url: 'https://shopee.com.br', category: 'Shopping & Varejo' },
  { id: '24', name: 'AliExpress', url: 'https://pt.aliexpress.com', category: 'Shopping & Varejo' },
  { id: '25', name: 'Magalu', url: 'https://www.magazineluiza.com.br', category: 'Shopping & Varejo' },
  { id: '26', name: 'Shein', url: 'https://br.shein.com', category: 'Shopping & Varejo' },
  { id: '27', name: 'OLX', url: 'https://www.olx.com.br', category: 'Shopping & Varejo' },
  { id: '28', name: 'Samsung', url: 'https://www.samsung.com/br', category: 'Shopping & Varejo' },
  { id: '29', name: 'Casas Bahia', url: 'https://www.casasbahia.com.br', category: 'Shopping & Varejo' },
  { id: '30', name: 'Apple', url: 'https://www.apple.com/br', category: 'Shopping & Varejo' },

  // Streaming & Vídeo (Atualizado com TVs)
  { id: '31', name: 'YouTube', url: 'https://www.youtube.com', category: 'Streaming & Vídeo' },
  { id: '32', name: 'Netflix', url: 'https://www.netflix.com', category: 'Streaming & Vídeo' },
  { id: '33', name: 'Prime Video', url: 'https://www.primevideo.com', category: 'Streaming & Vídeo' },
  { id: '34', name: 'Disney+', url: 'https://www.disneyplus.com', category: 'Streaming & Vídeo' },
  { id: '35', name: 'Globoplay', url: 'https://globoplay.globo.com', category: 'Streaming & Vídeo' },
  { id: 'tv_1', name: 'SBT Vídeos', url: 'https://www.sbt.com.br', category: 'Streaming & Vídeo' },
  { id: 'tv_2', name: 'Band', url: 'https://www.band.uol.com.br', category: 'Streaming & Vídeo' },
  { id: 'tv_3', name: 'Record TV', url: 'https://recordtv.r7.com', category: 'Streaming & Vídeo' },
  { id: 'tv_4', name: 'RedeTV!', url: 'https://www.redetv.uol.com.br', category: 'Streaming & Vídeo' },
  { id: 'tv_5', name: 'TV Cultura', url: 'https://cultura.uol.com.br', category: 'Streaming & Vídeo' },
  { id: 'tv_6', name: 'TV Gazeta', url: 'https://www.tvgazeta.com.br', category: 'Streaming & Vídeo' },
  { id: '36', name: 'Spotify', url: 'https://open.spotify.com', category: 'Streaming & Vídeo' },

  // Notícias & Portais
  { id: '41', name: 'Globo.com', url: 'https://www.globo.com', category: 'Notícias & Portais' },
  { id: '42', name: 'UOL', url: 'https://www.uol.com.br', category: 'Notícias & Portais' },
  { id: '43', name: 'G1', url: 'https://g1.globo.com', category: 'Notícias & Portais' },
  { id: '44', name: 'CNN Brasil', url: 'https://www.cnnbrasil.com.br', category: 'Notícias & Portais' },
  { id: '45', name: 'Terra', url: 'https://www.terra.com.br', category: 'Notícias & Portais' },
  { id: '46', name: 'R7', url: 'https://www.r7.com', category: 'Notícias & Portais' },
  { id: '47', name: 'Estadão', url: 'https://www.estadao.com.br', category: 'Notícias & Portais' },
  { id: '48', name: 'Folha de SP', url: 'https://www.folha.uol.com.br', category: 'Notícias & Portais' },
  { id: '49', name: 'Metrópoles', url: 'https://www.metropoles.com', category: 'Notícias & Portais' },
  { id: '50', name: 'BBC News', url: 'https://www.bbc.com/portuguese', category: 'Notícias & Portais' },

  // Bancos & Finanças
  { id: '51', name: 'Nubank', url: 'https://nubank.com.br', category: 'Bancos & Finanças' },
  { id: '52', name: 'Itaú', url: 'https://www.itau.com.br', category: 'Bancos & Finanças' },
  { id: '53', name: 'Bradesco', url: 'https://www.bradesco.com.br', category: 'Bancos & Finanças' },
  { id: '54', name: 'Caixa', url: 'https://www.caixa.gov.br', category: 'Bancos & Finanças' },
  { id: '55', name: 'Banco do Brasil', url: 'https://www.bb.com.br', category: 'Bancos & Finanças' },
  { id: '56', name: 'Santander', url: 'https://www.santander.com.br', category: 'Bancos & Finanças' },
  { id: '57', name: 'Inter', url: 'https://www.bancointer.com.br', category: 'Bancos & Finanças' },
  { id: '58', name: 'XP Invest.', url: 'https://www.xpi.com.br', category: 'Bancos & Finanças' },
  { id: '59', name: 'BTG Pactual', url: 'https://www.btgpactual.com', category: 'Bancos & Finanças' },
  { id: '60', name: 'PayPal', url: 'https://www.paypal.com', category: 'Bancos & Finanças' },

  // Governo & Serviços
  { id: '61', name: 'Gov.br', url: 'https://www.gov.br', category: 'Governo & Serviços' },
  { id: '62', name: 'Meu INSS', url: 'https://meu.inss.gov.br', category: 'Governo & Serviços' },
  { id: '63', name: 'Receita Federal', url: 'https://www.gov.br/receitafederal', category: 'Governo & Serviços' },
  { id: '64', name: 'Correios', url: 'https://www.correios.com.br', category: 'Governo & Serviços' },
  { id: '65', name: 'Detran SP', url: 'https://www.detran.sp.gov.br', category: 'Governo & Serviços' },
  { id: '66', name: 'Poupatempo', url: 'https://www.poupatempo.sp.gov.br', category: 'Governo & Serviços' },
  { id: '67', name: 'Google Maps', url: 'https://maps.google.com', category: 'Governo & Serviços' },
  { id: '68', name: 'Uber (Login)', url: 'https://m.uber.com', category: 'Governo & Serviços' },
  { id: '69', name: 'Booking.com', url: 'https://www.booking.com', category: 'Governo & Serviços' },
  { id: '70', name: 'Airbnb', url: 'https://www.airbnb.com.br', category: 'Governo & Serviços' },

  // Educação & Trabalho
  { id: '71', name: 'Udemy', url: 'https://www.udemy.com', category: 'Educação & Trabalho' },
  { id: '72', name: 'Coursera', url: 'https://www.coursera.org', category: 'Educação & Trabalho' },
  { id: '73', name: 'Duolingo', url: 'https://www.duolingo.com', category: 'Educação & Trabalho' },
  { id: '74', name: 'Wikipedia', url: 'https://pt.wikipedia.org', category: 'Educação & Trabalho' },
  { id: '75', name: 'CNPq', url: 'https://www.gov.br/cnpq', category: 'Educação & Trabalho' },
  { id: '76', name: 'Glassdoor', url: 'https://www.glassdoor.com.br', category: 'Educação & Trabalho' },
  { id: '77', name: 'Vagas.com', url: 'https://www.vagas.com.br', category: 'Educação & Trabalho' },
  { id: '78', name: 'Stack Overflow', url: 'https://stackoverflow.com', category: 'Educação & Trabalho' },
  { id: '79', name: 'Google Tradutor', url: 'https://translate.google.com', category: 'Educação & Trabalho' },
  { id: '80', name: 'Brainly', url: 'https://brainly.com.br', category: 'Educação & Trabalho' },

  // Ferramentas & Outros
  { id: '81', name: 'Speedtest', url: 'https://www.speedtest.net', category: 'Ferramentas' },
  { id: '82', name: 'Remove.bg', url: 'https://www.remove.bg', category: 'Ferramentas' },
  { id: '83', name: 'TinyURL', url: 'https://tinyurl.com', category: 'Ferramentas' },
  { id: '84', name: 'PDF iLove', url: 'https://www.ilovepdf.com/pt', category: 'Ferramentas' },
  { id: '85', name: 'Photopea', url: 'https://www.photopea.com', category: 'Ferramentas' },
  { id: '86', name: '123Apps', url: 'https://123apps.com/pt/', category: 'Ferramentas' },
  { id: '87', name: 'Google Drive', url: 'https://drive.google.com', category: 'Ferramentas' },
  { id: '88', name: 'Dropbox', url: 'https://www.dropbox.com', category: 'Ferramentas' },
  { id: '89', name: 'OneDrive', url: 'https://onedrive.live.com', category: 'Ferramentas' },
  { id: '90', name: 'Pexels', url: 'https://www.pexels.com', category: 'Ferramentas' },
  // Mais variados para fechar 100
  { id: '91', name: 'Elo7', url: 'https://www.elo7.com.br', category: 'Shopping & Varejo' },
  { id: '92', name: 'Enjoei', url: 'https://www.enjoei.com.br', category: 'Shopping & Varejo' },
  { id: '93', name: 'Buscapé', url: 'https://www.buscape.com.br', category: 'Shopping & Varejo' },
  { id: '94', name: 'Zoom Preços', url: 'https://www.zoom.com.br', category: 'Shopping & Varejo' },
  { id: '95', name: 'Decolar', url: 'https://www.decolar.com', category: 'Governo & Serviços' },
  { id: '96', name: '99 App', url: 'https://99app.com', category: 'Governo & Serviços' },
  { id: '97', name: 'Wix', url: 'https://pt.wix.com', category: 'IA & Produtividade' },
  { id: '98', name: 'WordPress', url: 'https://br.wordpress.com', category: 'IA & Produtividade' },
  { id: '99', name: 'HostGator', url: 'https://www.hostgator.com.br', category: 'IA & Produtividade' },
  { id: '100', name: 'GoDaddy', url: 'https://www.godaddy.com/pt-br', category: 'IA & Produtividade' },
];
