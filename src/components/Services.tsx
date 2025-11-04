import React from 'react';
import { CodeIcon, LightbulbIcon, TrendingUpIcon, LayersIcon, ZapIcon, ShieldIcon, UsersIcon, RocketIcon, SearchIcon, PaletteIcon, TestTubeIcon, SparklesIcon } from 'lucide-react';
export function Services() {
  const services = [{
    title: 'Desenvolvimento',
    icon: <CodeIcon size={32} />,
    color: 'var(--brand1)',
    subcards: [{
      icon: <LayersIcon size={20} />,
      title: 'Aplicações Web & Mobile',
      description: 'Soluções full-stack responsivas e escaláveis'
    }, {
      icon: <ZapIcon size={20} />,
      title: 'APIs & Integrações',
      description: 'Arquitetura robusta e microsserviços'
    }, {
      icon: <ShieldIcon size={20} />,
      title: 'Manutenção & Suporte',
      description: 'Evolução contínua e correções ágeis'
    }, {
      icon: <UsersIcon size={20} />,
      title: 'Squad Dedicado',
      description: 'Time completo para seu projeto'
    }]
  }, {
    title: 'Consultoria',
    icon: <LightbulbIcon size={32} />,
    color: 'var(--brand2)',
    subcards: [{
      icon: <SearchIcon size={20} />,
      title: 'Auditoria Técnica',
      description: 'Análise profunda de código e arquitetura'
    }, {
      icon: <TrendingUpIcon size={20} />,
      title: 'Estratégia Digital',
      description: 'Roadmap e planejamento de produto'
    }, {
      icon: <RocketIcon size={20} />,
      title: 'Aceleração de Projetos',
      description: 'Desbloqueio de gargalos técnicos'
    }, {
      icon: <UsersIcon size={20} />,
      title: 'Mentoria de Times',
      description: 'Capacitação e boas práticas'
    }]
  }, {
    title: 'Inovação',
    icon: <SparklesIcon size={32} />,
    color: 'var(--brand3)',
    subcards: [{
      icon: <TestTubeIcon size={20} />,
      title: 'Provas de Conceito',
      description: 'Validação rápida de ideias'
    }, {
      icon: <PaletteIcon size={20} />,
      title: 'Design de Produto',
      description: 'UX/UI focado em conversão'
    }, {
      icon: <SparklesIcon size={20} />,
      title: 'IA & Automação',
      description: 'Soluções inteligentes e eficientes'
    }, {
      icon: <RocketIcon size={20} />,
      title: 'MVP em 30 dias',
      description: 'Do conceito ao lançamento'
    }]
  }];
  return <section id="services" className="py-20 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--text)]">
            Nossos Serviços
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Soluções completas para levar seu produto ao próximo nível
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-[var(--panel)] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[var(--muted)]/10">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{
            backgroundColor: `${service.color}20`,
            color: service.color
          }}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--text)]">
                {service.title}
              </h3>
              <div className="space-y-4">
                {service.subcards.map((subcard, subIndex) => <div key={subIndex} className="flex items-start space-x-3 p-4 bg-[var(--bg)]/50 rounded-lg hover:bg-[var(--bg)] transition-colors">
                    <div className="flex-shrink-0 mt-1" style={{
                color: service.color
              }}>
                      {subcard.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text)] mb-1">
                        {subcard.title}
                      </h4>
                      <p className="text-sm text-[var(--muted)]">
                        {subcard.description}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}