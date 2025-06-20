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
      solution: '証券外務員が最適なポートフォリオを診断。手数料を50%削減し、リターンを最大化。',
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

  const testimonialData = [
    {
      age: '30代',
      gender: '女性',
      initial: 'T.K',
      bgColor: 'bg-soft-orange/10',
      textColor: 'text-soft-orange',
      content: '知らないって怖いと実感。税金の仕組みを理解するだけで、年間25万円も手取りが増えました。',
      result: '年収そのままで手取り25万円UP'
    },
    {
      age: '40代',
      gender: '男性',
      initial: 'Y.S',
      bgColor: 'bg-pale-blue/10',
      textColor: 'text-pale-blue',
      content: '転職で年収が450万円から680万円に！自分の市場価値を正しく評価してもらえました。',
      result: '年収230万円UP達成'
    },
    {
      age: '50代',
      gender: '女性',
      initial: 'K.M',
      bgColor: 'bg-pale-green/10',
      textColor: 'text-pale-green',
      content: '住宅ローンの見直しで月々3万円の削減。30年で見ると1,000万円以上の差に。',
      result: '総返済額1,080万円削減'
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

        <div className="bg-gradient-to-r from-soft-orange/5 to-pale-blue/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            実際の成功事例
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center mr-3`}>
                    <span className={`font-bold ${testimonial.textColor}`}>
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.age} {testimonial.gender}</p>
                    <div className="flex text-soft-orange text-sm">
                      {'★★★★★'}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="bg-gradient-to-r from-soft-orange to-pale-blue text-white rounded-lg px-4 py-2 text-center">
                  <p className="text-sm font-bold">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
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