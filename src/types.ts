// Criado - Saulo Prado Versão 1.0 Junho de 2016 Versão 2.0 Março de 2026
export type Category = 
  | 'IA & Produtividade' 
  | 'IA'
  | 'Produtividade'
  | 'Dev'
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

export type DevSubcategory = 'python-data' | 'web-frontend' | 'database' | 'backend' | 'readme';

export interface LinkItem {
  id: string;
  name: string;
  url: string;
  category: Category;
  description?: string;
  isHistorical?: boolean;
  devSubcategory?: DevSubcategory;
}

export interface SocialResponsibilityItem {
  name: string;
  url: string;
  imageUrl?: string;
  description: string;
}
