'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ResultsShowcase() {
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

  const testimonials = [
    {
      age: '30代',
      gender: '女性',
      occupation: '会社員',
      content: 'NISAとiDeCoの違いが分からなかった私でも、丁寧な説明で理解できました。今では毎月コツコツ積立投資を続けています。',
      result: '月3万円の積立開始',
    },
    {
      age: '40代',
      gender: '男性',
      occupation: '自営業',
      content: '保険の見直しで年間30万円も削減できました。その分を子供の教育資金に回せるようになり、将来への不安が解消されました。',
      result: '年間30万円の固定費削減',
    },
    {
      age: '50代',
      gender: '女性',
      occupation: 'パート',
      content: '老後資金が心配でしたが、現状分析から始めて無理のない計画を立てられました。定期的なフォローアップも心強いです。',
      result: '老後資金2000万円の道筋',
    },
  ]

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
            数字が証明する、
            <span className="text-soft-orange">確かな実績</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
多くの方の人生を変えてきました。次はあなたの番かもしれません。
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
            <p className="text-gray-600 font-medium">年間削減の可能性</p>
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
            <p className="text-gray-600 font-medium">資産増加可能性</p>
            <p className="text-sm text-gray-500 mt-2">10年後の可能性</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            改善例（年間ベース）
          </h3>
          <p className="text-sm text-gray-500 text-center mb-6">
            ※ 効果は個人により異なり、成果を保証するものではありません
          </p>
          
          <div className="space-y-6 mb-10">
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

          <div className="p-6 bg-soft-orange/10 rounded-xl">
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
              <button 
                onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                className="btn-primary whitespace-nowrap"
              >
                あなたの削減可能性を診断する
              </button>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-8">利用者の声</h3>
          
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold">{testimonial.age}</span>
                    <span>{testimonial.gender}</span>
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.occupation}</p>
                </div>
                
                <div className="md:w-3/4">
                  <p className="mb-4 text-gray-700">"{testimonial.content}"</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                    <span className="text-soft-orange">✓</span>
                    <span className="text-sm font-medium">{testimonial.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}