'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PowerfulCTA() {
  return (
    <section className="section-padding py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-soft-orange p-1 rounded-3xl shadow-xl"
        >
          <div className="bg-white rounded-3xl p-4 md:p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
                今日が、
                <span className="text-soft-orange">人生を変える日</span>
                になる
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                5年後、10年後のあなたは、今日の決断に感謝するはずです。
                <br />
                まずは無料診断で、可能性を確かめてみませんか？
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">
                💡 無料診断で得られるもの
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-soft-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">あなた専用の改善プラン</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-soft-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">年間改善予想額の算出</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-soft-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">専門家による無料アドバイス</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-soft-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">実行可能な具体的ステップ</span>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-white shadow-xl rounded-xl p-4">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                  <rect width="150" height="150" fill="white"/>
                  <path d="M30 30h20v20h-20zM50 30h10v10h-10zM60 30h10v10h-10zM70 30h10v10h-10zM80 30h10v10h-10zM90 30h10v10h-10zM100 30h20v20h-20zM30 50h10v10h-10zM50 50h10v10h-10zM60 50h10v10h-10zM70 50h10v10h-10zM80 50h10v10h-10zM90 50h10v10h-10zM110 50h10v10h-10zM30 60h10v10h-10zM50 60h10v10h-10zM70 60h20v20h-20zM90 60h10v10h-10zM110 60h10v10h-10zM30 70h10v10h-10zM50 70h10v10h-10zM90 70h10v10h-10zM110 70h10v10h-10zM30 80h10v10h-10zM50 80h10v10h-10zM60 80h10v10h-10zM80 80h10v10h-10zM90 80h10v10h-10zM110 80h10v10h-10zM30 90h10v10h-10zM40 90h10v10h-10zM50 90h10v10h-10zM60 90h10v10h-10zM70 90h10v10h-10zM80 90h10v10h-10zM90 90h10v10h-10zM100 90h10v10h-10zM110 90h10v10h-10zM30 100h20v20h-20zM60 100h10v10h-10zM80 100h10v10h-10zM100 100h20v20h-20z" fill="#333333"/>
                </svg>
                <p className="text-sm text-center mt-2 text-gray-600">LINE友達追加</p>
              </div>
            </div>

            <Link href="/diagnosis">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto mx-auto block bg-soft-orange hover:bg-soft-orange/90 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all text-center min-h-[44px]"
              >
                <svg className="inline-block w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                無料診断を始める（3分）
              </motion.div>
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-soft-orange font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2">3分で診断完了</h4>
                <p className="text-sm text-gray-600">
                  簡単な質問に答えるだけ
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2">無料オンライン相談</h4>
                <p className="text-sm text-gray-600">
                  専門家が最適な改善策を提案
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 font-bold">3</span>
                </div>
                <h4 className="font-bold mb-2">実行サポート</h4>
                <p className="text-sm text-gray-600">
                  成果が出るまで完全サポート
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-gray-100 rounded-xl text-center"
            >
              <p className="text-lg font-bold text-dark-grey mb-2">
                安心の保証
              </p>
              <p className="text-gray-700">
                相談後の強引な勧誘は一切ありません。
                <br />
                まずは気軽にご相談ください。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}