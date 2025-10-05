'use client'

import Image from 'next/image'
import { useTranslation } from './LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const { t } = useTranslation()
  const titleAnimation = useScrollAnimation({ threshold: 0.5, rootMargin: '-150px 0px' })
  const contentAnimation = useScrollAnimation({ threshold: 0.3, rootMargin: '-100px 0px' })
  const featuresAnimation = useScrollAnimation({ threshold: 0.3, rootMargin: '-100px 0px' })
  return (
    <section
      id='about'
      className='py-20 bg-white relative overflow-hidden'
    >
      {/* Decorative leaf backgrounds */}
      <div className='absolute top-10 left-10 w-48 h-48 pointer-events-none opacity-35'>
        <Image 
          src='/images/tealeaf.svg' 
          alt='' 
          width={192} 
          height={192} 
          className='w-full h-full rotate-12 text-green-600' 
          style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(1500%) hue-rotate(80deg) brightness(95%) contrast(90%)'}}
        />
      </div>
      <div className='absolute top-40 right-20 w-36 h-36 pointer-events-none opacity-30'>
        <Image 
          src='/images/leaf2.svg' 
          alt='' 
          width={144} 
          height={144} 
          className='w-full h-full -rotate-45 text-green-500' 
          style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(1500%) hue-rotate(80deg) brightness(95%) contrast(90%)'}}
        />
      </div>
      <div className='absolute bottom-20 left-1/4 w-56 h-56 pointer-events-none opacity-25'>
        <Image 
          src='/images/leaf3.svg' 
          alt='' 
          width={224} 
          height={224} 
          className='w-full h-full rotate-90 text-green-700' 
          style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(1500%) hue-rotate(80deg) brightness(95%) contrast(90%)'}}
        />
      </div>
      {/* Additional smaller leaves for layering */}
      <div className='absolute top-60 left-60 w-20 h-20 pointer-events-none opacity-40'>
        <Image 
          src='/images/leaf2.svg' 
          alt='' 
          width={80} 
          height={80} 
          className='w-full h-full rotate-135' 
          style={{filter: 'brightness(0) saturate(100%) invert(35%) sepia(80%) saturate(1800%) hue-rotate(75deg) brightness(92%) contrast(88%)'}}
        />
      </div>
      <div className='absolute bottom-5 right-32 w-32 h-32 pointer-events-none opacity-28'>
        <Image 
          src='/images/leaf3.svg' 
          alt='' 
          width={128} 
          height={128} 
          className='w-full h-full -rotate-20' 
          style={{filter: 'brightness(0) saturate(100%) invert(25%) sepia(90%) saturate(1400%) hue-rotate(78deg) brightness(88%) contrast(92%)'}}
        />
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-green-900 mb-6 font-serif'>
            {t('aboutTitle')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t('aboutSubtitle')}</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div 
            ref={contentAnimation.ref}
            className={`scroll-animate-left ${contentAnimation.isVisible ? 'visible' : ''}`}
          >
            <h3 className='text-2xl font-bold text-green-900 mb-6 font-serif'>
              {t('ourStory')}
            </h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>{t('aboutStory1')}</p>
            <p className='text-gray-600 mb-6 leading-relaxed'>{t('aboutStory2')}</p>
            <p className='text-gray-600 leading-relaxed'>{t('aboutStory3')}</p>
          </div>

          <div 
            ref={featuresAnimation.ref}
            className={`bg-green-50 p-8 rounded-lg scroll-animate-right ${featuresAnimation.isVisible ? 'visible' : ''}`}
          >
            <h3 className='text-2xl font-bold text-green-900 mb-6 font-serif'>
              {t('whyChoose')}
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <div className='flex-shrink-0 w-6 h-6 bg-green-800 rounded-full flex items-center justify-center mr-4 mt-1'>
                  <svg
                    className='w-3 h-3 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold text-green-900 mb-2'>
                    {t('premiumQuality')}
                  </h4>
                  <p className='text-gray-600'>{t('premiumQualityDesc')}</p>
                </div>
              </li>
              <li className='flex items-start'>
                <div className='flex-shrink-0 w-6 h-6 bg-green-800 rounded-full flex items-center justify-center mr-4 mt-1'>
                  <svg
                    className='w-3 h-3 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold text-green-900 mb-2'>
                    {t('expertCuration')}
                  </h4>
                  <p className='text-gray-600'>{t('expertCurationDesc')}</p>
                </div>
              </li>
              <li className='flex items-start'>
                <div className='flex-shrink-0 w-6 h-6 bg-green-800 rounded-full flex items-center justify-center mr-4 mt-1'>
                  <svg
                    className='w-3 h-3 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold text-green-900 mb-2'>
                    {t('sustainableSourcing')}
                  </h4>
                  <p className='text-gray-600'>{t('sustainableSourcingDesc')}</p>
                </div>
              </li>
              <li className='flex items-start'>
                <div className='flex-shrink-0 w-6 h-6 bg-green-800 rounded-full flex items-center justify-center mr-4 mt-1'>
                  <svg
                    className='w-3 h-3 text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-semibold text-green-900 mb-2'>{t('personalService')}</h4>
                  <p className='text-gray-600'>
                    {t('personalServiceDesc')}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
