'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PowerfulCTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    '資産形成スタートガイド（PDF 50ページ）',
    '節税チェックリスト（全73項目）',
    '保険見直しテンプレート',
    '30分の個別相談（通常¥10,000相当）'
  ]

  return (
    <section className="section-padding py-20 bg-gradient-to-b from-off-white to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-soft-orange via-pale-blue to-pale-green p-1 rounded-3xl shadow-2xl"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-soft-orange/10 text-soft-orange px-4 py-2 rounded-full mb-6"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold">期間限定特典</span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                今日が、
                <span className="text-soft-orange">人生を変える日</span>
                になる
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                5年後、10年後のあなたは、今日の決断に感謝するはずです。
                <br />
                まずは無料相談で、可能性を確かめてみませんか？
              </p>
            </div>

            <div className="bg-gradient-to-r from-soft-orange/5 to-pale-blue/5 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">
                今なら相談者全員にプレゼント！
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-pale-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">特典付き無料相談の受付終了まで</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-dark-grey text-white rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs">時間</div>
                  </div>
                  <span className="text-2xl font-bold">:</span>
                  <div className="bg-dark-grey text-white rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs">分</div>
                  </div>
                  <span className="text-2xl font-bold">:</span>
                  <div className="bg-dark-grey text-white rounded-lg px-4 py-2">
                    <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs">秒</div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-xl rounded-xl p-4">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                  <rect width="150" height="150" fill="white"/>
                  <path d="M30 30h20v20h-20zM50 30h10v10h-10zM60 30h10v10h-10zM70 30h10v10h-10zM80 30h10v10h-10zM90 30h10v10h-10zM100 30h20v20h-20zM30 50h10v10h-10zM50 50h10v10h-10zM60 50h10v10h-10zM70 50h10v10h-10zM80 50h10v10h-10zM90 50h10v10h-10zM110 50h10v10h-10zM30 60h10v10h-10zM50 60h10v10h-10zM70 60h20v20h-20zM90 60h10v10h-10zM110 60h10v10h-10zM30 70h10v10h-10zM50 70h10v10h-10zM90 70h10v10h-10zM110 70h10v10h-10zM30 80h10v10h-10zM50 80h10v10h-10zM60 80h10v10h-10zM80 80h10v10h-10zM90 80h10v10h-10zM110 80h10v10h-10zM30 90h10v10h-10zM40 90h10v10h-10zM50 90h10v10h-10zM60 90h10v10h-10zM70 90h10v10h-10zM80 90h10v10h-10zM90 90h10v10h-10zM100 90h10v10h-10zM110 90h10v10h-10zM30 100h20v20h-20zM60 100h10v10h-10zM80 100h10v10h-10zM100 100h20v20h-20z" fill="#333333"/>
                </svg>
                <p className="text-sm text-center mt-2 text-gray-600">スマホで読み取り</p>
              </div>
            </div>

            <Link href="/diagnosis">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto mx-auto block bg-gradient-to-r from-soft-orange to-pale-blue text-white font-bold text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all text-center"
              >
                <svg className="inline-block w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                無料診断を始める（3分）
              </motion.div>
            </Link>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-soft-orange font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2">LINEで3分予約</h4>
                <p className="text-sm text-gray-600">
                  簡単な質問に答えるだけ
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pale-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-pale-blue font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2">無料オンライン相談</h4>
                <p className="text-sm text-gray-600">
                  専門家が最適な改善策を提案
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pale-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-pale-green font-bold">3</span>
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
              className="mt-8 p-6 bg-pale-green/10 rounded-xl text-center"
            >
              <p className="text-lg font-bold text-dark-grey mb-2">
                安心の保証
              </p>
              <p className="text-gray-700">
                相談後の強引な勧誘は一切ありません。
                <br />
                もし満足いただけなければ、特典も含めて全額返金いたします。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}