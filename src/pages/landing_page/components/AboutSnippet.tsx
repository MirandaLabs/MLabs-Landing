import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamData from '@/data/team.json';

type Role = 'CEO' | 'CTO' | 'COO';
type Member = { name: string; initials: string; role: Role; bio: string };

const team = teamData as Member[];

const roleColor: Record<Role, string> = {
  CEO: 'var(--brand1)',
  CTO: 'var(--brand2)',
  COO: 'var(--brand3)',
};

const roleLine: Record<Role, string> = {
  CEO: 'Comunicação com o cliente, dados e backend.',
  CTO: 'Banco de dados, infraestrutura e arquitetura.',
  COO: 'Front-end, mobile, design e experiência.',
};

export function AboutSnippet() {
  return (
    <section className="bg-[var(--panel)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--brand2)]">Quem está por trás</p>
            <h2 className="mb-4 text-3xl font-bold text-[var(--text)] sm:text-4xl">
              Três sócios, uma equipe técnica
            </h2>
            <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
              Empresa fundada em 2025 por três engenheiros baianos. Cada projeto é
              conduzido em conjunto pelas três áreas: produto, infraestrutura e experiência.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--brand2)]"
            >
              Conheça nossa história
              <ArrowRightIcon size={16} aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-3">
            {team.map((member) => {
              const color = roleColor[member.role];
              return (
                <li
                  key={member.name}
                  className="flex flex-col items-start rounded-2xl border border-[var(--muted)]/15 bg-[var(--bg)]/70 p-5"
                >
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${color} 0%, color-mix(in srgb, ${color} 70%, #000) 100%)`,
                    }}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                  <p className="text-base font-semibold text-[var(--text)]">{member.name}</p>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-[var(--brand2)]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{roleLine[member.role]}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
