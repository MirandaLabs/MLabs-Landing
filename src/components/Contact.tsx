import React, { useState } from 'react';
import { SendIcon, MailIcon, MessageCircleIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envia via cliente de email do usuário (mailto) para mirandalabs.co@gmail.com
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contato pelo site - ${name || 'Sem nome'}`);
    const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
    // Abre o cliente de e-mail do usuário com os campos preenchidos
    window.location.href = `mailto:mirandalabs.co@gmail.com?subject=${subject}&body=${body}`;
    // Limpa o formulário
    setFormData({ name: '', email: '', message: '' });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 sm:py-32 bg-[var(--panel)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--text)]">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Conte-nos sobre seu projeto e descubra como podemos ajudar
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Nome
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--muted)]/20 rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand1)] transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                  E-mail
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--muted)]/20 rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand1)] transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Mensagem
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--muted)]/20 rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand1)] transition-all resize-none" placeholder="Conte-nos sobre seu projeto..." />
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-2" aria-label="Send message">
                <span>Enviar mensagem</span>
                <SendIcon size={20} />
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-[var(--bg)] rounded-2xl p-8 border border-[var(--muted)]/10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[var(--brand2)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircleIcon size={24} className="text-[var(--brand2)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-[var(--muted)] mb-4">
                    Fale conosco diretamente pelo WhatsApp
                  </p>
                  <a href="https://wa.me/5571999723105" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[var(--brand2)] hover:text-[var(--brand1)] transition-colors font-medium" aria-label="Contact via WhatsApp">
                    <span>+55 71 99972-3105</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[var(--bg)] rounded-2xl p-8 border border-[var(--muted)]/10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[var(--brand1)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MailIcon size={24} className="text-[var(--brand1)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2">
                    E-mail
                  </h3>
                  <p className="text-[var(--muted)] mb-4">
                    Envie sua proposta por e-mail
                  </p>
                  <a href="mailto:mirandalabs.co@gmail.com" className="inline-flex items-center space-x-2 text-[var(--brand1)] hover:text-[var(--brand2)] transition-colors font-medium" aria-label="Contact via email">
                    <span>mirandalabs.co@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--brand1)]/10 via-[var(--brand2)]/10 to-[var(--brand3)]/10 rounded-2xl p-8 border border-[var(--brand1)]/20">
              <h3 className="text-xl font-bold text-[var(--text)] mb-4">
                Resposta em até 24h
              </h3>
              <p className="text-[var(--muted)]">
                Nossa equipe está pronta para entender suas necessidades e
                propor a melhor solução para seu negócio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}