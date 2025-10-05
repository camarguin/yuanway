'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from './LanguageContext'

export default function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <header className='bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5 sticky top-0 z-50'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='flex items-center space-x-3 cursor-pointer'
            >
              <Image
                src='/images/TeaShopLogo.png'
                alt='Tea Shop Logo'
                width={64}
                height={64}
                className='w-16 h-16 object-contain'
              />
              <span className='text-2xl font-bold text-green-800 font-serif'>
                <span className='hidden sm:inline'>{t('shopName')}</span>
                <span className='sm:hidden'>{t('shopNameShort')}</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <div className='flex items-baseline space-x-8'>
              <Link
                href='/#home'
                className='text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer'
              >
                {t('home')}
              </Link>
              <Link
                href='/#about'
                className='text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer'
              >
                {t('about')}
              </Link>
              <Link
                href='/#teas'
                className='text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer'
              >
                {t('teas')}
              </Link>
              <Link
                href='/#info'
                className='text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer'
              >
                {t('info')}
              </Link>
              <Link
                href='/#contact'
                className='text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer'
              >
                {t('contact')}
              </Link>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-2'>
            <LanguageSwitcher />
            <button 
              onClick={toggleMenu}
              className='text-gray-700 hover:text-green-800 focus:outline-none focus:text-green-800'
              aria-label='Toggle menu'
            >
              <svg
                className='h-6 w-6'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200'>
              <Link
                href='/#home'
                onClick={closeMenu}
                className='text-gray-700 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer'
              >
                {t('home')}
              </Link>
              <Link
                href='/#about'
                onClick={closeMenu}
                className='text-gray-700 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer'
              >
                {t('about')}
              </Link>
              <Link
                href='/#teas'
                onClick={closeMenu}
                className='text-gray-700 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer'
              >
                {t('teas')}
              </Link>
              <Link
                href='/#info'
                onClick={closeMenu}
                className='text-gray-700 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer'
              >
                {t('info')}
              </Link>
              <Link
                href='/#contact'
                onClick={closeMenu}
                className='text-gray-700 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer'
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
