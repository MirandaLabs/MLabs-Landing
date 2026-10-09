import { facts } from '../../../data/home';

export function Facts() {
  return (
    <section aria-label="Fatos sobre a Miranda Labs" className="border-y border-soft/15 bg-[var(--panel)]">
      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-soft/10 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <li key={fact.title} className="bg-[var(--panel)] px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-lg font-bold text-[var(--text)]">{fact.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{fact.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
