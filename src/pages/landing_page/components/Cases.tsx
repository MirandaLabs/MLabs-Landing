import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import orkestraLogo from '@/assets/images/capabilites/Logo_Orkestra.png';
import rpgLogo from '@/assets/images/cases/rpg/Logo_RPG.png';
import cardapioLogo from '@/assets/images/cases/cardapio_qr/dashboard_admin.png';
import { OptimizedImage } from '@/utils/imageOptimizer';

export function Cases() {
  const cases = [{
    id: 'orkestra',
    title: 'Orkestra',
    description: 'Plataforma completa para organização e estruturação de eventos de entretenimento em todo o território brasileiro',
    tags: ['React/vite', 'Node.js', 'AWS'],
    results: 'Em desenvolvimento',
    image: orkestraLogo,
  }, {
    id: 'cardapio-qr',
    title: 'Cardápio QR + Comanda Digital',
    description: 'Fila de cozinha, pedidos por mesa e painel de produção. Custos otimizados com S3‑compatível e Postgres.',
    tags: ['React Native', 'Node.js', 'TensorFlow'],
    results: 'Em desenvolvimento',
    image: cardapioLogo
  }, {
    id: 'rpg-souls-like',
    title: 'Colapso RPG',
    description: 'Sistema único de RPG com mecânicas complexas e elementos souls-like. Tudo em uma plataforma integrada com mapas, assets, livros de campanha, fichas e todos os elementos necessários 100% compostos em um único lugar.',
    tags: ['React', 'Node.js', 'WebSocket'],
    results: 'Em desenvolvimento',
    image: rpgLogo
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
            </article>)}
        </div>
      </div>
    </section>;
}