import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[var(--bg)] border-t border-[var(--muted)]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--brand1)] to-[var(--brand2)] rounded-lg flex items-center justify-center">
                <img src="/src/assets/images/header/logo_miranda_labs.png" alt="Miranda Labs Logo" />
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
            <h4 className="text-[var(--text)] font-semibold mb-4">Redes sociais</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.linkedin.com/company/miranda-labs" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/miranda_labs.co/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--text)] font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">Sobre nós</Link>
              </li>
              <li>
                <Link to="/contato" className="text-[var(--muted)] hover:text-[var(--brand1)] transition-colors text-sm">Contato</Link>
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
                <span className="text-[var(--muted)]">+55 71 99972-3105</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MailIcon size={16} className="text-[var(--brand1)] mt-1 flex-shrink-0" />
                <span className="text-[var(--muted)]">mirandalabs.co@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--muted)]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--muted)] text-sm">
              © {new Date().getFullYear()} Miranda Labs. Todos os direitos reservados.
            </p>
            <p className="text-[var(--muted)] text-sm">
                    CNPJ: 63.210.893/0001-10

            </p>
           
          </div>
        </div>
      </div>
    </footer>;
}