import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircle2Icon,
  DownloadIcon,
  FileTextIcon,
  Layers3Icon,
  ShieldCheckIcon,
  TargetIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SEO } from '../../components/SEO';
import { getProjectBySlug } from '../../data/projects';
import { OrkestraPreRegister } from './components/OrkestraPreRegister';

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const galleryLength = project?.gallery.length ?? 0;
  const activeImage = project && activeImageIndex !== null ? project.gallery[activeImageIndex] : null;

  useEffect(() => {
    setActiveImageIndex(null);
  }, [slug]);

  useEffect(() => {
    if (!activeImage || galleryLength === 0) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImageIndex(null);
      }
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) => current === null ? current : (current - 1 + galleryLength) % galleryLength);
      }
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => current === null ? current : (current + 1) % galleryLength);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage, galleryLength]);

  const showPreviousImage = () => {
    setActiveImageIndex((current) => current === null ? current : (current - 1 + galleryLength) % galleryLength);
  };

  const showNextImage = () => {
    setActiveImageIndex((current) => current === null ? current : (current + 1) % galleryLength);
  };

  if (!project) {
    return <Navigate to="/#cases" replace />;
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO
        title={`${project.title} | Projeto Miranda Labs`}
        description={project.cardDescription}
        canonical={`https://www.mirandalabs.com.br/projetos/${project.slug}`}
        keywords={[
          project.title,
          project.eyebrow,
          ...project.tags,
          'Miranda Labs',
          'desenvolvimento de sistemas',
        ].join(', ')}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: project.title,
            description: project.cardDescription,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            url: `https://www.mirandalabs.com.br/projetos/${project.slug}`,
            producer: {
              '@type': 'Organization',
              name: 'Miranda Labs',
              url: 'https://www.mirandalabs.com.br',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: 'https://www.mirandalabs.com.br/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Projetos',
                item: 'https://www.mirandalabs.com.br/#cases',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: project.title,
                item: `https://www.mirandalabs.com.br/projetos/${project.slug}`,
              },
            ],
          },
        ]}
      />
      <Header />
      <main id="main-content" className="pt-24">
        <section className="bg-[var(--panel)] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/#cases"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand2)] transition-colors hover:text-[var(--text)]"
            >
              <ArrowLeftIcon size={16} aria-hidden="true" />
              Voltar aos projetos
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-5 flex flex-wrap gap-3">
                  <span className="rounded-lg bg-[var(--brand2)]/15 px-3 py-1 text-sm font-semibold text-[var(--brand2)]">
                    {project.eyebrow}
                  </span>
                  <span className="rounded-lg bg-[var(--brand1)]/15 px-3 py-1 text-sm font-semibold text-[var(--brand1)]">
                    {project.status}
                  </span>
                </div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
                  {project.type}
                </p>
                <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  {project.summary}
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-[var(--muted)]/10 bg-[var(--bg)]/70 p-4">
                      <p className="text-2xl font-bold text-[var(--text)]">{stat.value}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-[var(--muted)]/10 bg-[var(--bg)] shadow-2xl">
                {project.image ? (
                  <div className="aspect-[16/10] min-h-72">
                    <img
                      src={project.image}
                      alt={`Imagem do projeto ${project.title}`}
                      className={`h-full w-full ${project.imageClass ?? 'object-cover'}`}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ) : (
                  <div className="flex min-h-72 items-center justify-center bg-[var(--panel)] p-8">
                    <span className="text-4xl font-bold">{project.fallbackLabel ?? project.title}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {project.slug === 'orkestra' && <OrkestraPreRegister />}

        {project.download && (
          <section className="bg-[var(--bg)] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 rounded-lg border border-[var(--brand2)]/20 bg-[var(--panel)] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--brand2)]/15 text-[var(--brand2)]">
                    <FileTextIcon size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
                      Material para download
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-[var(--text)] sm:text-3xl">
                      {project.download.title}
                    </h2>
                    <p className="mt-4 max-w-3xl leading-relaxed text-[var(--muted)]">
                      {project.download.description}
                    </p>
                    
                  </div>
                </div>
                <a
                  href={project.download.href}
                  download
                  type="application/pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
                >
                  {project.download.ctaLabel}
                  <DownloadIcon size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
        )}

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <div className="rounded-lg border border-[var(--muted)]/10 bg-[var(--panel)] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand3)]/15 text-[var(--brand3)]">
                <TargetIcon size={22} aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold">Desafio</h2>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{project.challenge}</p>
            </div>
            <div className="rounded-lg border border-[var(--muted)]/10 bg-[var(--panel)] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand2)]/15 text-[var(--brand2)]">
                <ShieldCheckIcon size={22} aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold">Solução</h2>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">{project.solution}</p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--panel)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand1)]/15 text-[var(--brand1)]">
                <Layers3Icon size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">Escopo</p>
                <h2 className="text-3xl font-bold">Módulos do projeto</h2>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {project.modules.map((module) => (
                <article key={module.title} className="rounded-lg border border-[var(--muted)]/10 bg-[var(--bg)]/70 p-6">
                  <h3 className="text-lg font-bold text-[var(--text)]">{module.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--muted)]">{module.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">Stack</p>
              <h2 className="mt-2 text-3xl font-bold">Base técnica</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-lg bg-[var(--brand1)]/15 px-3 py-2 text-sm font-semibold text-[var(--brand1)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {project.technical.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-[var(--muted)]/10 bg-[var(--panel)] p-5">
                  <CheckCircle2Icon size={22} className="mt-1 flex-shrink-0 text-[var(--ok)]" aria-hidden="true" />
                  <p className="leading-relaxed text-[var(--muted)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {project.gallery.length > 0 && (
          <section className="bg-[var(--panel)] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">Imagens</p>
              <h2 className="mt-2 text-3xl font-bold">Recortes do projeto</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {project.gallery.map((item, index) => (
                  <figure key={item.caption} className="overflow-hidden rounded-lg border border-[var(--muted)]/10 bg-[var(--bg)]">
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className="group block w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand2)]/60"
                      aria-label={`Ampliar imagem: ${item.alt}`}
                    >
                      <span className="block aspect-video overflow-hidden bg-[var(--bg)]">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    </button>
                    <figcaption className="p-4 text-sm leading-relaxed text-[var(--muted)]">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 rounded-lg border border-[var(--muted)]/10 bg-[var(--panel)] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">Próximo passo</p>
                <h2 className="mt-2 text-2xl font-bold">Quer um projeto com esse nível de clareza?</h2>
              </div>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
              >
                Solicitar orçamento
                <ArrowRightIcon size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      {activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ${activeImageIndex === null ? 1 : activeImageIndex + 1} de ${galleryLength}`}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setActiveImageIndex(null)}
            aria-label="Fechar imagem ampliada"
          />
          <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-lg bg-[#2c2c31] shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              className="absolute right-3 top-3 z-20 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Fechar
            </button>
            <div className="grid lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="flex min-h-72 items-center justify-center bg-black/45">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-h-[76vh] w-full object-contain"
                  decoding="async"
                />
              </div>
              <aside className="flex flex-col justify-end p-6 text-white">
                <p className="text-sm text-white/60">
                  {(activeImageIndex ?? 0) + 1} / {galleryLength}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{activeImage.alt}</h3>
                <p className="mt-3 leading-relaxed text-white/80">{activeImage.caption}</p>
              </aside>
            </div>
            {galleryLength > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeftIcon size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 lg:right-[332px]"
                  aria-label="Próxima imagem"
                >
                  <ChevronRightIcon size={22} aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
