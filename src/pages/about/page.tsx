import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import teamData from '@/data/team.json';

export function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero / Título */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Sobre nós</h1>
          <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed">
            A Miranda Labs nasceu em 2025 com foco em desenvolvimento de software. Fundada por três sócios
            apaixonados por tecnologia e determinados a transformar ideias ousadas em produtos reais, a empresa
            iniciou suas atividades com um projeto no mercado de games e rapidamente direcionou sua atuação para o
            setor de gestão. Hoje, seguimos firmes nessa trilha, entregando soluções que unem técnica, segurança e
            eficiência.
          </p>
          <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed mt-4">
            Temos alto nível técnico para construir sistemas práticos e completos que abrangem todas as áreas
            organizacionais de um negócio. Também mantemos excelência na implementação de padrões de segurança e
            infraestrutura exigidos pelo ambiente online. Conheça nossa equipe, solicite um orçamento e vamos tirar
            seus planos do abstrato.
          </p>
        </section>

        {/* Sócios */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Os Sócios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamData.map((member) => (
              <div key={member.name} className="rounded-2xl border border-[var(--muted)]/20 bg-[var(--panel)] p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <span className={`px-3 py-1 text-xs rounded-full ${member.role === 'CEO' ? 'bg-[var(--brand1)]/10 text-[var(--brand1)]' : member.role === 'CTO' ? 'bg-[var(--brand2)]/10 text-[var(--brand2)]' : 'bg-[var(--brand1)]/10 text-[var(--brand1)]'} font-medium`}>{member.role}</span>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Especialidades */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamData.map((member) => (
              <div key={member.name} className="rounded-2xl border border-[var(--muted)]/20 bg-[var(--panel)] p-6">
                <h3 className="text-lg font-semibold mb-3">{member.name}</h3>
                <ul className="list-disc pl-5 space-y-1 text-[var(--muted)]">
                  {member.specialties.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}