// Número de WhatsApp já publicado no site (rodapé e página de contato).
export const WHATSAPP_NUMBER = '5571999723105';

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general:
    'Olá, Miranda Labs. Quero conversar sobre um software próprio.\n\nNome:\nEmpresa ou ideia:\nProblema que quero resolver:',
  nutripro:
    'Olá, Miranda Labs. Quero ver uma demonstração do NutriPro.\n\nNome:\nSou nutricionista ou clínica:\nQuantos profissionais atendem:',
} as const;
