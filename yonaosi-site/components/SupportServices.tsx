'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

const stageData = [
  {
    id: 'single',
    label: '独身期',
    badge: '20-30代に人気',
    content: {
      title: '時間を味方につける資産形成',
      description: '時間を活用した長期投資を検討し、将来の選択肢を広げる可能性について一緒に考えます。',
      services: [
        {
          icon: '💰',
          title: '新NISA・iDeCo活用検討',
          impact: '税制優遇の検討',
          detail: '税制優遇制度の活用を検討'
        },
        {
          icon: '💼',
          title: 'キャリア相談',
          impact: 'キャリア設計支援',
          detail: 'キャリア設計と転職相談のサポート'
        },
        {
          icon: '🏠',
          title: '家計見直し相談',
          impact: '家計の最適化',
          detail: '家賃や光熱費などの固定費見直しを検討'
        }
      ],
      stat: { label: '積立投資の検討', value: '長期投資の検討', detail: '効果は個人差があり、成果を保証するものではありません' }
    },
  },
  {
    id: 'family',
    label: '子育て期',
    badge: '人気ステージ',
    content: {
      title: '子どもの未来に、最高の準備を',
      description: '教育資金、住宅ローン、老後資金の準備について、バランスの取れた家計戦略を一緒に検討します。',
      services: [
        {
          icon: '🎓',
          title: '教育資金準備相談',
          impact: '計画的な検討',
          detail: 'ジュニアNISA活用や学資保険の見直し検討'
        },
        {
          icon: '🏡',
          title: '住宅ローン相談',
          impact: 'ローンの検討',
          detail: '繰上返済と借り換えの検討'
        },
        {
          icon: '📊',
          title: '家計管理相談',
          impact: '支出管理サポート',
          detail: '支出管理と固定費見直しの検討'
        }
      ],
      stat: { label: '教育資金準備', value: '計画的な検討', detail: '効果は個々の状況により異なり、成果を保証するものではありません' }
    },
  },
  {
    id: 'second',
    label: 'セカンドライフ期',
    badge: '充実サポート',
    content: {
      title: '自由で豊かな第二の人生へ',
      description: 'これまでの資産を活かし、安心できるセカンドライフに向けた資金計画を一緒に検討します。',
      services: [
        {
          icon: '🏦',
          title: '年金制度相談',
          impact: '年金制度の検討',
          detail: '繰下げ受給と加給年金の活用検討'
        },
        {
          icon: '💎',
          title: '退職金運用相談',
          impact: 'リスク管理型運用',
          detail: 'リスク分散と定期収入確保の検討'
        },
        {
          icon: '🏥',
          title: '医療・介護費用相談',
          impact: '保険制度の検討',
          detail: '高額療養費制度と民間保険の検討'
        }
      ],
      stat: { label: '老後資金準備', value: '必要額の試算', detail: '効果は個々のライフスタイルにより異なり、成果を保証するものではありません' }
    },
  },
]

export default function SupportServices() {
  return (
    <section className="section-padding py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ライフステージ別トータルサポート
          </h2>
          <p className="text-lg text-gray-600">
            あなたの現在の状況に最適なサポートプランをご提案します
          </p>
        </motion.div>

        <Tabs.Root defaultValue="single" className="w-full">
          <Tabs.List className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-8">
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
                className="card-bg-gradient relative overflow-hidden border border-soft-orange/15"
              >
                {stage.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-soft-orange text-white px-4 py-2 rounded-full text-sm font-bold">
                      {stage.badge}
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">{stage.content.title}</h3>
                  <p className="text-gray-600 mb-6">{stage.content.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {stage.content.services.map((service, index) => {
                      const serviceCardClass = index % 3 === 0 ? 'feature-card-1' : 
                                              index % 3 === 1 ? 'feature-card-2' : 
                                              'feature-card-3'
                      return (
                      <div key={index} className={`${serviceCardClass} rounded-lg p-6`}>
                        <div className="text-3xl mb-3">{service.icon}</div>
                        <h4 className="font-bold mb-2">{service.title}</h4>
                        <p className="text-sm text-soft-orange font-medium mb-2">{service.impact}</p>
                        <p className="text-xs text-gray-600">{service.detail}</p>
                      </div>
                      )
                    })}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-600 mb-1">{stage.content.stat.label}</p>
                    <p className="text-2xl font-bold text-dark-grey">{stage.content.stat.value}</p>
                    <p className="text-xs text-gray-500">{stage.content.stat.detail}</p>
                  </div>

                  <button 
                    onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                    className="btn-primary w-full sm:w-auto min-h-[44px] px-6 py-3"
                  >
                    LINE相談を申し込む
                  </button>
                </div>
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            どのステージでも共通で受けられるサポート
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-bold mb-1">税金最適化</h4>
              <p className="text-sm text-gray-600">適切な税務管理</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-bold mb-1">保険見直し</h4>
              <p className="text-sm text-gray-600">保険の最適化</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold mb-1">光熱費削減</h4>
              <p className="text-sm text-gray-600">エネルギー最適化</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💳</div>
              <h4 className="font-bold mb-1">ローン見直し</h4>
              <p className="text-sm text-gray-600">金利最適化</p>
            </div>
          </div>
          <p className="text-gray-600">
            ライフステージに関わらず、あらゆる角度から資産形成をサポートします
          </p>
        </motion.div>
      </div>
    </section>
  )
}