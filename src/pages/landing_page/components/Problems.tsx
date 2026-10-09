import { problems } from '../../../data/home';

export function Problems() {
  return (
    <section id="problemas" className="scroll-mt-24 bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 max-w-3xl text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl md:text-5xl">
          {problems.title}
        </h2>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-[var(--muted)]/15 bg-[var(--muted)]/10 md:grid-cols-3">
          {problems.items.map((item, index) => (
            <li key={item.title} className="flex flex-col bg-[var(--panel)] p-6 sm:p-8">
              <span className="mb-4 text-sm font-semibold tracking-widest text-[var(--brand2)]" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-3 text-xl font-bold text-[var(--text)]">{item.title}</h3>
              <p className="leading-relaxed text-[var(--muted)]">{item.description}</p>
              {item.example && <p className="mt-4 text-sm leading-relaxed text-[var(--text)]/80">{item.example}</p>}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[var(--text)]">{problems.closing}</p>
      </div>
    </section>
  );
}
