import { useEffect, useMemo, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CheckCircleIcon } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OrkestraEcosystem } from './components/OrkestraEcosystem';
import casesData from '@/data/cases.json';

type CaseData = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  tags: string[];
  results: string;
  image: string;
  website?: string;
  challenge: string;
  solution: string;
  technologies: Array<{
    name: string;
    description: string;
  }>;
  features: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
  gallery: string[];
};

// Mapeia todos os assets de imagens dentro de src para URLs finais do Vite
// as: 'url' faz com que o valor seja a URL pública gerada pelo bundler
// Tipagem auxiliar para glob (Vite adiciona em tempo de build)
const imageModules: Record<string, string> = (import.meta as any).glob(
  '/src/assets/images/**/*',
  { eager: true, as: 'url' }
);

function resolveImageUrl(input: string): string {
  // 1) URLs absolutas (http/https)
  if (/^https?:\/\//i.test(input)) return input;

  // 2) Tenta resolver por nome de arquivo dentro de src/assets/images/**/*
  const filename = input.split('/').pop() || input;
  const match = Object.entries(imageModules).find(([path]) => path.endsWith(filename));
  if (match) return match[1];

  // 3) Se começar com '/', provavelmente está na pasta public.
  if (input.startsWith('/')) {
    // Respeita o base do Vite em produção
    const base = (import.meta as any).env?.BASE_URL || '/';
    return `${base.replace(/\/$/, '')}${input}`;
  }

  // 4) Fallback: retorna como veio
  return input;
}

export function CaseDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const caseData = casesData.find((c: CaseData) => c.id === id);

  // Índice da imagem aberta no lightbox (null = fechado)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  // Fecha com ESC
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % galleryImages.length));
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + galleryImages.length) % galleryImages.length));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!caseData) {
    return (
      <div className="min-h-screen bg-[var(--bg)]">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[var(--text)] mb-4">
              Case não encontrado
            </h1>
            <Link
              to="/#projetos"
              className="inline-flex items-center space-x-2 text-[var(--link)] hover:text-[var(--link)] transition-colors"
            >
              <ArrowLeftIcon size={20} />
              <span>Voltar para cases</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Pré-resolve as imagens para evitar processamento em cada render
  const heroImage = useMemo(() => resolveImageUrl(caseData.image), [caseData.image]);
  const galleryImages = useMemo(() => caseData.gallery.map(resolveImageUrl), [caseData.gallery]);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#projetos"
            className="inline-flex items-center space-x-2 text-[var(--link)] hover:text-[var(--link)] transition-colors mb-8"
          >
            <ArrowLeftIcon size={20} />
            <span>Voltar para cases</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-link/20 text-[var(--link)] text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[var(--text)]">
                {caseData.title}
              </h1>
              <p className="text-xl text-[var(--link)] mb-6">
                {caseData.subtitle}
              </p>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                {caseData.fullDescription}
              </p>
              {caseData.website && (
                <div className="mt-6">
                  <a
                    href={caseData.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[var(--action)] text-[var(--ink)] rounded-lg font-semibold hover:bg-[var(--text)] transition-colors shadow-lg hover:shadow-xl"
                  >
                    Visitar site
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[var(--panel)]">
                <img
                  src={heroImage}
                  alt={caseData.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-[var(--panel)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseData.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[var(--link)] mb-2">
                  {metric.value}
                </div>
                <div className="text-[var(--muted)] font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[var(--panel)] rounded-2xl p-8 border border-soft/10">
              <h2 className="text-3xl font-bold mb-6 text-[var(--text)]">
                O Desafio
              </h2>
              <p className="text-[var(--muted)] leading-relaxed text-lg">
                {caseData.challenge}
              </p>
            </div>

            <div className="bg-[var(--panel)] rounded-2xl p-8 border border-soft/10">
              <h2 className="text-3xl font-bold mb-6 text-[var(--text)]">
                A Solução
              </h2>
              <p className="text-[var(--muted)] leading-relaxed text-lg">
                {caseData.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Orkestra Ecosystem - Only for Orkestra case */}
        {id === 'orkestra' && <OrkestraEcosystem />}

      {/* Technologies */}
      <section className="py-20 bg-[var(--panel)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[var(--text)]">
            Tecnologias Utilizadas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseData.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-[var(--bg)] rounded-xl p-6 border border-soft/10 hover:border-link/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 text-[var(--text)]">
                  {tech.name}
                </h3>
                <p className="text-[var(--muted)]">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[var(--text)]">
            Principais Funcionalidades
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-[var(--panel)] rounded-xl p-6 border border-soft/10"
              >
                <CheckCircleIcon
                  size={24}
                  className="text-[var(--link)] flex-shrink-0 mt-1"
                />
                <span className="text-[var(--text)] leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[var(--panel)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[var(--text)]">
            Galeria do Projeto
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <img
                  src={image}
                  alt={`${caseData.title} - Imagem ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
                  onClick={() => setLightboxIndex(index)}
                  role="button"
                  aria-label={`Abrir imagem ${index + 1} em tela cheia`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4"
          onClick={closeLightbox}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 px-3 py-2 rounded-md bg-mineral/10 hover:bg-mineral/20 text-[var(--text)] text-sm font-medium backdrop-blur-md"
              aria-label="Fechar"
            >
              Fechar
            </button>
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={() => setLightboxIndex((prev) => prev === null ? prev : (prev - 1 + galleryImages.length) % galleryImages.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-mineral/10 hover:bg-mineral/20 text-[var(--text)] backdrop-blur-md"
                  aria-label="Imagem anterior"
                >
                  ‹
                </button>
                <button
                  onClick={() => setLightboxIndex((prev) => prev === null ? prev : (prev + 1) % galleryImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full bg-mineral/10 hover:bg-mineral/20 text-[var(--text)] backdrop-blur-md"
                  aria-label="Próxima imagem"
                >
                  ›
                </button>
              </>
            )}
            <img
              src={galleryImages[lightboxIndex]}
              alt={`${caseData.title} - Imagem ampliada ${lightboxIndex + 1}`}
              className="w-full h-auto rounded-xl shadow-2xl object-contain animate-[fadeIn_0.25s_ease]"
            />
            <div className="text-center mt-4 text-mineral/80 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--text)]">
            Gostou deste projeto?
          </h2>
          <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudar sua
            empresa a alcançar resultados semelhantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="px-8 py-4 bg-[var(--action)] text-[var(--ink)] rounded-lg font-semibold hover:bg-[var(--text)] transition-colors shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </Link>
            <Link
              to="/#projetos"
              className="px-8 py-4 bg-[var(--panel)] text-[var(--text)] rounded-lg font-semibold hover:bg-soft/10 transition-colors border border-soft/20"
            >
              Ver Mais Cases
            </Link>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
