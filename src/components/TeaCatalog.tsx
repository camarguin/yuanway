'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from './LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Tea {
  id: number
  nameKey: string
  typeKey: string
  originKey: string
  descriptionKey: string
  price: string
  image: string
  flavorKey: string
}

const teas: Tea[] = [
  {
    id: 1,
    nameKey: 'dragonWellName',
    typeKey: 'dragonWellType',
    originKey: 'dragonWellOrigin',
    descriptionKey: 'dragonWellDesc',
    price: 'NT$780',
    image: '/images/tea1.png',
    flavorKey: 'dragonWellFlavor',
  },
  {
    id: 2,
    nameKey: 'earlGreyName',
    typeKey: 'earlGreyType',
    originKey: 'earlGreyOrigin',
    descriptionKey: 'earlGreyDesc',
    price: 'NT$620',
    image: '/images/tea2.png',
    flavorKey: 'earlGreyFlavor',
  },
  {
    id: 3,
    nameKey: 'himalayanGoldName',
    typeKey: 'himalayanGoldType',
    originKey: 'himalayanGoldOrigin',
    descriptionKey: 'himalayanGoldDesc',
    price: 'NT$1,050',
    image: '/images/tea3.png',
    flavorKey: 'himalayanGoldFlavor',
  },
  {
    id: 4,
    nameKey: 'jasminePearlsName',
    typeKey: 'jasminePearlsType',
    originKey: 'jasminePearlsOrigin',
    descriptionKey: 'jasminePearlsDesc',
    price: 'NT$920',
    image: '/images/tea4.png',
    flavorKey: 'jasminePearlsFlavor',
  },
  {
    id: 5,
    nameKey: 'royalPuerhName',
    typeKey: 'royalPuerhType',
    originKey: 'royalPuerhOrigin',
    descriptionKey: 'royalPuerhDesc',
    price: 'NT$1,450',
    image: '/images/tea5.png',
    flavorKey: 'royalPuerhFlavor',
  },
  {
    id: 6,
    nameKey: 'whiteMoonlightName',
    typeKey: 'whiteMoonlightType',
    originKey: 'whiteMoonlightOrigin',
    descriptionKey: 'whiteMoonlightDesc',
    price: 'NT$1,220',
    image: '/images/tea6.png',
    flavorKey: 'whiteMoonlightFlavor',
  },
]

export default function TeaCatalog() {
  const { t } = useTranslation()
  const titleAnimation = useScrollAnimation({ threshold: 0.5, rootMargin: '-150px 0px' })
  const gridAnimation = useScrollAnimation({ threshold: 0.2, rootMargin: '-50px 0px' })

  // Helper function to safely get translations for tea keys
  const getTeaTranslation = (key: string): string => {
    try {
      return (t as (key: string) => string)(key) || key
    } catch {
      return key
    }
  }

  return (
    <section
      id='teas'
      className='py-20 bg-gray-50 relative overflow-hidden'
    >
      {/* Decorative leaf backgrounds */}
      <div className='absolute top-16 right-10 w-52 h-52 pointer-events-none opacity-35'>
        <Image
          src='/images/leaf2.svg'
          alt=''
          width={208}
          height={208}
          className='w-full h-full -rotate-12'
          style={{
            filter:
              'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(1200%) hue-rotate(80deg) brightness(90%) contrast(95%)',
          }}
        />
      </div>
      <div className='absolute top-60 left-8 w-40 h-40 pointer-events-none opacity-40'>
        <Image
          src='/images/leaf3.svg'
          alt=''
          width={160}
          height={160}
          className='w-full h-full rotate-45'
          style={{
            filter:
              'brightness(0) saturate(100%) invert(25%) sepia(80%) saturate(1400%) hue-rotate(75deg) brightness(92%) contrast(88%)',
          }}
        />
      </div>
      <div className='absolute bottom-32 right-1/3 w-44 h-44 pointer-events-none opacity-32'>
        <Image
          src='/images/tealeaf.svg'
          alt=''
          width={176}
          height={176}
          className='w-full h-full -rotate-90'
          style={{
            filter:
              'brightness(0) saturate(100%) invert(18%) sepia(95%) saturate(1600%) hue-rotate(78deg) brightness(88%) contrast(92%)',
          }}
        />
      </div>
      {/* Extra large leaf for dramatic effect */}
      <div className='absolute top-5 left-1/3 w-64 h-64 pointer-events-none opacity-20'>
        <Image
          src='/images/leaf3.svg'
          alt=''
          width={256}
          height={256}
          className='w-full h-full rotate-20'
          style={{
            filter:
              'brightness(0) saturate(100%) invert(22%) sepia(85%) saturate(1300%) hue-rotate(82deg) brightness(88%) contrast(90%)',
          }}
        />
      </div>
      <div className='absolute bottom-10 left-16 w-36 h-36 pointer-events-none opacity-30'>
        <Image
          src='/images/leaf2.svg'
          alt=''
          width={144}
          height={144}
          className='w-full h-full rotate-75'
          style={{
            filter:
              'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(1500%) hue-rotate(80deg) brightness(95%) contrast(90%)',
          }}
        />
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-16 scroll-animate ${
            titleAnimation.isVisible ? 'visible' : ''
          }`}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-green-900 mb-6 font-serif'>
            {t('teaCollectionTitle')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('teaCollectionSubtitle')}
          </p>
        </div>

        <div
          ref={gridAnimation.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate-scale ${
            gridAnimation.isVisible ? 'visible' : ''
          }`}
        >
          {teas.map((tea, index) => (
            <div
              key={tea.id}
              className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'
              style={{
                animationDelay: gridAnimation.isVisible ? `${index * 0.1}s` : '0s',
              }}
            >
              <div className='h-64 bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center overflow-hidden relative'>
                <Image
                  src={tea.image}
                  alt={getTeaTranslation(tea.nameKey)}
                  fill
                  className='object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-xl font-bold text-green-900 font-serif'>
                    {getTeaTranslation(tea.nameKey)}
                  </h3>
                  <span className='text-lg font-semibold text-green-800'>
                    {tea.price}
                  </span>
                </div>
                <p className='text-sm text-green-600 mb-2'>
                  {getTeaTranslation(tea.typeKey)} • {getTeaTranslation(tea.originKey)}
                </p>
                <p className='text-gray-600 mb-4 text-sm leading-relaxed'>
                  {getTeaTranslation(tea.descriptionKey)}
                </p>
                <div className='border-t pt-4'>
                  <p className='text-xs text-gray-500 mb-2'>{t('flavorProfile')}</p>
                  <p className='text-sm text-green-800 font-medium'>
                    {getTeaTranslation(tea.flavorKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <p className='text-gray-600 mb-6'>{t('visitShopDesc')}</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link 
              href="/teas"
              className='inline-block bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-800 transition-colors cursor-pointer'
            >
              {t('exploreTeas')}
            </Link>
            <a 
              href={`https://maps.google.com/maps?daddr=${encodeURIComponent(t('address'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className='inline-block bg-green-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-900 transition-colors cursor-pointer'
            >
              {t('visitShopCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
