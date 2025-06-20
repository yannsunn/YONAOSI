'use client'

import { motion } from 'framer-motion'

const supportItems = [
  {
    id: 'tax',
    title: '税金最適化プログラム',
    description: '平均削減額：年間35万円',
    icon: '📊',
    color: 'bg-pale-blue',
    features: [
      { text: '知らなかった控除を完全活用', impact: '最大20項目の控除適用' },
      { text: 'ふるさと納税で実質2,000円生活', impact: '年間10万円相当のリターン' },
      { text: '確定申告で取り戻す還付金', impact: '平均15万円の還付実績' },
    ],
    stats: {
      users: '2,341人',
      totalSaving: '8.2億円',
      avgSaving: '35万円/年'
    }
  },
  {
    id: 'career',
    title: 'キャリアアップ支援',
    description: '平均年収UP率：135%',
    icon: '💼',
    color: 'bg-soft-orange',
    features: [
      { text: '市場価値を正しく評価', impact: '適正年収診断で200万円UP' },
      { text: '年収交渉のプロがサポート', impact: '成功率93%の交渉術' },
      { text: '転職成功率93%の実績', impact: '平均2.3社から内定獲得' },
    ],
    stats: {
      users: '876人',
      totalIncrease: '18.5億円',
      avgIncrease: '211万円/年'
    }
  },
  {
    id: 'housing',
    title: '住居費削減プログラム',
    description: '平均削減額：月2.5万円',
    icon: '🏠',
    color: 'bg-pale-green',
    features: [
      { text: '家賃交渉代行サービス', impact: '成功率78%で平均15%削減' },
      { text: '引越し費用全額サポート', impact: '最大20万円まで補助' },
      { text: '住宅購入タイミング診断', impact: '生涯住居費1,500万円削減' },
    ],
    stats: {
      users: '1,654人',
      totalSaving: '4.9億円',
      avgSaving: '30万円/年'
    }
  },
  {
    id: 'loan',
    title: 'ローン見直しプログラム',
    description: '平均金利削減：1.2%',
    icon: '💰',
    color: 'bg-pale-blue',
    features: [
      { text: '住宅ローン借り換え診断', impact: '総返済額平均580万円削減' },
      { text: 'おまとめローンで金利半減', impact: '月々の返済額40%削減' },
      { text: '繰上返済シミュレーション', impact: '返済期間10年短縮' },
    ],
    stats: {
      users: '983人',
      totalSaving: '57億円',
      avgSaving: '580万円/総額'
    }
  },
  {
    id: 'utility',
    title: '光熱費削減プログラム',
    description: '平均削減率：45%',
    icon: '⚡',
    color: 'bg-soft-orange',
    features: [
      { text: '電力会社最適化診断', impact: '年間6万円の電気代削減' },
      { text: '太陽光発電導入サポート', impact: '10年で投資回収完了' },
      { text: '省エネ設備の補助金活用', impact: '最大200万円の補助金獲得' },
    ],
    stats: {
      users: '1,232人',
      totalSaving: '2.9億円',
      avgSaving: '24万円/年'
    }
  },
  {
    id: 'investment',
    title: '資産形成加速プログラム',
    description: '平均運用利回り：6.8%',
    icon: '📈',
    color: 'bg-pale-green',
    features: [
      { text: '保険料を半額にする方法', impact: '浮いた資金で年間60万円投資' },
      { text: '新NISA完全攻略法', impact: '非課税枠1,800万円フル活用' },
      { text: 'iDeCo節税メリット最大化', impact: '年間節税額27.6万円' },
    ],
    stats: {
      users: '3,456人',
      totalAsset: '234億円',
      avgReturn: '6.8%/年'
    }
  },
]

export default function SupportCards() {
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
            付帯サポートメニュー
          </h2>
          <p className="text-lg text-gray-600">
            資産形成と合わせて、生活全般の見直しをサポート
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full border-2 border-transparent hover:border-soft-orange transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className={`${item.color} bg-opacity-20 px-3 py-1 rounded-full`}>
                    <span className="text-xs font-bold">人気</span>
                  </div>
                </div>
                
                <p className="text-soft-orange font-bold mb-4">{item.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx}>
                      <div className="text-sm font-medium mb-1">{feature.text}</div>
                      <div className="text-xs text-soft-orange">→ {feature.impact}</div>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4 mb-6">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-xs text-gray-600">利用者</div>
                      <div className="font-bold">{item.stats.users}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">総削減額</div>
                      <div className="font-bold">{item.stats.totalSaving || item.stats.totalIncrease || item.stats.totalAsset}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">平均効果</div>
                      <div className="font-bold text-soft-orange">{item.stats.avgSaving || item.stats.avgIncrease || item.stats.avgReturn}</div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full btn-primary text-sm">
                  詳しく見る
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}