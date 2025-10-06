'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
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

const allTeas: Tea[] = [
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

// Individual tea item component to handle hook properly
function TeaItem({ tea, index }: { tea: Tea; index: number }) {
  const { t } = useTranslation()
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 640)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  
  const itemAnimation = useScrollAnimation({ 
    threshold: isMobileScreen ? 0.01 : 0.05, 
    rootMargin: isMobileScreen ? '150px 0px 150px 0px' : '50px 0px 50px 0px'
  })

  // Helper function to safely get translations for tea keys
  const getTeaTranslation = (key: string): string => {
    try {
      return (t as (key: string) => string)(key) || key
    } catch {
      return key
    }
  }

  return (
    <div
      ref={itemAnimation.ref}
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-animate ${itemAnimation.isVisible || isMobileScreen ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center overflow-hidden relative">
        <Image
          src={tea.image}
          alt={getTeaTranslation(tea.nameKey)}
          width={300}
          height={300}
          className="w-full h-full object-contain p-2 sm:p-4 hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
          {tea.price}
        </div>
      </div>
      <div className="p-3 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 font-serif">
          {getTeaTranslation(tea.nameKey)}
        </h3>
        <div className="flex items-center mb-3 text-xs sm:text-sm text-gray-600">
          <span className="font-medium">{getTeaTranslation(tea.typeKey)}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span>{getTeaTranslation(tea.originKey)}</span>
        </div>
        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
          {getTeaTranslation(tea.descriptionKey)}
        </p>
        <div className="mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm font-medium text-green-800 mb-1">
            {t('flavorProfile')}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 italic">
            {getTeaTranslation(tea.flavorKey)}
          </p>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-green-600">
            {tea.price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TeaCatalogPage() {
  const { t } = useTranslation()
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 640) // sm breakpoint
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])
  
  const heroAnimation = useScrollAnimation({ 
    threshold: isMobileScreen ? 0.01 : 0.05, 
    rootMargin: isMobileScreen ? '100px 0px 100px 0px' : '50px 0px 50px 0px' 
  })
  const gridAnimation = useScrollAnimation({ 
    threshold: isMobileScreen ? 0.01 : 0.05, 
    rootMargin: isMobileScreen ? '100px 0px 100px 0px' : '50px 0px 50px 0px' 
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden -mt-20 pt-24 sm:pt-28 lg:pt-32">
        {/* Decorative leaf backgrounds */}
        <div className='absolute top-8 sm:top-16 right-4 sm:right-10 w-32 h-32 sm:w-52 sm:h-52 pointer-events-none opacity-20'>
          <Image src='/images/leaf2.svg' alt='' width={208} height={208} className='w-full h-full -rotate-12' 
            style={{filter: 'brightness(0) saturate(100%) invert(15%) sepia(100%) saturate(1200%) hue-rotate(80deg) brightness(90%) contrast(95%)'}}
          />
        </div>
        <div className='absolute top-32 sm:top-60 left-4 sm:left-8 w-24 h-24 sm:w-40 sm:h-40 pointer-events-none opacity-25'>
          <Image src='/images/leaf3.svg' alt='' width={160} height={160} className='w-full h-full rotate-45' 
            style={{filter: 'brightness(0) saturate(100%) invert(25%) sepia(80%) saturate(1400%) hue-rotate(75deg) brightness(92%) contrast(88%)'}}
          />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div 
            ref={heroAnimation.ref}
            className={`text-center scroll-animate ${heroAnimation.isVisible || isMobileScreen ? 'visible' : ''}`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-4 sm:mb-6 font-serif">
              {t('teaCollectionTitle')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12">
              {t('teaCollectionSubtitle')}
            </p>
            <div className="w-16 sm:w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Tea Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
        {/* More decorative leaves */}
        <div className='absolute bottom-32 right-1/3 w-44 h-44 pointer-events-none opacity-15'>
          <Image src='/images/tealeaf.svg' alt='' width={176} height={176} className='w-full h-full -rotate-90' 
            style={{filter: 'brightness(0) saturate(100%) invert(18%) sepia(95%) saturate(1600%) hue-rotate(78deg) brightness(88%) contrast(92%)'}}
          />
        </div>
        <div className='absolute top-40 left-16 w-36 h-36 pointer-events-none opacity-18'>
          <Image src='/images/leaf2.svg' alt='' width={144} height={144} className='w-full h-full rotate-75' 
            style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(1500%) hue-rotate(80deg) brightness(95%) contrast(90%)'}}
          />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div 
            ref={gridAnimation.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 scroll-animate ${gridAnimation.isVisible || isMobileScreen ? 'visible' : ''}`}
          >
            {allTeas.map((tea, index) => (
              <TeaItem key={tea.id} tea={tea} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-green-900 mb-4 font-serif">
                {t('visitShopCta')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('visitShopDesc')}
              </p>
              <a 
                href={`https://maps.google.com/maps?daddr=${encodeURIComponent(t('address'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                {t('visitShopCta')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}