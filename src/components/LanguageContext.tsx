'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'zh-TW'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh-TW')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translation object
export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    teas: 'Our Teas',
    info: 'Shop Info',
    contact: 'Contact',

    // Hero Section
    heroTitle: 'Premium Tea Collection',
    heroMainTitle: 'Fresh From Our Tea Gardens To Your Cup',
    heroSubtitle:
      'Discover the finest selection of loose leaf teas from around the world, carefully curated for tea enthusiasts who appreciate quality and tradition.',
    exploreTeas: 'Explore Our Teas',
    visitShop: 'Visit Our Shop',

    // About Section
    aboutTitle: 'About Our Tea Shop',
    aboutSubtitle: 'Passion for tea excellence since our beginning',
    ourStory: 'Our Story',
    aboutStory1:
      'Founded with a deep passion for Taiwan’s tea culture, our shop is dedicated to sharing the beauty and tradition of Taiwanese tea with the world. We believe tea is more than a beverage — it’s a moment of peace, a connection to nature, and a reflection of our island’s spirit.',
    aboutStory2:
      'Each tea in our collection is carefully selected from family-run farms across Taiwan’s mountain regions — from the fragrant high-mountain oolongs of Alishan to the smooth, golden notes of Sun Moon Lake black tea. Every leaf carries the story of our land, our climate, and generations of craftsmanship.',
    aboutStory3:
      'Whether you’re a lifelong tea lover or discovering Taiwanese tea for the first time, we invite you to experience the warmth, purity, and heritage in every cup.',
    whyChoose: 'Why Choose Our Teas?',
    premiumQuality: 'Premium Quality',
    premiumQualityDesc: "Hand-selected from the world's finest tea gardens",
    expertCuration: 'Expert Curation',
    expertCurationDesc: 'Years of expertise in selecting exceptional teas',
    sustainableSourcing: 'Sustainable Sourcing',
    sustainableSourcingDesc: 'Supporting ethical and environmentally conscious farming',
    personalService: 'Personal Service',
    personalServiceDesc: 'Personalized recommendations and brewing guidance',

    // Tea Catalog
    teaCollectionTitle: 'Our Tea Collection',
    teaCollectionSubtitle:
      'Explore our carefully curated selection of premium teas from renowned tea gardens worldwide',
    visitShopCta: 'Visit Our Shop',
    visitShopDesc:
      'Visit our shop to explore our complete collection and get personalized recommendations',
    flavorProfile: 'Flavor Profile:',
    contactUs: 'Contact Us',
    dragonWellName: 'Dragon Well Green Tea',
    dragonWellType: 'Green Tea',
    dragonWellOrigin: 'Alishan, Taiwan',
    dragonWellDesc:
      'A delicate and refreshing green tea with a subtle sweetness and beautiful flat-leaf appearance.',
    dragonWellFlavor: 'Fresh, Sweet, Vegetal',
    earlGreyName: 'Earl Grey Supreme',
    earlGreyType: 'Black Tea',
    earlGreyOrigin: 'Ceylon, Sri Lanka',
    earlGreyDesc:
      'A classic blend of Ceylon black tea with bergamot oil, cornflower petals, and lavender.',
    earlGreyFlavor: 'Citrusy, Floral, Bold',
    himalayanGoldName: 'Himalayan Gold',
    himalayanGoldType: 'Black Tea',
    himalayanGoldOrigin: 'Darjeeling, India',
    himalayanGoldDesc:
      'High-altitude grown tea with muscatel grape flavor and golden liquor, perfect for afternoon tea.',
    himalayanGoldFlavor: 'Muscatel, Fruity, Astringent',
    jasminePearlsName: 'Jasmine Pearls',
    jasminePearlsType: 'Green Tea',
    jasminePearlsOrigin: 'Nantou, Taiwan',
    jasminePearlsDesc:
      'Hand-rolled green tea pearls scented with fresh jasmine flowers for a fragrant experience.',
    jasminePearlsFlavor: 'Floral, Sweet, Smooth',
    royalPuerhName: 'Royal Pu-erh',
    royalPuerhType: 'Pu-erh Tea',
    royalPuerhOrigin: 'Taitung, Taiwan',
    royalPuerhDesc:
      'Aged dark tea with deep earthy flavor and smooth, mellow character that improves with time.',
    royalPuerhFlavor: 'Earthy, Rich, Smooth',
    whiteMoonlightName: 'White Moonlight',
    whiteMoonlightType: 'White Tea',
    whiteMoonlightOrigin: 'Hualien, Taiwan',
    whiteMoonlightDesc:
      'Delicate silver buds creating a subtle, naturally sweet tea with minimal processing.',
    whiteMoonlightFlavor: 'Light, Sweet, Elegant',

    // Shop Info
    shopInfoTitle: 'Visit Our Shop',
    shopInfoSubtitle:
      'Come experience our teas in person and discover your perfect blend',
    openingHours: 'Opening Hours',
    location: 'Location',
    phone: '+886 2 2831-9249',
    mondayFriday: 'Monday - Friday',
    mondayFridayHours: '9:30 AM - 9:00 PM',
    saturday: 'Saturday',
    saturdayHours: '10:00 AM - 8:00 PM',
    sunday: 'Sunday',
    sundayHours: '10:00 AM - 8:00 PM',
    whatWeOffer: 'What We Offer',
    premiumTeas: 'Premium Loose Leaf Teas',
    premiumTeasDesc: 'Carefully selected from the finest tea gardens worldwide',
    teaAccessories: 'Tea Accessories',
    teaAccessoriesDesc: 'Teapots, infusers, and everything you need for the perfect brew',
    expertGuidance: 'Expert Guidance',
    expertGuidanceDesc: 'Personal recommendations and brewing instructions',
    teaTasting: 'Tea Tasting',
    teaTastingDesc: 'Sample different teas before making your selection',
    giftSets: 'Gift Sets',
    giftSetsDesc: 'Beautiful gift packages for tea lovers',
    teaEducation: 'Tea Education',
    teaEducationDesc: 'Learn about tea origins, processing, and brewing techniques',
    specialNotice: 'Special Notice',
    specialNoticeDesc:
      'We are a traditional tea shop focused on providing the finest loose leaf teas and expert guidance. Please visit us in person to experience our full collection and receive personalized recommendations.',
    retailOnly: '* We currently operate as a physical retail location only',

    // Contact
    contactTitle: 'Get in Touch',
    contactSubtitle:
      'Have questions about our teas or need recommendations? We would love to help!',
    contactMethods: 'Contact Methods',
    lineMessaging: 'Line Messaging',
    lineDesc:
      'Connect with us instantly through Line for quick questions and tea recommendations.',
    lineButton: 'Contact us on Line',
    lineId: 'Line ID: @yuanweiteahouse',
    phoneTitle: 'Phone',
    phoneAvailable: 'Available during shop hours',
    visitUs: 'Visit Our Shop',
    visitUsDesc:
      'Best way to experience our full tea collection and get expert recommendations',
    openInMaps: 'Open in Google Maps',
    findUs: 'Find Us',
    mapDirections:
      'Click and drag to explore the map, or click "View larger map" for directions',
    sendMessage: 'Send us a Message',
    sendMessageDesc:
      'Let us know what type of tea you are looking for or any questions you have about our collection.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    contactMethodLabel: 'Preferred Contact Method',
    contactInfoLabel: 'Contact Information',
    contactInfoPlaceholder: 'Line ID, phone number, or email',
    messageLabel: 'Message',
    messagePlaceholder:
      "Tell us about the type of tea you're interested in or any questions you have...",
    sendButton: 'Send Message',
    responseTime: 'We typically respond within a few hours during business hours',

    // Shop Name & Footer
    shopName: 'Yuan Wei Tea House',
    shopNameShort: 'Yuan Wei',
    shopNameChinese: '緣味茶莊',
    footerDesc:
      'Your destination for premium teas from around the world. Experience the finest quality and expert guidance in every cup.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    copyright:
      '© 2025 緣味茶莊 Yuan Wei Tea House. All rights reserved. | Crafted with care for tea lovers everywhere.',

    // Location details
    address: 'No. 98號, Lane 109, Dexing E Rd, Shilin District, Taipei City, Taiwan 111',
  },
  'zh-TW': {
    // Navigation
    home: '首頁',
    about: '關於我們',
    teas: '茶葉精選',
    info: '店舖資訊',
    contact: '聯絡我們',

    // Hero Section
    heroTitle: '頂級茶葉收藏',
    heroMainTitle: '從我們的茶園到您的杯中',
    heroSubtitle:
      '發現來自世界各地最優質的散葉茶，精心挑選給重視品質與傳統的茶葉愛好者。',
    exploreTeas: '探索我們的茶葉',
    visitShop: '造訪我們的店舖',

    // About Section
    aboutTitle: '關於我們的茶店',
    aboutSubtitle: '自創立以來對茶葉卓越品質的熱忱',
    ourStory: '我們的故事',
    aboutStory1:
      '懷著對台灣茶文化的深厚熱忱而創立，我們的茶店致力於與世界分享台灣茶的美麗與傳統。我們相信茶不僅僅是一種飲品—它是寧靜的時刻、與大自然的連結，以及我們寶島精神的體現。',
    aboutStory2:
      '我們收藏中的每一款茶都是精心挑選自台灣山區的家族茶園—從阿里山的芳香高山烏龍到日月潭的順滑金韻紅茶。每片茶葉都承載著我們土地、氣候以及世代工藝的故事。',
    aboutStory3:
      '無論您是茶葉愛好者，還是初次品嚐台灣茶，我們都誠摯邀請您體驗每一杯茶中的溫暖、純淨與傳承。',
    whyChoose: '為什麼選擇我們的茶葉？',
    premiumQuality: '頂級品質',
    premiumQualityDesc: '精選自世界最佳茶園',
    expertCuration: '專業策展',
    expertCurationDesc: '多年精選卓越茶葉的專業經驗',
    sustainableSourcing: '永續採購',
    sustainableSourcingDesc: '支持合乎道德且環保的農業',
    personalService: '個人化服務',
    personalServiceDesc: '個人化推薦和沖泡指導',

    // Tea Catalog
    teaCollectionTitle: '我們的茶葉收藏',
    teaCollectionSubtitle: '探索我們精心挑選的頂級茶葉，來自世界知名茶園',
    visitShopCta: '造訪我們的店舖',
    visitShopDesc: '造訪我們的店舖探索完整收藏並獲得個人化推薦',
    flavorProfile: '風味特色：',
    contactUs: '聯絡我們',
    dragonWellName: '龍井綠茶',
    dragonWellType: '綠茶',
    dragonWellOrigin: '台灣阿里山',
    dragonWellDesc: '清雅清香的綠茶，帶有微妙甜味和美麗的扁葉外觀。',
    dragonWellFlavor: '清香、甘甜、青草味',
    earlGreyName: '伯爵茶特級',
    earlGreyType: '紅茶',
    earlGreyOrigin: '斯里蘭卡錫蘭',
    earlGreyDesc: '經典錫蘭紅茶與佛手柑油、矢車菊花瓣和薰衣草的混合。',
    earlGreyFlavor: '柑橘香、花香、濃郁',
    himalayanGoldName: '喜馬拉雅金茶',
    himalayanGoldType: '紅茶',
    himalayanGoldOrigin: '印度大吉嶺',
    himalayanGoldDesc: '高海拔種植的茶葉，帶有麝香葡萄風味和金黃茶湯，完美的下午茶選擇。',
    himalayanGoldFlavor: '麝香葡萄、果香、澀味',
    jasminePearlsName: '茉莉龍珠',
    jasminePearlsType: '綠茶',
    jasminePearlsOrigin: '台灣南投',
    jasminePearlsDesc: '手工捲製的綠茶珍珠，以新鮮茉莉花薰香，帶來芬芳體驗。',
    jasminePearlsFlavor: '花香、甘甜、順滑',
    royalPuerhName: '皇家普洱',
    royalPuerhType: '普洱茶',
    royalPuerhOrigin: '台灣台東',
    royalPuerhDesc: '陳年黑茶，具有深沉土香風味和順滑溫和特質，隨時間愈陳愈香。',
    royalPuerhFlavor: '土香、濃郁、順滑',
    whiteMoonlightName: '白月光',
    whiteMoonlightType: '白茶',
    whiteMoonlightOrigin: '台灣花蓮',
    whiteMoonlightDesc: '精緻的銀芽製成微妙天然甘甜的茶，經最少加工處理。',
    whiteMoonlightFlavor: '清淡、甘甜、淡雅',

    // Shop Info
    shopInfoTitle: '造訪我們的店舖',
    shopInfoSubtitle: '親自體驗我們的茶葉，發現您的完美調配',
    openingHours: '營業時間',
    location: '位置',
    phone: '+886 2 2831-9249',
    mondayFriday: '週一至週五',
    mondayFridayHours: '上午 9:30 - 晚上 9:00',
    saturday: '星期六',
    saturdayHours: '上午 10:00 - 晚上 8:00',
    sunday: '星期日',
    sundayHours: '上午 10:00 - 晚上 8:00',
    whatWeOffer: '我們提供什麼',
    premiumTeas: '頂級散葉茶',
    premiumTeasDesc: '精心挑選自世界最佳茶園',
    teaAccessories: '茶具配件',
    teaAccessoriesDesc: '茶壺、濾茶器和完美沖泡所需的一切',
    expertGuidance: '專業指導',
    expertGuidanceDesc: '個人化推薦和沖泡指導',
    teaTasting: '茶葉品鑑',
    teaTastingDesc: '在選擇前品嚐不同茶葉',
    giftSets: '禮品套裝',
    giftSetsDesc: '為茶葉愛好者精美的禮品包裝',
    teaEducation: '茶葉教育',
    teaEducationDesc: '學習茶葉起源、加工和沖泡技術',
    specialNotice: '特別提醒',
    specialNoticeDesc:
      '我們是一家傳統茶店，專注於提供最優質的散葉茶和專業指導。請親自造訪我們，體驗我們的完整收藏並獲得個人化推薦。',
    retailOnly: '* 我們目前僅作為實體零售店經營',

    // Contact
    contactTitle: '聯絡我們',
    contactSubtitle: '對我們的茶葉有疑問或需要推薦？我們很樂意協助！',
    contactMethods: '聯絡方式',
    lineMessaging: 'Line 即時通訊',
    lineDesc: '透過 Line 即時聯絡我們，快速詢問和茶葉推薦。',
    lineButton: '透過 Line 聯絡我們',
    lineId: 'Line ID: @yuanweiteahouse',
    phoneTitle: '電話',
    phoneAvailable: '營業時間內可聯絡',
    visitUs: '造訪我們的店舖',
    visitUsDesc: '體驗我們完整茶葉收藏和獲得專業推薦的最佳方式',
    openInMaps: '在 Google 地圖中開啟',
    findUs: '找到我們',
    mapDirections: '點擊並拖曳探索地圖，或點擊「查看大圖」獲取路線指引',
    sendMessage: '傳送訊息給我們',
    sendMessageDesc: '讓我們知道您想要尋找什麼類型的茶葉，或對我們收藏有任何疑問。',
    nameLabel: '姓名',
    namePlaceholder: '您的姓名',
    contactMethodLabel: '偏好聯絡方式',
    contactInfoLabel: '聯絡資訊',
    contactInfoPlaceholder: 'Line ID、電話號碼或電子郵件',
    messageLabel: '訊息',
    messagePlaceholder: '告訴我們您感興趣的茶葉類型或任何疑問...',
    sendButton: '發送訊息',
    responseTime: '我們通常會在營業時間內幾小時內回覆',

    // Shop Name & Footer
    shopName: '緣味茶莊',
    shopNameShort: '緣味',
    shopNameChinese: '緣味茶莊',
    footerDesc: '您的頂級茶葉目的地，來自世界各地。在每一杯中體驗最優質品質和專業指導。',
    quickLinks: '快速連結',
    contactInfo: '聯絡資訊',
    copyright: '© 2025 緣味茶莊。版權所有。| 為茶葉愛好者精心製作。',

    // Location details
    address: '台北市士林區德行東路109巷98號',
  },
}

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: keyof typeof translations.en): string => {
    const translation = translations[language]?.[key]
    if (translation) {
      return translation
    }
    // Fallback to English if current language doesn't have the key
    const englishTranslation = translations.en?.[key]
    if (englishTranslation) {
      return englishTranslation
    }
    // Last resort: return the key itself
    return key
  }

  return { t }
}
