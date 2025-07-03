'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface UserProfile {
  age: string
  jobType: string
  income: string
  concerns: string[]
}

interface DetailedRecommendation {
  category: string
  title: string
  description: string
  currentSituation: string
  improvements: string[]
  actionSteps: ActionStep[]
  timeframe: string
  priority: 'high' | 'medium' | 'low'
  potentialBenefit: string
  risks: string[]
  evidenceSource: EvidenceSource
}

interface ActionStep {
  step: number
  action: string
  deadline: string
  difficulty: 'easy' | 'medium' | 'hard'
  resources: string[]
}

interface EvidenceSource {
  category: string
  source: string
  year: number
  url: string
  reliability: 'government' | 'academic' | 'industry'
}

interface EnhancedDiagnosisResultProps {
  userProfile: UserProfile
  onClose: () => void
}

export default function EnhancedDiagnosisResult({ userProfile, onClose }: EnhancedDiagnosisResultProps) {
  const [, setSavedResults] = useState<UserProfile[]>([]) // 今後の拡張用
  const [shareUrl, setShareUrl] = useState('')
  const [showShareModal, setShowShareModal] = useState(false)
  
  // 診断結果をLocalStorageに保存
  useEffect(() => {
    const saveResult = () => {
      const existingResults = JSON.parse(localStorage.getItem('yonaosi-diagnosis-history') || '[]')
      const newResult = {
        ...userProfile,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      }
      const updatedResults = [newResult, ...existingResults.slice(0, 9)] // 最大10件保存
      localStorage.setItem('yonaosi-diagnosis-history', JSON.stringify(updatedResults))
      setSavedResults(updatedResults)
    }
    
    saveResult()
  }, [userProfile])
  
  // 共有用URL生成
  const generateShareUrl = () => {
    const resultData = {
      age: userProfile.age,
      jobType: userProfile.jobType,
      income: userProfile.income,
      concerns: userProfile.concerns
    }
    const encodedData = btoa(JSON.stringify(resultData))
    const url = `${window.location.origin}${window.location.pathname}?result=${encodedData}`
    setShareUrl(url)
    setShowShareModal(true)
  }
  
  // クリップボードにコピー
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('コピーしました！')
    } catch (err) {
      console.error('コピーに失敗しました:', err)
    }
  }
  
  // LINEで共有
  const shareToLine = () => {
    const text = `YONAOSI診断結果をシェアします！\n年代: ${userProfile.age}\n職業: ${userProfile.jobType}\n年収: ${userProfile.income}\n関心事: ${userProfile.concerns.join('、')}\n\n詳細はこちら: ${shareUrl}`
    window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text)}`, '_blank')
  }
  
  // Twitterで共有
  const shareToTwitter = () => {
    const text = `YONAOSIで資産形成診断を受けました！\n将来の資産形成に向けたアドバイスを受けて、安心できました。 #YONAOSI #資産形成 #ファイナンシャルプランニング\n${shareUrl}`
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank')
  }
  // const [showDetailedView, setShowDetailedView] = useState(false) // 将来の機能拡張用
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [emailAddress, setEmailAddress] = useState('')
  const [isEmailSending] = useState(false) // 今後の拡張用

  // 詳細な診断ロジック
  const generateDetailedRecommendations = (profile: UserProfile): DetailedRecommendation[] => {
    const recommendations: DetailedRecommendation[] = []

    // 年代×職業×年収×悩みの複合分析
    const ageGroup = profile.age
    const jobCategory = profile.jobType
    const incomeLevel = profile.income
    const concerns = profile.concerns

    // 1. 税金最適化（詳細版）
    if (concerns.includes('税金を減らしたい') || ageGroup === '20代' || ageGroup === '30代') {
      recommendations.push({
        category: '税金最適化',
        title: '包括的税金最適化戦略',
        description: 'あなたの年収・職業・年代に応じた最適な節税戦略を検討します。',
        currentSituation: `${ageGroup}・${jobCategory}・${incomeLevel}の方の一般的な税負担状況をベースに分析`,
        improvements: [
          'iDeCo（個人型確定拠出年金）による所得控除の活用',
          'つみたてNISA による非課税投資枠の最大活用',
          'ふるさと納税による住民税控除の最適化',
          '医療費控除・セルフメディケーション税制の検討',
          jobCategory === '個人事業主・経営者' ? '青色申告特別控除の最大活用' : '給与所得控除との最適化',
          '住宅ローン控除との併用検討（該当者のみ）'
        ],
        actionSteps: [
          {
            step: 1,
            action: 'iDeCo口座開設と拠出額決定',
            deadline: '1ヶ月以内',
            difficulty: 'easy',
            resources: ['SBI証券', '楽天証券', '松井証券等での開設']
          },
          {
            step: 2,
            action: 'つみたてNISA口座開設と積立設定',
            deadline: '1ヶ月以内',
            difficulty: 'easy',
            resources: ['同上証券会社での同時開設推奨']
          },
          {
            step: 3,
            action: 'ふるさと納税の年間計画策定',
            deadline: '2週間以内',
            difficulty: 'easy',
            resources: ['さとふる', 'ふるさとチョイス等のサイト']
          },
          {
            step: 4,
            action: '年末調整・確定申告の最適化',
            deadline: '年内',
            difficulty: 'medium',
            resources: ['税理士相談', '税務署相談', 'e-Tax利用']
          }
        ],
        timeframe: '開始から3ヶ月で基盤構築、年単位で効果実感',
        priority: 'high',
        potentialBenefit: '所得控除による節税効果（具体的効果は年収・税率により変動）',
        risks: [
          'iDeCoは60歳まで引き出し不可',
          '投資商品は元本割れリスクあり',
          '税制改正により制度変更の可能性'
        ],
        evidenceSource: {
          category: '税制統計',
          source: '国税庁「民間給与実態統計調査」',
          year: 2023,
          url: 'https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan/',
          reliability: 'government'
        }
      })
    }

    // 2. 保険最適化（詳細版）
    if (concerns.includes('保険料が高い') || ageGroup === '30代' || ageGroup === '40代') {
      recommendations.push({
        category: '保険最適化',
        title: 'ライフステージ別保険最適化プラン',
        description: 'あなたのライフステージと家族構成に応じた保険の最適化を検討します。',
        currentSituation: `${ageGroup}の${jobCategory}の方の一般的な保険加入パターンをベースに分析`,
        improvements: [
          '必要保障額の科学的算出（収入・支出・貯蓄ベース）',
          '重複保障の洗い出しと整理',
          '定期保険と終身保険の最適配分',
          '医療保険の保障内容と保険料のバランス見直し',
          ageGroup === '40代' ? 'がん保険・三大疾病保険の検討' : '基本保障の充実',
          '就業不能保険の必要性検討'
        ],
        actionSteps: [
          {
            step: 1,
            action: '現在の保険証券の全件確認・整理',
            deadline: '1週間以内',
            difficulty: 'easy',
            resources: ['保険証券一覧表作成', '保障内容一覧化']
          },
          {
            step: 2,
            action: '必要保障額の計算',
            deadline: '2週間以内',
            difficulty: 'medium',
            resources: ['生命保険文化センターの計算ツール', 'FP相談']
          },
          {
            step: 3,
            action: '保険の見直し方針決定',
            deadline: '3週間以内',
            difficulty: 'medium',
            resources: ['保険ショップ相談', '独立系FP相談']
          },
          {
            step: 4,
            action: '保険の解約・新規加入手続き',
            deadline: '2ヶ月以内',
            difficulty: 'hard',
            resources: ['複数社比較', '健康診断受診']
          }
        ],
        timeframe: '見直し完了まで2-3ヶ月、効果は即座に実感',
        priority: 'medium',
        potentialBenefit: '適正な保障での保険料最適化（効果は現在の加入状況により変動）',
        risks: [
          '健康状態により新規加入が困難な場合あり',
          '解約返戻金が元本割れの可能性',
          '保障空白期間の発生リスク'
        ],
        evidenceSource: {
          category: '保険統計',
          source: '生命保険文化センター「生活保障に関する調査」',
          year: 2022,
          url: 'https://www.jili.or.jp/research/',
          reliability: 'industry'
        }
      })
    }

    // 3. 投資戦略（詳細版）
    if (concerns.includes('投資を始めたい') || concerns.includes('老後資金が不安')) {
      recommendations.push({
        category: '投資戦略',
        title: `${ageGroup}向け長期投資戦略`,
        description: 'あなたの年代とリスク許容度に応じた投資戦略を検討します。',
        currentSituation: `${ageGroup}・${incomeLevel}の方の一般的な資産配分状況をベースに分析`,
        improvements: [
          'つみたてNISA の最大活用（年40万円枠）',
          ageGroup === '20代' || ageGroup === '30代' ? '積極的成長型ポートフォリオ構築' : 'バランス型ポートフォリオ構築',
          'インデックスファンドによる分散投資',
          'ドルコスト平均法による時間分散',
          '一般NISA・新NISA制度の活用検討',
          jobCategory === '会社員・公務員' ? '企業型DC（401k）の最適化' : '小規模企業共済の活用'
        ],
        actionSteps: [
          {
            step: 1,
            action: 'つみたてNISA口座開設',
            deadline: '2週間以内',
            difficulty: 'easy',
            resources: ['ネット証券（SBI・楽天・松井）', '銀行での開設']
          },
          {
            step: 2,
            action: '投資方針と商品選定',
            deadline: '1ヶ月以内',
            difficulty: 'medium',
            resources: ['全世界株式インデックス', 'バランスファンド等']
          },
          {
            step: 3,
            action: '月次積立設定（3-5万円推奨）',
            deadline: '1ヶ月以内',
            difficulty: 'easy',
            resources: ['自動積立設定', '家計に無理のない範囲']
          },
          {
            step: 4,
            action: '年1回のリバランス設定',
            deadline: '運用開始から1年後',
            difficulty: 'medium',
            resources: ['資産配分見直し', '利益確定・損切りルール']
          }
        ],
        timeframe: '運用開始まで1ヶ月、長期（10-20年）での資産形成',
        priority: 'high',
        potentialBenefit: '長期投資による資産形成の可能性（効果は市場環境により変動）',
        risks: [
          '投資元本の変動・減少リスク',
          'インフレリスク',
          '為替変動リスク（外国資産投資時）',
          '途中解約による機会損失リスク'
        ],
        evidenceSource: {
          category: '投資行動統計',
          source: '金融広報中央委員会「家計の金融行動に関する世論調査」',
          year: 2023,
          url: 'https://www.shiruporuto.jp/public/data/survey/',
          reliability: 'government'
        }
      })
    }

    // 4. 住宅・ローン戦略（該当者のみ）
    if (concerns.includes('住宅購入を検討中') || ageGroup === '30代') {
      recommendations.push({
        category: '住宅・ローン戦略',
        title: '住宅購入・ローン最適化戦略',
        description: 'あなたの年収と将来計画に応じた住宅購入戦略を検討します。',
        currentSituation: `${incomeLevel}の方の一般的な住宅ローン利用状況をベースに分析`,
        improvements: [
          '適正な住宅購入予算の算出（年収の5-6倍以内推奨）',
          '住宅ローン控除の最大活用',
          '金利タイプ（固定・変動）の最適選択',
          '繰上返済戦略の策定',
          '住宅購入時期の最適化',
          '頭金と諸費用の準備計画'
        ],
        actionSteps: [
          {
            step: 1,
            action: '住宅購入予算の詳細試算',
            deadline: '1ヶ月以内',
            difficulty: 'medium',
            resources: ['銀行の事前審査', 'FP相談', '住宅ローンシミュレーター']
          },
          {
            step: 2,
            action: '複数金融機関での条件比較',
            deadline: '2ヶ月以内',
            difficulty: 'medium',
            resources: ['都市銀行', '地銀', 'ネット銀行', '信用金庫']
          },
          {
            step: 3,
            action: '住宅ローン仮審査申込',
            deadline: '3ヶ月以内',
            difficulty: 'hard',
            resources: ['必要書類準備', '勤務先証明書等']
          },
          {
            step: 4,
            action: '物件選定と本審査',
            deadline: '6ヶ月以内',
            difficulty: 'hard',
            resources: ['不動産会社', '建築会社', '司法書士']
          }
        ],
        timeframe: '検討開始から購入まで6-12ヶ月',
        priority: 'medium',
        potentialBenefit: '住宅ローン控除による税負担軽減と資産形成',
        risks: [
          '金利上昇リスク',
          '不動産価格変動リスク',
          '転勤・転職等による売却リスク',
          '修繕・維持費の継続負担'
        ],
        evidenceSource: {
          category: '住宅統計',
          source: '住宅金融支援機構「住宅ローン利用者の実態調査」',
          year: 2023,
          url: 'https://www.jhf.go.jp/about/research/loan_user.html',
          reliability: 'government'
        }
      })
    }

    return recommendations
  }

  const generatePDF = async () => {
    setIsGeneratingPDF(true)
    try {
      const element = document.getElementById('diagnosis-content')
      if (!element) {
        return
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      const filename = `YONAOSI診断結果_${userProfile.age}_${userProfile.jobType}_${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}${new Date().getDate().toString().padStart(2, '0')}.pdf`
      
      pdf.save(filename)
    } catch (error) {
      console.error('PDF生成エラー:', error)
      alert('PDF生成中にエラーが発生しました。しばらく時間をおいて再度お試しください。')
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const recommendations = generateDetailedRecommendations(userProfile)

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
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-sm sm:max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mx-2 sm:mx-0"
      >
        <div className="p-4 sm:p-6 md:p-8" id="diagnosis-content">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">包括的診断結果レポート</h2>
            <div className="flex gap-2">
              <button
                onClick={generatePDF}
                disabled={isGeneratingPDF}
                className="btn-secondary flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 min-h-[44px] sm:min-h-[40px]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {isGeneratingPDF ? 'PDF生成中...' : 'PDFダウンロード'}
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 min-h-[48px] min-w-[48px] sm:min-h-[32px] sm:min-w-[32px] flex items-center justify-center"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ユーザープロファイル詳細 */}
          <div className="bg-gradient-to-r from-soft-orange/8 via-lime-green/6 to-pale-blue/8 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-soft-orange/20">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">診断対象プロファイル</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-soft-orange-light/20 to-white rounded-lg p-3 sm:p-4 border border-soft-orange/15">
                <div className="text-xs sm:text-sm text-soft-grey">年代</div>
                <div className="text-base sm:text-lg font-bold text-soft-orange">{userProfile.age}</div>
              </div>
              <div className="bg-gradient-to-br from-lime-green-light/20 to-white rounded-lg p-4 border border-lime-green/15">
                <div className="text-sm text-soft-grey">職業</div>
                <div className="text-lg font-bold text-lime-green-dark">{userProfile.jobType}</div>
              </div>
              <div className="bg-gradient-to-br from-pale-blue-light/20 to-white rounded-lg p-4 border border-pale-blue/15">
                <div className="text-sm text-soft-grey">年収</div>
                <div className="text-lg font-bold text-pale-blue-dark">{userProfile.income}</div>
              </div>
              <div className="bg-gradient-to-br from-soft-orange/10 via-lime-green/8 to-pale-blue/10 rounded-lg p-4 border border-soft-orange/15">
                <div className="text-sm text-soft-grey">関心事</div>
                <div className="text-sm font-medium text-dark-grey">{userProfile.concerns.join('、')}</div>
              </div>
            </div>
          </div>

          {/* 詳細推奨事項 */}
          <div className="space-y-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">あなた専用の改善戦略</h3>
            {recommendations.map((rec, index) => {
              const cardClass = index % 3 === 0 ? 'diagnosis-card-primary' : 
                               index % 3 === 1 ? 'diagnosis-card-secondary' : 
                               'diagnosis-card-accent'
              return (
              <div key={index} className={`${cardClass} rounded-xl overflow-hidden`}>
                <div className="bg-gray-50 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{rec.title}</h4>
                      <div className="flex items-center gap-4 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          rec.priority === 'high' ? 'bg-soft-orange/15 text-soft-orange' :
                          rec.priority === 'medium' ? 'bg-pale-blue/15 text-pale-blue-dark' :
                          'bg-lime-green/15 text-lime-green-dark'
                        }`}>
                          {rec.priority === 'high' ? '🔥 高優先度' : 
                           rec.priority === 'medium' ? '⚡ 中優先度' : '💡 参考'}
                        </span>
                        <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                          📅 {rec.timeframe}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{rec.description}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <h5 className="font-bold text-blue-800 mb-2">📊 現状分析</h5>
                    <p className="text-sm text-blue-700">{rec.currentSituation}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold mb-3">🎯 改善ポイント</h5>
                      <ul className="space-y-2">
                        {rec.improvements.map((improvement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-soft-orange mt-1">●</span>
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold mb-3">⚠️ 留意点</h5>
                      <ul className="space-y-2">
                        {rec.risks.map((risk, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-yellow-500 mt-1">▲</span>
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h5 className="font-bold mb-3">📋 具体的アクションステップ</h5>
                    <div className="space-y-4">
                      {rec.actionSteps.map((step, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-soft-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h6 className="font-medium">{step.action}</h6>
                                <span className="text-xs bg-white px-2 py-1 rounded">
                                  📅 {step.deadline}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  step.difficulty === 'easy' ? 'bg-lime-green/15 text-lime-green-dark' :
                                  step.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-soft-orange/15 text-soft-orange'
                                }`}>
                                  {step.difficulty === 'easy' ? '😊 簡単' :
                                   step.difficulty === 'medium' ? '🤔 普通' : '😰 要注意'}
                                </span>
                              </div>
                              <div className="text-sm text-gray-600">
                                <strong>必要なもの:</strong> {step.resources.join('、')}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <div className="bg-soft-orange/10 rounded-lg p-4">
                      <h6 className="font-bold text-soft-orange mb-2">💰 期待される効果</h6>
                      <p className="text-sm">{rec.potentialBenefit}</p>
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h6 className="font-bold text-gray-700 mb-2">📚 参考データ</h6>
                      <div className="text-sm text-gray-600">
                        <div className="mb-1">出典: {rec.evidenceSource.source}</div>
                        <div className="mb-1">調査年: {rec.evidenceSource.year}年</div>
                        <div>信頼性: {
                          rec.evidenceSource.reliability === 'government' ? '政府統計（最高）' :
                          rec.evidenceSource.reliability === 'academic' ? '学術調査（高）' : '業界統計（中）'
                        }</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            })}
          </div>

          {/* 今後のスケジュール */}
          <div className="mt-8 bg-gradient-to-r from-lime-green/15 via-soft-orange/10 to-pale-blue/15 rounded-lg p-6 border border-lime-green/20">
            <h3 className="text-xl font-bold mb-4">📅 今後3ヶ月のアクションスケジュール</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-soft-orange-light/15 to-white rounded-lg p-4 border border-soft-orange/20">
                <h4 className="font-bold text-soft-orange mb-2">1ヶ月目</h4>
                <ul className="text-sm space-y-1">
                  <li>• 各種口座開設手続き</li>
                  <li>• 現状の保険・投資の整理</li>
                  <li>• 専門家相談の予約</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-lime-green-light/15 to-white rounded-lg p-4 border border-lime-green/20">
                <h4 className="font-bold text-lime-green-dark mb-2">2ヶ月目</h4>
                <ul className="text-sm space-y-1">
                  <li>• 投資・積立の開始</li>
                  <li>• 保険見直しの実行</li>
                  <li>• 税金対策の本格実施</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-pale-blue-light/15 to-white rounded-lg p-4 border border-pale-blue/20">
                <h4 className="font-bold text-pale-blue-dark mb-2">3ヶ月目</h4>
                <ul className="text-sm space-y-1">
                  <li>• 運用状況の初回確認</li>
                  <li>• 家計改善効果の測定</li>
                  <li>• 次年度計画の策定</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 免責事項（強化版） */}
          <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-3">⚠️ 重要な注意事項・免責事項</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
              <div>
                <h5 className="font-bold mb-2">診断結果について</h5>
                <ul className="space-y-1">
                  <li>• 公的統計データに基づく一般的傾向の参考情報です</li>
                  <li>• 個別の効果・成果・結果を保証するものではありません</li>
                  <li>• 統計数値は調査年度により変動します</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-2">投資・金融商品について</h5>
                <ul className="space-y-1">
                  <li>• 投資にはリスクが伴い、元本割れの可能性があります</li>
                  <li>• 過去の運用実績は将来の運用成果を保証しません</li>
                  <li>• 具体的な金融判断は必ず専門家にご相談ください</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 rounded">
              <p className="text-yellow-800 font-medium text-center">
                本診断は情報提供のみを目的とし、投資勧誘・保険勧誘・税務相談にあたる行為は一切行っておりません。
              </p>
            </div>
          </div>

          {/* CTAセクション */}
          <div className="mt-8 text-center bg-gradient-to-r from-soft-orange/12 via-lime-green/8 to-pale-blue/12 rounded-lg p-6 border border-soft-orange/20">
            <h3 className="text-xl font-bold mb-4">次のステップ</h3>
            <p className="text-gray-700 mb-6">
              診断結果を踏まえた具体的なアドバイスをご希望の方は、<br />
              専門家による個別相談をお申し込みください。
            </p>
            <div className="flex flex-col gap-4 items-center">
              <button 
                onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                className="btn-primary text-lg px-8 py-4 w-full sm:w-auto min-h-[56px]"
              >
                📱 LINEで専門家に相談
              </button>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button 
                  onClick={generatePDF}
                  disabled={isGeneratingPDF}
                  className="btn-secondary text-base px-6 py-3 min-h-[48px] flex items-center justify-center gap-2"
                >
                  {isGeneratingPDF ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      生成中...
                    </>
                  ) : (
                    <>📄 PDF保存</>
                  )}
                </button>
                
                <button 
                  onClick={generateShareUrl}
                  className="btn-lime text-base px-6 py-3 min-h-[48px] flex items-center justify-center gap-2"
                >
                  🔗 結果を共有
                </button>
              </div>
            </div>
            
            {/* 共有モーダル */}
            {showShareModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                onClick={(e) => e.target === e.currentTarget && setShowShareModal(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">📤 診断結果を共有</h3>
                    <button
                      onClick={() => setShowShareModal(false)}
                      className="text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none rounded"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">共有URL</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={shareUrl}
                          readOnly
                          className="flex-1 px-3 py-2 border rounded-lg bg-gray-50 text-sm"
                        />
                        <button
                          onClick={() => copyToClipboard(shareUrl)}
                          className="px-4 py-2 bg-soft-orange text-white rounded-lg hover:opacity-90 text-sm"
                        >
                          コピー
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-3">SNSで共有</p>
                      <div className="flex gap-3">
                        <button
                          onClick={shareToLine}
                          className="flex-1 px-4 py-3 bg-green-500 text-white rounded-lg hover:opacity-90 flex items-center justify-center gap-2"
                        >
                          📱 LINE
                        </button>
                        <button
                          onClick={shareToTwitter}
                          className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg hover:opacity-90 flex items-center justify-center gap-2"
                        >
                          🐦 Twitter
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-3">メールで送信</p>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          placeholder="送信先メールアドレス"
                          className="flex-1 px-3 py-2 border rounded-lg text-sm"
                        />
                        <button
                          onClick={() => {
                            const subject = 'YONAOSI診断結果'
                            const body = `YONAOSI診断結果をお送りします。\\n\\n年代: ${userProfile.age}\\n職業: ${userProfile.jobType}\\n年収: ${userProfile.income}\\n関心事: ${userProfile.concerns.join('、')}\\n\\n詳細はこちら: ${shareUrl}`
                            window.open(`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
                          }}
                          disabled={!emailAddress || isEmailSending}
                          className="px-4 py-2 bg-pale-blue text-white rounded-lg hover:opacity-90 text-sm disabled:opacity-50"
                        >
                          送信
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}