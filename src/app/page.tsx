"use client";

import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import TeaCatalog from '../components/TeaCatalog';
import ShopInfo from '../components/ShopInfo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <TeaCatalog />
        <ShopInfo />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
