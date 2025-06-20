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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            YONAOSIの
            <span className="text-soft-orange">サポート内容</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたの資産形成を包括的にサポートします
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">税金最適化</h3>
            <p className="text-gray-600 mb-4">
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
            className="bg-white rounded-xl shadow-lg p-6 text-center"
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
            className="bg-white rounded-xl shadow-lg p-6 text-center"
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
          <button 
            onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
            className="btn-primary text-lg px-8 py-4"
          >
            まずはLINEでご相談ください
          </button>
        </motion.div>
      </div>
    </section>
  )
}