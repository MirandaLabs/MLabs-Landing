import { CheckCircleIcon } from 'lucide-react';
export function Capabilities() {
  const capabilities = ['Stack completo: React, Node.js, Python, TypeScript, AWS, Docker', 'Metodologias ágeis com entregas incrementais', 'Código limpo, testado e documentado', 'Design system e componentes reutilizáveis', 'Performance e otimização desde o início', 'Segurança e compliance (LGPD, GDPR)', 'CI/CD e automação de deploys', 'Monitoramento e analytics integrados'];
  return <section id="capabilities" className="py-20 sm:py-32 bg-[var(--panel)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[var(--text)]">
              Nossas Capacidades
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8">
              Combinamos expertise técnica com visão de produto para entregar
              soluções que realmente funcionam
            </p>
            <div className="space-y-4">
              {capabilities.map((capability, index) => <div key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon size={24} className="flex-shrink-0 mt-1 text-[var(--ok)]" />
                  <p className="text-[var(--text)] font-medium">{capability}</p>
                </div>)}
            </div>
          </div>
          
        </div>
      </div>
    </section>;
}