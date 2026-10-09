import { processSection } from '../../../data/home';

export function Process() {
  return (
    <section id="software-sob-medida" className="scroll-mt-24 border-t border-soft/15 bg-[var(--panel)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--link)]">Software sob medida</p>
        <h2 className="mb-12 max-w-3xl text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl md:text-5xl">
          {processSection.title}
        </h2>

        <ol
          id="como-trabalhamos"
          className="grid scroll-mt-24 gap-px overflow-hidden rounded-lg border border-soft/15 bg-soft/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSection.steps.map((step) => (
            <li key={step.number} className="flex flex-col bg-[var(--bg)] p-6 sm:p-8">
              <span className="mb-4 text-4xl font-extrabold leading-none text-soft/30" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="mb-2 text-xl font-bold text-[var(--text)]">{step.title}</h3>
              <p className="leading-relaxed text-[var(--muted)]">{step.deliverable}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
