import { MessageCircleIcon } from 'lucide-react';
import { whatsappLink, whatsappMessages } from '../../../data/contact';
import { closing } from '../../../data/home';

export function ClosingCta() {
  return (
    <section className="border-t border-[var(--muted)]/15 bg-[var(--panel)] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-tight text-[var(--text)] sm:text-4xl md:text-5xl">{closing.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">{closing.text}</p>
        <div className="mt-8 flex justify-center">
          <a
            href={whatsappLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] px-8 py-4 font-semibold text-white transition-all hover:shadow-2xl sm:w-auto"
          >
            <MessageCircleIcon size={20} aria-hidden="true" />
            {closing.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
