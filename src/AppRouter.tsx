import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { App } from './pages/landing_page/App';
import { AboutPage } from './pages/about/page';
import { ContactPage } from './pages/contact/page';
import { ProjectPage } from './pages/project/page';
import { ProductsPage } from './pages/products/page';

function ScrollManager() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth' });
      // Move o foco para a seção, para teclado e leitor de tela seguirem a âncora.
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }, 0);
  }, [hash, pathname]);

  return null;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/projetos/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
