'use client'

import { useTranslation } from './LanguageContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const { t } = useTranslation()
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>({
    threshold: 0.5,
    rootMargin: '-150px 0px',
  })
  const contactMethodsAnimation = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: '-100px 0px',
  })
  const formAnimation = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: '-100px 0px',
  })

  const handleLineContact = () => {
    // This will open Line app if available, or redirect to Line's web interface
    window.open('https://line.me/ti/p/YOUR_LINE_ID', '_blank')
  }

  return (
    <section
      id='contact'
      className='py-20 bg-green-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2
            ref={titleAnimation.ref}
            className={`text-3xl md:text-4xl font-bold text-green-900 mb-6 font-serif scroll-animate ${
              titleAnimation.isVisible ? 'visible' : ''
            }`}
          >
            {t('contactTitle')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('contactSubtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Methods */}
          <div className='space-y-8'>
            <div
              ref={contactMethodsAnimation.ref}
              className={`bg-white p-8 rounded-lg shadow-md scroll-animate ${
                contactMethodsAnimation.isVisible ? 'visible' : ''
              }`}
            >
              <h3 className='text-2xl font-bold text-green-900 mb-6 font-serif'>
                {t('contactMethods')}
              </h3>

              {/* Line Contact */}
              <div className='mb-8'>
                <h4 className='text-lg font-semibold text-green-800 mb-4 flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 48 48'
                    className='w-6 h-6 mr-3 text-green-600'
                  >
                    <path
                      fill='#00c300'
                      d='M12.5,42h23c3.59,0,6.5-2.91,6.5-6.5v-23C42,8.91,39.09,6,35.5,6h-23C8.91,6,6,8.91,6,12.5v23C6,39.09,8.91,42,12.5,42z'
                    ></path>
                    <path
                      fill='#fff'
                      d='M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001C36.203,26.879,37.113,24.764,37.113,22.417z M18.875,25.907h-2.604c-0.379,0-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687c0.379,0,0.687,0.308,0.687,0.687v4.521h1.917c0.379,0,0.687,0.308,0.687,0.687C19.562,25.598,19.254,25.907,18.875,25.907z M21.568,25.219c0,0.379-0.308,0.688-0.687,0.688s-0.687-0.308-0.687-0.688V20.01c0-0.379,0.308-0.687,0.687-0.687s0.687,0.308,0.687,0.687V25.219z M27.838,25.219c0,0.297-0.188,0.559-0.47,0.652c-0.071,0.024-0.145,0.036-0.218,0.036c-0.215,0-0.42-0.103-0.549-0.275l-2.669-3.635v3.222c0,0.379-0.308,0.688-0.688,0.688c-0.379,0-0.688-0.308-0.688-0.688V20.01c0-0.296,0.189-0.558,0.47-0.652c0.071-0.024,0.144-0.035,0.218-0.035c0.214,0,0.42,0.103,0.549,0.275l2.67,3.635V20.01c0-0.379,0.309-0.687,0.688-0.687c0.379,0,0.687,0.308,0.687,0.687V25.219z M32.052,21.927c0.379,0,0.688,0.308,0.688,0.688c0,0.379-0.308,0.687-0.688,0.687h-1.917v1.23h1.917c0.379,0,0.688,0.308,0.688,0.687c0,0.379-0.309,0.688-0.688,0.688h-2.604c-0.378,0-0.687-0.308-0.687-0.688v-2.603c0-0.001,0-0.001,0-0.001c0,0,0-0.001,0-0.001v-2.601c0-0.001,0-0.001,0-0.002c0-0.379,0.308-0.687,0.687-0.687h2.604c0.379,0,0.688,0.308,0.688,0.687s-0.308,0.687-0.688,0.687h-1.917v1.23H32.052z'
                    ></path>
                  </svg>
                  {t('lineMessaging')}
                </h4>
                <p className='text-gray-600 mb-4'>{t('lineDesc')}</p>
                <button
                  onClick={handleLineContact}
                  className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center cursor-pointer'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12.017 0C5.396 0 .029 4.954.029 11.065c0 1.941.543 3.755 1.489 5.313L.029 24l7.735-2.544c1.56.876 3.373 1.379 5.253 1.379 6.621 0 11.988-4.954 11.988-11.065C24.005 4.954 18.638.001 12.017.001zm5.568 15.402c-.22 0-.4-.16-.4-.36 0-.199.18-.359.4-.359s.4.16.4.359c0 .2-.18.36-.4.36zm-3.27-1.514c-.22 0-.4-.16-.4-.36s.18-.36.4-.36.4.16.4.36-.18.36-.4.36zm-3.27 0c-.22 0-.4-.16-.4-.36s.18-.36.4-.36.4.16.4.36-.18.36-.4.36z' />
                  </svg>
                  {t('lineButton')}
                </button>
                <p className='text-sm text-gray-500 mt-2'>{t('lineId')}</p>
              </div>

              {/* Phone */}
              <div className='mb-8'>
                <h4 className='text-lg font-semibold text-green-800 mb-4 flex items-center'>
                  <svg
                    className='w-6 h-6 mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  {t('phoneTitle')}
                </h4>
                <a
                  href='tel:+886228319249'
                  className='text-green-800 hover:text-green-900 font-semibold mb-2 block transition-colors'
                >
                  {t('phone')}
                </a>
                <p className='text-sm text-gray-500'>{t('phoneAvailable')}</p>
              </div>

              {/* Visit Us */}
              <div>
                <h4 className='text-lg font-semibold text-green-800 mb-4 flex items-center'>
                  <svg
                    className='w-6 h-6 mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  {t('visitUs')}
                </h4>
                <p className='text-gray-600 mb-2'>台北市士林區德行東路109巷98號</p>
                <p className='text-gray-600 mb-2'>No. 98號, Lane 109, Dexing E Rd</p>
                <p className='text-gray-600 mb-4'>
                  Shilin District, Taipei City, Taiwan 111
                </p>

                <p className='text-sm text-gray-500'>{t('visitUsDesc')}</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div
            ref={formAnimation.ref}
            className={`bg-white p-8 rounded-lg shadow-md scroll-animate ${
              formAnimation.isVisible ? 'visible' : ''
            }`}
          >
            <h3 className='text-2xl font-bold text-green-900 mb-6 font-serif'>
              {t('sendMessage')}
            </h3>
            <p className='text-gray-600 mb-6'>{t('sendMessageDesc')}</p>

            <form className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  {t('nameLabel')}
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  placeholder={t('namePlaceholder')}
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  {t('contactMethodLabel')}
                </label>
                <select className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'>
                  <option>Line</option>
                  <option>Phone</option>
                  <option>Email</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  {t('contactInfoLabel')}
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  placeholder={t('contactInfoPlaceholder')}
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  {t('messageLabel')}
                </label>
                <textarea
                  rows={4}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  placeholder={t('messagePlaceholder')}
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-green-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-900 transition-colors cursor-pointer'
              >
                {t('sendButton')}
              </button>
            </form>

            <div className='mt-6 text-center'>
              <p className='text-sm text-gray-500'>{t('responseTime')}</p>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className='mt-16'>
          <h3 className='text-2xl font-bold text-green-900 mb-6 font-serif text-center'>
            {t('findUs')}
          </h3>
          <div className='bg-white p-4 rounded-lg shadow-md'>
            <div className='relative w-full h-96 rounded-lg overflow-hidden'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.72776332415!2d121.52824700035717!3d25.110681533369235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae84e3ffb7ef%3A0x96caa14b1a9f11b7!2z57ej5ZGz6Iy26I6K!5e0!3m2!1sen!2sca!4v1759088766257!5m2!1sen!2sca'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='緣味茶莊 Location'
              />
            </div>
            <div className='mt-4 text-center'>
              <p className='text-gray-600 text-sm mb-2'>{t('mapDirections')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
