import React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[var(--bg)] border-t border-[var(--muted)]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--brand1)] to-[var(--brand2)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ML</span>
              </div>
              <span className="text-xl font-bold text-[var(--text)]">
                Miranda Labs
              </span>
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Engenharia de software e design de produto para empresas que
              querem escalar
            </p>
          </div>
          <div>
            <h4 className="text-[var(--text)] font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  Desenvolvimento
                </a>
              </li>
              <li>
                <a href="#services" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#services" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  Inovação
                </a>
              </li>
              <li>
                <a href="#cases" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  Cases
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--text)] font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--text)] font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPinIcon size={16} className="text-[var(--brand1)] mt-1 flex-shrink-0" />
                <span className="text-[var(--muted)]">São Paulo, SP</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <PhoneIcon size={16} className="text-[var(--brand1)] mt-1 flex-shrink-0" />
                <span className="text-[var(--muted)]">+55 11 99999-9999</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MailIcon size={16} className="text-[var(--brand1)] mt-1 flex-shrink-0" />
                <span className="text-[var(--muted)]">
                  contato@mirandalabs.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--muted)]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--muted)] text-sm">
              © 2024 Miranda Labs. Todos os direitos reservados.
            </p>
            <p className="text-[var(--muted)] text-sm">
              CNPJ: 00.000.000/0001-00
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                Privacidade
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}