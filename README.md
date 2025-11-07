
## Miranda Labs — Landing Page

Este repositório contém a landing page da Miranda Labs, construída com React + TypeScript, Vite e Tailwind CSS.

Conteúdo principal:

- Página de apresentação (landing page) com seções de hero, serviços, cases e equipe.
- Estrutura organizada em `src/pages/landing_page` com componentes reutilizáveis.

## Tecnologias


# Miranda Labs — Landing Page

Este repositório contém a landing page da Miranda Labs — um site estático construído com React + TypeScript, Vite e Tailwind CSS.

Resumo rápido
- App React com TypeScript e Vite
- Estilizado com Tailwind CSS (plugins: typography, forms)
- Arquivos estáticos em `public/` para favicon/OG (ex.: `/logo_miranda_labs.png`)

Tecnologias
- React 18
- TypeScript
- Vite
- Tailwind CSS (+ plugins `@tailwindcss/typography` e `@tailwindcss/forms`)
- ESLint

Requisitos
- Node.js (recomendado >= 18)
- npm (ou pnpm/yarn — use os comandos equivalentes)

Como rodar (PowerShell)
```powershell
# instalar dependências
npm install

# rodar em desenvolvimento (Vite)
npm run dev

# build para produção
npm run build

# visualizar build localmente
npm run preview
```

Scripts (em `package.json`)
- `dev` — servidor de desenvolvimento (Vite)
- `build` — gera os artefatos de produção (`dist/`)
- `preview` — serve o `dist/` localmente
- `lint` — executa ESLint

Alterações recentes importantes
- Movida a logo para `public/logo_miranda_labs.png` (garante que favicon/OG funcionem em produção).
- Atualizadas meta tags em `index.html` para usar a logo pública como `og:image` e `twitter:image`.
- Configurações do Tailwind atualizadas: paths, `darkMode: 'class'`, paleta de exemplo `mlabs` e plugins habilitados (`typography`, `forms`).
- `postcss.config.js` anotado com sugestão para otimização em produção.
- `tsconfig.node.json` recebeu `types: ["node"]` para melhorar suporte a tipagem em arquivos de build (ex.: `vite.config.ts`).

Estrutura do projeto (resumo)
- `public/` — assets públicos servidos diretamente (favicon, imagens de OG, etc.)
- `src/` — código fonte React/TS
	- `src/pages/landing_page` — componentes e páginas da landing
	- `src/components` — componentes reutilizáveis (Header, Footer, etc.)
	- `src/assets` — imagens e recursos (origem antes de mover para `public/`)

Boas práticas e desenvolvimento
- Ao adicionar classes Tailwind em arquivos `.tsx`, garanta que os caminhos em `tailwind.config.js` cubram esses arquivos (`./src/**/*.{js,ts,jsx,tsx,md,mdx}`).
- Para controlar dark mode via classe, adicione `class="dark"` no elemento `<html>` ou no conteúdo conforme necessidade.
- Considere adicionar `@tailwindcss/typography` no fluxo de estilos para conteúdo rico (blog, docs).

Deploy
- Opções simples: Vercel ou Netlify (deploy automático a partir do repositório GitHub).
- GitHub Pages: é possível criar um workflow de GitHub Actions que roda `npm run build` e publica `dist/` em `gh-pages`.

Contribuições
- Abra issues ou PRs com mudanças. Para mudanças maiores, crie uma branch com um nome descritivo e abra um Pull Request.

Contato
- Repositório mantido por Gabriel. Use o GitHub (issues/PRs) para contato e propostas.

----
Arquivo atualizado com as instruções e mudanças recentes.

