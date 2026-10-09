import { Header } from '../../components/Header';
import { SEO } from '../../components/SEO';
import { Hero } from './components/Hero';
import { Facts } from './components/Facts';
import { Problems } from './components/Problems';
import { Process } from './components/Process';
import { ConversationBand } from './components/ConversationBand';
import { Cases } from './components/Cases';
import { Products } from './components/Products';
import { AboutSnippet } from './components/AboutSnippet';
import { Budget } from './components/Budget';
import { Faq } from './components/Faq';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from '../../components/Footer';

const siteUrl = 'https://www.mirandalabs.com.br';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Miranda Labs',
  url: siteUrl,
  logo: `${siteUrl}/logo_miranda_labs.png`,
  foundingDate: '2025',
  areaServed: 'BR',
  sameAs: [
    'https://www.linkedin.com/company/miranda-labs',
    'https://www.instagram.com/miranda_labs.co/',
  ],
  founder: [
    { '@type': 'Person', name: 'Arthur Miranda', jobTitle: 'CEO', description: 'Backend' },
    { '@type': 'Person', name: 'Gabriel Miranda', jobTitle: 'CTO', description: 'Dados' },
    { '@type': 'Person', name: 'Gabriel São Pedro', jobTitle: 'COO', description: 'Front-end e UI/UX' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'mirandalabs.co@gmail.com',
    areaServed: 'BR',
    availableLanguage: ['Portuguese'],
  },
};

export function App() {
  return (
    <div className="w-full min-h-screen bg-[var(--bg)]">
      <SEO
        title="Miranda Labs | Software sob medida e produtos digitais"
        description="Sistemas de gestão, CRM, automações e plataformas web sob medida para pequenas empresas, e produtos por assinatura para eventos, nutrição e gestão escolar."
        canonical={siteUrl}
        keywords="software sob medida, desenvolvimento de sistemas, sistema de gestão, CRM, automação, plataformas web, produtos por assinatura"
        jsonLd={organizationJsonLd}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <Facts />
        <Problems />
        <Process />
        <ConversationBand />
        <Cases />
        <Products />
        <AboutSnippet />
        <Budget />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
