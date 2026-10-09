import { ChevronDownIcon } from 'lucide-react';
import { faq } from '../../../data/home';

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold text-[var(--text)] sm:text-4xl">{faq.title}</h2>
        <div className="divide-y divide-soft/15 border-y border-soft/15">
          {faq.items.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-semibold text-[var(--text)] [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDownIcon
                  size={20}
                  aria-hidden="true"
                  className="flex-shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 leading-relaxed text-[var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
