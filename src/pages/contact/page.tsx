import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Contact } from './components/Contact';

export function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
