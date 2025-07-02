'use client'

import { motion } from 'framer-motion'
import SimpleDiagnosisForm from './SimpleDiagnosisForm'

export default function HeroSection() {

  return (
    <section className="section-padding py-16 md:py-24 bg-warm-white hero-bg-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 bg-soft-orange text-white px-4 py-2 rounded-full text-sm font-bold mb-2">
                ⚖️ 世直しの専門家
              </span>
              <p className="text-gray-600 font-medium">
                情報格差から消費者を守る、中立的な立場
              </p>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              今の選択で、
              <br />
              <span className="text-soft-orange">未来は変わる</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-4 font-bold">
              お金の不安から解放される、新しい生き方へ
            </p>
            
            <p className="text-lg mb-8 text-gray-700">
              プロの視点で、あなたの資産形成を
              <br />
              サポートいたします。
            </p>

            <div className="card-bg-gradient rounded-xl shadow-lg p-6 mb-8">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-4">YONAOSIの特徴</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-soft-orange">中立</div>
                    <div className="text-sm sm:text-xs text-gray-600">公正な立場</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-soft-orange">包括</div>
                    <div className="text-sm sm:text-xs text-gray-600">総合サポート</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-soft-orange">継続</div>
                    <div className="text-sm sm:text-xs text-gray-600">長期フォロー</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  ※ 効果は個人により異なり、成果を保証するものではありません
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <SimpleDiagnosisForm />
              <button 
                onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                className="btn-secondary flex items-center justify-center gap-2 text-lg py-4"
              >
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
              ※ 相談後の勧誘は一切ありません。効果を保証するものではありません。
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
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-soft-orange text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">老後資金、<span className="font-bold">本当に足りる？</span></p>
                </motion.div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-bold text-dark-grey mb-2">YONAOSIが変える、3つのこと</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-soft-orange">●</span>
                    <span>売りたいものではなく、必要なものを</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-soft-orange">●</span>
                    <span>点ではなく、面で捉える最適化</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-soft-orange">●</span>
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