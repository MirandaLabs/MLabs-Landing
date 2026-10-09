import clbmcsHome from '../assets/images/projects/Clbmcs/Captura de tela 2026-06-09 231511.png';
import clbmcsInnovation from '../assets/images/projects/Clbmcs/Captura de tela 2026-06-09 231557.png';
import clbmcsSpeakers from '../assets/images/projects/Clbmcs/Captura de tela 2026-06-09 231640.png';
import clbmcsLogo from '../assets/images/projects/Clbmcs/clbmcs-logo.png';
import eclipseLanding from '../assets/images/projects/Eclipse/Eclipse_Landing.png';
import eclipseLogo from '../assets/images/projects/Eclipse/logo.png';
import eclipseMetrics from '../assets/images/projects/Eclipse/Metricas-D8OGTDNU.png';
import eclipseSearch from '../assets/images/projects/Eclipse/Pesquisa-C-vGH91r.png';
import nutriproControl from '../assets/images/projects/NutriPro/Controle.png';
import nutriproLanding from '../assets/images/projects/NutriPro/Landing.png';
import nutriproLogo from '../assets/images/projects/NutriPro/Logo.png';
import nutriproSupplements from '../assets/images/projects/NutriPro/Suplementos.png';
import orkestraStock from '../assets/images/projects/Orkestra/Estoque.png';
import orkestraLanding from '../assets/images/projects/Orkestra/Landing_organizador.png';
import orkestraLogo from '../assets/images/projects/Orkestra/Logo.jpeg';
import orkestraMovements from '../assets/images/projects/Orkestra/Movimentacoes.png';

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectModule = {
  title: string;
  description: string;
};

export type ProjectCase = {
  slug: string;
  title: string;
  eyebrow: string;
  type: string;
  status: string;
  cardDescription: string;
  summary: string;
  challenge: string;
  solution: string;
  tags: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
  modules: ProjectModule[];
  stack: string[];
  technical: string[];
  image?: string;
  imageClass?: string;
  fallbackLabel?: string;
  download?: {
    href: string;
    title: string;
    description: string;
    fileLabel: string;
    ctaLabel: string;
  };
  gallery: ProjectGalleryItem[];
};

const darkLogoClass = 'object-contain bg-[var(--ink)] p-4 sm:p-6';
const lightLogoClass = 'object-contain bg-[var(--text)] p-4 sm:p-6';
const eclipseLogoClass = 'object-cover object-center bg-[var(--ink)]';
const nutriproLogoClass = 'object-cover object-center bg-[var(--text)]';

export const projectCases: ProjectCase[] = [
  {
    slug: 'eclipse',
    title: 'Eclipse',
    eyebrow: 'Marketplace com compliance',
    type: 'Produto digital e infraestrutura',
    status: 'Backend estruturado',
    cardDescription:
      'Marketplace com controle 18+, cadastro em etapas, verificação de identidade, pagamentos, chat, moderação e operação administrável.',
    summary:
      'O Eclipse foi estruturado como uma plataforma de classificados com forte camada de segurança, compliance e operação. O trabalho cobre backend NestJS, banco PostgreSQL via Prisma, Redis, storage compatível com S3, BFF no frontend, documentação de rotas, runbooks e monitoramento.',
    challenge:
      'Organizar uma operação sensível em que cadastro, idade, pagamentos, chat, avaliações e moderação precisam funcionar com rastreabilidade e regras claras.',
    solution:
      'A base foi separada em serviços de API, frontend, banco compartilhado e infraestrutura, com endpoints documentados por domínio, guards por perfil, auditoria administrativa e rotinas de deploy/monitoramento.',
    tags: ['NestJS', 'Prisma', 'Next.js', 'Compliance'],
    stats: [
      { label: 'Inventário HTTP', value: '84 endpoints' },
      { label: 'Administração', value: '24 rotas admin' },
      { label: 'Operação', value: '3 rotas técnicas' },
    ],
    modules: [
      {
        title: 'Cadastro e verificação',
        description:
          'Fluxos para cliente e profissional, confirmação de maioridade por CPF, prova de vida e status de verificação.',
      },
      {
        title: 'Pagamentos e assinaturas',
        description:
          'Assinaturas, checkout, webhooks, histórico financeiro e suporte a reembolso pelo painel administrativo.',
      },
      {
        title: 'Busca e perfil público',
        description:
          'Listagem com filtros, cards de perfil, status online/offline, avaliação, verificação e CTA para visualizar o perfil.',
      },
      {
        title: 'Chat e relacionamento',
        description:
          'Conversas entre cliente e profissional, mensagens, leitura, fechamento de negócio e teste de socket em tempo real.',
      },
      {
        title: 'Moderação e auditoria',
        description:
          'Painel admin para usuários, profissionais, reviews, denúncias, mídia, verificações, eventos e logs de auditoria.',
      },
    ],
    stack: ['NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'S3 compatible storage', 'Next.js', 'Docker', 'Terraform'],
    technical: [
      'Separação entre API, frontend, schema Prisma compartilhado e infraestrutura.',
      'BFF no Next.js para autenticação, CSRF, validação de payloads e proxy seguro para a API.',
      'Documentação por visão da aplicação e inventário completo das rotas de produto, admin e operação.',
      'Monitoramento com health checks, métricas, logs e procedimentos de resposta a incidentes.',
    ],
    image: eclipseLogo,
    imageClass: eclipseLogoClass,
    gallery: [
      {
        src: eclipseLanding,
        alt: 'Listagem pública do Eclipse',
        caption: 'Landing/listagem pública com perfis, filtros rápidos, verificação e CTA para visualizar perfil.',
      },
      {
        src: eclipseMetrics,
        alt: 'Dashboard de métricas do Eclipse',
        caption: 'Área logada com visualizações, contatos, taxa de conversão, ranking e ações rápidas do profissional.',
      },
      {
        src: eclipseSearch,
        alt: 'Busca com filtros do Eclipse',
        caption: 'Tela de busca com filtros por categoria, localização, características e faixa de preço.',
      },
    ],
  },
  {
    slug: 'orkestra',
    title: 'Orkestra',
    eyebrow: 'Gestão de eventos',
    type: 'Aplicação web multiportal',
    status: 'Plataforma funcional em validação',
    cardDescription:
      'Plataforma de eventos com venda de ingressos, carteira do participante, PDV, estoque, colaboradores, permissões e analytics financeiros.',
    summary:
      'A aplicação possui landing para cliente e gestor, autenticação por perfil e três áreas operacionais: participante, organizador e operador de PDV.',
    challenge:
      'Centralizar a operação de eventos, conectando ingresso, consumo, saldo, equipe, estoque e visão gerencial sem fragmentar a jornada entre ferramentas diferentes.',
    solution:
      'O produto organiza a experiência em portais específicos: o participante compra ingressos e usa carteira digital, o organizador gerencia eventos e operação, e o operador registra vendas no PDV com permissões controladas.',
    tags: ['React', 'Eventos', 'PDV', 'Analytics'],
    stats: [
      { label: 'Perfis', value: '3 portais' },
      { label: 'Gestão do evento', value: '8 áreas' },
      { label: 'Operação', value: 'PDV + estoque' },
    ],
    modules: [
      {
        title: 'Participante',
        description:
          'Compra de ingressos, carteira integrada, eventos disponíveis, perfil e saldo para consumo durante o evento.',
      },
      {
        title: 'Organizador',
        description:
          'Criação de eventos, próximos eventos, histórico, perfil e painel de detalhe com resumo, analytics, ingressos, estoque e operações.',
      },
      {
        title: 'PDV operador',
        description:
          'Fluxo de venda para equipe operacional, leitura ou digitação do código do participante e baixa de consumo no saldo.',
      },
      {
        title: 'Estoque e tipos de produto',
        description:
          'Cadastro de produtos, movimentações, tipos de produto, alerta de estoque baixo e controle de consumo por evento.',
      },
      {
        title: 'Colaboradores e permissões',
        description:
          'Convite, edição e organização de colaboradores, com página dedicada de funções por evento e permissões nomeadas (como `pdv.sell` e `stock.view`) controlando o acesso a cada área.',
      },
    ],
    stack: ['React', 'TypeScript', 'React Router', 'Recharts', 'Vitest', 'Context API', 'Design system local'],
    technical: [
      'Rotas lazy-loaded e guards para participante, organizador e operador.',
      'Domínio separado para tickets, estoque, movimentações, colaboradores, permissões e finanças.',
      '14 suítes de teste cobrindo autenticação, estoque, permissões, transações, movimentações e colaboradores.',
      'Painel do organizador com 8 sub-áreas por evento: resumo, analytics, ingressos, estoque, tipos de produto, operações, colaboradores e funções.',
    ],
    image: orkestraLogo,
    imageClass: darkLogoClass,
    download: {
      href: '/downloads/checklist-organizacao-eventos-miranda-labs.pdf',
      title: 'Checklist completo para organizar seu evento',
      description:
        'Antes de contratar, veja tudo que o Orkestra foi pensado para cobrir: venda de ingressos, PDV, estoque, equipe, permissões, consumo e visão gerencial. Baixe o PDF para entender melhor a operação que a plataforma entrega.',
      fileLabel: 'Checklist Organização de Eventos Miranda Labs.pdf',
      ctaLabel: 'Baixar checklist em PDF',
    },
    gallery: [
      {
        src: orkestraLanding,
        alt: 'Landing do Orkestra para organizadores',
        caption: 'Landing do organizador apresentando a plataforma de eventos, gestão, PDV, estoque e analytics.',
      },
      {
        src: orkestraStock,
        alt: 'Estoque do evento no Orkestra',
        caption: 'Controle de estoque com status, preço, custo, código, tipo, quantidade e ações por item.',
      },
      {
        src: orkestraMovements,
        alt: 'Livro financeiro de movimentações do Orkestra',
        caption: 'Livro financeiro consolidando entradas, saídas, vendas no PDV e vínculos de estoque do evento.',
      },
    ],
  },
  {
    slug: 'nutripro',
    title: 'NutriPro',
    eyebrow: 'SaaS para nutricionistas',
    type: 'Produto SaaS e arquitetura cloud',
    status: 'Em implantação',
    cardDescription:
      'SaaS multi-tenant para nutricionistas e clínicas, com jornada do paciente, planos alimentares, agenda online, automações no WhatsApp, inventário de suplementos, analytics e infraestrutura pensada para LGPD.',
    summary:
      'O NutriPro foi desenhado como um SaaS para nutricionistas e clínicas, cobrindo a prática completa do profissional: prontuário do paciente, plano alimentar, agenda de consultas, automações de atendimento via WhatsApp e controle de suplementos. A análise técnica prioriza arquitetura multi-tenant, conformidade com LGPD para dados sensíveis de saúde e estratégia de armazenamento separado para arquivos do paciente.',
    challenge:
      'Definir uma base escalável para um produto de saúde que une prontuário, plano alimentar, agenda, automações de atendimento e operação financeira sem transformar infraestrutura em gargalo nem comprometer a conformidade com a LGPD.',
    solution:
      'A proposta consolida web, worker, PostgreSQL, Redis e WhatsApp (WAHA Plus) em um único VPS com Docker e Coolify em São Paulo, move arquivos do paciente para Cloudflare R2 e mantém um caminho claro para migrar do WhatsApp não-oficial para a Cloud API oficial quando o risco operacional justificar.',
    tags: ['Next.js', 'SaaS', 'LGPD', 'WhatsApp'],
    stats: [
      { label: 'Arquitetura', value: 'Multi-tenant' },
      { label: 'Formato', value: 'Assinatura mensal' },
      { label: 'Stack de infra', value: 'VPS + R2 + WAHA' },
    ],
    modules: [
      {
        title: 'Gestão de pacientes',
        description:
          'Perfil único do paciente com histórico, anamnese, evolução de medidas, exames e plano de tratamento centralizados.',
      },
      {
        title: 'Planos alimentares',
        description:
          'Montagem de planos alimentares por refeição e meta calórica, com exportação em PDF e envio direto ao paciente pelo WhatsApp.',
      },
      {
        title: 'Automações no WhatsApp',
        description:
          'Respostas automáticas para dúvidas frequentes (valor e duração da consulta), envio do link de agendamento e lembretes de consulta, com análise explícita do risco de WAHA/NOWEB e alternativa oficial via Cloud API.',
      },
      {
        title: 'Inventário de suplementos',
        description:
          'Controle de itens vendidos no consultório, alertas de validade, estoque baixo, lucratividade por produto e integração financeira.',
      },
      {
        title: 'Analytics do negócio',
        description:
          'Visão gerencial com indicadores como receita do período, pacientes ativos e taxa de adesão ao tratamento.',
      },
      {
        title: 'Agenda',
        description:
          'Agenda semanal em que o paciente marca horários online e o profissional confirma ou ajusta, com bloqueios administrativos para folgas e indisponibilidades.',
      },
      {
        title: 'Infraestrutura multi-tenant',
        description:
          'Arquitetura para múltiplas clínicas, banco relacional, cache, worker assíncrono, storage de arquivos, backups e runbook de restauração.',
      },
    ],
    stack: ['Next.js', 'PostgreSQL', 'Redis', 'WAHA', 'Cloudflare R2', 'Docker', 'Coolify', 'VPS'],
    technical: [
      'Arquitetura consolidada em VPS único em São Paulo com Docker e Coolify, hospedando web, worker, PostgreSQL, Redis e WhatsApp (WAHA Plus) sob a mesma jurisdição LGPD.',
      'Armazenamento de arquivos do paciente em Cloudflare R2, separando blobs do banco relacional para reduzir carga no PostgreSQL e simplificar backups.',
      'Mapeamento de risco LGPD Art. 11 (dados sensíveis de saúde) e dependência de API não-oficial do WhatsApp (WAHA/NOWEB), com rota planejada de migração para a WhatsApp Cloud API oficial.',
      'Multi-tenancy com isolamento de dados por clínica, runbook de backup e restauração documentado e plano de upgrade vertical do VPS conforme a adesão crescer.',
    ],
    image: nutriproLogo,
    imageClass: nutriproLogoClass,
    gallery: [
      {
        src: nutriproLanding,
        alt: 'Fluxo de pacientes do NutriPro',
        caption: 'Conceito de gestão de pacientes com anamnese, bioimpedância, exames, diagnóstico nutricional e plano de tratamento.',
      },
      {
        src: nutriproControl,
        alt: 'Analytics do NutriPro',
        caption: 'Visão gerencial para acompanhar receita, pacientes ativos, adesão e evolução do negócio.',
      },
      {
        src: nutriproSupplements,
        alt: 'Inventário de suplementos do NutriPro',
        caption: 'Controle de suplementos com validade, estoque baixo, lucratividade por produto e integração financeira.',
      },
    ],
  },
  {
    slug: 'clbmcs',
    title: 'CLBMCS',
    eyebrow: 'Evento científico',
    type: 'Portal institucional',
    status: 'Portal em evolução',
    cardDescription:
      'Site do 6º Congresso Luso-Brasileiro de Materiais de Construção Sustentáveis, com programação, inscrição, palestrantes e submissão.',
    summary:
      'O portal apresenta o congresso de 2026 em Fortaleza, organiza conteúdo científico e apoia a jornada de inscrição, submissão e consulta de informações do evento.',
    challenge:
      'Transformar um evento científico com muitas frentes de informação em uma navegação simples para participantes, autores, patrocinadores e comissão organizadora.',
    solution:
      'A estrutura SPA separa rotas para home, área do autor, inscrição, comissões, eixos temáticos, programação, palestrantes, patrocinadores, contato, certificados e minicursos.',
    tags: ['React', 'Vite', 'Evento', 'Conteúdo'],
    stats: [
      { label: 'Palestrantes', value: '11 internacionais' },
      { label: 'Edição', value: '6º congresso' },
      { label: 'Local', value: 'Fortaleza/CE' },
    ],
    modules: [
      {
        title: 'Home institucional',
        description:
          'Apresentação do CLBMCS 2026, chamada para inscrição, seção sobre o congresso, datas importantes e submissão de artigos.',
      },
      {
        title: 'Programação e eixos',
        description:
          'Programação preliminar, linhas temáticas e conteúdos voltados a materiais sustentáveis, inovação e construção civil.',
      },
      {
        title: 'Palestrantes e minicursos',
        description:
          'Lista de especialistas, carrossel de palestrantes, páginas de minicursos e detalhe por instrutor.',
      },
      {
        title: 'Autor e submissão',
        description:
          'Área do autor com instruções de envio, modelo de artigo, limites de submissão e CTA para inscrição.',
      },
      {
        title: 'Patrocínio, certificados e contato',
        description:
          'Páginas para patrocinadores, comissões, certificados, local do evento e canais de contato.',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'CSS Modules', 'Vitest', 'EmailJS', 'axios', 'Embla Carousel'],
    technical: [
      'Rotas organizadas em arquivo dedicado com React Router (12 rotas), com deploy configurado para Vercel e Netlify e fallback SPA.',
      'Dados estruturados para 9 eixos temáticos, 11 palestrantes internacionais (Brasil/Portugal) e tabela de inscrição por categoria e período.',
      'Inscrição e submissão integradas à plataforma Even3, com prazos de envio de resumos até 28/02 e de artigos finais até 31/07/2026.',
      'Formulário de contato via EmailJS, requisições HTTP com axios e carrossel de palestrantes com Embla Carousel.',
    ],
    image: clbmcsLogo,
    imageClass: lightLogoClass,
    gallery: [
      {
        src: clbmcsHome,
        alt: 'Página inicial do CLBMCS 2026',
        caption: 'Home do congresso com navegação, inscrição, submissão e chamada principal do evento.',
      },
      {
        src: clbmcsInnovation,
        alt: 'Seção de inovação e sustentabilidade do CLBMCS',
        caption: 'Recorte editorial com posicionamento sobre inovação, materiais sustentáveis e construção civil.',
      },
      {
        src: clbmcsSpeakers,
        alt: 'Carrossel de palestrantes do CLBMCS',
        caption: 'Área de palestrantes com identidade visual do evento, chamada para perfil e navegação em carrossel.',
      },
    ],
  },
];

export function getProjectBySlug(slug?: string) {
  return projectCases.find((project) => project.slug === slug);
}
