export type Category = 
  | 'IA & Produtividade' 
  | 'Redes Sociais' 
  | 'Shopping & Varejo' 
  | 'Streaming & Vídeo' 
  | 'Notícias & Portais' 
  | 'Bancos & Finanças' 
  | 'Governo & Serviços' 
  | 'Educação & Trabalho' 
  | 'Ferramentas'
  | 'Games'
  | 'Indicadores'
  | 'Futebol'
  | 'Comunicação';

export interface LinkItem {
  id: string;
  name: string;
  url: string;
  category: Category;
  description?: string; // Short description for search or display
  isHistorical?: boolean;
}

export interface SocialResponsibilityItem {
  name: string;
  url: string;
  imageUrl?: string;
  description: string;
}