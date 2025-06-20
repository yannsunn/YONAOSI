'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [savingsAmount, setSavingsAmount] = useState(0)
  const targetSavings = 520000 // 年間52万円

  useEffect(() => {
    const interval = setInterval(() => {
      setSavingsAmount(prev => {
        const next = prev + 10000
        return next >= targetSavings ? targetSavings : next
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding py-16 md:py-24 bg-gradient-to-br from-off-white to-soft-orange/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-soft-orange font-bold mb-4"
            >
              知識の差が、人生の差になる時代
            </motion.p>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              今の選択で、
              <br />
              <span className="text-soft-orange">未来は変わる</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 font-bold">
              お金の不安から解放される、新しい生き方へ
            </p>
            
            <p className="text-lg mb-8 text-gray-700">
              5,000人以上が実証済み。プロの視点で、
              <br />
              あなたの資産形成を最適化します。
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">平均削減額</span>
                <motion.span 
                  className="text-3xl font-bold text-soft-orange"
                  key={savingsAmount}
                >
                  ¥{savingsAmount.toLocaleString()}
                  <span className="text-sm text-gray-600">/年</span>
                </motion.span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-dark-grey">98%</div>
                  <div className="text-xs text-gray-600">満足度</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-grey">2.3倍</div>
                  <div className="text-xs text-gray-600">資産増加</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-grey">3ヶ月</div>
                  <div className="text-xs text-gray-600">効果実感</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/diagnosis" className="btn-primary text-center text-lg py-4">
                <svg className="inline-block w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                無料診断を始める（3分）
              </Link>
              <button className="btn-secondary flex items-center justify-center gap-2 text-lg py-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.19 22 14.34 21.78 15.41 21.37L21 22L20.37 16.41C21.78 14.34 22 13.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
                </svg>
                今すぐLINEで相談
              </button>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm text-gray-600 mt-4"
            >
              ※ 相談後の勧誘は一切ありません。安心してご利用ください。
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-6">こんな悩み、ありませんか？</h3>
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-soft-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-soft-orange text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">投資は始めたけど、<span className="font-bold">これで正解？</span></p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-soft-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-soft-orange text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">保険料、<span className="font-bold">高すぎない？</span></p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-soft-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-soft-orange text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">税金、<span className="font-bold">もっと減らせるはず</span></p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-soft-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-soft-orange text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">老後資金、<span className="font-bold">本当に足りる？</span></p>
                </motion.div>
              </div>
              
              <div className="mt-8 p-4 bg-pale-green/20 rounded-lg">
                <p className="text-sm font-bold text-dark-grey mb-2">YONAOSIが変える、3つのこと</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-pale-green">●</span>
                    <span>売りたいものではなく、必要なものを</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pale-green">●</span>
                    <span>点ではなく、面で捉える最適化</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-pale-green">●</span>
                    <span>今日から、人生が変わる実践</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}