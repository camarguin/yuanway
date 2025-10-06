import type { Metadata } from 'next'
import { LanguageProvider } from '../../components/LanguageContext'
import Header from '../../components/Header'
import TeaCatalogPage from '../../components/TeaCatalogPage'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Tea Collection - Premium Taiwan Teas | 緣味茶莊 Yuan Wei Tea House',
  description: 'Explore our complete collection of premium Taiwan teas including Alishan, Nantou, and traditional varieties. Authentic loose leaf teas from renowned Taiwan tea gardens. | 探索我們完整的台灣頂級茶葉收藏',
  keywords: [
    'Taiwan tea collection',
    'Alishan tea',
    'Nantou tea', 
    'premium loose leaf tea',
    'authentic Taiwan tea',
    'tea catalog',
    '台灣茶葉收藏',
    '阿里山茶',
    '南投茶',
    '頂級散茶'
  ],
  openGraph: {
    title: 'Premium Taiwan Tea Collection - 緣味茶莊',
    description: 'Discover our authentic Taiwan tea varieties from famous regions like Alishan and Nantou',
    url: 'https://yuanway.vercel.app/teas',
    images: [
      {
        url: '/images/tea1.png',
        width: 800,
        height: 600,
        alt: 'Premium Taiwan Tea Collection',
      },
    ],
  },
}

export default function TeasPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <TeaCatalogPage />
        <Footer />
      </div>
    </LanguageProvider>
  )
}