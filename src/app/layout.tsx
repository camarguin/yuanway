import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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
  title: '緣味茶莊 - Premium Tea Collection | 頂級茶葉收藏',
  description:
    '緣味茶莊 - 發現我們精心挑選的世界頂級茶葉。造訪我們位於台北的茶店，體驗最優質的散葉茶和茶具配件。 | Discover our curated selection of premium teas from around the world at Yuan Wei Tea House.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='scroll-smooth'
    >
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  )
}
