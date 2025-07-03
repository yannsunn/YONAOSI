'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const serviceLinks = [
    { href: '#diagnosis', label: '無料診断', icon: '📊' },
    { href: '#simulator', label: '資産形成シミュレーター', icon: '📈' },
    { href: '#consultation', label: '個別相談', icon: '💬' },
    { href: '#planning', label: 'ファイナンシャルプランニング', icon: '📋' },
    { href: '#tax-advice', label: '税務アドバイス', icon: '💰' },
    { href: '#insurance', label: '保険見直し', icon: '🛡️' }
  ]

  const companyLinks = [
    { href: '#about', label: '会社概要' },
    { href: '#mission', label: 'ミッション' },
    { href: '#team', label: 'チーム紹介' },
    { href: '#careers', label: '採用情報' },
    { href: '#news', label: 'ニュース' },
    { href: '#press', label: 'プレスリリース' }
  ]

  const supportLinks = [
    { href: '#faq', label: 'よくあるご質問' },
    { href: '#contact', label: 'お問い合わせ' },
    { href: '#support', label: 'サポートセンター' },
    { href: '#appointment', label: '相談予約' },
    { href: '#tutorial', label: '使い方ガイド' },
    { href: '#feedback', label: 'ご意見・ご要望' }
  ]

  const legalLinks = [
    { href: '#privacy', label: 'プライバシーポリシー' },
    { href: '#terms', label: '利用規約' },
    { href: '#disclaimer', label: '免責事項' },
    { href: '#security', label: 'セキュリティ' },
    { href: '#compliance', label: 'コンプライアンス' },
    { href: '#sitemap', label: 'サイトマップ' }
  ]

  return (
    <footer className="bg-dark-grey text-white" role="contentinfo">
      {/* メインフッターコンテンツ */}
      <div className="section-padding py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* 上部セクション - ニュースレターとCTA */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-r from-soft-orange/10 via-lime-green/8 to-pale-blue/10 rounded-2xl p-6 sm:p-8 border border-soft-orange/20">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-soft-orange">
                    💝 お得な情報をお届け
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    資産形成のコツや最新の金融情報、特別なキャンペーンを
                    メールで定期配信。あなたの豊かな未来を応援します。
                  </p>
                </div>
                <div>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="メールアドレスを入力"
                        className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-soft-orange focus:outline-none min-h-[48px]"
                        required
                        aria-label="ニュースレターのメールアドレス"
                      />
                      <button
                        type="submit"
                        className="btn-primary whitespace-nowrap px-6 py-3 min-h-[48px] font-bold"
                        disabled={isSubscribed}
                      >
                        {isSubscribed ? '✅ 登録完了！' : '🚀 無料登録'}
                      </button>
                    </div>
                    <p className="text-xs text-gray-400">
                      ※ いつでも配信停止できます。個人情報は適切に保護されます。
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* メインリンクセクション */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
            {/* 会社情報 */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <svg width="140" height="36" viewBox="0 0 150 40" className="text-soft-orange mb-4" aria-hidden="true">
                  <text x="0" y="30" fontSize="24" fontWeight="700" fill="currentColor">YONAOSI</text>
                </svg>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  人生の転換期に寄り添う、
                  あなたの専属ファイナンシャルプランナー
                </p>
                <div className="bg-soft-orange/10 rounded-lg p-4 border border-soft-orange/20">
                  <h4 className="font-bold text-soft-orange mb-2 text-sm">🎯 ミッション</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    情報格差から消費者を守り、
                    誰もが適正な金融選択ができる世の中を創る
                  </p>
                </div>
              </div>
            </div>

            {/* サービス一覧 */}
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">🛠️ サービス</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-soft-orange transition-colors min-h-[40px] group"
                    >
                      <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 会社情報 */}
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">🏢 会社情報</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-300 hover:text-soft-orange transition-colors block min-h-[40px] flex items-center"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* サポート */}
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">🤝 サポート</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-300 hover:text-soft-orange transition-colors block min-h-[40px] flex items-center"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* お問い合わせ・SNS */}
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">📞 お問い合わせ</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-lime-green/10 rounded-lg p-4 border border-lime-green/20">
                  <h5 className="font-bold text-lime-green text-sm mb-2">✉️ メール</h5>
                  <p className="text-sm text-gray-300">support@yonaosi.jp</p>
                  <p className="text-xs text-gray-400 mt-1">24時間受付（返信：営業日24時間以内）</p>
                </div>
                
                <div className="bg-pale-blue/10 rounded-lg p-4 border border-pale-blue/20">
                  <h5 className="font-bold text-pale-blue text-sm mb-2">💬 LINE相談</h5>
                  <button 
                    onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                    className="text-sm text-gray-300 hover:text-pale-blue transition-colors"
                  >
                    今すぐ相談する →
                  </button>
                  <p className="text-xs text-gray-400 mt-1">平日 9:00-18:00</p>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-3 text-sm">🌐 フォローする</h5>
                <div className="flex gap-3">
                  <button 
                    onClick={() => window.open('https://twitter.com/yonaosi_jp', '_blank')}
                    className="text-gray-300 hover:text-soft-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center bg-gray-700 rounded-lg hover:bg-soft-orange/20 focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none"
                    aria-label="TwitterでYONAOSIをフォロー"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button 
                    onClick={() => window.open('https://instagram.com/yonaosi_jp', '_blank')}
                    className="text-gray-300 hover:text-soft-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center bg-gray-700 rounded-lg hover:bg-soft-orange/20 focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none"
                    aria-label="InstagramでYONAOSIをフォロー"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                  </button>
                  <button 
                    onClick={() => window.open('https://facebook.com/yonaosi.jp', '_blank')}
                    className="text-gray-300 hover:text-soft-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center bg-gray-700 rounded-lg hover:bg-soft-orange/20 focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none"
                    aria-label="FacebookでYONAOSIをフォロー"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 法的情報とリンク */}
          <div className="border-t border-gray-700 pt-8 sm:pt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div>
                <h5 className="font-bold text-sm mb-3">📋 重要事項</h5>
                <ul className="space-y-2">
                  {legalLinks.slice(0, 3).map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="text-xs text-gray-400 hover:text-soft-orange transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-sm mb-3">🔒 セキュリティ</h5>
                <ul className="space-y-2">
                  {legalLinks.slice(3).map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="text-xs text-gray-400 hover:text-soft-orange transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-sm mb-3">⚠️ 金融商品取引に関する重要事項</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  投資にはリスクが伴います。元本割れの可能性があります。
                  投資判断は自己責任でお願いいたします。
                  詳しくは各商品の契約締結前交付書面等をご確認ください。
                </p>
              </div>
            </div>
          </div>

          {/* コピーライトとアクセシビリティ */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400 text-center sm:text-left">
                &copy; 2024 YONAOSI Inc. All rights reserved. | 
                <span className="ml-2">Financial Planning Platform</span>
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>🌐 日本語 (JP)</span>
                <span>|</span>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-soft-orange transition-colors min-h-[40px] px-3 flex items-center focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none rounded"
                  aria-label="ページトップに戻る"
                >
                  ⬆️ ページトップへ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}