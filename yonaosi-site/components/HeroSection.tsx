'use client'

import { motion } from 'framer-motion'
import SimpleDiagnosisForm from './SimpleDiagnosisForm'

export default function HeroSection() {

  return (
    <section className="section-padding py-16 md:py-24 bg-warm-white hero-bg-pattern" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto">
        {/* 🎯 PC専用レイアウト */}
        <div className="hidden lg:block">
          <div className="pc-hero-layout">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="pc-hero-content"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 bg-soft-orange text-white px-6 py-3 rounded-full text-base font-bold mb-3">
                  🌟 あなたの味方
                </span>
                <p className="text-gray-600 font-medium text-lg">
                  一緒に考え、一緒に解決する、あなた専属のパートナー
                </p>
              </motion.div>
              
              <h1 id="hero-heading" className="text-5xl xl:text-6xl font-bold mb-8 leading-tight">
                <span className="text-soft-orange">毎月赤字、将来不安</span>
                <br />
                <span className="text-soft-orange">その悩み、今日で終わり</span>
              </h1>
              
              <p className="text-2xl mb-6 font-bold leading-relaxed text-soft-orange">
                💸 電気代が高すぎて家計を圧迫<br />
                🏠 家賃ばかり払って資産が増えない<br />
                💳 ローンの返済が終わらない
              </p>
              
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                <span className="font-bold text-soft-orange">✨ でも安心してください！</span><br />
                月3万円の固定費削減 + 年利3%の資産運用で、
                <br />
                <span className="font-bold">10年で300万円以上の差</span>が生まれます。
              </p>

              <div className="card-bg-gradient rounded-xl shadow-lg p-8 mb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-6">YONAOSIの特徴</h3>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-soft-orange">寄り添う</div>
                      <div className="text-base text-gray-600 mt-2">あなたの味方</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-soft-orange">わかりやすく</div>
                      <div className="text-base text-gray-600 mt-2">簡単説明</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-soft-orange">一緒に</div>
                      <div className="text-base text-gray-600 mt-2">実行支援</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-6">
                    ※ 効果は個人により異なり、成果を保証するものではありません
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-1">
                  <SimpleDiagnosisForm />
                </div>
                <div className="flex-1">
                  <button 
                    onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                    className="btn-secondary flex items-center justify-center gap-2 text-lg py-4 min-h-[56px] font-medium w-full desktop-hover"
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
                className="text-sm text-gray-600 mt-6"
              >
                ※ 相談後の勧誘は一切ありません。効果を保証するものではありません。
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pc-hero-visual"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 desktop-card">
                <h3 className="text-2xl font-bold mb-8">こんな悩み、ありませんか？</h3>
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-sm">✓</span>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-bold text-soft-orange text-lg">電気代、上がりすぎ！</p>
                      <p className="text-base text-gray-600 mt-2">昔に比べて、光熱費があがってきたけど、少しでも安くできる方法ってないの？</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-sm">✓</span>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-bold text-soft-orange text-lg">家賃、もったいない！</p>
                      <p className="text-base text-gray-600 mt-2">毎月の家賃が生活の負担に。家賃って掛け捨ててるだけだし、何か良い改善方法はないのだろうか？</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-sm">✓</span>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-bold text-soft-orange text-lg">金利、高すぎて、、、</p>
                      <p className="text-base text-gray-600 mt-2">気付けば金利高！返してもなかなか減らないし、毎月の返済は増えるし、どうにかしたい！</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-lg">老後資金、<span className="font-bold">本当に足りる？</span></p>
                  </motion.div>
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <p className="text-base font-bold text-dark-grey mb-4">YONAOSIと始める、3つの変化</p>
                  <div className="space-y-3 text-base">
                    <div className="flex items-center gap-3">
                      <span className="text-soft-orange">●</span>
                      <span>無理のない範囲で、着実に前進</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-soft-orange">●</span>
                      <span>複雑なお金の話を、わかりやすく整理</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-soft-orange">●</span>
                      <span>小さな一歩から、大きな変化へ</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 📱 タブレット専用レイアウト */}
        <div className="hidden md:block lg:hidden">
          <div className="tablet-hero-layout">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <span className="inline-flex items-center gap-2 bg-soft-orange text-white px-5 py-3 rounded-full text-base font-bold mb-4">
                🌟 あなたの味方
              </span>
              <p className="text-gray-600 font-medium text-lg mb-6">
                一緒に考え、一緒に解決する、あなた専属のパートナー
              </p>
              
              <h1 id="hero-heading" className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="text-soft-orange">毎月赤字、将来不安</span>
                <br />
                <span className="text-soft-orange">その悩み、今日で終わり</span>
              </h1>
              
              <p className="text-xl mb-4 font-bold leading-relaxed text-soft-orange">
                💸 電気代が高すぎて家計を圧迫<br />
                🏠 家賃ばかり払って資産が増えない<br />
                💳 ローンの返済が終わらない
              </p>
              
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                <span className="font-bold text-soft-orange">✨ でも安心してください！</span><br />
                月3万円の固定費削減 + 年利3%の資産運用で、
                <br />
                <span className="font-bold">10年で300万円以上の差</span>が生まれます。
              </p>
            </motion.div>

            <div className="tablet-card-grid gap-8 mb-8">
              <div className="card-bg-gradient rounded-xl shadow-lg p-6 tablet-form-layout">
                <h3 className="text-lg font-bold mb-4 text-center">YONAOSIの特徴</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-soft-orange">寄り添う</div>
                    <div className="text-sm text-gray-600 mt-1">あなたの味方</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-soft-orange">わかりやすく</div>
                    <div className="text-sm text-gray-600 mt-1">簡単説明</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-soft-orange">一緒に</div>
                    <div className="text-sm text-gray-600 mt-1">実行支援</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-center">こんな悩み、ありませんか？</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-xs">✓</span>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-bold text-soft-orange">電気代、上がりすぎ！</p>
                      <p className="text-sm text-gray-600 mt-1">昔に比べて、光熱費があがってきたけど、少しでも安くできる方法ってないの？</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-xs">✓</span>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-bold text-soft-orange">家賃、もったいない！</p>
                      <p className="text-sm text-gray-600 mt-1">毎月の家賃が生活の負担に。家賃って掛け捨ててるだけだし、何か良い改善方法はないのだろうか？</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-xs">✓</span>
                    </div>
                    <p className="text-gray-700">老後資金、<span className="font-bold">本当に足りる？</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <SimpleDiagnosisForm />
              <button 
                onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                className="btn-secondary flex items-center justify-center gap-2 tablet-button-large tablet-touch-target font-medium w-full touch-highlight"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.19 22 14.34 21.78 15.41 21.37L21 22L20.37 16.41C21.78 14.34 22 13.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
                </svg>
                今すぐLINEで相談
              </button>
            </div>
            
            <p className="text-sm text-gray-600 text-center">
              ※ 相談後の勧誘は一切ありません。効果を保証するものではありません。
            </p>
          </div>
        </div>

        {/* 📱 モバイル専用レイアウト */}
        <div className="block md:hidden">
          <div className="mobile-hero-compact mobile-section-padding">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-soft-orange text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
                🌟 あなたの味方
              </span>
              <p className="text-gray-600 font-medium text-base mb-4">
                一緒に考え、一緒に解決する、あなた専属のパートナー
              </p>
              
              <h1 id="hero-heading" className="mobile-hero-title text-soft-orange mb-4">
                毎月赤字、将来不安<br />
                その悩み、今日で終わり
              </h1>
              
              <p className="mobile-hero-subtitle font-bold text-soft-orange mb-3">
                💸 電気代が高すぎて家計を圧迫<br />
                🏠 家賃ばかり払って資産が増えない<br />
                💳 ローンの返済が終わらない
              </p>
              
              <p className="text-sm mb-6 text-gray-700 leading-relaxed">
                <span className="font-bold text-soft-orange">✨ でも安心してください！</span><br />
                月3万円の固定費削減 + 年利3%の資産運用で、
                <br />
                <span className="font-bold">10年で300万円以上の差</span>が生まれます。
              </p>
            </motion.div>

            <div className="mobile-card-stack mb-6">
              <div className="card-bg-gradient rounded-xl shadow-lg p-5 mobile-card">
                <h3 className="text-base font-bold mb-3 text-center">YONAOSIの特徴</h3>
                <div className="grid grid-cols-1 gap-3 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-lg font-bold text-soft-orange">寄り添う</div>
                    <div className="text-sm text-gray-600">あなたの味方</div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-lg font-bold text-soft-orange">わかりやすく</div>
                    <div className="text-sm text-gray-600">簡単説明</div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-lg font-bold text-soft-orange">一緒に</div>
                    <div className="text-sm text-gray-600">実行支援</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-5 mobile-card">
                <h3 className="mobile-title mb-4 text-center">こんな悩み、ありませんか？</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-xs">✓</span>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-bold text-soft-orange text-sm">電気代、上がりすぎ！</p>
                      <p className="text-xs text-gray-600 mt-1">昔に比べて、光熱費があがってきたけど、少しでも安くできる方法ってないの？</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-xs">✓</span>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-bold text-soft-orange text-sm">家賃、もったいない！</p>
                      <p className="text-xs text-gray-600 mt-1">毎月の家賃が生活の負担に。家賃って掛け捨ててるだけだし、何か良い改善方法はないのだろうか？</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-soft-orange text-xs">✓</span>
                    </div>
                    <p className="text-gray-700 text-sm">老後資金、<span className="font-bold">本当に足りる？</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-cta-stack mb-4">
              <SimpleDiagnosisForm />
              <button 
                onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                className="btn-secondary mobile-button-full touch-feedback"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.19 22 14.34 21.78 15.41 21.37L21 22L20.37 16.41C21.78 14.34 22 13.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
                </svg>
                <span>今すぐLINEで相談</span>
              </button>
            </div>
            
            <p className="text-xs text-gray-600 text-center">
              ※ 相談後の勧誘は一切ありません。効果を保証するものではありません。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}