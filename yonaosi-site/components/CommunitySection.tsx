'use client'

import { motion } from 'framer-motion'

const communityFeatures = [
  {
    icon: '🎓',
    title: '月例ウェビナー',
    description: '専門家による最新の資産形成情報',
  },
  {
    icon: '💬',
    title: 'オンライン掲示板',
    description: '仲間との情報交換・相談',
  },
  {
    icon: '📚',
    title: '勉強会',
    description: 'テーマ別の少人数学習会',
  },
  {
    icon: '🎯',
    title: 'ライブQ&A',
    description: '専門家への直接質問',
  },
]

export default function CommunitySection() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            YONAOSI Community
          </h2>
          <p className="text-lg text-gray-600">
            同じ目標を持つ仲間と共に、学び成長する場所
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card bg-gradient-to-br from-pale-green/20 to-pale-blue/20"
          >
            <h3 className="text-xl font-bold mb-4">コミュニティ参加のメリット</h3>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-soft-orange mt-0.5">✓</span>
                <span>専門家への質問が無制限</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-soft-orange mt-0.5">✓</span>
                <span>成功事例から学べる実践的な知識</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-soft-orange mt-0.5">✓</span>
                <span>モチベーション維持のための仲間づくり</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-soft-orange mt-0.5">✓</span>
                <span>最新の金融・投資情報をいち早くキャッチ</span>
              </li>
            </ul>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="メールアドレス"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent"
              />
              <button type="submit" className="btn-primary w-full">
                無料で参加する
              </button>
            </form>
            
            <p className="text-xs text-gray-600 mt-4 text-center">
              ※ LINE連携でさらに便利にご利用いただけます
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}