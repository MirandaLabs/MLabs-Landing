import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ClosingCta() {
  return (
    <section className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--brand2)]/25 bg-[var(--panel)] p-8 sm:p-12 lg:p-16 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(34,211,238,0.18)_0%,transparent_70%)]"
          />
          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--brand2)]">
              Próximo passo
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[var(--text)]">
              Pronto para tirar seu produto do papel?
            </h2>
            <p className="mt-5 text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
              Conversa rápida pra entender o problema e os objetivos. Sem compromisso —
              respondemos em até 24h com próximos passos claros.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                to="/contato"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] px-8 py-4 font-semibold text-white transition-all hover:shadow-2xl"
              >
                Quero um orçamento
                <ArrowRightIcon size={18} aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-[var(--muted)]/30 px-8 py-4 font-semibold text-[var(--text)] transition-colors hover:border-[var(--brand2)] hover:bg-[var(--brand2)]/5"
              >
                Conheça o time
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
