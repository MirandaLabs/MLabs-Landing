import { LinkedinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SEO } from '../../components/SEO';
import teamData from '@/data/team.json';

type TeamMember = {
  name: string;
  initials: string;
  role: 'CEO' | 'CTO' | 'COO';
  bio: string;
  linkedin?: string;
  specialties: string[];
};

const team = teamData as TeamMember[];

const roleColor: Record<TeamMember['role'], string> = {
  CEO: 'var(--brand1)',
  CTO: 'var(--brand2)',
  COO: 'var(--brand3)',
};

function MemberAvatar({ member }: { member: TeamMember }) {
  const color = roleColor[member.role];
  return (
    <div
      className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${color} 0%, color-mix(in srgb, ${color} 70%, #000) 100%)`,
      }}
      aria-hidden="true"
    >
      {member.initials}
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO
        title="Sobre nós | Miranda Labs"
        description="Conheça a equipe da Miranda Labs e sua atuação em software sob medida, dados, infraestrutura, produto digital e segurança."
        canonical="https://www.mirandalabs.com.br/about"
        keywords="miranda labs, equipe, sócios, engenharia de software, desenvolvimento de sistemas Brasil"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Sobre a Miranda Labs',
          url: 'https://www.mirandalabs.com.br/about',
          about: {
            '@type': 'Organization',
            name: 'Miranda Labs',
            url: 'https://www.mirandalabs.com.br',
            employee: team.map((member) => ({
              '@type': 'Person',
              name: member.name,
              jobTitle: member.role,
              ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
            })),
          },
        }}
      />
      <Header />
      <main id="main-content" className="pt-24 pb-16">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--brand2)]">Quem somos</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Engenharia séria, conversa direta, entrega previsível.
          </h1>
          <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed max-w-3xl">
            A Miranda Labs nasceu em 2025 com foco em desenvolvimento de software sob medida.
            Somos três sócios em engenharia, atuando juntos do diagnóstico ao deploy, com
            base técnica para sustentar produtos do MVP ao sistema de gestão completo.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Os sócios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <article
                key={member.name}
                className="flex flex-col rounded-2xl border border-[var(--muted)]/15 bg-[var(--panel)] p-6"
              >
                <div className="flex items-center gap-4">
                  <MemberAvatar member={member} />
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold truncate">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[var(--brand2)]">{member.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-[var(--muted)] leading-relaxed text-sm">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--brand2)]"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <LinkedinIcon size={16} aria-hidden="true" />
                    LinkedIn
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-[var(--muted)]/15 bg-[var(--panel)] p-6"
              >
                <h3 className="text-lg font-semibold mb-4">{member.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md bg-[var(--bg)]/70 border border-[var(--muted)]/15 px-2.5 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="rounded-2xl border border-[var(--muted)]/15 bg-[var(--panel)] p-8 sm:p-10">
            <h2 className="text-2xl font-bold mb-3">Nossa atuação</h2>
            <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed">
              Combinamos alto nível técnico com proximidade na comunicação. Entregamos sistemas
              práticos e completos que cobrem todas as áreas organizacionais de um negócio, e
              mantemos excelência em padrões de segurança e infraestrutura exigidos pelo ambiente
              online. A ideia é simples: tirar planos do abstrato e colocar produto no ar.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contato"
                className="inline-flex justify-center rounded-lg bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
              >
                Solicitar orçamento
              </Link>
              <Link
                to="/#cases"
                className="inline-flex justify-center rounded-lg border border-[var(--muted)]/30 px-6 py-3 font-semibold text-[var(--text)] transition-colors hover:border-[var(--brand2)] hover:bg-[var(--brand2)]/5"
              >
                Ver projetos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
