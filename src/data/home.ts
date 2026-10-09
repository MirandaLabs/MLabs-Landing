// Conteúdo da home. Todos os textos são propostas a aprovar antes do merge
// (contrato de escopo, decisão D2). Não inclua preço, faixa, taxa, prazo numérico
// de garantia, prazo médio de projeto, nem promessa geral de propriedade do código.

export const hero = {
  eyebrow: 'SOFTWARE SOB MEDIDA · PRODUTOS DIGITAIS',
  title: 'Software sob medida para a sua operação.',
  description:
    'Criamos sistemas de gestão, CRM, automações e plataformas web para pequenas empresas e para quem quer transformar uma ideia ou processo em software próprio. Projetos publicados, com o que é entregue definido em contrato.',
  primaryCta: 'Explicar meu projeto no WhatsApp',
  secondaryCta: 'Ver projetos publicados',
  trustLine: 'Código-fonte, documentação, testes, deploy e suporte definidos em contrato.',
};

export const facts = [
  { title: '3 sócios', text: 'à frente da empresa, cada um com sua área' },
  { title: 'Projetos publicados', text: 'que você pode abrir e conferir no ar' },
  { title: '3 produtos próprios', text: 'cada um com o estágio informado' },
  { title: 'Entrega completa', text: 'código, documentação e deploy no mesmo projeto' },
];

export const problems = {
  title: 'Quando a operação cresce, improviso vira custo.',
  items: [
    {
      title: 'Processo espalhado',
      description: 'Planilhas, mensagens e retrabalho sem uma fonte única.',
      example: 'Exemplos: orçamento, CRM, automação de loja.',
    },
    {
      title: 'Produto ainda no papel',
      description: 'Ideia sem protótipo, escopo ou caminho de validação.',
      example: '',
    },
    {
      title: 'Sistema que não acompanha',
      description: 'Operação presa em ferramentas genéricas ou integrações frágeis.',
      example: 'Exemplo: atendimento por WhatsApp integrado ao sistema.',
    },
  ],
  closing: 'Nós entendemos a regra do negócio, definimos o que precisa existir e construímos a solução.',
};

export const processSection = {
  title: 'Um sistema desenhado a partir da sua operação.',
  steps: [
    { number: '01', title: 'Entender', deliverable: 'Diagnóstico e mapa do problema.' },
    { number: '02', title: 'Definir', deliverable: 'Escopo, protótipo e proposta.' },
    { number: '03', title: 'Construir', deliverable: 'Entregas que você consegue ver e testar, com testes e documentação.' },
    { number: '04', title: 'Operar', deliverable: 'Deploy, garantia e suporte, conforme o formato do projeto.' },
  ],
};

export const conversationBand = {
  text: 'Tem um processo ou uma ideia? Conte em duas mensagens.',
  cta: 'Conversar no WhatsApp',
};

export const projectsSection = {
  title: 'Sistemas em uso, com contexto e interfaces reais.',
  framing: 'Portal institucional e operacional de um congresso internacional.',
  results: [
    'Programação e conteúdo do evento.',
    'Inscrição e datas importantes.',
    'Palestrantes, minicursos, autores e certificados.',
  ],
  role: 'Site desenvolvido pela Miranda Labs, o que consta do rodapé do próprio portal.',
  siteUrl: 'https://www.clbmcs2026.com.br/',
};

export const productsSection = {
  title: 'Produtos criados a partir de operações que conhecemos de perto.',
  description:
    'Soluções por assinatura para eventos, nutrição e gestão escolar, cada uma em um estágio transparente de desenvolvimento.',
};

export const team = {
  title: 'Quem está à frente da empresa',
  lead: 'À frente da empresa, cada sócio atua em sua área.',
  members: [
    {
      name: 'Arthur Miranda',
      initials: 'AM',
      role: 'CEO',
      area: 'Backend',
      decision: 'Regras de negócio, APIs, integrações e validações.',
    },
    {
      name: 'Gabriel Miranda',
      initials: 'GM',
      role: 'CTO',
      area: 'Dados',
      decision: 'Modelagem e armazenamento de dados, infraestrutura e relatórios.',
    },
    {
      name: 'Gabriel São Pedro',
      initials: 'GS',
      role: 'COO',
      area: 'Front-end e UI/UX',
      decision: 'Interface, experiência de uso, responsividade e acessibilidade.',
    },
  ],
  note: 'Especialistas externos entram quando o projeto exige uma competência adicional.',
};

export const budget = {
  title: 'Cada projeto recebe uma proposta sob medida.',
  text: 'O valor depende do problema, das integrações e do nível de operação necessário. A primeira conversa serve para verificar aderência; depois dela, enviamos uma proposta com escopo e investimento.',
  formats:
    'Em alguns projetos, o sistema é seu e não há mensalidade. Em outros, nós mantemos o sistema, e a proposta inclui uma mensalidade com hospedagem e suporte. A proposta diz qual é o formato do seu caso.',
};

export const faq = {
  title: 'Perguntas frequentes',
  items: [
    {
      question: 'Quanto custa desenvolver um software próprio?',
      answer: 'Cada projeto recebe uma proposta própria, enviada depois da primeira conversa.',
    },
    {
      question: 'Eu preciso chegar com o escopo pronto?',
      answer:
        'Não. Na primeira conversa e no diagnóstico, ajudamos a definir o que o sistema precisa fazer e o que entra na primeira versão.',
    },
    {
      question: 'Como funciona o suporte depois da entrega?',
      answer:
        'Corrigimos os defeitos causados por nós por um prazo definido em contrato. Outras demandas são tratadas mediante contrato. Nas assinaturas, o suporte está incluído na mensalidade.',
    },
    {
      question: 'Quem paga a hospedagem?',
      answer:
        'Nas assinaturas, a hospedagem está incluída na mensalidade. Nos projetos em que o sistema é seu, a hospedagem é paga por você, à parte. A proposta informa o formato do seu caso.',
    },
  ],
};

export const closing = {
  title: 'Conte o que hoje limita sua operação.',
  text: 'Em uma primeira conversa, verificamos se o problema faz sentido para software e qual seria o próximo passo.',
  cta: 'Conversar no WhatsApp',
};
