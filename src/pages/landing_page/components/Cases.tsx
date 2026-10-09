import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../../utils/imageOptimizer';
import { getProjectBySlug } from '../../../data/projects';
import { projectsSection } from '../../../data/home';

// A home mostra apenas o CLBMCS nesta versão (contrato de escopo, decisão D7).
const FEATURED_SLUG = 'clbmcs';

export function Cases() {
  const project = getProjectBySlug(FEATURED_SLUG);
  if (!project) return null;

  return (
    <section id="projetos" className="scroll-mt-24 bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--brand2)]">Projetos publicados</p>
        <h2 className="mb-12 max-w-3xl text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl md:text-5xl">
          {projectsSection.title}
        </h2>

        <article className="grid overflow-hidden rounded-lg border border-[var(--muted)]/15 bg-[var(--panel)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-[var(--bg)]">
            <OptimizedImage
              src="/images/optimized/assets/projects/clbmcs/home"
              extension="webp"
              alt="Página inicial do portal do CLBMCS 2026"
              width={1600}
              height={860}
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Publicado · Edição 2026</p>
            <h3 className="text-3xl font-extrabold leading-tight text-[var(--text)] sm:text-4xl">{project.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{projectsSection.framing}</p>
            <ul className="mt-6 space-y-2 text-[var(--text)]/90">
              {projectsSection.results.map((result) => (
                <li key={result} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand2)]" aria-hidden="true" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">{projectsSection.role}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={`/projetos/${project.slug}`}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[var(--text)] px-6 py-3 font-semibold text-[var(--bg)] transition-colors hover:bg-[var(--brand2)]"
              >
                Ver projeto
                <ArrowRightIcon size={18} aria-hidden="true" />
              </Link>
              <a
                href={projectsSection.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[var(--muted)]/30 px-6 py-3 font-semibold text-[var(--text)] transition-colors hover:border-[var(--brand2)]"
              >
                Visitar o site publicado
                <ExternalLinkIcon size={16} aria-hidden="true" />
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
