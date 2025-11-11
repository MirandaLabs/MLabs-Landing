import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import casesData from '@/data/cases.json';

type RelatedCasesProps = {
  currentCaseId: string;
};

export function RelatedCases({ currentCaseId }: RelatedCasesProps) {
  const relatedCases = casesData
    .filter((c) => c.id !== currentCaseId)
    .slice(0, 2);

  if (relatedCases.length === 0) return null;

  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[var(--text)]">
          Outros Projetos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {relatedCases.map((caseItem) => (
            <Link
              key={caseItem.id}
              to={`/case/${caseItem.id}`}
              className="group bg-[var(--panel)] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[var(--muted)]/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseItem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[var(--brand1)]/20 text-[var(--brand1)] text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text)]">
                  {caseItem.title}
                </h3>
                <p className="text-[var(--muted)] mb-4 leading-relaxed">
                  {caseItem.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--brand2)] font-semibold">
                    {caseItem.results}
                  </span>
                  <span className="flex items-center space-x-2 text-[var(--brand1)] group-hover:text-[var(--brand2)] transition-colors font-medium">
                    <span>Ver detalhes</span>
                    <ArrowRightIcon size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
