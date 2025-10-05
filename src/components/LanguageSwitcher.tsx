"use client";

import { useLanguage } from './LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
      {/* English Button */}
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
          language === 'en'
            ? 'bg-white text-green-800 shadow-md'
            : 'text-gray-600 hover:text-green-700'
        }`}
      >
        <span>🇺🇸</span>
        <span>EN</span>
      </button>

      {/* Traditional Chinese Button */}
      <button
        onClick={() => setLanguage('zh-TW')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
          language === 'zh-TW'
            ? 'bg-white text-green-800 shadow-md'
            : 'text-gray-600 hover:text-green-700'
        }`}
      >
        <span>🇹🇼</span>
        <span>中文</span>
      </button>
    </div>
  );
}