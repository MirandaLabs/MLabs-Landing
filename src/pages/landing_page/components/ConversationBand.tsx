import { MessageCircleIcon } from 'lucide-react';
import { whatsappLink, whatsappMessages } from '../../../data/contact';
import { conversationBand } from '../../../data/home';

export function ConversationBand() {
  return (
    <section aria-label="Falar com a Miranda Labs" className="border-y border-[var(--muted)]/15 bg-[var(--bg)]">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-lg font-semibold text-[var(--text)]">{conversationBand.text}</p>
        <a
          href={whatsappLink(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[var(--text)] px-6 py-3 font-semibold text-[var(--bg)] transition-colors hover:bg-[var(--brand2)]"
        >
          <MessageCircleIcon size={18} aria-hidden="true" />
          {conversationBand.cta}
        </a>
      </div>
    </section>
  );
}
