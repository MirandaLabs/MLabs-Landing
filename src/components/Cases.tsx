import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function Cases() {
  const cases = [{
    title: 'Plataforma de E-commerce',
    description: 'Desenvolvimento completo de marketplace com mais de 10.000 produtos e integração com múltiplos gateways de pagamento',
    tags: ['React', 'Node.js', 'AWS'],
    results: '+300% conversão',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop'
  }, {
    title: 'App de Gestão Financeira',
    description: 'Aplicativo mobile para controle financeiro pessoal com IA para categorização automática de gastos',
    tags: ['React Native', 'Python', 'TensorFlow'],
    results: '50k+ downloads',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop'
  }, {
    title: 'Sistema de Agendamento',
    description: 'Solução SaaS para clínicas médicas com agendamento online, prontuário eletrônico e telemedicina',
    tags: ['TypeScript', 'PostgreSQL', 'WebRTC'],
    results: '100+ clínicas',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop'
  }];
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => <article key={index} className="bg-[var(--panel)] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[var(--muted)]/10 group">
              <div className="aspect-video overflow-hidden">
                <img src={caseItem.image} alt={caseItem.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseItem.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-3 py-1 bg-[var(--brand1)]/20 text-[var(--brand1)] text-xs font-medium rounded-full">
                      {tag}
                    </span>)}
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
                  <button className="flex items-center space-x-2 text-[var(--brand1)] hover:text-[var(--brand2)] transition-colors font-medium" aria-label={`View details about ${caseItem.title}`}>
                    <span>Ver detalhes</span>
                    <ArrowRightIcon size={16} />
                  </button>
                </div>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
}