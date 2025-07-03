'use client'

import { motion } from 'framer-motion'

export default function ResultsShowcase() {


  return (
    <section className="section-padding py-20 bg-white section-bg-pattern">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            YONAOSIの
            <span className="text-soft-orange block sm:inline">サポート内容</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            あなたの資産形成を包括的にサポートします
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="feature-card-1 rounded-xl p-6 text-center"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">税金最適化</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              iDeCo、NISA、ふるさと納税などの制度を活用した節税戦略をご提案
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-soft-orange/10 rounded-full">
              <span className="text-soft-orange">✓</span>
              <span className="text-sm font-medium">適正な節税対策</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="feature-card-2 rounded-xl p-6 text-center"
          >
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">保険見直し</h3>
            <p className="text-gray-600 mb-4">
              本当に必要な保障を精査し、無駄な保険料を削減するサポート
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-soft-orange/10 rounded-full">
              <span className="text-soft-orange">✓</span>
              <span className="text-sm font-medium">適正保障の提案</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="feature-card-3 rounded-xl p-6 text-center"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">資産形成相談</h3>
            <p className="text-gray-600 mb-4">
              あなたの状況に合わせた最適な投資戦略をプロの視点でアドバイス
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-soft-orange/10 rounded-full">
              <span className="text-soft-orange">✓</span>
              <span className="text-sm font-medium">中立的なアドバイス</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
              className="btn-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 min-h-[52px] w-full sm:w-auto mx-auto"
            >
              まずはLINEでご相談ください
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}