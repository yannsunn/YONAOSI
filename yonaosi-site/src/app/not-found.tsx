'use client'

// import { motion } from 'framer-motion' // 将来使用予定
import Link from 'next/link'

// メタデータはapp/layout.tsxで404ページ用を定義

export default function NotFound() {
  const suggestedLinks = [
    { href: '/', label: 'ホーム', description: 'サイトのトップページ' },
    { href: '/diagnosis', label: '無料診断', description: '3分で完了する診断' },
  ]

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-8xl mb-6">🔍</div>
          
          <h1 className="text-4xl font-bold mb-4 text-dark-grey">
            404
          </h1>
          
          <h2 className="text-2xl font-bold mb-6 text-dark-grey">
            ページが見つかりません
          </h2>
          
          <p className="text-gray-600 mb-8 text-lg">
            お探しのページは移動または削除された可能性があります。<br />
            以下のリンクから目的のページをお探しください。
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {suggestedLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block p-6 bg-gradient-to-r from-soft-orange/10 to-pale-blue/10 hover:from-soft-orange/20 hover:to-pale-blue/20 rounded-xl transition-all duration-300 group"
              >
                <h3 className="font-bold text-lg mb-2 group-hover:text-soft-orange transition-colors">
                  {link.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-soft-orange/5 to-pale-green/5 rounded-xl p-6">
            <h3 className="font-bold mb-2">✨ お困りですか？</h3>
            <p className="text-gray-600 text-sm">
              何かお困りの場合は、無料診断から始めることをおすすめします。<br />
              専門家がサポートいたします。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}