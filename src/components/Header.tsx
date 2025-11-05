import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--panel)] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[var(--brand1)] to-[var(--brand2)] rounded-lg flex items-center justify-center">
              <img src="/src/assets/images/header/logo_miranda_labs.png" alt="Miranda Labs Logo" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-[var(--text)]">
              Miranda Labs
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors font-medium" aria-label="Navigate to services section">
              Serviços
            </button>
            <button onClick={() => scrollToSection('capabilities')} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors font-medium" aria-label="Navigate to capabilities section">
              Capacidades
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors font-medium" aria-label="Navigate to cases section">
              Cases
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all" aria-label="Navigate to contact section">
              Contato
            </button>
          </nav>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-[var(--text)] p-2" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && <div className="md:hidden bg-[var(--panel)] border-t border-[var(--muted)]/20">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <button onClick={() => scrollToSection('services')} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors font-medium text-left" aria-label="Navigate to services section">
              Serviços
            </button>
            <button onClick={() => scrollToSection('capabilities')} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors font-medium text-left" aria-label="Navigate to capabilities section">
              Capacidades
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-[var(--muted)] hover:text-[var(--text)] transition-colors font-medium text-left" aria-label="Navigate to cases section">
              Cases
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] text-white rounded-lg font-semibold text-left" aria-label="Navigate to contact section">
              Contato
            </button>
          </nav>
        </div>}
    </header>;
}