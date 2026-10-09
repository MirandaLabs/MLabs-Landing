import { ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../../utils/imageOptimizer';
import { whatsappLink, whatsappMessages } from '../../../data/contact';
import { hero } from '../../../data/home';

// O React 18 só reconhece a forma minúscula do atributo no DOM.
const highPriority = { fetchpriority: 'high' } as Record<string, string>;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand2)] sm:text-sm">
            {hero.eyebrow}
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{hero.description}</p>
          <div className="mb-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] px-7 py-3 text-base font-semibold text-white transition-all hover:shadow-2xl"
            >
              <MessageCircleIcon size={20} aria-hidden="true" />
              {hero.primaryCta}
            </a>
            <Link
              to="/#projetos"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[var(--muted)]/30 px-7 py-3 text-base font-semibold text-[var(--text)] transition-colors hover:border-[var(--brand2)] hover:bg-[var(--brand2)]/5"
            >
              {hero.secondaryCta}
              <ArrowRightIcon size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="max-w-xl border-t border-[var(--muted)]/20 pt-5 text-sm leading-relaxed text-[var(--muted)]">
            {hero.trustLine}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-[var(--muted)]/20 bg-[var(--panel)] shadow-2xl">
            <OptimizedImage
              src="/images/optimized/assets/projects/clbmcs/home"
              extension="webp"
              alt={hero.imageAlt}
              width={1600}
              height={860}
              loading="eager"
              {...highPriority}
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
