import { budget } from '../../../data/home';

export function Budget() {
  return (
    <section id="orcamento" className="scroll-mt-24 border-t border-soft/15 bg-[var(--panel)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--link)]">Orçamento</p>
          <h2 className="text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl">{budget.title}</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
          <p>{budget.text}</p>
          <p>{budget.formats}</p>
        </div>
      </div>
    </section>
  );
}
