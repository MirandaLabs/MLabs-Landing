import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SEO } from '../../components/SEO';
import { Contact } from './components/Contact';

export function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SEO
        title="Contato | Miranda Labs"
        description="Fale com a Miranda Labs para orçamento de software sob medida, MVP, automação, dashboard ou consultoria técnica."
        canonical="https://www.mirandalabs.com.br/contato"
        keywords="contato Miranda Labs, orçamento software, desenvolvimento sob medida, MVP, consultoria técnica"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contato — Miranda Labs',
          url: 'https://www.mirandalabs.com.br/contato',
          mainEntity: {
            '@type': 'Organization',
            name: 'Miranda Labs',
            email: 'mirandalabs.co@gmail.com',
            telephone: '+55-71-99972-3105',
            url: 'https://www.mirandalabs.com.br',
          },
        }}
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
