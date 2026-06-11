import { type ChangeEvent, type FormEvent, useState } from 'react';
import { CheckCircle2Icon, Loader2Icon, MailIcon, SendIcon } from 'lucide-react';

const webhookUrl = import.meta.env.VITE_ORKESTRA_SHEET_WEBHOOK_URL;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function OrkestraPreRegister() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [state, setState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    setState('idle');
    setErrorMessage('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: campo invisível para humanos. Se vier preenchido, é bot.
    if (formData.company.trim()) {
      setState('success');
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();

    if (!name || !email) {
      setErrorMessage('Preencha nome e e-mail para continuar.');
      setState('error');
      return;
    }

    if (!emailPattern.test(email)) {
      setErrorMessage('Informe um e-mail válido.');
      setState('error');
      return;
    }

    if (!webhookUrl) {
      setErrorMessage('Pré-cadastro indisponível no momento. Tente novamente mais tarde.');
      setState('error');
      return;
    }

    setState('loading');

    try {
      // Envia name/email em três canais simultâneos para tolerar variações no
      // Apps Script (e.parameter, e.postData.contents JSON, ou chave em PT).
      const query = new URLSearchParams({ name, nome: name, email }).toString();
      const urlWithParams = `${webhookUrl}${webhookUrl.includes('?') ? '&' : '?'}${query}`;

      await fetch(urlWithParams, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ name, nome: name, fullName: name, email }),
      });
      setState('success');
      setFormData({ name: '', email: '', company: '' });
    } catch {
      setErrorMessage('Não foi possível enviar seu pré-cadastro agora. Tente novamente em instantes.');
      setState('error');
    }
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-[var(--brand1)]/20 bg-gradient-to-br from-[var(--brand1)]/10 via-[var(--brand2)]/10 to-[var(--brand3)]/10 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">Pré-cadastro</p>
              <h2 className="mt-2 text-3xl font-bold text-[var(--text)] sm:text-4xl">
                Quer ser avisado no lançamento do Orkestra?
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
                Deixe seu nome e e-mail para acompanhar o desenvolvimento da plataforma e ser um dos primeiros a
                testar quando o acesso antecipado abrir.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-[var(--muted)]/10 bg-[var(--panel)] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="orkestra-name" className="mb-2 block text-sm font-medium text-[var(--text)]">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="orkestra-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={80}
                    autoComplete="name"
                    className="w-full rounded-lg border border-[var(--muted)]/20 bg-[var(--bg)] px-4 py-3 text-[var(--text)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand1)]"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="orkestra-email" className="mb-2 block text-sm font-medium text-[var(--text)]">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="orkestra-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={120}
                    autoComplete="email"
                    className="w-full rounded-lg border border-[var(--muted)]/20 bg-[var(--bg)] px-4 py-3 text-[var(--text)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand1)]"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="orkestra-company">Empresa</label>
                <input
                  type="text"
                  id="orkestra-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={state === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] px-6 py-3 font-semibold text-white transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {state === 'loading' ? (
                  <>
                    <Loader2Icon size={18} className="animate-spin" aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero ser avisado
                    <SendIcon size={18} aria-hidden="true" />
                  </>
                )}
              </button>

              {state === 'success' && (
                <p className="flex items-center gap-2 text-sm text-[var(--ok)]" role="status">
                  <CheckCircle2Icon size={16} aria-hidden="true" />
                  Pré-cadastro recebido! Em breve enviaremos novidades para o seu e-mail.
                </p>
              )}
              {state === 'error' && (
                <p className="text-sm text-[var(--brand3)]" role="alert">
                  {errorMessage}
                </p>
              )}
              <p className="flex items-center gap-2 text-xs text-[var(--muted)]">
                <MailIcon size={14} aria-hidden="true" />
                Usamos seu e-mail apenas para novidades sobre o Orkestra.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
