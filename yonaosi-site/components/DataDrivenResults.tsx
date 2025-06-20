'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DataDrivenResults() {
  const [counters, setCounters] = useState({
    clients: 0,
    savings: 0,
    satisfaction: 0,
    increase: 0
  })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const targets = {
      clients: 5234,
      savings: 52,
      satisfaction: 98,
      increase: 235
    }

    let current = 0
    const timer = setInterval(() => {
      current += 1
      const progress = current / steps
      
      setCounters({
        clients: Math.floor(targets.clients * progress),
        savings: Math.floor(targets.savings * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        increase: Math.floor(targets.increase * progress)
      })

      if (current >= steps) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const impactData = [
    {
      category: '税金最適化',
      before: 450000,
      after: 225000,
      saving: 225000,
      percentage: 50
    },
    {
      category: '保険見直し',
      before: 78000,
      after: 32000,
      saving: 46000,
      percentage: 59
    },
    {
      category: '住宅ローン',
      before: 120000,
      after: 87000,
      saving: 33000,
      percentage: 28
    },
    {
      category: '光熱費',
      before: 25000,
      after: 13000,
      saving: 12000,
      percentage: 48
    }
  ]

  return (
    <section className="section-padding py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            数字が証明する、
            <span className="text-soft-orange">確かな実績</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            これまでに5,000人以上の人生を変えてきました。次はあなたの番です。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-8 text-center"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-orange mb-2">
              {counters.clients.toLocaleString()}
              <span className="text-xl md:text-2xl">人</span>
            </div>
            <p className="text-gray-600 font-medium">累計相談実績</p>
            <p className="text-sm text-gray-500 mt-2">2019年〜現在</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-8 text-center"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-orange mb-2">
              {counters.savings}
              <span className="text-xl md:text-2xl">万円</span>
            </div>
            <p className="text-gray-600 font-medium">平均年間削減額</p>
            <p className="text-sm text-gray-500 mt-2">固定費の見直しで</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-8 text-center"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-orange mb-2">
              {counters.satisfaction}
              <span className="text-xl md:text-2xl">%</span>
            </div>
            <p className="text-gray-600 font-medium">お客様満足度</p>
            <p className="text-sm text-gray-500 mt-2">3ヶ月後アンケート</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-4 md:p-8 text-center"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-soft-orange mb-2">
              {counters.increase}
              <span className="text-xl md:text-2xl">%</span>
            </div>
            <p className="text-gray-600 font-medium">資産増加率</p>
            <p className="text-sm text-gray-500 mt-2">10年後の平均</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            実際の改善例（年間ベース）
          </h3>
          
          <div className="space-y-6">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">{item.category}</span>
                  <span className="text-soft-orange font-bold">
                    -{item.percentage}% (¥{item.saving.toLocaleString()})
                  </span>
                </div>
                
                <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '100%' }}
                    whileInView={{ width: `${(item.after / item.before) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="absolute top-0 left-0 h-full bg-soft-orange rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-4 text-sm">
                    <span className="text-white font-medium">
                      ¥{item.after.toLocaleString()}
                    </span>
                    <span className="text-gray-600 line-through">
                      ¥{item.before.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div>
                <p className="text-2xl font-bold mb-2">
                  合計削減額: 
                  <span className="text-soft-orange">
                    ¥{impactData.reduce((sum, item) => sum + item.saving, 0).toLocaleString()}
                  </span>
                  /年
                </p>
                <p className="text-gray-600">
                  30年間で
                  <span className="font-bold text-dark-grey">
                    {' '}¥{(impactData.reduce((sum, item) => sum + item.saving, 0) * 30).toLocaleString()}
                  </span>
                  の差に！
                </p>
              </div>
              <Link href="/diagnosis" className="btn-primary whitespace-nowrap inline-block">
                あなたの削減額を診断する
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-soft-orange text-white rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            時間の価値を最大化する
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8">
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">25歳</div>
              <p className="text-sm opacity-90">から始めると</p>
              <p className="text-lg md:text-xl lg:text-2xl font-bold mt-2">1.2億円</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">35歳</div>
              <p className="text-sm opacity-90">から始めると</p>
              <p className="text-lg md:text-xl lg:text-2xl font-bold mt-2">6,800万円</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">45歳</div>
              <p className="text-sm opacity-90">から始めると</p>
              <p className="text-lg md:text-xl lg:text-2xl font-bold mt-2">3,200万円</p>
            </div>
          </div>
          <p className="text-lg mb-8">
            * 月5万円を年利5%で運用した場合の65歳時点の資産額
          </p>
          <Link href="/diagnosis" className="bg-white text-soft-orange font-bold px-8 py-4 rounded-full hover:shadow-lg transition-all inline-block">
            今すぐ始めて、最大の成果を
          </Link>
        </motion.div>
      </div>
    </section>
  )
}