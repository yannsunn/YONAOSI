'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'トップ' },
    { href: '#diagnosis', label: '無料診断' },
    { href: '#simulator', label: '資産形成シミュレーター' },
    { href: '#faq', label: 'よくあるご質問' },
    { href: '#contact', label: 'お問い合わせ' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="section-padding py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="YONAOSIホームページ">
            <svg width="140" height="36" viewBox="0 0 150 40" className="text-soft-orange w-[140px] sm:w-[150px] md:w-[160px]" aria-hidden="true">
              <text x="0" y="30" fontSize="28" fontWeight="700" fontFamily="Noto Sans JP, sans-serif" fill="currentColor">YONAOSI</text>
            </svg>
          </Link>

          {/* 💻 PC専用ナビゲーション */}
          <nav className="hidden lg:flex pc-navigation" aria-label="メインナビゲーション">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dark-grey hover:text-soft-orange transition-colors duration-300 min-h-[44px] flex items-center text-lg font-medium desktop-hover"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 📱 タブレット専用ナビゲーション */}
          <nav className="hidden md:flex lg:hidden tablet-navigation" aria-label="メインナビゲーション">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dark-grey hover:text-soft-orange transition-colors duration-300 tablet-touch-target flex items-center text-base font-medium touch-highlight"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 💻 PC専用LINEボタン */}
          <button 
            onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
            className="btn-secondary hidden lg:flex items-center gap-2 text-lg px-6 py-3 min-h-[52px] font-medium desktop-hover"
            aria-label="YONAOSI公式LINEアカウントを開く（新しいタブで開きます）"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.19 22 14.34 21.78 15.41 21.37L21 22L20.37 16.41C21.78 14.34 22 13.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
            </svg>
            公式LINE
          </button>

          {/* 📱 タブレット専用LINEボタン */}
          <button 
            onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
            className="btn-secondary hidden md:flex lg:hidden items-center gap-2 text-base px-4 py-3 tablet-touch-target font-medium touch-highlight"
            aria-label="YONAOSI公式LINEアカウントを開く（新しいタブで開きます）"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.19 22 14.34 21.78 15.41 21.37L21 22L20.37 16.41C21.78 14.34 22 13.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
            </svg>
            LINE
          </button>

          {/* 📱 モバイル専用ハンバーガーメニュー */}
          <button
            className="md:hidden mobile-navigation-hamburger min-h-[56px] min-w-[56px] flex items-center justify-center bg-soft-orange text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200 touch-feedback"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-6 border-t bg-white rounded-lg shadow-lg mx-2 mb-4" id="mobile-menu" aria-label="モバイルメニュー">
            <div className="px-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-4 px-4 text-dark-grey hover:text-soft-orange hover:bg-soft-orange/5 transition-all duration-300 text-lg font-medium min-h-[56px] flex items-center rounded-lg border border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-bold text-gray-700 mb-3 px-4">サービスメニュー</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => {
                      window.open('https://line.me/R/ti/p/@yonaosi', '_blank')
                      setIsMenuOpen(false)
                    }}
                    className="w-full py-4 px-4 bg-soft-orange text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 min-h-[56px] flex items-center justify-center gap-2 text-lg shadow-md"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.19 22 14.34 21.78 15.41 21.37L21 22L20.37 16.41C21.78 14.34 22 13.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
                    </svg>
                    LINEで相談する
                  </button>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="text-sm font-bold text-gray-700 mb-2">コース内容</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 無料初回相談</li>
                      <li>• 資産形成診断</li>
                      <li>• ファイナンシャルプランニング</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="text-sm font-bold text-blue-800 mb-2">料金表</h5>
                    <div className="text-sm text-blue-700">
                      <p className="font-bold text-base mb-1">初回相談：<span className="text-green-600">無料</span></p>
                      <p>継続サポート：お客様に合わせたプラン</p>
                      <p className="text-xs mt-1 text-gray-600">※ 詳細は相談時にご説明いたします</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}