
## Miranda Labs — Landing Page

Este repositório contém a landing page da Miranda Labs, construída com React + TypeScript, Vite e Tailwind CSS.

Conteúdo principal:

- Página de apresentação (landing page) com seções de hero, serviços, cases e equipe.
- Estrutura organizada em `src/pages/landing_page` com componentes reutilizáveis.

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## Requisitos

- Node.js (recomendado >= 18)
- npm (ou pnpm/yarn, ajuste os comandos conforme sua preferência)

## Como rodar (PowerShell)

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

Os scripts disponíveis no `package.json` são:

- `dev` — inicia o servidor de desenvolvimento (vite)
- `build` — gera os artefatos de produção
- `preview` — serve a pasta `dist` para pré-visualização
- `lint` — executa o ESLint no projeto

## Estrutura do projeto (resumo)

- `src/landing_page` — app e componentes principais da landing page
- `src/components` — componentes compartilhados (Header, Footer, etc.)
- `src/assets` — imagens e recursos estáticos
- `src/pages` — páginas do site (about, contact, specialties, landing_page)

## Desenvolvimento

- Para adicionar novos componentes, crie arquivos em `src/components` e exporte-os onde necessário.
- Siga as convenções de TypeScript e as regras de lint configuradas.

## Próximos passos sugeridos

- Adicionar um script de testes unitários (por exemplo, com Vitest).
- Incluir instruções de CI (GitHub Actions) para lint e build.



README atualizado automaticamente.

