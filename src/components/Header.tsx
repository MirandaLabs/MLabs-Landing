import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';

const navItems = [
  { label: 'Serviços', to: '/#services' },
  { label: 'Capacidades', to: '/#capabilities' },
  { label: 'Projetos', to: '/#cases' },
  { label: 'Sobre nós', to: '/about' },
];

export function Header() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const headerClass = isScrolled || !isHome
    ? 'bg-[var(--panel)]/95 shadow-lg backdrop-blur-md border-b border-[var(--muted)]/10'
    : 'bg-[var(--bg)]/25 backdrop-blur-sm';

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--brand2)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--bg)]">
        Pular para o conteúdo
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2" aria-label="Miranda Labs - página inicial">
            <img src="/logo_miranda_labs.png" alt="" width={512} height={512} className="h-8 w-8 sm:h-10 sm:w-10" />
            <span className="text-lg sm:text-xl font-bold text-[var(--text)]">
              Miranda Labs
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors font-medium">
                {item.label}
              </Link>
            ))}
            <Link to="/contato" className="px-5 py-2 bg-[var(--text)] text-[var(--bg)] rounded-lg font-semibold transition-colors hover:bg-[var(--brand2)] hover:text-[var(--bg)]">
              Contato
            </Link>
          </nav>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--text)] p-2"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && <div id="mobile-menu" className="md:hidden bg-[var(--panel)] border-t border-[var(--muted)]/20">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors font-medium text-left">
                {item.label}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 bg-[var(--text)] text-[var(--bg)] rounded-lg font-semibold text-left">
              Contato
            </Link>
          </nav>
        </div>}
    </header>;
}
