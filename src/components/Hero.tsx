'use client'

import Image from 'next/image'
import { useTranslation } from './LanguageContext'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='home'
      className='relative h-screen overflow-hidden bg-cover bg-left bg-no-repeat -mt-16'
      style={{
        backgroundImage: 'url(/images/heroBackground.jpg)',
        filter: 'blur(0)',
      }}
    >
      {/* Background blur overlay */}
      <div
        className='absolute inset-0 bg-cover bg-left bg-no-repeat backdrop-blur-sm'
        style={{
          backgroundImage: 'url(/images/heroBackground.jpg)',
          filter: 'blur(2px)',
        }}
      ></div>

      {/* Strong overlay for better text readability */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60'></div>

      {/* Additional white overlay on the left for text area */}
      <div className='absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent lg:from-white/90 lg:via-white/30 lg:to-transparent'></div>

      {/* Animated tea leaves floating */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-10 text-6xl opacity-20 animate-float-slow'>
          🍃
        </div>
        <div className='absolute top-40 right-20 text-4xl opacity-30 animate-float-medium delay-1000'>
          🍃
        </div>
        <div className='absolute bottom-32 left-32 text-5xl opacity-25 animate-float-slow delay-2000'>
          🍃
        </div>
        <div className='absolute top-60 left-1/3 text-3xl opacity-20 animate-float-fast delay-500'>
          🍃
        </div>
      </div>

      <div className='relative z-10 h-full flex items-center pt-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full'>
            {/* Left Content */}
            <div className='text-left space-y-8'>
              {/* Brand Tag */}
              <div
                className={`transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className='inline-block px-4 py-2 bg-amber-200 text-amber-900 text-sm font-bold rounded-full mb-6 tracking-wider uppercase shadow-md'>
                  緣味茶莊
                </span>
              </div>

              {/* Main Title */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 drop-shadow-lg'>
                  {t('heroMainTitle')}
                </h1>
              </div>

              {/* Subtitle */}
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p className='text-lg md:text-xl text-gray-800 leading-relaxed max-w-xl font-medium drop-shadow-md'>
                  {t('heroSubtitle')}
                </p>
              </div>

              {/* CTA Button */}
              <div
                className={`transition-all duration-1000 delay-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <button className='group bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer'>
                  <span className='flex items-center space-x-2'>
                    <span>{t('exploreTeas')}</span>
                    <svg
                      className='w-5 h-5 transform group-hover:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Tea Cups with Animation */}
            <div className='relative h-full flex items-center justify-center lg:justify-end'>
              <div
                className={`transition-all duration-1500 delay-1000 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                {/* Main tea cup */}
                <div className='relative animate-float-slow'>
                  <div className='w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 shadow-2xl flex items-center justify-center'>
                    <div className='w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shadow-inner'>
                      <div className='text-8xl md:text-9xl'>🍵</div>
                    </div>
                  </div>

                  {/* Steam animation */}
                  <div className='absolute -top-8 left-1/2 transform -translate-x-1/2'>
                    <div className='animate-steam opacity-60'>
                      <div className='w-1 h-8 bg-gradient-to-t from-gray-400 to-transparent rounded-full animate-pulse'></div>
                    </div>
                    <div className='animate-steam opacity-40 ml-3 -mt-6 delay-500'>
                      <div className='w-1 h-6 bg-gradient-to-t from-gray-400 to-transparent rounded-full animate-pulse'></div>
                    </div>
                    <div className='animate-steam opacity-50 -ml-2 -mt-4 delay-1000'>
                      <div className='w-1 h-7 bg-gradient-to-t from-gray-400 to-transparent rounded-full animate-pulse'></div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className='absolute -top-10 -right-10 w-20 h-20 bg-green-200 rounded-full opacity-50 animate-pulse'></div>
                <div className='absolute -bottom-8 -left-8 w-16 h-16 bg-amber-200 rounded-full opacity-40 animate-pulse delay-1000'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Animation */}
      <div className='absolute bottom-8 right-8 z-20'>
        <button
          onClick={scrollToNextSection}
          className='group flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer'
        >
          <span className='text-sm font-medium tracking-wider rotate-90 whitespace-nowrap transform origin-center'>
            SCROLL DOWN
          </span>
          <div className='flex flex-col space-y-1'>
            <div className='w-0.5 h-8 bg-gray-400 animate-scroll-line'></div>
            <div className='w-3 h-3 rounded-full border-2 border-gray-400 group-hover:border-gray-600 transition-colors animate-bounce-slow'></div>
          </div>
        </button>
      </div>
    </section>
  )
}
