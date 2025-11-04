import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Capabilities } from './components/Capabilities';
import { Cases } from './components/Cases';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-[var(--bg)]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Capabilities />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>;
}