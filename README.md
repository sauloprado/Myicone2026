# Myícone Moderno

Este projeto é uma releitura moderna e responsiva do clássico portal "Myícone", desenvolvida com tecnologias atuais de web design.

## 🚀 Tecnologias Utilizadas

*   **React 18+**: Biblioteca JavaScript para construção da interface.
*   **Tailwind CSS**: Framework de estilização utilitária (responsividade e modo escuro).
*   **Lucide React**: Biblioteca de ícones vetoriais modernos.
*   **TypeScript**: Para tipagem estática e segurança do código.

## ✨ Funcionalidades Implementadas

1.  **Design Moderno & Responsivo**: Funciona perfeitamente em celulares, tablets e PCs.
2.  **Modo Escuro (Dark Mode)**: Alternância entre tema claro e escuro.
3.  **Busca em Tempo Real**: Filtre sites, jogos ou times instantaneamente enquanto digita.
4.  **Categorias Dinâmicas**: Filtros por "IA", "Redes Sociais", "Streaming", etc., na página inicial.
5.  **Animações**: Efeitos de fade-in (aparecimento suave) ao carregar os ícones.
6.  **Páginas Específicas**:
    *   **Início**: Top 100 sites mais acessados.
    *   **Jogos**: Links para plataformas de games e streaming.
    *   **Indicadores**: Finanças, clima e ferramentas úteis.
    *   **Futebol**: Links dos times do Brasileirão, Champions League e Seleções.
    *   **Comunicação**: Jornais e portais de notícias divididos por estado.
    *   **Sobre**: Informações institucionais e missão do projeto.
7.  **Favicons Automáticos**: Os ícones dos sites são puxados automaticamente do Google Favicons.

## 📦 Como Baixar e Publicar (Guia Passo a Passo)

Siga estes passos para colocar seu site no ar em uma hospedagem.

### 1. Preparação
Certifique-se de ter o **Node.js** instalado no seu computador.

### 2. Instalação Local
1.  Crie uma pasta para o projeto.
2.  Coloque todos os arquivos (`index.tsx`, `App.tsx`, `constants.ts`, etc.) dentro dela.
3.  Crie um arquivo `package.json` na raiz com o seguinte conteúdo:
    ```json
    {
      "name": "myicone",
      "version": "1.0.0",
      "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "lucide-react": "^0.263.1",
        "react-scripts": "5.0.1",
        "typescript": "^4.9.5",
        "@types/node": "^16.18.38",
        "@types/react": "^18.2.15",
        "@types/react-dom": "^18.2.7"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build"
      },
      "browserslist": {
        "production": [">0.2%", "not dead", "not op_mini all"],
        "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
      }
    }
    ```
4.  Abra o terminal na pasta e rode:
    ```bash
    npm install
    ```

### 3. Gerar Versão Final (Build)
Para criar a versão otimizada para internet, rode no terminal:
```bash
npm run build
```
Isso criará uma pasta chamada `build`.

### 4. Publicar na Hospedagem
*   **Hospedagem Gratuita (Vercel/Netlify)**: Arraste a pasta `build` para o site deles.
*   **Hospedagem Paga (cPanel/Hostgator/etc)**:
    1.  Acesse o Gerenciador de Arquivos.
    2.  Vá para a pasta `public_html`.
    3.  Faça o upload do **conteúdo** da pasta `build` (arquivos index.html, pasta static, etc).

---

**Histórico de Desenvolvimento**: Criado via assistência de IA, focado em ajudar as pessoas a encontrar o melhor da internet de forma rápida e segura.
