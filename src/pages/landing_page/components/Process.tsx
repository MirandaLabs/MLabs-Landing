import { CodeIcon, LayersIcon, RefreshCwIcon, SearchIcon, type LucideIcon } from 'lucide-react';

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Mapeamos o problema, restrições e objetivos antes de qualquer linha de código.',
    icon: SearchIcon,
  },
  {
    number: '02',
    title: 'Design e arquitetura',
    description: 'Definimos escopo, fluxos, dados e a base técnica que vai sustentar a evolução.',
    icon: LayersIcon,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Entregas incrementais com revisão técnica, testes e validação contínua.',
    icon: CodeIcon,
  },
  {
    number: '04',
    title: 'Iteração',
    description: 'Acompanhamento pós-deploy, métricas de uso e ajustes guiados por dados reais.',
    icon: RefreshCwIcon,
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-[var(--bg)] py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--brand2)]">Processo</p>
          <h2 className="mb-4 text-3xl font-bold text-[var(--text)] sm:text-4xl md:text-5xl">
            Como trabalhamos
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Quatro etapas claras do primeiro contato à evolução contínua — para o cliente saber onde está o projeto a qualquer momento.
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="relative flex flex-col rounded-2xl border border-[var(--muted)]/10 bg-[var(--panel)] p-6 transition-colors hover:border-[var(--brand2)]/40"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-5xl font-extrabold leading-none text-[var(--muted)]/25">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand2)]/15 text-[var(--brand2)]">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
