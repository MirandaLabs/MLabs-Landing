import { Header } from '../../components/Header';
import { SEO } from '../../components/SEO';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Capabilities } from './components/Capabilities';
import { Process } from './components/Process';
import { Cases } from './components/Cases';
import { AboutSnippet } from './components/AboutSnippet';
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
    { '@type': 'Person', name: 'Arthur Miranda', jobTitle: 'CEO' },
    { '@type': 'Person', name: 'Gabriel Miranda', jobTitle: 'CTO' },
    { '@type': 'Person', name: 'Gabriel São Pedro', jobTitle: 'COO' },
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
        title="Miranda Labs | Software sob medida e produto digital"
        description="Miranda Labs desenvolve sistemas, MVPs, automações e dashboards para empresas que precisam escalar com segurança, produto e engenharia."
        canonical={siteUrl}
        keywords="software sob medida, desenvolvimento de sistemas, MVP, SaaS, automação, dashboards, engenharia de software, LGPD"
        jsonLd={organizationJsonLd}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Capabilities />
        <Process />
        <Cases />
        <AboutSnippet />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
