import { CheckCircleIcon, GaugeIcon, LockKeyholeIcon, WorkflowIcon } from 'lucide-react';
import dashboardEstoque from '../../../assets/images/landing_page/Dashboard_Estoque.png';
import dashboardFinanceiro from '../../../assets/images/landing_page/Dashboard_Financeiro.png';

const capabilities = [
  'Stack completo: React, Node.js, Python, TypeScript, AWS e Docker',
  'Entregas incrementais com escopo claro e validação contínua',
  'Código limpo, versionado, revisável e preparado para manutenção',
  'Design system e componentes reutilizáveis para acelerar evolução',
  'Performance e otimização desde a arquitetura inicial',
  'Segurança, LGPD e boas práticas de infraestrutura',
  'CI/CD e automação de deploys',
  'Monitoramento e analytics integrados',
];

const deliveryPillars = [
  {
    icon: WorkflowIcon,
    title: 'Processo de produto',
    description: 'Descoberta, prototipação, backlog e evolução guiada por uso real.',
  },
  {
    icon: LockKeyholeIcon,
    title: 'Base segura',
    description: 'Validação, controle de acesso, revisão técnica e infraestrutura preparada.',
  },
  {
    icon: GaugeIcon,
    title: 'Operação mensurável',
    description: 'Dashboards, automações e integrações para acompanhar decisões críticas.',
  },
];

export function Capabilities() {
  return <section id="capabilities" className="scroll-mt-24 py-20 sm:py-32 bg-[var(--panel)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[var(--text)]">
              Capacidade técnica com visão de negócio
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8">
              Combinamos engenharia, UX e infraestrutura para entregar sistemas
              que saem do protótipo com base técnica para crescer.
            </p>
            <div className="space-y-4">
              {capabilities.map((capability) => <div key={capability} className="flex items-start space-x-3">
                  <CheckCircleIcon size={24} className="flex-shrink-0 mt-1 text-[var(--ok)]" aria-hidden="true" />
                  <p className="text-[var(--text)] font-medium">{capability}</p>
                </div>)}
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={dashboardFinanceiro}
                alt="Dashboard financeiro criado pela Miranda Labs"
                className="h-full min-h-56 w-full rounded-lg object-cover border border-[var(--muted)]/10"
                loading="lazy"
                decoding="async"
              />
              <img
                src={dashboardEstoque}
                alt="Dashboard de estoque criado pela Miranda Labs"
                className="h-full min-h-56 w-full rounded-lg object-cover border border-[var(--muted)]/10"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {deliveryPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex gap-4 rounded-lg border border-[var(--muted)]/10 bg-[var(--bg)]/70 p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--brand2)]/15 text-[var(--brand2)]">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text)]">{pillar.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
