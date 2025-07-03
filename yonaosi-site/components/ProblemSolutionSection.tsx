'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
// import Link from 'next/link' // 将来使用予定

export default function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState(0)

  const problems = [
    {
      icon: '📊',
      title: '投資は始めたけど、これで正解？',
      description: 'とりあえず始めた投資信託。手数料は適正？リスクは大丈夫？本当にこのままでいいのか不安。',
      solution: '投資のプロが、あなたに合った商品選びをお手伝い。手数料の見直しで、もっと効率よく資産を増やせる可能性があります。',
      stat: '最適な投資戦略'
    },
    {
      icon: '🛡️',
      title: '保険料、高すぎない？',
      description: '毎月数万円の保険料。本当に必要な保障？重複していない？見直したいけど、何から手をつければ…',
      solution: '必要保障額を正確に算出。重複を排除し、本当に必要な保障だけに最適化。',
      stat: '保険の最適化'
    },
    {
      icon: '💰',
      title: '税金、もっと減らせるはず',
      description: '年末調整だけで税金対策は終わりではありません。実はまだ使える控除があるかもしれません。',
      solution: 'iDeCo、ふるさと納税、医療費控除など、あなたが使える制度を一緒に確認します。正しい方法で税負担を軽くしましょう。',
      stat: '適切な税務管理'
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
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            こんな状況、
            <span className="text-soft-orange block sm:inline">心当たり</span>
            はありませんか？
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            実は、同じようなことで悩んでいる方はたくさんいらっしゃいます。<br className="hidden sm:block" />
            ひとりで考え込まず、まずはお気軽にお話しませんか？
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
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
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{problem.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{problem.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{problem.description}</p>
              
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
          <p className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6">
            あなたも、
            <span className="text-soft-orange">今日から変われます</span>
          </p>
          <button 
            onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
            className="btn-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 min-h-[48px] sm:min-h-[44px]"
          >
            改善ポイントを診断する
          </button>
        </motion.div>
      </div>
    </section>
  )
}