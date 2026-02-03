import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import orkestraLogo from '@/assets/images/capabilites/Logo_Orkestra.png';
import EclipseLogo from '@/assets/images/cases/eclipse/Eclipse.png';
import CLBMCS from '@/assets/images/cases/CLBMCS/Landing.png';
import Polidisel from '@/assets/images/cases/Polidiesel/Hero.png';
import Betania from '@/assets/images/cases/Betania/hero.png';
import BoxCar from '@/assets/images/cases/box_car/start.png';
import MarDeRosas from '@/assets/images/cases/mar_rosas/inicio.png';
import Odontocare from '@/assets/images/cases/Odontocare/1.png';
import Sleepo from '@/assets/images/cases/Sleepo/5.png'
import { OptimizedImage } from '@/utils/imageOptimizer';

export function Cases() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 items
      } else {
        setItemsPerPage(3); // Desktop: 3 items
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);
  const cases = [{
    id: 'boxcar',
    title: 'Boxcar',
    description: 'Página enxuta com proposta de valor clara, recursos em destaque e chamada para ação direta.',
    tags: ['Landing Page', 'UI/UX', 'Performance'],
    results: 'Publicado',
    image: BoxCar
  }, {
    id: 'clbmcs-2026',
    title: 'CLBMCS 2026',
    description: 'Landing page institucional para evento, com foco em informações essenciais, programação e inscrições.',
    tags: ['Landing Page', 'UI/UX', 'Conversão'],
    results: 'Publicado',
    image: CLBMCS
  }, {
    id: 'eclipse-angels',
    title: 'Eclipse Angels',
    description: 'Plataforma com foco em descoberta, perfis e experiência do usuário, com layout moderno e navegação intuitiva.',
    tags: ['UI/UX', 'Web App', 'Performance'],
    results: 'Publicado',
    image: EclipseLogo
  }, {
    id: 'mar-de-rosas',
    title: 'Mar de Rosas',
    description: 'Landing page com foco em storytelling, apresentação de produtos/serviços e conversão de visitantes em contatos.',
    tags: ['Landing Page', 'UI/UX', 'Conversão'],
    results: 'Publicado',
    image:  MarDeRosas
  }, {
    id: 'odontocare',
    title: 'OdontoCare',
    description: 'Página institucional voltada para serviços odontológicos, com foco em credibilidade e agendamento.',
    tags: ['Landing Page', 'UI/UX', 'Conversão'],
    results: 'Publicado',
    image: Odontocare
  }, {
    id: 'orkestra',
    title: 'Orkestra',
    description: 'Plataforma completa para organização e estruturação de eventos de entretenimento em todo o território brasileiro',
    tags: ['React/vite', 'Node.js', 'AWS'],
    results: 'Em desenvolvimento',
    image: orkestraLogo,
  }, {
    id: 'polidiesel',
    title: 'Polidiesel',
    description: 'Landing page corporativa para apresentação de serviços, portfólio e canais de contato.',
    tags: ['Landing Page', 'UI/UX', 'Performance'],
    results: 'Publicado',
    image: Polidisel
  }, {
    id: 'pousada-betania',
    title: 'Pousada Betania Eco Luxury',
    description: 'Landing page com foco em experiência, natureza e reserva direta, destacando acomodações e diferenciais.',
    tags: ['Landing Page', 'UI/UX', 'Conversão'],
    results: 'Publicado',
    image: Betania
  }, {
    id: 'sleepo-fortaleza',
    title: 'Sleepo Fortaleza',
    description: 'Página institucional focada em conversão para reservas, com destaque para serviços, localização e experiência do hóspede.',
    tags: ['Landing Page', 'UI/UX', 'Performance'],
    results: 'Publicado',
    image: Sleepo
  }];

  const totalPages = Math.ceil(cases.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Reset to first page when items per page changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const visibleCases = cases.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return <section id="cases" className="py-20 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--text)]">
            Cases de Sucesso
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Projetos que transformaram negócios e geraram resultados reais
          </p>
        </div>
        
        <div className="relative px-12 lg:px-0">
          {/* Botão Anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 xl:-left-9 -translate-y-1/2 lg:-translate-x-1/2 z-10 p-2 lg:p-3 bg-[var(--panel)] border border-[var(--muted)]/20 rounded-full hover:bg-[var(--brand1)] hover:text-white transition-colors shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeftIcon size={20} className="lg:w-6 lg:h-6" />
          </button>

          {/* Cases Visíveis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleCases.map((caseItem, index) => (
              <article key={index} className="bg-[var(--panel)] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[var(--muted)]/10 group">
                <div className="aspect-video overflow-hidden">
                  {typeof caseItem.image === 'string' && caseItem.image.startsWith('/images/optimized/') ? (
                    <OptimizedImage
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <img
                      src={caseItem.image as string}
                      alt={caseItem.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-[var(--brand1)]/20 text-[var(--brand1)] text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--text)]">
                    {caseItem.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-4 leading-relaxed">
                    {caseItem.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--brand2)] font-semibold">
                      {caseItem.results}
                    </span>
                    <Link 
                      to={`/case/${caseItem.id}`}
                      className="flex items-center space-x-2 text-[var(--brand1)] hover:text-[var(--brand2)] transition-colors font-medium" 
                      aria-label={`View details about ${caseItem.title}`}
                    >
                      <span>Ver detalhes</span>
                      <ArrowRightIcon size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Botão Próximo */}
          <button
            onClick={nextSlide}
            className="absolute right-0 xl:-right-9 top-1/2 -translate-y-1/2 lg:translate-x-1/2 z-10 p-2 lg:p-3 bg-[var(--panel)] border border-[var(--muted)]/20 rounded-full hover:bg-[var(--brand1)] hover:text-white transition-colors shadow-lg"
            aria-label="Próximo"
          >
            <ChevronRightIcon size={20} className="lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[var(--brand1)] w-8'
                  : 'bg-[var(--muted)]/30 hover:bg-[var(--muted)]/50'
              }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>;
}