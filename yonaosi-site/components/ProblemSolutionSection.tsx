'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState(0)

  const problems = [
    {
      icon: '📊',
      title: '投資は始めたけど、これで正解？',
      description: 'とりあえず始めた投資信託。手数料は適正？リスクは大丈夫？本当にこのままでいいのか不安。',
      solution: '証券外務員が最適なポートフォリオを診断。手数料削減とリターン向上の可能性を検討。',
      stat: 'リターン向上の可能性'
    },
    {
      icon: '🛡️',
      title: '保険料、高すぎない？',
      description: '毎月数万円の保険料。本当に必要な保障？重複していない？見直したいけど、何から手をつければ…',
      solution: '必要保障額を正確に算出。重複を排除し、本当に必要な保障だけに最適化。',
      stat: '月額削減の可能性'
    },
    {
      icon: '💰',
      title: '税金、もっと減らせるはず',
      description: '年末調整だけで終わらせていませんか？実は使える控除がまだある。知識の差が、手取りの差に。',
      solution: 'iDeCo、ふるさと納税、医療費控除を完全活用。合法的に税金を最小化。',
      stat: '節税の可能性'
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
            こんな状況、
            <span className="text-soft-orange">心当たり</span>
            はありませんか？
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多くの人が抱える「お金の不安」。実は、知識と行動で解決できます。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveTab(index)}
              className={`card cursor-pointer transition-all duration-300 ${
                activeTab === index ? 'ring-2 ring-soft-orange shadow-xl' : 'hover:shadow-lg'
              }`}
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600 mb-4">{problem.description}</p>
              
              {activeTab === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="border-t pt-4"
                >
                  <p className="text-sm font-bold text-soft-orange mb-2">YONAOSIの解決策</p>
                  <p className="text-sm text-gray-700 mb-3">{problem.solution}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-soft-orange/10 rounded-full">
                    <span className="text-soft-orange">✓</span>
                    <span className="text-sm font-medium">{problem.stat}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl font-bold mb-6">
            あなたも、
            <span className="text-soft-orange">今日から変われます</span>
          </p>
          <button 
            onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
            className="btn-primary text-lg px-8 py-4"
          >
            改善ポイントを診断する
          </button>
        </motion.div>
      </div>
    </section>
  )
}