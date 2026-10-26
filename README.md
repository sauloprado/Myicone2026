<p align="center">
<img src="assets/capa.png" alt="Myícone 2026" width="100%">
</p>

<h1 align="center">Myícone 2026</h1>
<p align="center"><i>Releitura moderna e responsiva do clássico portal de atalhos Myícone</i></p>

<p align="center">
<img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=white" alt="React">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/status-conclu%C3%ADdo-2DD4BF?style=flat-square" alt="status: concluído">
</p>

## Sumário

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Páginas](#páginas)
- [Tecnologias](#tecnologias)
- [Como executar](#como-executar)
- [Deploy](#deploy)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Autor](#autor)

## Sobre

O **Myícone** nasceu em 2016 como um portal de atalhos para os sites mais usados da internet brasileira. A versão **2026** é uma releitura completa com **React**, **TypeScript** e **Vite**, mantendo a proposta original: acesso rápido, visual e organizado aos principais serviços da web, em qualquer tela.

## Funcionalidades

- Layout responsivo para celular, tablet e desktop
- Tema claro e escuro com preferência salva no navegador
- Busca de atalhos em tempo real
- Cards com favicon automático a partir do domínio
- Navegação por páginas temáticas e coleções
- Animações suaves de entrada

## Páginas

| Página | Conteúdo |
| --- | --- |
| **Início** | Seleção principal de atalhos da web |
| **IA** | Ferramentas de IA globais e IAs chinesas |
| **Produtividade** | Organização, design e colaboração |
| **Dev** | Referências de Python, frontend, banco de dados, backend e README |
| **Jogos** | Games, plataformas e streaming |
| **Indicadores** | Finanças, clima e serviços úteis |
| **Futebol** | Clubes do Brasil, Europa e seleções |
| **Comunicação** | Jornais do Brasil por estado e portais internacionais |
| **Sobre** | Contexto do projeto |

```mermaid
flowchart LR
    A[constants.ts<br/>atalhos e categorias] --> B[App.tsx]
    B --> C[Busca em tempo real]
    B --> D[Páginas temáticas]
    D --> E[IconCard<br/>favicon automático]
    B --> F[Tema claro / escuro]
```

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 | Interface e componentes |
| TypeScript | Tipagem dos atalhos e componentes |
| Vite 6 | Ambiente de desenvolvimento e build |
| Tailwind CSS (PostCSS) | Estilos utilitários e tema |
| Lucide React | Ícones da interface |
| GitHub Actions | Deploy automático para o GitHub Pages |

## Como executar

Requisitos: **Node.js 20+** e npm ou pnpm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

<details>
<summary>Usando pnpm</summary>

```bash
corepack pnpm install
corepack pnpm dev
```
</details>

## Deploy

```bash
npm run build     # gera a pasta dist/
npm run preview   # confere o build localmente
```

| Destino | Como publicar |
| --- | --- |
| GitHub Pages | Workflow em `.github/workflows/deploy-pages.yml` (fonte de deploy: **GitHub Actions**). O `base` do Vite é ajustado automaticamente para o nome do repositório. |
| Vercel / Netlify | Publicar a pasta `dist/` |
| Hospedagem tradicional | Enviar o conteúdo de `dist/` para `public_html`, `www` ou `htdocs` |

## Estrutura do repositório

```text
Myicone2026/
├── .github/workflows/deploy-pages.yml
├── assets/capa.png
├── src/
│   ├── components/
│   │   ├── IconCard.tsx
│   │   └── ResponsibilityFooter.tsx
│   ├── App.tsx
│   ├── constants.ts
│   ├── types.ts
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Autor

**Saulo Prado** · Analista de Sistemas · Gestão de Ativos de TI, orçamento, automação e dashboards

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Saulo%20Prado-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saulo-prado-ab4a0b96/)
[![GitHub](https://img.shields.io/badge/GitHub-sauloprado-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/sauloprado)
