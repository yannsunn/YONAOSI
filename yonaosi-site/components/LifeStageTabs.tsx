'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

const stageData = [
  {
    id: 'single',
    label: '独身期',
    color: 'bg-soft-orange',
    badge: '20-30代に人気',
    content: {
      title: '時間を味方につける資産形成',
      description: '若さは最強の武器。複利の力を最大限に活かし、将来の選択肢を広げる基盤を作ります。',
      points: [
        { text: '新NISA・iDeCo完全活用ガイド', impact: '年間40万円の非課税投資' },
        { text: '年収アップ戦略と副業の始め方', impact: '平均年収135%達成' },
        { text: '賢い一人暮らしの家計管理術', impact: '月3万円の余剰資金創出' },
        { text: '最小限の保険で最大の安心を', impact: '保険料70%削減' },
      ],
      image: '💰',
      stat: { label: '25歳から始めた場合', value: '65歳時点で1.2億円', detail: '月5万円積立・年利5%' },
      testimonial: {
        content: '新卒で始めた投資が、30歳で1,000万円に。早く始めて本当によかった！',
        author: 'T.K様（28歳・IT企業）'
      }
    },
  },
  {
    id: 'marriage',
    label: '結婚準備期',
    color: 'bg-soft-orange',
    badge: '最も削減効果大',
    content: {
      title: '二人で築く、豊かな未来',
      description: 'パートナーとの価値観を共有し、お互いの夢を叶える資産計画を。結婚は最高の投資チャンスです。',
      points: [
        { text: '共働き世帯の最強家計術', impact: '世帯年収50%UP' },
        { text: '賃貸VS購入 本当の答え', impact: '生涯住居費2,000万円削減' },
        { text: '夫婦で得する保険の組み方', impact: '保険料年間48万円削減' },
        { text: '配偶者控除フル活用法', impact: '節税額年間25万円' },
      ],
      image: '💑',
      stat: { label: '共働き夫婦の場合', value: '10年で3,000万円', detail: '固定費削減＋投資で実現' },
      testimonial: {
        content: '結婚を機に家計を見直したら、年間100万円も貯金が増えました！',
        author: 'M.S様（32歳・共働き夫婦）'
      }
    },
  },
  {
    id: 'family',
    label: '子育て期',
    color: 'bg-soft-orange',
    badge: '相談数No.1',
    content: {
      title: '子どもの未来に、最高の準備を',
      description: '教育資金、住宅ローン、老後資金。すべてを両立させる賢い家計戦略があります。',
      points: [
        { text: '教育資金1,000万円の作り方', impact: '月2.5万円で達成可能' },
        { text: '住宅ローン10年短縮術', impact: '総返済額800万円削減' },
        { text: '家族を守る保険の選び方', impact: '適正保障で月2万円削減' },
        { text: '児童手当を2倍にする方法', impact: '運用で500万円に成長' },
      ],
      image: '👨‍👩‍👧‍👦',
      stat: { label: '教育資金準備', value: '大学まで2,000万円', detail: '計画的準備で負担軽減' },
      testimonial: {
        content: '3人の子どもがいても、しっかり貯金できるようになりました。',
        author: 'Y.T様（38歳・会社員）'
      }
    },
  },
  {
    id: 'second',
    label: 'セカンドライフ期',
    color: 'bg-soft-orange',
    badge: '満足度98%',
    content: {
      title: '自由で豊かな第二の人生へ',
      description: 'これまでの努力を最大限に活かし、お金の心配から解放された理想のセカンドライフを実現します。',
      points: [
        { text: '年金受給額を最大化する裏技', impact: '受給額20%アップ' },
        { text: '退職金運用の黄金ルール', impact: '10年で1.5倍に成長' },
        { text: '医療・介護費用の賢い準備法', impact: '自己負担90%削減' },
        { text: '相続税ゼロの資産承継術', impact: '節税額最大3,000万円' },
      ],
      image: '🌅',
      stat: { label: '必要老後資金', value: '夫婦で5,000万円', detail: 'ゆとりある生活を実現' },
      testimonial: {
        content: '退職金の運用で、年金だけでは不安だった老後が豊かになりました。',
        author: 'K.H様（62歳・元会社員）'
      }
    },
  },
]

export default function LifeStageTabs() {
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
            ライフステージ別プランニング
          </h2>
          <p className="text-lg text-gray-600">
            あなたの現在の状況に最適なプランをご提案します
          </p>
        </motion.div>

        <Tabs.Root defaultValue="single" className="w-full">
          <Tabs.List className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {stageData.map((stage) => (
              <Tabs.Trigger
                key={stage.id}
                value={stage.id}
                className={`px-3 py-4 md:px-4 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 min-h-[44px] flex items-center justify-center
                  data-[state=active]:bg-soft-orange data-[state=active]:text-white
                  data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-600
                  hover:bg-gray-200`}
              >
                {stage.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {stageData.map((stage) => (
            <Tabs.Content
              key={stage.id}
              value={stage.id}
              className="focus:outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="card relative overflow-hidden"
              >
                {stage.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-soft-orange text-white px-4 py-2 rounded-full text-sm font-bold">
                      {stage.badge}
                    </span>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{stage.content.title}</h3>
                    <p className="text-gray-600 mb-6">{stage.content.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {stage.content.points.map((point, index) => (
                        <li key={index}>
                          <div className="flex items-start gap-3">
                            <span className="text-soft-orange mt-1">✓</span>
                            <div>
                              <span className="font-medium">{point.text}</span>
                              <div className="text-sm text-soft-orange mt-1">
                                → {point.impact}
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-600 mb-1">{stage.content.stat.label}</p>
                      <p className="text-2xl font-bold text-dark-grey">{stage.content.stat.value}</p>
                      <p className="text-xs text-gray-500">{stage.content.stat.detail}</p>
                    </div>

                    <button className="btn-primary w-full sm:w-auto min-h-[44px] px-6 py-3">
                      無料相談を申し込む
                    </button>
                  </div>

                  <div>
                    <div className="text-center mb-6">
                      <div className="text-6xl md:text-7xl lg:text-8xl mb-4">{stage.content.image}</div>
                    </div>
                    
                    {stage.content.testimonial && (
                      <div className="bg-off-white rounded-lg p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-soft-orange text-2xl">❝</span>
                          <p className="text-gray-700 italic flex-1">
                            {stage.content.testimonial.content}
                          </p>
                        </div>
                        <p className="text-sm text-gray-600 text-right">
                          — {stage.content.testimonial.author}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  )
}