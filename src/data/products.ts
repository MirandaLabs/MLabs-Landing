// Conteúdo dos produtos. Todos os textos são propostas a aprovar antes do merge
// (contrato de escopo, decisão D2). Não inclua preço, prazo, garantia, selo de
// conformidade nem funcionalidade que ainda não foi decidida para publicação.
import { whatsappMessages } from './contact';

export type StageId = 'planejamento' | 'desenvolvimento' | 'implantacao';

export type Stage = {
  id: StageId;
  label: string;
  meaning: string;
};

// Legenda única: o selo de cada produto vem daqui.
export const stages: Record<StageId, Stage> = {
  planejamento: {
    id: 'planejamento',
    label: 'Em planejamento',
    meaning: 'Ainda não existe versão para uso. Estamos conversando com quem vive o problema.',
  },
  desenvolvimento: {
    id: 'desenvolvimento',
    label: 'Em desenvolvimento',
    meaning: 'Existe protótipo. Ainda não pode ser usado em uma operação real.',
  },
  implantacao: {
    id: 'implantacao',
    label: 'Em implantação',
    meaning: 'O produto existe e é mostrado em demonstração conduzida por nós. Ainda não há contratação direta.',
  },
};

export type ProductCta = { label: string; message: string };

export type Product = {
  id: 'orkestra' | 'nutripro' | 'gestao-escolar';
  name: string;
  tagline: string;
  audience: string;
  problem: string;
  /** Resumo curto usado no comparativo. */
  problemShort: string;
  stage: StageId;
  /** Linha opcional de áreas cobertas; só quando aprovada. */
  areas?: string;
  note?: string;
  /** Só NutriPro tem CTA nesta entrega; as listas de interesse entram depois. */
  cta?: ProductCta;
  nextStep: string;
};

export const products: Product[] = [
  {
    id: 'orkestra',
    name: 'Orkestra',
    tagline: 'Feche o caixa do evento com a operação inteira conectada.',
    audience: 'Organizadores de eventos pequenos e médios, com equipe temporária.',
    problem: 'Resultado financeiro incerto, estoque divergente e operação espalhada em planilhas e grupos de mensagem.',
    problemShort: 'Resultado financeiro incerto',
    stage: 'desenvolvimento',
    nextStep: 'Ainda não disponível para contratação',
  },
  {
    id: 'nutripro',
    name: 'NutriPro',
    tagline: 'A rotina clínica, do paciente ao financeiro, em um só lugar.',
    audience: 'Nutricionistas e clínicas.',
    problem: 'Prontuário, agenda, mensagens e financeiro em ferramentas separadas.',
    problemShort: 'Rotina espalhada em ferramentas',
    stage: 'implantacao',
    areas: 'Pacientes, planos alimentares, agenda, WhatsApp e financeiro.',
    cta: { label: 'Pedir demonstração', message: whatsappMessages.nutripro },
    nextStep: 'Pedir demonstração',
  },
  {
    id: 'gestao-escolar',
    name: 'Gestão escolar',
    tagline: 'Mensalidade, aula e avisos da pequena escola em um só lugar.',
    audience: 'Escolas particulares pequenas (hipótese em validação).',
    problem: 'Cobrança conferida à mão e comunicação com as famílias por WhatsApp.',
    problemShort: 'Cobrança e avisos conferidos à mão',
    stage: 'planejamento',
    note: 'Estamos buscando escolas parceiras para validar o produto.',
    nextStep: 'Ainda não disponível para contratação',
  },
];

export const billingNote = 'Os produtos funcionam por assinatura mensal, com hospedagem e suporte incluídos.';
