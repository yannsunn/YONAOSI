'use client'

import Link from 'next/link'

export default function Footer() {
  // ヘッダーと統一したナビゲーション項目のみ
  const navItems = [
    { href: '/', label: 'トップ' },
    { href: '#diagnosis', label: '無料診断' },
    { href: '#simulator', label: '資産形成シミュレーター' },
    { href: '#faq', label: 'よくあるご質問' },
    { href: '#contact', label: 'お問い合わせ' },
  ]

  return (
    <footer className="bg-dark-grey text-white" role="contentinfo">
      <div className="section-padding py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* メインフッターコンテンツ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            
            {/* ロゴと説明 */}
            <div className="lg:col-span-1">
              <svg width="140" height="36" viewBox="0 0 150 40" className="text-soft-orange mb-4" aria-hidden="true">
                <text x="0" y="30" fontSize="24" fontWeight="700" fill="currentColor">YONAOSI</text>
              </svg>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                人生の転換期に寄り添う、
                あなたの専属ファイナンシャルプランナー
              </p>
            </div>

            {/* ナビゲーション（ヘッダーと統一） */}
            <div>
              <h4 className="font-bold mb-4 text-base">サイトマップ</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-sm text-gray-300 hover:text-soft-orange transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* お問い合わせ */}
            <div>
              <h4 className="font-bold mb-4 text-base">お問い合わせ</h4>
              <div className="space-y-3">
                <div className="bg-pale-blue/10 rounded-lg p-3 border border-pale-blue/20">
                  <h5 className="font-bold text-pale-blue text-sm mb-1">💬 LINE相談</h5>
                  <button 
                    onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                    className="text-sm text-gray-300 hover:text-pale-blue transition-colors"
                  >
                    今すぐ相談する →
                  </button>
                </div>
              </div>
            </div>

            {/* 法的情報 */}
            <div>
              <h4 className="font-bold mb-4 text-base">重要事項</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#privacy" className="text-sm text-gray-300 hover:text-soft-orange transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-sm text-gray-300 hover:text-soft-orange transition-colors">
                    利用規約
                  </Link>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-soft-orange/10 rounded-lg border border-soft-orange/20">
                <p className="text-xs text-gray-400 leading-relaxed">
                  投資にはリスクが伴います。元本割れの可能性があります。
                  投資判断は自己責任でお願いいたします。
                </p>
              </div>
            </div>
          </div>

          {/* コピーライト */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400 text-center sm:text-left">
                &copy; 2024 YONAOSI Inc. All rights reserved.
              </p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-gray-400 hover:text-soft-orange transition-colors focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none rounded px-3 py-1"
                aria-label="ページトップに戻る"
              >
                ⬆️ ページトップへ
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}