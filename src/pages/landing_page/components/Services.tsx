import {
  CodeIcon,
  LayersIcon,
  LightbulbIcon,
  PaletteIcon,
  RocketIcon,
  SearchIcon,
  ShieldIcon,
  SparklesIcon,
  TestTubeIcon,
  TrendingUpIcon,
  UsersIcon,
  ZapIcon,
  type LucideIcon,
} from 'lucide-react';
import servicesData from '../../../data/services.json';

const iconMap = {
  CodeIcon,
  LightbulbIcon,
  TrendingUpIcon,
  LayersIcon,
  ZapIcon,
  ShieldIcon,
  UsersIcon,
  RocketIcon,
  SearchIcon,
  PaletteIcon,
  TestTubeIcon,
  SparklesIcon,
} satisfies Record<string, LucideIcon>;

type IconName = keyof typeof iconMap;
type Subcard = { icon: IconName; title: string; description: string };
type Service = { title: string; icon: IconName; color: string; subcards: Subcard[] };

const services = servicesData as Service[];

function ServiceIcon({ name, size }: { name: IconName; size: number }) {
  const Icon = iconMap[name];
  return <Icon size={size} aria-hidden="true" />;
}

function hexWithAlpha(hex: string, alpha: string) {
  return `${hex}${alpha}`;
}

const serviceHighlights = [
  'Sistemas sob medida',
  'Integrações e APIs',
  'Automação de processos',
  'Dashboards operacionais',
];

export function Services() {
  return <section id="services" className="scroll-mt-24 py-20 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 mb-16 items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--text)]">
              Serviços para construir, validar e escalar
            </h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl">
              Entramos do diagnóstico ao deploy, com engenharia aplicada ao que
              precisa virar produto, operação ou vantagem competitiva.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {serviceHighlights.map((highlight) => (
              <div key={highlight} className="rounded-lg border border-[var(--muted)]/15 bg-[var(--panel)] px-4 py-3 text-sm font-medium text-[var(--text)]">
                {highlight}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => <article key={service.title} className="bg-[var(--panel)] rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[var(--muted)]/10">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{
            backgroundColor: hexWithAlpha(service.color, '20'),
            color: service.color
          }}>
                <ServiceIcon name={service.icon} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--text)]">
                {service.title}
              </h3>
              <div className="space-y-4">
                {service.subcards.map((subcard) => <div key={subcard.title} className="flex items-start space-x-3 p-4 bg-[var(--bg)]/50 rounded-lg hover:bg-[var(--bg)] transition-colors">
                    <div className="flex-shrink-0 mt-1" style={{
                color: service.color
              }}>
                      <ServiceIcon name={subcard.icon} size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text)] mb-1">
                        {subcard.title}
                      </h4>
                      <p className="text-sm text-[var(--muted)]">
                        {subcard.description}
                      </p>
                    </div>
                  </div>)}
              </div>
            </article>)}
        </div>
      </div>
    </section>;
}
