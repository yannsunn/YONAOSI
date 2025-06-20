'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MissionBeliefSection() {
  const highIncomeProblems = [
    {
      icon: '⚠️',
      title: '宅建従事者120万人の現実',
      description: '誰もが「プロ」を名乗れる業界で、本当にあなたの味方は誰？',
      detail: '営業マンは売り手の利益を優先。買い手の利益を考える専門家は極めて少数です。'
    },
    {
      icon: '💸',
      title: '営業マンの甘い言葉に要注意',
      description: '「今が買い時」「価格が上がる前に」は本当か？',
      detail: '感情を煽る営業トークの裏に隠された真実を見抜く必要があります。'
    },
    {
      icon: '📈',
      title: '適正価格がわからない恐怖',
      description: '相場より500万円高く買ってしまうリスク',
      detail: '表面的な情報だけでは判断できない、真の適正価格をお教えします。'
    },
    {
      icon: '🏠',
      title: '立地選択の落とし穴',
      description: '「駅近」「新築」が必ずしも正解ではない理由',
      detail: '20年後、30年後の資産価値を見据えた本当の選択基準をご提案。'
    }
  ]

  const universalProblems = [
    {
      icon: '🛡️',
      title: '保険業界の闇',
      description: '必要のない保険で月数万円の損失',
      detail: '保険会社の利益構造を知れば、本当に必要な保障が見えてきます。',
      solution: '適正保障で年間最大48万円削減可能'
    },
    {
      icon: '📊',
      title: '投資信託の手数料地獄',
      description: '販売手数料3%、運用手数料2%の衝撃',
      detail: '金融機関が推奨する商品ほど、あなたには不利な構造になっています。',
      solution: '手数料最適化で運用成果20%向上'
    },
    {
      icon: '💰',
      title: '税制優遇の見えない罠',
      description: 'iDeCo、NISA、ふるさと納税の落とし穴',
      detail: '表面的なメリットだけでなく、デメリットも含めた総合判断が必要。',
      solution: '真の節税効果で年間25万円以上の改善'
    },
    {
      icon: '🏦',
      title: '銀行の「提案」という名の営業',
      description: '相続対策、資産運用の提案は誰のため？',
      detail: '銀行の収益構造を理解すれば、真にあなたのための提案が見分けられます。',
      solution: '中立的視点で最適な金融戦略を構築'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-off-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-soft-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pale-blue rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* メインタイトル部分 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-soft-orange to-pale-blue text-white px-6 py-3 rounded-full mb-6">
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
              しかし、<span className="font-bold text-soft-orange bg-soft-orange/10 px-2 py-1 rounded">何が本当に適正なのか</span>を判断する基準が失われています。
            </p>
            <p className="leading-relaxed">
              金融商品、保険、不動産、税制優遇...<br />
              あらゆる分野に潜む<span className="font-bold text-soft-orange bg-soft-orange/10 px-2 py-1 rounded">落とし穴</span>から、<br />
              一人でも多くの方を救い出す。それが私たちの使命です。
            </p>
          </div>
        </motion.div>

        {/* カードセクション */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 年収500万円以上向けカード */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white shadow-2xl rounded-2xl p-8 border-2 border-soft-orange relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-soft-orange/5 rounded-full -translate-y-8 translate-x-8"></div>
            
            <div className="mb-6 relative">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-soft-orange to-orange-400 text-white font-bold rounded-full mb-4 shadow-lg">
                💼 年収500万円以上の方へ
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-dark-grey leading-tight">
                不動産選びを間違えると、
                <span className="text-soft-orange">数千万円</span>の損失に
              </h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {highIncomeProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-soft-orange/5 transition-colors"
                >
                  <span className="text-2xl">{problem.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-dark-grey mb-1">{problem.title}</p>
                    <p className="text-gray-600 text-sm mb-2">{problem.description}</p>
                    <p className="text-xs text-gray-500">{problem.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-soft-orange/10 to-orange-100 p-6 rounded-xl border-l-4 border-soft-orange">
              <p className="font-bold text-soft-orange mb-2 flex items-center gap-2">
                <span>⚖️</span>
                世直しの専門家が提供する基準
              </p>
              <p className="text-dark-grey leading-relaxed">
                中立的な立場から、適正価格・適正条件を明確にお示しします。<br />
                <span className="font-bold">あなたの人生最大の買い物を、失敗させません。</span>
              </p>
            </div>
          </motion.div>

          {/* すべての方向けカード */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white shadow-2xl rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-pale-blue/5 rounded-full -translate-y-8 -translate-x-8"></div>
            
            <div className="mb-6 relative">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-pale-blue to-blue-400 text-white font-bold rounded-full mb-4 shadow-lg">
                🌟 すべての方へ
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-dark-grey leading-tight">
                あらゆる分野に潜む
                <span className="text-pale-blue">「情報格差」</span>
                という落とし穴
              </h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {universalProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-pale-blue/5 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-2xl">{problem.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-dark-grey mb-1">{problem.title}</p>
                      <p className="text-gray-600 text-sm mb-2">{problem.description}</p>
                      <p className="text-xs text-gray-500 mb-2">{problem.detail}</p>
                    </div>
                  </div>
                  <div className="bg-pale-green/10 px-3 py-2 rounded-md border-l-2 border-pale-green">
                    <p className="text-sm font-medium text-dark-grey">
                      ✅ {problem.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 最後の宣言部分 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-soft-orange/5 via-pale-blue/5 to-pale-green/5 rounded-2xl p-12 border border-soft-orange/20"
        >
          <div className="mb-8">
            <div className="text-6xl mb-4">⚖️</div>
            <p className="text-2xl md:text-3xl font-bold text-dark-grey mb-6">
              私たちは<span className="text-soft-orange">「世直しの専門家」</span>として
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              歪んだ情報社会を正し、<br />
              すべての人が適正な選択ができる世の中を創ります。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/diagnosis"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-soft-orange to-orange-400 hover:from-soft-orange/90 hover:to-orange-400/90 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>🔍</span>
              まずは無料診断で現状を把握
            </Link>
            <button className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-dark-grey font-medium text-lg px-8 py-4 rounded-full border-2 border-gray-200 transition-all duration-300">
              <span>📞</span>
              専門家に直接相談する
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}