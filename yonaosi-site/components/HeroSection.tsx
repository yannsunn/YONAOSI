'use client'

import { motion } from 'framer-motion'
import SimpleDiagnosisForm from './SimpleDiagnosisForm'

export default function HeroSection() {

  return (
    <section className="section-padding py-16 md:py-24 bg-warm-white hero-bg-pattern" aria-labelledby="hero-heading">
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
                🌟 あなたの味方
              </span>
              <p className="text-gray-600 font-medium">
                一緒に考え、一緒に解決する、あなた専属のパートナー
              </p>
            </motion.div>
            
            <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-red-600">毎月赤字、将来不安</span>
              <br className="hidden sm:block" />
              <span className="text-soft-orange">その悩み、今日で終わり</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 font-bold leading-relaxed text-red-600">
              💸 電気代が高すぎて家計を圧迫<br className="sm:hidden" />
              🏠 家賃ばかり払って資産が増えない<br className="sm:hidden" />
              💳 ローンの返済が終わらない
            </p>
            
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-700 leading-relaxed">
              <span className="font-bold text-soft-orange">✨ でも安心してください！</span><br />
              月3万円の固定費削減 + 年利3%の資産運用で、
              <br className="hidden sm:block" />
              <span className="font-bold">10年で300万円以上の差</span>が生まれます。
            </p>

            <div className="card-bg-gradient rounded-xl shadow-lg p-6 mb-8">
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">YONAOSIの特徴</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                  <div className="p-2 sm:p-0">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-soft-orange">寄り添う</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">あなたの味方</div>
                  </div>
                  <div className="p-2 sm:p-0">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-soft-orange">わかりやすく</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">簡単説明</div>
                  </div>
                  <div className="p-2 sm:p-0">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-soft-orange">一緒に</div>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">実行支援</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  ※ 効果は個人により異なり、成果を保証するものではありません
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full flex justify-center">
                <SimpleDiagnosisForm />
              </div>
              <div className="w-full flex justify-center">
                <button 
                  onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                  className="btn-secondary flex items-center justify-center gap-2 text-base sm:text-base md:text-lg py-4 sm:py-4 min-h-[56px] sm:min-h-[48px] font-medium w-full sm:w-auto"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.19 22 14.34 21.78 15.41 21.37L21 22L20.37 16.41C21.78 14.34 22 13.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
                  </svg>
                  今すぐLINEで相談
                </button>
              </div>
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
                  <div className="text-gray-700">
                    <p className="font-bold text-red-600">電気代、上がりすぎ！</p>
                    <p className="text-sm text-gray-600 mt-1">昔に比べて、光熱費があがってきたけど、少しでも安くできる方法ってないの？</p>
                  </div>
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
                  <div className="text-gray-700">
                    <p className="font-bold text-red-600">家賃、もったいない！</p>
                    <p className="text-sm text-gray-600 mt-1">毎月の家賃が生活の負担に。家賃って掛け捨ててるだけだし、何か良い改善方法はないのだろうか？</p>
                  </div>
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
                  <div className="text-gray-700">
                    <p className="font-bold text-red-600">金利、高すぎて、、、</p>
                    <p className="text-sm text-gray-600 mt-1">気付けば金利高！返してもなかなか減らないし、毎月の返済は増えるし、どうにかしたい！</p>
                  </div>
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
                <p className="text-sm font-bold text-dark-grey mb-2">YONAOSIと始める、3つの変化</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-soft-orange">●</span>
                    <span>無理のない範囲で、着実に前進</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-soft-orange">●</span>
                    <span>複雑なお金の話を、わかりやすく整理</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-soft-orange">●</span>
                    <span>小さな一歩から、大きな変化へ</span>
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