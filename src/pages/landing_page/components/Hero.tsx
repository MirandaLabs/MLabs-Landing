import { ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { whatsappLink, whatsappMessages } from '../../../data/contact';
import { hero } from '../../../data/home';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--link)] sm:text-sm">
            {hero.eyebrow}
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">{hero.description}</p>
          <div className="mb-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[var(--action)] hover:bg-[var(--text)] px-7 py-3 text-base font-semibold text-[var(--ink)] transition-all hover:shadow-2xl"
            >
              <MessageCircleIcon size={20} aria-hidden="true" />
              {hero.primaryCta}
            </a>
            <Link
              to="/#projetos"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-soft/30 px-7 py-3 text-base font-semibold text-[var(--text)] transition-colors hover:border-[var(--link)] hover:bg-link/5"
            >
              {hero.secondaryCta}
              <ArrowRightIcon size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="max-w-2xl border-t border-soft/20 pt-5 text-sm leading-relaxed text-[var(--muted)]">
            {hero.trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}
