'use client'

import Image from 'next/image'
import { useTranslation } from './LanguageContext'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className='bg-green-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/images/TeaShopLogo.png" 
                alt="Tea Shop Logo" 
                width={80} 
                height={80} 
                className="w-20 h-20 object-contain"
              />
              <h3 className='text-2xl font-bold font-serif'>{t('shopName')}</h3>
            </div>
            <p className='text-green-100 mb-4'>{t('footerDesc')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>{t('quickLinks')}</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-green-200 hover:text-white transition-colors cursor-pointer'
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-green-200 hover:text-white transition-colors cursor-pointer'
                >
                  {t('about')}
                </a>
              </li>
              <li>
                <a
                  href='#teas'
                  className='text-green-200 hover:text-white transition-colors cursor-pointer'
                >
                  {t('teas')}
                </a>
              </li>
              <li>
                <a
                  href='#info'
                  className='text-green-200 hover:text-white transition-colors cursor-pointer'
                >
                  {t('info')}
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-green-200 hover:text-white transition-colors cursor-pointer'
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>{t('contactInfo')}</h4>
            <div className='space-y-2'>
              <p className='text-green-200'>
                📍 台北市士林區德行東路109巷98號
                <br />
                No. 98號, Lane 109, Dexing E Rd
                <br />
                Shilin District, Taipei City, Taiwan 111
              </p>
              <p className='text-green-200'>📞 {t('phone')}</p>
              <p className='text-green-200'>💬 Line: @yuanweiteahouse</p>
            </div>
          </div>
        </div>

        <div className='border-t border-green-800 mt-8 pt-8'>
          <div className='flex justify-between items-center'>
            <div></div>
            <p className='text-green-200 text-sm absolute left-1/2 transform -translate-x-1/2'>
              {t('copyright')}
            </p>
            <div className='flex items-center'>
              {/* <span className='text-white text-sm mr-2'>Developed by</span>
              <Image
                src='/images/LGCLogo.png'
                alt='LGC Logo'
                width={32}
                height={32}
                className='h-8 w-auto'
              /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
