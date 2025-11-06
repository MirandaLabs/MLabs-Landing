import { CodeIcon, LightbulbIcon, TrendingUpIcon, LayersIcon, ZapIcon, ShieldIcon, UsersIcon, RocketIcon, SearchIcon, PaletteIcon, TestTubeIcon, SparklesIcon } from 'lucide-react';
import servicesData from '../../../data/services.json';

type Subcard = { icon: keyof typeof iconMap; title: string; description: string };
type Service = { title: string; icon: keyof typeof iconMap; color: string; subcards: Subcard[] };
const iconMap: Record<string, (props: { size?: number }) => JSX.Element> = {
  CodeIcon: (p) => <CodeIcon {...p} />, 
  LightbulbIcon: (p) => <LightbulbIcon {...p} />, 
  TrendingUpIcon: (p) => <TrendingUpIcon {...p} />, 
  LayersIcon: (p) => <LayersIcon {...p} />, 
  ZapIcon: (p) => <ZapIcon {...p} />, 
  ShieldIcon: (p) => <ShieldIcon {...p} />, 
  UsersIcon: (p) => <UsersIcon {...p} />, 
  RocketIcon: (p) => <RocketIcon {...p} />, 
  SearchIcon: (p) => <SearchIcon {...p} />, 
  PaletteIcon: (p) => <PaletteIcon {...p} />, 
  TestTubeIcon: (p) => <TestTubeIcon {...p} />, 
  SparklesIcon: (p) => <SparklesIcon {...p} />
};

export function Services() {
  const services = servicesData as Service[];
  return <section id="services" className="py-20 sm:py-32 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--text)]">
            Nossos Serviços
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Soluções completas para levar seu produto ao próximo nível
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service, index: number) => <div key={index} className="bg-[var(--panel)] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[var(--muted)]/10">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{
            backgroundColor: `${service.color}20`,
            color: service.color
          }}>
                {iconMap[service.icon]?.({ size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--text)]">
                {service.title}
              </h3>
              <div className="space-y-4">
                {service.subcards.map((subcard: Subcard, subIndex: number) => <div key={subIndex} className="flex items-start space-x-3 p-4 bg-[var(--bg)]/50 rounded-lg hover:bg-[var(--bg)] transition-colors">
                    <div className="flex-shrink-0 mt-1" style={{
                color: service.color
              }}>
          {iconMap[subcard.icon]?.({ size: 20 })}
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
            </div>)}
        </div>
      </div>
    </section>;
}