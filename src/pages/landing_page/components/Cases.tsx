import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectCases, type ProjectCase } from '../../../data/projects';

const FEATURED_SLUG = 'eclipse';

function ProjectLogoBadge({ project, size }: { project: ProjectCase; size: 'lg' | 'sm' }) {
  if (!project.image) return null;
  const containerClass =
    size === 'lg'
      ? 'absolute left-5 top-5 z-10 flex h-14 w-40 items-center justify-center rounded-lg border border-white/15 bg-white/95 p-3 shadow-2xl'
      : 'absolute left-4 top-4 z-10 flex h-11 w-32 items-center justify-center rounded-lg border border-white/15 bg-white/95 p-2 shadow-xl';
  const imgClass = size === 'lg' ? 'max-h-9 max-w-32 object-contain' : 'max-h-7 max-w-24 object-contain';
  return (
    <div className={containerClass}>
      <img src={project.image} alt={`Logo ${project.title}`} className={imgClass} loading="lazy" decoding="async" />
    </div>
  );
}

function ProjectVisual({ project, aspect }: { project: ProjectCase; aspect: string }) {
  const visualSrc = project.gallery[0]?.src ?? project.image;
  const visualAlt = project.gallery[0]?.alt ?? project.title;
  return (
    <div className={`relative ${aspect} overflow-hidden bg-[var(--bg)]`}>
      {visualSrc ? (
        <img
          src={visualSrc}
          alt={visualAlt}
          className="h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[var(--panel)]">
          <span className="text-3xl font-bold text-[var(--text)]">{project.fallbackLabel ?? project.title}</span>
        </div>
      )}
    </div>
  );
}

export function Cases() {
  const featured = projectCases.find((p) => p.slug === FEATURED_SLUG) ?? projectCases[0];
  const others = projectCases.filter((p) => p.slug !== featured.slug);

  return (
    <section id="cases" className="scroll-mt-24 bg-[var(--bg)] py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--brand2)]">Portfólio</p>
          <h2 className="mb-4 text-3xl font-bold text-[var(--text)] sm:text-4xl md:text-5xl">
            Projetos em desenvolvimento
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Cada projeto documenta arquitetura, decisões técnicas e o estágio atual — do conceito à entrega.
          </p>
        </div>

        <article className="mb-6 grid overflow-hidden rounded-2xl border border-[var(--muted)]/10 bg-[var(--panel)] shadow-2xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <ProjectVisual project={featured} aspect="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]" />
            <ProjectLogoBadge project={featured} size="lg" />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="mb-4 flex flex-wrap gap-2">
              {featured.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[var(--brand1)]/15 px-2.5 py-1 text-xs font-semibold text-[var(--brand1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              {featured.eyebrow}
            </p>
            <h3 className="text-3xl font-extrabold leading-tight text-[var(--text)] sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {featured.cardDescription}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {featured.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-0 rounded-lg border border-[var(--muted)]/10 bg-[var(--bg)]/70 p-3"
                >
                  <p className="truncate text-lg font-bold text-[var(--text)]" title={stat.value}>
                    {stat.value}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-[var(--muted)]" title={stat.label}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--muted)]/10 pt-5">
              <span className="text-sm font-semibold text-[var(--brand2)]">{featured.status}</span>
              <Link
                to={`/projetos/${featured.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--brand2)]"
                aria-label={`Ver projeto ${featured.title}`}
              >
                Ver projeto
                <ArrowRightIcon size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-2">
          {others.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-[var(--muted)]/10 bg-[var(--panel)] transition-all hover:border-[var(--brand2)]/40 hover:shadow-xl"
            >
              <div className="relative">
                <ProjectVisual project={project} aspect="aspect-[16/9]" />
                <ProjectLogoBadge project={project} size="sm" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[var(--brand1)]/12 px-2 py-0.5 text-xs font-medium text-[var(--brand1)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  {project.eyebrow}
                </p>
                <h3 className="text-2xl font-bold text-[var(--text)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{project.cardDescription}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--muted)]/10 pt-4">
                  <span className="text-xs font-semibold text-[var(--brand2)]">{project.status}</span>
                  <Link
                    to={`/projetos/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--brand2)]"
                    aria-label={`Ver projeto ${project.title}`}
                  >
                    Ver projeto
                    <ArrowRightIcon size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
