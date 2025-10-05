'use client'

import { LanguageProvider } from '../../components/LanguageContext'
import Header from '../../components/Header'
import TeaCatalogPage from '../../components/TeaCatalogPage'
import Footer from '../../components/Footer'

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