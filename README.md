<!-- Criado - Saulo Prado Versão 1.0 Junho de 2016 Versão 2.0 Março de 2026 -->
# Myícone Moderno

Releitura moderna e responsiva do clássico portal "Myícone", com foco em atalhos úteis da internet brasileira.

## Tecnologias

- React 19
- TypeScript
- Vite 6
- Lucide React
- Tailwind CSS via CDN (configurado no `index.html`)

## Funcionalidades

- Layout responsivo (mobile, tablet e desktop)
- Tema claro/escuro
- Busca em tempo real
- Navegação por páginas: Início, Jogos, Indicadores, Futebol, Comunicação e Sobre
- Cards com favicon automático por domínio

## Requisitos

- Node.js 20+ (recomendado)
- pnpm (via Corepack) ou npm

## Rodando localmente

1. Instale as dependências:

```bash
corepack pnpm install
```

2. Inicie o servidor de desenvolvimento:

```bash
corepack pnpm dev
```

3. Abra no navegador:

```text
http://localhost:3000
```

## Build de produção

```bash
corepack pnpm build
```

Os arquivos finais serão gerados em `dist/`.

## Preview local do build

```bash
corepack pnpm preview
```

## Deploy

- Vercel/Netlify: publicar o diretório `dist/`
- Hospedagem tradicional (cPanel etc.): enviar o conteúdo de `dist/` para a pasta pública do site

