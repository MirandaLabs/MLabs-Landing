import { team } from '../../../data/home';

export function AboutSnippet() {
  return (
    <section id="equipe" className="scroll-mt-24 bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--link)]">Equipe</p>
        <h2 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl md:text-5xl">
          {team.title}
        </h2>
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">{team.lead}</p>

        <ul className="grid gap-px overflow-hidden rounded-lg border border-soft/15 bg-soft/10 md:grid-cols-3">
          {team.members.map((member) => (
            <li key={member.name} className="flex flex-col bg-[var(--panel)] p-6 sm:p-8">
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-link/40 bg-link/10 text-sm font-bold text-[var(--link)]"
                aria-hidden="true"
              >
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[var(--link)]">
                {member.role} · {member.area}
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                <span className="font-semibold text-mineral/90">Decide: </span>
                {member.decision}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{team.note}</p>
      </div>
    </section>
  );
}
