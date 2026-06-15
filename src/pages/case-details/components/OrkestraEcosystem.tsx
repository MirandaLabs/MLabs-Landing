import { EcosystemCard } from './EcosystemCard';

export function OrkestraEcosystem() {
  const platforms = [
    {
      icon: '💻',
      title: 'Plataforma Web',
      description: 'Para organizadores e gestores de eventos',
      features: [
        'Visão 360° do panorama financeiro e contábil',
        'Orçamentação completa desde fase inicial',
        'Sistema de venda de ingressos integrado',
        'Gestão de estoque e inventário',
        'Cadastro e controle de colaboradores',
        'Relatórios e análises em tempo real'
      ]
    },
    {
      icon: '📱',
      title: 'App Administrativo',
      description: 'Para funcionários e colaboradores',
      features: [
        'Ponto eletrônico integrado',
        'Registro automático de carga horária',
        'Sistema de vendas mobile',
        'Gestão de estoque pessoal',
        'Liberação de produtos via QR Code',
        'Sincronização em tempo real'
      ]
    },
    {
      icon: '🎫',
      title: 'App do Cliente',
      description: 'Para o público final dos eventos',
      features: [
        'Compra de ingressos digitais',
        'Calendário de eventos futuros',
        'Carteira virtual recarregável',
        'Pagamentos via QR Code',
        'Histórico de compras',
        'Notificações de eventos'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--text)]">
            Ecossistema Integrado
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto">
            O Orkestra une três plataformas sincronizadas em tempo real, 
            oferecendo uma solução completa do planejamento à execução do evento
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <EcosystemCard
              key={index}
              icon={platform.icon}
              title={platform.title}
              description={platform.description}
              features={platform.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
