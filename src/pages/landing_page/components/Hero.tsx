// no React import needed
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function Hero() {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand1)]/10 via-transparent to-[var(--brand2)]/10"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--brand1)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--brand2)] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--brand3)] rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--panel)]/80 backdrop-blur-sm rounded-full mb-8 border border-[var(--brand1)]/30">
            <SparklesIcon size={16} className="text-[var(--brand1)]" />
            <span className="text-sm text-[var(--muted)] font-medium">
              Transformando ideias em realidade
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[var(--brand1)] via-[var(--brand2)] to-[var(--brand3)] bg-clip-text text-transparent">
              Engenharia + Design
            </span>
            <br />
            <span className="text-[var(--text)]">
              de Produto para transformar ideias em resultados
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--muted)] mb-10 max-w-3xl mx-auto leading-relaxed">
            Software sob medida, consultoria técnica e provas de conceito para
            empresas que querem escalar
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => navigate('/contato')} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-2" aria-label="Request a quote">
              <span>Quero um orçamento</span>
              <ArrowRightIcon size={20} />
            </button>
            <button onClick={() => scrollToSection('cases')} className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[var(--brand1)] text-[var(--text)] rounded-lg font-semibold text-lg hover:bg-[var(--brand1)]/10 transition-all" aria-label="View case studies">
              Ver cases
            </button>
          </div>
    
        </div>
      </div>
    </section>;
}