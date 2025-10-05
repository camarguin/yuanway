'use client';

import { useTranslation } from './LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ShopInfo() {
  const { t } = useTranslation();
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.5, rootMargin: '-150px 0px' });
  const contentAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.3, rootMargin: '-100px 0px' });
  const servicesAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.3, rootMargin: '-100px 0px' });
  const noticeAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.5, rootMargin: '-100px 0px' });
  
  return (
    <section id="info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleAnimation.ref} className={`text-3xl md:text-4xl font-bold text-green-900 mb-6 font-serif scroll-animate ${titleAnimation.isVisible ? 'visible' : ''}`}>
            {t('shopInfoTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('shopInfoSubtitle')}
          </p>
        </div>

        <div ref={contentAnimation.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 scroll-animate ${contentAnimation.isVisible ? 'visible' : ''}`}>
          {/* Hours & Location */}
          <div className="space-y-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-6 font-serif flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('openingHours')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('mondayFriday')}</span>
                  <span className="text-green-800 font-semibold">{t('mondayFridayHours')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('saturday')}</span>
                  <span className="text-green-800 font-semibold">{t('saturdayHours')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('sunday')}</span>
                  <span className="text-green-800 font-semibold">{t('sundayHours')}</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-6 font-serif flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('location')}
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700">台北市士林區德行東路109巷98號</p>
                <p className="text-gray-700">No. 98號, Lane 109, Dexing E Rd</p>
                <p className="text-gray-700">Shilin District, Taipei City, Taiwan 111</p>
                <p className="text-green-800 font-semibold mt-4">
                  📞 {t('phone')}
                </p>
              </div>
            </div>
          </div>

          {/* Services & Features */}
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-6 font-serif">
              {t('whatWeOffer')}
            </h3>
            <div ref={servicesAnimation.ref} className={`grid grid-cols-1 sm:grid-cols-2 gap-6 scroll-animate-scale ${servicesAnimation.isVisible ? 'visible' : ''}`}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🍃</div>
                <h4 className="text-lg font-semibold text-green-900 mb-2">{t('premiumTeas')}</h4>
                <p className="text-gray-600 text-sm">{t('premiumTeasDesc')}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🫖</div>
                <h4 className="text-lg font-semibold text-green-900 mb-2">{t('teaAccessories')}</h4>
                <p className="text-gray-600 text-sm">{t('teaAccessoriesDesc')}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">👨‍🏫</div>
                <h4 className="text-lg font-semibold text-green-900 mb-2">{t('expertGuidance')}</h4>
                <p className="text-gray-600 text-sm">{t('expertGuidanceDesc')}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">☕</div>
                <h4 className="text-lg font-semibold text-green-900 mb-2">{t('teaTasting')}</h4>
                <p className="text-gray-600 text-sm">{t('teaTastingDesc')}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🎁</div>
                <h4 className="text-lg font-semibold text-green-900 mb-2">{t('giftSets')}</h4>
                <p className="text-gray-600 text-sm">{t('giftSetsDesc')}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="text-lg font-semibold text-green-900 mb-2">{t('teaEducation')}</h4>
                <p className="text-gray-600 text-sm">{t('teaEducationDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={noticeAnimation.ref} className={`mt-16 text-center bg-green-800 text-white p-8 rounded-lg scroll-animate ${noticeAnimation.isVisible ? 'visible' : ''}`}>
          <h3 className="text-2xl font-bold mb-4 font-serif">{t('specialNotice')}</h3>
          <p className="text-green-100 mb-4">
            {t('specialNoticeDesc')}
          </p>
          <p className="text-green-200 text-sm">
            {t('retailOnly')}
          </p>
        </div>
      </div>
    </section>
  );
}