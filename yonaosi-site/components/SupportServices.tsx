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
      description: '若さは最強の武器。複利の力を最大限に活かし、将来の選択肢を広げる基盤を作ります。',
      services: [
        {
          icon: '💰',
          title: '新NISA・iDeCo完全活用',
          impact: '税制優遇を活用',
          detail: '税制優遇を最大活用して効率的な資産形成'
        },
        {
          icon: '💼',
          title: '年収アップ戦略',
          impact: 'キャリア設計支援',
          detail: 'キャリア設計と転職サポートで収入増'
        },
        {
          icon: '🏠',
          title: '賢い一人暮らし術',
          impact: '家計の最適化',
          detail: '家賃交渉や光熱費削減で投資原資を確保'
        }
      ],
      stat: { label: '積立投資の例', value: '長期的な資産形成', detail: '個人差があります' }
    },
  },
  {
    id: 'family',
    label: '子育て期',
    badge: '人気ステージ',
    content: {
      title: '子どもの未来に、最高の準備を',
      description: '教育資金、住宅ローン、老後資金。すべてを両立させる賢い家計戦略があります。',
      services: [
        {
          icon: '🎓',
          title: '教育資金の準備方法',
          impact: '計画的な積立',
          detail: 'ジュニアNISA活用と学資保険の見直し'
        },
        {
          icon: '🏡',
          title: '住宅ローン最適化',
          impact: 'ローンの最適化',
          detail: '繰上返済と借り換えの最適タイミング'
        },
        {
          icon: '📊',
          title: '家計の見える化サポート',
          impact: '支出管理サポート',
          detail: '支出管理アプリ導入と固定費削減'
        }
      ],
      stat: { label: '教育資金準備', value: '計画的な用意', detail: '個々の状況に応じて' }
    },
  },
  {
    id: 'second',
    label: 'セカンドライフ期',
    badge: '充実サポート',
    content: {
      title: '自由で豊かな第二の人生へ',
      description: 'これまでの努力を最大限に活かし、お金の心配から解放された理想のセカンドライフを実現します。',
      services: [
        {
          icon: '🏦',
          title: '年金受給額を最大化',
          impact: '年金制度の活用',
          detail: '繰下げ受給と加給年金の活用術'
        },
        {
          icon: '💎',
          title: '退職金運用の黄金ルール',
          impact: 'リスク管理型運用',
          detail: 'リスク分散と定期収入の確保'
        },
        {
          icon: '🏥',
          title: '医療・介護費用の準備',
          impact: '保険制度の活用',
          detail: '高額療養費制度と民間保険の最適化'
        }
      ],
      stat: { label: '老後資金準備', value: '必要額の計算', detail: '個々のライフスタイルに応じて' }
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
                className="card relative overflow-hidden"
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
                    {stage.content.services.map((service, index) => (
                      <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="text-3xl mb-3">{service.icon}</div>
                        <h4 className="font-bold mb-2">{service.title}</h4>
                        <p className="text-sm text-soft-orange font-medium mb-2">{service.impact}</p>
                        <p className="text-xs text-gray-600">{service.detail}</p>
                      </div>
                    ))}
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