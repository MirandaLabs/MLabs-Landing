type EcosystemCardProps = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export function EcosystemCard({ icon, title, description, features }: EcosystemCardProps) {
  return (
    <div className="bg-[var(--panel)] rounded-2xl p-8 border border-[var(--muted)]/10 hover:border-[var(--brand1)]/30 transition-all duration-300 hover:shadow-xl">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-[var(--text)]">{title}</h3>
      <p className="text-[var(--muted)] mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 text-[var(--muted)]">
            <span className="text-[var(--brand1)] mt-1">•</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
