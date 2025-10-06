import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import StructuredData from '../components/StructuredData'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '緣味茶莊 Yuan Wei Tea House - Premium Taiwan Tea Shop in Taipei | 台北頂級茶葉專門店',
  description: '緣味茶莊 - Taiwan\'s premier tea shop in Taipei. Discover authentic Taiwan teas from Alishan, premium loose leaf teas, and traditional tea culture. Visit our Shilin District location for personalized tea experiences. | 台北士林區頂級茶葉專門店，提供阿里山等台灣優質茶葉',
  keywords: [
    'Taiwan tea shop',
    'Taipei tea house', 
    '緣味茶莊',
    'premium tea',
    'Alishan tea',
    'loose leaf tea',
    'tea shop Shilin',
    'authentic Taiwan tea',
    'traditional tea culture',
    '台北茶葉店',
    '士林茶葉',
    '阿里山茶',
    '頂級茶葉'
  ],
  authors: [{ name: '緣味茶莊 Yuan Wei Tea House' }],
  creator: '緣味茶莊 Yuan Wei Tea House',
  publisher: '緣味茶莊 Yuan Wei Tea House',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://yuanway.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'zh-TW': '/',
    },
  },
  openGraph: {
    title: '緣味茶莊 Yuan Wei Tea House - Premium Taiwan Tea Shop',
    description: 'Discover authentic Taiwan teas and premium loose leaf collections at our Taipei tea shop. Traditional tea culture meets modern excellence.',
    url: 'https://yuanway.vercel.app',
    siteName: '緣味茶莊 Yuan Wei Tea House',
    images: [
      {
        url: '/images/TeaShopLogo.png',
        width: 1200,
        height: 630,
        alt: '緣味茶莊 Yuan Wei Tea House Logo',
      },
      {
        url: '/images/heroBackground.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Taiwan Tea Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '緣味茶莊 Yuan Wei Tea House - Premium Taiwan Tea',
    description: 'Discover authentic Taiwan teas at our Taipei tea shop',
    images: ['/images/TeaShopLogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you get them from Google Search Console
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
