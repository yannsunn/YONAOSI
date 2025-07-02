'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface UserProfile {
  age: string
  jobType: string
  income: string
  concerns: string[]
}

interface EvidenceSource {
  category: string
  source: string
  year: number
  url: string
  reliability: 'government' | 'academic' | 'industry'
}

interface Recommendation {
  title: string
  description: string
  potentialBenefit: string
  evidenceSource: EvidenceSource
  priority: 'high' | 'medium' | 'low'
  timeframe: string
}

interface DiagnosisResultProps {
  userProfile: UserProfile
  onClose: () => void
}

export default function DiagnosisResult({ userProfile, onClose }: DiagnosisResultProps) {
  const [showEvidence, setShowEvidence] = useState(false)

  // エビデンスベース診断ロジック
  const generateRecommendations = (profile: UserProfile): Recommendation[] => {
    const recommendations: Recommendation[] = []

    // 年代別基本推奨事項（総務省家計調査データ基準）
    if (profile.age === '20代' || profile.age === '30代') {
      recommendations.push({
        title: 'つみたてNISA制度の検討',
        description: '年間40万円まで非課税投資が可能な制度です。長期投資による複利効果の活用が期待されます。',
        potentialBenefit: '長期投資による資産形成の可能性（効果は市場環境により変動）',
        evidenceSource: {
          category: '投資行動統計',
          source: '金融広報中央委員会「家計の金融行動に関する世論調査」',
          year: 2023,
          url: 'https://www.shiruporuto.jp/public/data/survey/',
          reliability: 'government'
        },
        priority: 'high',
        timeframe: '即時開始可能'
      })
    }

    // 職業別推奨（国税庁データ基準）
    if (profile.jobType === '会社員・公務員') {
      recommendations.push({
        title: 'iDeCo（個人型確定拠出年金）制度の検討',
        description: '月額23,000円まで拠出可能な制度です。所得控除による節税効果が期待されます。',
        potentialBenefit: '所得控除による節税効果（効果は年収・税率により変動）',
        evidenceSource: {
          category: '税制統計',
          source: '国税庁「民間給与実態統計調査」',
          year: 2023,
          url: 'https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan/',
          reliability: 'government'
        },
        priority: 'high',
        timeframe: '申込から2-3ヶ月'
      })
    }

    // 悩み別対応（各種統計データ基準）
    if (profile.concerns.includes('保険料が高い')) {
      recommendations.push({
        title: '保険の必要保障額見直し検討',
        description: '保険加入状況を確認し、重複保障がないか専門家と検討することをお勧めします。',
        potentialBenefit: '適正な保障での保険料最適化の可能性（効果は個人の状況により変動）',
        evidenceSource: {
          category: '保険統計',
          source: '生命保険文化センター「生活保障に関する調査」',
          year: 2022,
          url: 'https://www.jili.or.jp/research/',
          reliability: 'industry'
        },
        priority: 'medium',
        timeframe: '見直し期間：1-2ヶ月'
      })
    }

    if (profile.concerns.includes('税金を減らしたい')) {
      recommendations.push({
        title: 'ふるさと納税制度の検討',
        description: '年収に応じた控除上限額の範囲内で活用することで、税負担軽減の可能性があります。',
        potentialBenefit: '控除上限額の活用による税負担軽減の可能性（上限額は年収により変動）',
        evidenceSource: {
          category: '税制統計',
          source: '総務省「ふるさと納税に関する現況調査」',
          year: 2023,
          url: 'https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/furusato/mechanism/about/',
          reliability: 'government'
        },
        priority: 'medium',
        timeframe: '年内実行推奨'
      })
    }

    return recommendations
  }

  const recommendations = generateRecommendations(userProfile)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">診断結果</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* ユーザープロファイル要約 */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-bold mb-2">あなたのプロファイル</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>年代: {userProfile.age}</div>
              <div>職業: {userProfile.jobType}</div>
              <div>年収: {userProfile.income}</div>
              <div>関心事: {userProfile.concerns.join('、')}</div>
            </div>
          </div>

          {/* 推奨事項一覧 */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">あなたへの推奨プラン</h3>
            {recommendations.map((rec, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">{rec.title}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                        rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {rec.priority === 'high' ? '高優先度' : 
                         rec.priority === 'medium' ? '中優先度' : '低優先度'}
                      </span>
                      <span className="text-sm text-gray-600">{rec.timeframe}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{rec.description}</p>
                
                <div className="bg-soft-orange/10 rounded-lg p-4 mb-4">
                  <p className="font-medium text-soft-orange">{rec.potentialBenefit}</p>
                </div>

                <details className="text-sm">
                  <summary className="cursor-pointer text-gray-600 hover:text-gray-800">
                    📊 統計的根拠を表示
                  </summary>
                  <div className="mt-3 p-3 bg-gray-50 rounded">
                    <div className="space-y-1">
                      <div><strong>データソース:</strong> {rec.evidenceSource.source}</div>
                      <div><strong>調査年度:</strong> {rec.evidenceSource.year}年</div>
                      <div><strong>信頼性:</strong> {
                        rec.evidenceSource.reliability === 'government' ? '政府統計（最高）' :
                        rec.evidenceSource.reliability === 'academic' ? '学術調査（高）' :
                        '業界統計（中）'
                      }</div>
                      <div><strong>URL:</strong> <a href={rec.evidenceSource.url} target="_blank" className="text-blue-600 hover:underline">詳細データ</a></div>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* 免責事項 */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-2">⚠️ 重要な注意事項</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• 本診断は公的統計データに基づく一般的な傾向の参考情報です</li>
              <li>• 個別の効果・成果・結果を保証するものではありません</li>
              <li>• 投資にはリスクが伴い、元本割れの可能性があります</li>
              <li>• 具体的な金融判断は必ず専門家にご相談ください</li>
              <li>• 税制改正等により制度内容が変更される場合があります</li>
              <li>• 統計数値は調査年度により変動することがあります</li>
            </ul>
          </div>

          {/* CTAボタン */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
              className="btn-primary text-lg px-8 py-4"
            >
              専門家に詳しく相談する
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}