import { ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SEO } from '../../components/SEO';
import { whatsappLink, whatsappMessages } from '../../data/contact';
import { productsSection } from '../../data/home';
import { billingNote, products, stages } from '../../data/products';
import { StageBadge } from '../landing_page/components/Products';

const siteUrl = 'https://www.mirandalabs.com.br';

export function ProductsPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg)]">
      <SEO
        title="Produtos por assinatura para eventos, nutrição e gestão escolar | Miranda Labs"
        description="Produtos próprios da Miranda Labs, cada um com estágio informado: Orkestra, NutriPro e gestão escolar."
        canonical={`${siteUrl}/produtos`}
      />
      <Header />
      <main id="main-content">
        <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand2)] sm:text-sm">Produtos</p>
            <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
              {productsSection.title}
            </h1>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">{productsSection.description}</p>
            <Link
              to="/#software-sob-medida"
              className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-[var(--brand2)] transition-colors hover:text-[var(--text)]"
            >
              Precisa de algo sob medida? Fale com a gente
              <ArrowRightIcon size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section aria-labelledby="estagios" className="border-y border-[var(--muted)]/15 bg-[var(--panel)] py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="estagios" className="mb-6 text-xl font-bold text-[var(--text)]">
              Como ler o estágio
            </h2>
            <dl className="grid gap-6 md:grid-cols-3">
              {Object.values(stages).map((stage) => (
                <div key={stage.id}>
                  <dt className="font-semibold text-[var(--text)]">{stage.label}</dt>
                  <dd className="mt-1 leading-relaxed text-[var(--muted)]">{stage.meaning}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="comparativo" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="comparativo" className="mb-8 text-2xl font-bold text-[var(--text)] sm:text-3xl">
              Qual é o seu?
            </h2>

            <div className="hidden overflow-hidden rounded-lg border border-[var(--muted)]/15 md:block">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">Comparativo dos produtos da Miranda Labs por público, problema, estágio e próximo passo</caption>
                <thead className="bg-[var(--panel)] text-sm text-[var(--muted)]">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Produto</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Para quem</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Problema</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Estágio</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Próximo passo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--muted)]/15">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <th scope="row" className="px-5 py-4 font-bold text-[var(--text)]">
                        <a href={`#${product.id}`} className="hover:text-[var(--brand2)]">{product.name}</a>
                      </th>
                      <td className="px-5 py-4 text-[var(--muted)]">{product.audience}</td>
                      <td className="px-5 py-4 text-[var(--muted)]">{product.problemShort}</td>
                      <td className="px-5 py-4"><StageBadge stage={product.stage} /></td>
                      <td className="px-5 py-4 text-[var(--muted)]">{product.cta ? product.cta.label : product.nextStep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="space-y-4 md:hidden">
              {products.map((product) => (
                <li key={product.id} className="rounded-lg border border-[var(--muted)]/15 bg-[var(--panel)] p-5">
                  <a href={`#${product.id}`} className="text-xl font-bold text-[var(--text)]">{product.name}</a>
                  <div className="mt-2"><StageBadge stage={product.stage} /></div>
                  <p className="mt-3 text-[var(--muted)]">{product.audience}</p>
                  <p className="mt-1 text-[var(--muted)]">{product.problemShort}</p>
                  <p className="mt-3 text-sm font-semibold text-[var(--text)]">{product.cta ? product.cta.label : product.nextStep}</p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">{billingNote}</p>
          </div>
        </section>

        {products.map((product) => (
          <section key={product.id} id={product.id} aria-labelledby={`${product.id}-titulo`} className="scroll-mt-24 border-t border-[var(--muted)]/15 py-16 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:px-8">
              <div>
                <h2 id={`${product.id}-titulo`} className="text-3xl font-bold text-[var(--text)] sm:text-4xl">{product.name}</h2>
                <div className="mt-4"><StageBadge stage={product.stage} /></div>
              </div>
              <div>
                <p className="text-xl font-semibold leading-snug text-[var(--text)]">{product.tagline}</p>
                <dl className="mt-6 space-y-3 text-[var(--muted)]">
                  <div>
                    <dt className="inline font-semibold text-[var(--text)]/90">Para quem: </dt>
                    <dd className="inline">{product.audience}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[var(--text)]/90">Problema: </dt>
                    <dd className="inline">{product.problem}</dd>
                  </div>
                  {product.areas && (
                    <div>
                      <dt className="inline font-semibold text-[var(--text)]/90">Áreas: </dt>
                      <dd className="inline">{product.areas}</dd>
                    </div>
                  )}
                </dl>
                {product.note && <p className="mt-4 text-[var(--muted)]">{product.note}</p>}
                <div className="mt-6">
                  {product.cta ? (
                    <a
                      href={whatsappLink(product.cta.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[var(--text)] px-6 py-3 font-semibold text-[var(--bg)] transition-colors hover:bg-[var(--brand2)]"
                    >
                      <MessageCircleIcon size={18} aria-hidden="true" />
                      {product.cta.label}
                      <span className="sr-only">(abre o WhatsApp em nova aba)</span>
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--muted)]">{product.nextStep}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="border-t border-[var(--muted)]/15 bg-[var(--panel)] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">Precisa de algo diferente?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              Se nenhum produto serve ao seu caso, podemos construir um sistema sob medida para o seu processo.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] px-8 py-4 font-semibold text-white transition-all hover:shadow-2xl"
              >
                <MessageCircleIcon size={20} aria-hidden="true" />
                Conversar no WhatsApp
              </a>
              <Link
                to="/#como-trabalhamos"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[var(--muted)]/30 px-8 py-4 font-semibold text-[var(--text)] transition-colors hover:border-[var(--brand2)]"
              >
                Ver como trabalhamos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
