import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, PhoneIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[var(--bg)] border-t border-soft/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo_miranda_labs_horizontal.png" alt="Miranda Labs" width={561} height={192} className="mb-4 h-14 w-auto" loading="lazy" decoding="async" />
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Software sob medida e produtos digitais para pequenas empresas.
            </p>
          </div>
          <div>
            <h4 className="text-[var(--text)] font-semibold mb-4">Redes sociais</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.linkedin.com/company/miranda-labs" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[var(--muted)] hover:text-[var(--link)] transition-colors text-sm">
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/miranda_labs.co/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[var(--muted)] hover:text-[var(--link)] transition-colors text-sm">
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
                <Link to="/#software-sob-medida" className="text-[var(--muted)] hover:text-[var(--link)] transition-colors text-sm">Software sob medida</Link>
              </li>
              <li>
                <Link to="/produtos" className="text-[var(--muted)] hover:text-[var(--link)] transition-colors text-sm">Produtos</Link>
              </li>
              <li>
                <Link to="/#projetos" className="text-[var(--muted)] hover:text-[var(--link)] transition-colors text-sm">Projetos</Link>
              </li>
              <li>
                <Link to="/about" className="text-[var(--muted)] hover:text-[var(--link)] transition-colors text-sm">Sobre nós</Link>
              </li>
              <li>
                <Link to="/contato" className="text-[var(--muted)] hover:text-[var(--link)] transition-colors text-sm">Contato</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--text)] font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPinIcon size={16} className="text-[var(--link)] mt-1 flex-shrink-0" />
                <span className="text-[var(--muted)]">São Paulo, SP</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <PhoneIcon size={16} className="text-[var(--link)] mt-1 flex-shrink-0" />
                <a href="tel:+5571999723105" className="text-[var(--muted)] hover:text-[var(--link)] transition-colors">+55 71 99972-3105</a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MailIcon size={16} className="text-[var(--link)] mt-1 flex-shrink-0" />
                <a href="mailto:mirandalabs.co@gmail.com" className="text-[var(--muted)] hover:text-[var(--link)] transition-colors">mirandalabs.co@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-soft/20 pt-8">
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
