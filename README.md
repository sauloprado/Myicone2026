<!-- Criado - Saulo Prado Versão 1.0 Junho de 2016 Versão 2.0 Março de 2026 -->
# Myícone Moderno

Releitura moderna e responsiva do clássico portal "Myícone", com foco em atalhos úteis da internet brasileira.

## Visão geral

O projeto organiza links populares em uma interface visual rápida e adaptada para desktop, tablet e celular. A aplicação foi modernizada com React, TypeScript e Vite, mantendo a proposta original de facilitar o acesso aos principais serviços da web.

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite 6
- Lucide React
- Tailwind CSS com build local via PostCSS

## Funcionalidades implementadas

- Layout responsivo para mobile, tablet e desktop
- Tema claro e escuro com persistência local
- Busca em tempo real
- Cards com favicon automático por domínio
- Navegação por páginas internas
- Animações suaves de entrada
- Organização por categorias e coleções específicas

## Estrutura de páginas

- `Início`: seleção principal de atalhos da web
- `IA`: ferramentas de IA globais e IAs chinesas
- `Produtividade`: plataformas de organização, design e colaboração
- `Dev`: referências para Python, frontend, banco de dados, backend e README
- `Jogos`: games, plataformas e streaming
- `Indicadores`: finanças, clima e serviços úteis
- `Futebol`: clubes do Brasil, Europa e seleções
- `Comunicação`: jornais do Brasil por estado e portais internacionais
- `Sobre`: contexto institucional do projeto

## Requisitos

- Node.js 20 ou superior
- npm ou pnpm

## Como rodar localmente

### Com npm

```bash
npm install
npm run dev
```

### Com pnpm

```bash
corepack pnpm install
corepack pnpm dev
```

Depois, abra no navegador:

```text
http://localhost:3000
```

## Build de produção

### Com npm

```bash
npm run build
npm run preview
```

### Com pnpm

```bash
corepack pnpm build
corepack pnpm preview
```

O build final é gerado na pasta `dist/`.

## Publicação

### Vercel ou Netlify

Publique a pasta `dist/`.

### Hospedagem tradicional

Envie o conteúdo de `dist/` para a pasta pública do servidor, como `public_html`, `www` ou `htdocs`.

Se a publicação for feita em subpasta, ajuste a opção `base` no `vite.config.ts` antes de gerar o build.

## Git

Inicialização rápida:

```bash
git init
git add .
git commit -m "Initial commit: Myicone Moderno"
git branch -M main
git remote add origin https://github.com/sauloprado/Myicone---2026.git
git push -u origin main
```

## Observações

- O servidor de desenvolvimento está configurado para usar a porta `3000`
- O projeto usa Tailwind com `tailwind.config.js`, `postcss.config.js` e `index.css`
- O favicon dos cards é carregado automaticamente a partir do domínio de cada link
- O build de produção gera `dist/`, não `build/`
