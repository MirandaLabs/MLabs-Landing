import { ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../../../data/contact';
import { productsSection } from '../../../data/home';
import { products, stages, type StageId } from '../../../data/products';

// O selo de estágio sempre tem texto: nunca depende só de cor.
export function StageBadge({ stage }: { stage: StageId }) {
  return (
    <span className="inline-flex items-center rounded-full border border-link/40 bg-link/10 px-3 py-1 text-xs font-semibold text-[var(--link)]">
      Assinatura · {stages[stage].label}
    </span>
  );
}

export function Products() {
  return (
    <section id="produtos" className="scroll-mt-24 border-t border-soft/15 bg-[var(--panel)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--link)]">Produtos</p>
        <h2 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl md:text-5xl">
          {productsSection.title}
        </h2>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">{productsSection.description}</p>

        <ul className="divide-y divide-soft/15 border-y border-soft/15">
          {products.map((product) => (
            <li key={product.id} className="grid gap-6 py-8 lg:grid-cols-[1fr_1.4fr_auto] lg:items-start lg:gap-10">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text)]">{product.name}</h3>
                <div className="mt-3">
                  <StageBadge stage={product.stage} />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold leading-snug text-[var(--text)]">{product.tagline}</p>
                <p className="mt-3 text-[var(--muted)]">
                  <span className="font-semibold text-mineral/90">Para quem: </span>
                  {product.audience}
                </p>
                <p className="mt-2 text-[var(--muted)]">
                  <span className="font-semibold text-mineral/90">Problema: </span>
                  {product.problem}
                </p>
                {product.note && <p className="mt-2 text-sm text-[var(--muted)]">{product.note}</p>}
              </div>
              <div className="lg:min-w-[220px]">
                {product.cta ? (
                  <a
                    href={whatsappLink(product.cta.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[var(--text)] px-6 py-3 font-semibold text-[var(--bg)] transition-colors hover:bg-[var(--link)] lg:w-auto"
                  >
                    <MessageCircleIcon size={18} aria-hidden="true" />
                    {product.cta.label}
                  </a>
                ) : (
                  <p className="text-sm text-[var(--muted)]">{product.nextStep}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <Link
          to="/produtos"
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 font-semibold text-[var(--link)] transition-colors hover:text-[var(--text)]"
        >
          Ver comparativo dos produtos
          <ArrowRightIcon size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
