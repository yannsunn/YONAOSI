'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MissionBeliefSection() {
  const problemAreas = [
    {
      icon: '🛡️',
      title: '保険の落とし穴',
      description: '必要のない保険で年間数十万円の損失',
      detail: '保険会社の利益構造を知れば、本当に必要な保障が見えてきます。',
      solution: '適正保障で年間最大48万円削減'
    },
    {
      icon: '📊',
      title: '投資商品の手数料地獄',
      description: '販売手数料3%、運用手数料2%の衝撃',
      detail: '金融機関が推奨する商品ほど、あなたには不利な構造になっています。',
      solution: '手数料最適化で運用成果20%向上'
    },
    {
      icon: '🏠',
      title: '不動産選択の罠',
      description: '営業トークに惑わされ、数百万円の損失リスク',
      detail: '「今が買い時」「価格が上がる前に」といった感情を煽る営業の真実とは。',
      solution: '適正価格判定で購入コスト最適化'
    },
    {
      icon: '💰',
      title: '税制優遇の見えない罠',
      description: 'iDeCo、NISA、ふるさと納税の本当のメリット・デメリット',
      detail: '表面的なメリットだけでなく、総合的な判断が必要です。',
      solution: '真の節税効果で年間25万円以上改善'
    },
    {
      icon: '🏦',
      title: '金融機関の「提案」の裏側',
      description: '相続対策、資産運用の提案は本当にあなたのため？',
      detail: '銀行や証券会社の収益構造を理解すれば、真の価値が見分けられます。',
      solution: '中立的視点で最適な金融戦略を構築'
    },
    {
      icon: '⚖️',
      title: '情報格差という不平等',
      description: '知識のある人だけが得をする、歪んだ構造',
      detail: '専門家と称する人々の多くが、実は売り手側の利益を優先しています。',
      solution: '公平な情報提供で格差を解消'
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">

      <div className="container mx-auto px-4 relative">
        {/* メインタイトル部分 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-soft-orange text-white px-6 py-3 rounded-full mb-6">
            <span className="text-2xl">⚖️</span>
            <span className="font-bold">世直しの信念</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-dark-grey leading-tight">
            なぜ私たちは
            <span className="text-soft-orange">「世直し」</span>
            を掲げるのか
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700">
            <p className="leading-relaxed">
              情報が溢れ、選択肢が増えた現代。<br />
              しかし、<span className="font-bold text-soft-orange">何が本当に適正なのか</span>を判断する基準が失われています。
            </p>
            <p className="leading-relaxed">
              金融商品、保険、不動産、税制優遇...<br />
              あらゆる分野に潜む<span className="font-bold text-soft-orange">落とし穴</span>から、<br />
              一人でも多くの方を救い出す。それが私たちの使命です。
            </p>
          </div>
        </motion.div>

        {/* 問題領域をグリッド表示で分散 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problemAreas.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{problem.icon}</div>
                <h3 className="text-lg font-bold text-dark-grey mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-xs text-gray-500 leading-relaxed">{problem.detail}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3 border-l-3 border-soft-orange">
                <p className="text-sm font-medium text-dark-grey flex items-center gap-2">
                  <span className="text-soft-orange">✓</span>
                  {problem.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 統一された解決策セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-dark-grey">
              世直しの専門家が提供する
              <span className="text-soft-orange">中立的な解決策</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              私たちは売り手の利益ではなく、<span className="font-bold text-soft-orange">あなたの利益</span>を最優先に考えます。
              情報格差をなくし、すべての人が適正な選択をできる社会を目指しています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-bold mb-2 text-dark-grey">徹底的な現状分析</h4>
              <p className="text-sm text-gray-600">
                あなたの状況を詳細に分析し、隠れた問題点を洗い出します
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">⚖️</div>
              <h4 className="font-bold mb-2 text-dark-grey">中立的な提案</h4>
              <p className="text-sm text-gray-600">
                金融機関の利益ではなく、あなたのメリットを最大化する提案
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold mb-2 text-dark-grey">継続的サポート</h4>
              <p className="text-sm text-gray-600">
                一度きりの相談ではなく、長期的な視点でサポート
              </p>
            </div>
          </div>
        </motion.div>

        {/* 最後の宣言部分 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200"
        >
          <div className="mb-8">
            <div className="text-5xl mb-4">⚖️</div>
            <p className="text-xl md:text-2xl font-bold text-dark-grey mb-4">
              私たちは<span className="text-soft-orange">「世直しの専門家」</span>として
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              歪んだ情報社会を正し、すべての人が適正な選択ができる世の中を創ります。<br />
              <span className="font-medium text-soft-orange">あなたの真の利益を最優先</span>に、中立的な立場でサポートいたします。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/diagnosis"
              className="inline-flex items-center justify-center gap-3 bg-soft-orange hover:bg-soft-orange/90 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>🔍</span>
              まずは無料診断で現状を把握
            </Link>
            <button className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-dark-grey font-medium text-lg px-8 py-4 rounded-full border border-gray-300 transition-all duration-300">
              <span>💬</span>
              専門家に直接相談する
            </button>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            ※ 強引な営業は一切ありません。安心してご相談ください。
          </div>
        </motion.div>
      </div>
    </section>
  )
}