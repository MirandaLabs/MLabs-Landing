import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/images/landing_page/Dashboard_Financeiro.png';

const trustStats = [
  { value: '5', label: 'Projetos em produção e desenvolvimento' },
  { value: '3', label: 'Sócios fundadores em engenharia' },
  { value: '24h', label: 'Tempo médio de primeira resposta' },
];

export function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden pt-20 pb-12 sm:pb-16 min-h-[92vh]">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--bg)_0%,rgba(11,18,32,0.95)_40%,rgba(11,18,32,0.85)_75%,var(--bg)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.4)_0%,var(--bg)_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--panel)]/85 backdrop-blur-sm rounded-lg mb-8 border border-[var(--brand2)]/30">
            <SparklesIcon size={16} className="text-[var(--brand2)]" aria-hidden="true" />
            <span className="text-sm text-[var(--text)] font-medium">
              Produto digital, automação e sistemas de gestão
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight text-[var(--text)]">
            Software sob medida<br />
            <span className="text-[var(--brand2)]">com engenharia séria.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--muted)] mb-10 max-w-2xl leading-relaxed">
            A Miranda Labs transforma operação, dados e ideias em aplicações
            seguras, escaláveis e prontas para uso — do MVP ao sistema de gestão completo.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-5">
            <Link
              to="/contato"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] text-white rounded-lg font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <span>Quero um orçamento</span>
              <ArrowRightIcon size={20} aria-hidden="true" />
            </Link>
            <Link
              to="/#cases"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[var(--muted)]/30 text-[var(--text)] rounded-lg font-semibold text-lg hover:border-[var(--brand2)] hover:bg-[var(--brand2)]/5 transition-all text-center"
            >
              Ver projetos
            </Link>
          </div>
          <p className="text-sm text-[var(--muted)] mb-10">
            Diagnóstico inicial sem custo · Resposta em até 24h · Sem compromisso
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-lg border border-[var(--muted)]/15 bg-[var(--muted)]/15">
          {trustStats.map((stat) => (
            <div key={stat.label} className="bg-[var(--panel)]/80 backdrop-blur-sm p-5">
              <p className="text-3xl font-bold text-[var(--text)]">{stat.value}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
