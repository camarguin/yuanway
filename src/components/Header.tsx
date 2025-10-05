"use client";

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from './LanguageContext';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-800 font-serif cursor-pointer">
              {t('shopName')}
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                {t('home')}
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                {t('about')}
              </Link>
              <Link href="#teas" className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                {t('teas')}
              </Link>
              <Link href="#info" className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                {t('info')}
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                {t('contact')}
              </Link>
            </div>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button className="text-gray-700 hover:text-green-800 focus:outline-none focus:text-green-800">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}