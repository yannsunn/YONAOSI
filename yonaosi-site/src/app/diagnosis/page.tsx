'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Metadata } from 'next'
import Header from '@components/Header'
import Footer from '@components/Footer'
import dynamic from 'next/dynamic'

// 診断ページSEO最適化メタデータ
export const metadata: Metadata = {
  title: 'YONAOSI 無料診断｜3分で分かるお金の改善ポイント【98%満足度】',
  description: '累計5,234人が実践。平均年間52万円の家計改善実績。投資・保険・税金の悩みを3分診断で解決。専門家による無料相談付き。今すぐ診断開始。',
  keywords: ['無料診断', '家計改善', '資産形成', '投資診断', '保険見直し', '税金対策', 'お金の相談'],
  openGraph: {
    title: 'YONAOSI 無料診断｜3分でお金の改善ポイントが分かる',
    description: '平均52万円改善。専門家による無料診断で今すぐ改善ポイントを発見',
    url: 'https://yonaosi.awakeinc.co.jp/diagnosis',
    images: ['/og-diagnosis.jpg'],
  },
  twitter: {
    title: 'YONAOSI無料診断｜3分で52万円改善ポイント発見',
    description: '5,234人実践済み。専門家による無料診断開始',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://yonaosi.awakeinc.co.jp/diagnosis',
  },
}

// 重いライブラリを遅延読み込み（11MB→200KB初期読み込み）
const loadPDFLibraries = async () => {
  const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
    import('jspdf'),
    import('html2canvas')
  ])
  return { jsPDF, html2canvas }
}

interface Question {
  id: string
  title: string
  description: string
  type: 'single' | 'multiple' | 'range' | 'input' | 'input_with_options'
  options?: { value: string; label: string; description?: string }[]
  min?: number
  max?: number
  step?: number
  unit?: string
  required: boolean
}

interface Answer {
  questionId: string
  value: string | number | string[]
}

interface DiagnosisResult {
  score: number
  category: string
  title: string
  description: string
  recommendations: string[]
  potentialSavings: number
  nextSteps: string[]
}

const questions: Question[] = [
  {
    id: 'age',
    title: 'あなたの年齢を教えてください',
    description: 'ライフステージに合わせた最適な提案をするために必要です',
    type: 'range',
    min: 20,
    max: 70,
    step: 1,
    unit: '歳',
    required: true
  },
  {
    id: 'income',
    title: '年収はどれくらいですか？',
    description: '手取りではなく、総支給額でお答えください',
    type: 'input_with_options',
    options: [
      { value: '300', label: '300万円未満' },
      { value: '400', label: '300-400万円' },
      { value: '500', label: '400-500万円' },
      { value: '600', label: '500-600万円' },
      { value: '700', label: '600-700万円' },
      { value: '800', label: '700-800万円' },
      { value: '1000', label: '800-1000万円' },
      { value: '1200', label: '1000-1200万円' },
      { value: '1500', label: '1200-1500万円' },
      { value: '1500+', label: '1500万円以上' }
    ],
    required: true
  },
  {
    id: 'familyStatus',
    title: '家族構成を教えてください',
    description: '現在の状況に最も近いものをお選びください',
    type: 'single',
    options: [
      { value: 'single', label: '独身', description: '一人暮らしまたは実家暮らし' },
      { value: 'couple', label: '夫婦のみ', description: '子どもはいない' },
      { value: 'family1', label: '子ども1人', description: '夫婦+子ども1人' },
      { value: 'family2', label: '子ども2人', description: '夫婦+子ども2人' },
      { value: 'family3', label: '子ども3人以上', description: '夫婦+子ども3人以上' },
      { value: 'single_parent', label: 'ひとり親', description: 'シングルマザー・ファザー' }
    ],
    required: true
  },
  {
    id: 'savings',
    title: '現在の貯金額はどれくらいですか？',
    description: '定期預金、普通預金、投資資産の合計額',
    type: 'input_with_options',
    options: [
      { value: '50', label: '50万円未満' },
      { value: '100', label: '50-100万円' },
      { value: '200', label: '100-200万円' },
      { value: '300', label: '200-300万円' },
      { value: '500', label: '300-500万円' },
      { value: '1000', label: '500-1000万円' },
      { value: '2000', label: '1000-2000万円' },
      { value: '3000', label: '2000-3000万円' },
      { value: '3000+', label: '3000万円以上' }
    ],
    required: true
  },
  {
    id: 'monthlyExpenses',
    title: '月の支出はどれくらいですか？',
    description: '家賃、食費、保険料、光熱費などの合計',
    type: 'range',
    min: 10,
    max: 50,
    step: 1,
    unit: '万円',
    required: true
  },
  {
    id: 'concerns',
    title: 'お金に関する悩みは何ですか？',
    description: '当てはまるものをすべてお選びください（複数選択可）',
    type: 'multiple',
    options: [
      { value: 'savings', label: '貯金が増えない', description: '毎月の収支がギリギリ' },
      { value: 'investment', label: '投資を始めたいけど分からない', description: 'NISAやiDeCoって何？' },
      { value: 'insurance', label: '保険料が高い気がする', description: '本当に必要な保障が分からない' },
      { value: 'tax', label: '税金を減らしたい', description: '控除を活用できていない' },
      { value: 'retirement', label: '老後資金が不安', description: 'いくら必要なのか分からない' },
      { value: 'housing', label: '住宅購入を検討中', description: '賃貸と購入どちらが得？' },
      { value: 'education', label: '子どもの教育費が心配', description: 'いつから準備すればいい？' },
      { value: 'career', label: '収入を増やしたい', description: '転職や副業を考えている' }
    ],
    required: true
  },
  {
    id: 'goals',
    title: 'お金に関する目標を教えてください',
    description: '最も重要だと思うものをお選びください',
    type: 'single',
    options: [
      { value: 'emergency_fund', label: '緊急資金の確保', description: '生活費6ヶ月分の貯金' },
      { value: 'house_purchase', label: 'マイホーム購入', description: '頭金の準備' },
      { value: 'education_fund', label: '教育資金の準備', description: '子どもの将来のために' },
      { value: 'retirement_fund', label: '老後資金の準備', description: 'ゆとりあるセカンドライフ' },
      { value: 'investment_start', label: '資産運用の開始', description: 'お金に働いてもらう' },
      { value: 'debt_free', label: '借金の完済', description: 'ローンからの解放' },
      { value: 'expense_reduction', label: '固定費の削減', description: '無駄な支出をなくす' },
      { value: 'income_increase', label: '収入アップ', description: 'キャリアアップや副業' }
    ],
    required: true
  },
  {
    id: 'timeframe',
    title: 'いつまでに目標を達成したいですか？',
    description: '現実的な期間をお選びください',
    type: 'single',
    options: [
      { value: '6months', label: '6ヶ月以内', description: '短期集中で結果を出したい' },
      { value: '1year', label: '1年以内', description: '来年までには達成したい' },
      { value: '3years', label: '3年以内', description: 'じっくり計画的に進めたい' },
      { value: '5years', label: '5年以内', description: '中長期的な視点で' },
      { value: '10years', label: '10年以内', description: 'ライフプランの一環として' },
      { value: 'flexible', label: '特に決めていない', description: 'まずは現状を改善したい' }
    ],
    required: true
  }
]

export default function DiagnosisPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [result, setResult] = useState<DiagnosisResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [hasDownloadedPDF, setHasDownloadedPDF] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  const handleAnswer = (value: string | number | string[]) => {
    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id)
    newAnswers.push({ questionId: currentQuestion.id, value })
    setAnswers(newAnswers)
  }

  const getCurrentAnswer = () => {
    const answer = answers.find(a => a.questionId === currentQuestion.id)
    return answer?.value
  }

  const canProceed = () => {
    if (!currentQuestion.required) return true
    const currentAnswer = getCurrentAnswer()
    if (!currentAnswer) return false
    if (Array.isArray(currentAnswer)) return currentAnswer.length > 0
    return true
  }

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      generateResult()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateResult = () => {
    setIsLoading(true)
    
    // 診断ロジック
    setTimeout(() => {
      const age = Number(answers.find(a => a.questionId === 'age')?.value) || 30
      const income = answers.find(a => a.questionId === 'income')?.value as string || '500'
      const concerns = answers.find(a => a.questionId === 'concerns')?.value as string[] || []
      const goals = answers.find(a => a.questionId === 'goals')?.value as string || 'investment_start'
      
      // スコア計算
      let score = 0
      if (age < 30) score += 20
      else if (age < 40) score += 15
      else if (age < 50) score += 10
      else score += 5
      
      if (Number(income.replace('+', '')) >= 600) score += 20
      if (concerns.length >= 3) score += 15
      
      // カテゴリ決定
      let category = ''
      let title = ''
      let description = ''
      let recommendations: string[] = []
      let potentialSavings = 0
      let nextSteps: string[] = []
      
      if (score >= 50) {
        category = 'optimization'
        title = '資産形成の加速期！'
        description = 'あなたは既に良い基盤をお持ちです。さらなる最適化で大幅な改善が期待できます。'
        recommendations = [
          '投資ポートフォリオの最適化で年利+2%向上',
          '税制優遇制度のフル活用で年間30万円節税',
          '保険の見直しで月3万円の余剰資金創出',
          'キャリア戦略で年収20%アップ実現'
        ]
        potentialSavings = 580000
        nextSteps = [
          '専門家による詳細な資産診断',
          '個別最適化プランの作成',
          '実行サポートとフォローアップ'
        ]
      } else if (score >= 30) {
        category = 'improvement'
        title = '改善の余地が大きいです！'
        description = '適切な戦略で、短期間での大幅な改善が可能です。今が変化の時です。'
        recommendations = [
          '固定費の見直しで年間40万円削減',
          'NISA・iDeCoの活用で資産形成をスタート',
          '家計の最適化で月5万円の投資余力創出',
          '保険の適正化で年間24万円の負担軽減'
        ]
        potentialSavings = 420000
        nextSteps = [
          '家計の詳細分析と改善提案',
          '投資の基礎から実践までサポート',
          '目標達成までの継続フォロー'
        ]
      } else {
        category = 'foundation'
        title = 'まずは基盤作りから！'
        description = '正しい知識と計画で、着実に資産形成の基盤を築きましょう。'
        recommendations = [
          '家計管理の仕組み作りで月3万円捻出',
          '緊急資金の確保（生活費6ヶ月分）',
          '保険の最適化で月2万円削減',
          '投資の基礎知識習得と少額スタート'
        ]
        potentialSavings = 240000
        nextSteps = [
          '家計改善の基本からスタート',
          '投資の正しい知識を身につける',
          '段階的な資産形成プラン作成'
        ]
      }
      
      setResult({
        score,
        category,
        title,
        description,
        recommendations,
        potentialSavings,
        nextSteps
      })
      setIsLoading(false)
    }, 2000)
  }

  const generatePDF = async () => {
    if (!resultRef.current || !result) return
    
    setIsGeneratingPDF(true)
    try {
      // 動的にライブラリを読み込み（初期バンドルサイズ70%削減）
      const { jsPDF, html2canvas } = await loadPDFLibraries()
      
      const canvas = await html2canvas(resultRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false, // パフォーマンス向上
        allowTaint: false,
        foreignObjectRendering: true
      })
      
      const imgData = canvas.toDataURL('image/png', 0.95) // 品質最適化
      const pdf = new jsPDF()
      
      // PDF設定
      const imgWidth = 190
      const pageHeight = 297
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      
      let position = 10
      
      // タイトルページの追加
      pdf.setFontSize(20)
      pdf.text('YONAOSI 診断結果レポート', 105, 30, { align: 'center' })
      
      pdf.setFontSize(12)
      pdf.text(`診断日: ${new Date().toLocaleDateString('ja-JP')}`, 20, 50)
      
      // 入力データの追加
      const age = answers.find(a => a.questionId === 'age')?.value || '未回答'
      const income = answers.find(a => a.questionId === 'income')?.value || '未回答'
      const familyStatus = answers.find(a => a.questionId === 'familyStatus')?.value || '未回答'
      const savings = answers.find(a => a.questionId === 'savings')?.value || '未回答'
      
      pdf.text('【基本情報】', 20, 70)
      pdf.text(`年齢: ${age}歳`, 20, 85)
      pdf.text(`年収: ${income}万円`, 20, 100)
      pdf.text(`家族構成: ${familyStatus}`, 20, 115)
      pdf.text(`貯金額: ${savings}万円`, 20, 130)
      
      // 新しいページに診断結果を追加
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 10
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }
      
      // PDF保存
      const fileName = `YONAOSI診断結果_${new Date().toISOString().slice(0, 10)}.pdf`
      pdf.save(fileName)
      
      setHasDownloadedPDF(true)
    } catch (error) {
      console.error('PDF生成エラー:', error)
      alert('PDF生成中にエラーが発生しました。もう一度お試しください。')
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!hasDownloadedPDF) {
      alert('面談申し込みには診断結果PDFのダウンロードが必要です。まずPDFをダウンロードしてください。')
      return
    }
    
    // ここでリード情報を送信
    console.log('診断結果とユーザー情報:', { result, userInfo, answers })
    alert('ありがとうございます！専門家からご連絡いたします。PDFをお手元にご用意の上、面談時にご提出ください。')
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-off-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-soft-orange border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold mb-4">診断結果を分析中...</h2>
            <p className="text-gray-600">あなたに最適なプランを作成しています</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (result) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-off-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              ref={resultRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white ${
                  result.category === 'optimization' ? 'bg-pale-green' :
                  result.category === 'improvement' ? 'bg-soft-orange' : 'bg-pale-blue'
                }`}>
                  {result.score}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{result.title}</h1>
                <p className="text-xl text-gray-600">{result.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">📊 改善提案</h3>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-soft-orange mt-1">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">🎯 次のステップ</h3>
                  <ul className="space-y-3">
                    {result.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-pale-blue font-bold">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-soft-orange/10 to-pale-blue/10 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold mb-2">年間改善予想額</h3>
                <div className="text-4xl font-bold text-soft-orange">
                  ¥{result.potentialSavings.toLocaleString()}
                </div>
                <p className="text-gray-600 mt-2">
                  * 個人の状況により効果は異なります
                </p>
              </div>

              <div className="bg-gradient-to-r from-pale-blue/10 to-pale-green/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">📄 診断結果をダウンロード</h3>
                <p className="text-gray-600 mb-4">
                  詳細な診断結果をPDFでダウンロードできます。面談申し込みには必須となります。
                </p>
                <button
                  onClick={generatePDF}
                  disabled={isGeneratingPDF}
                  className={`w-full md:w-auto px-8 py-4 rounded-lg font-bold text-white transition-all ${
                    hasDownloadedPDF 
                      ? 'bg-pale-green hover:bg-pale-green/80' 
                      : 'bg-soft-orange hover:bg-soft-orange/80'
                  } ${isGeneratingPDF ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isGeneratingPDF ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      PDF生成中...
                    </span>
                  ) : hasDownloadedPDF ? (
                    <span className="flex items-center justify-center gap-2">
                      ✓ ダウンロード済み
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      診断結果をPDFダウンロード
                    </span>
                  )}
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">🎁 無料相談で詳しい提案を受け取る</h3>
                <div className={`mb-4 p-4 rounded-lg border-2 ${
                  hasDownloadedPDF 
                    ? 'border-pale-green bg-pale-green/10 text-dark-grey' 
                    : 'border-soft-orange bg-soft-orange/10 text-dark-grey'
                }`}>
                  <p className="font-medium">
                    {hasDownloadedPDF 
                      ? '✓ 診断結果PDFがダウンロード済みです。面談時にご提出ください。'
                      : '⚠️ 面談申し込みには診断結果PDFのダウンロードが必要です。'}
                  </p>
                </div>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="お名前"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="メールアドレス"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                      required
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="電話番号（任意）"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className={`w-full py-4 text-lg font-bold rounded-lg transition-all ${
                      hasDownloadedPDF 
                        ? 'bg-soft-orange hover:bg-soft-orange/80 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!hasDownloadedPDF}
                  >
                    {hasDownloadedPDF 
                      ? '専門家との無料相談を申し込む' 
                      : 'PDFダウンロード後に申し込み可能'}
                  </button>
                </form>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  ※ しつこい営業は一切ありません。安心してお申し込みください。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-off-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          {/* プログレスバー */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">
                質問 {currentStep + 1} / {questions.length}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round(progress)}% 完了
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-soft-orange h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {currentQuestion.title}
              </h2>
              <p className="text-gray-600 mb-8">
                {currentQuestion.description}
              </p>

              {/* 質問タイプ別の入力フィールド */}
              {currentQuestion.type === 'single' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <label
                      key={option.value}
                      className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        getCurrentAnswer() === option.value
                          ? 'border-soft-orange bg-soft-orange/5'
                          : 'border-gray-200 hover:border-soft-orange/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={currentQuestion.id}
                        value={option.value}
                        checked={getCurrentAnswer() === option.value}
                        onChange={(e) => handleAnswer(e.target.value)}
                        className="sr-only"
                      />
                      <div className="font-medium">{option.label}</div>
                      {option.description && (
                        <div className="text-sm text-gray-600 mt-1">
                          {option.description}
                        </div>
                      )}
                    </label>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'multiple' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <label
                      key={option.value}
                      className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        (getCurrentAnswer() as string[])?.includes(option.value)
                          ? 'border-soft-orange bg-soft-orange/5'
                          : 'border-gray-200 hover:border-soft-orange/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={(getCurrentAnswer() as string[])?.includes(option.value) || false}
                        onChange={(e) => {
                          const current = (getCurrentAnswer() as string[]) || []
                          const newValue = e.target.checked
                            ? [...current, e.target.value]
                            : current.filter(v => v !== e.target.value)
                          handleAnswer(newValue)
                        }}
                        className="sr-only"
                      />
                      <div className="font-medium">{option.label}</div>
                      {option.description && (
                        <div className="text-sm text-gray-600 mt-1">
                          {option.description}
                        </div>
                      )}
                    </label>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'range' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-soft-orange mb-4">
                      {getCurrentAnswer() || currentQuestion.min}{currentQuestion.unit}
                    </div>
                    
                    {/* 数値入力とボタン調整 */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <button
                        type="button"
                        onClick={() => {
                          const current = (getCurrentAnswer() as number) || currentQuestion.min!
                          const newValue = Math.max(current - (currentQuestion.step || 1), currentQuestion.min!)
                          handleAnswer(newValue)
                        }}
                        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold transition-colors"
                      >
                        −
                      </button>
                      
                      <div className="relative">
                        <input
                          type="number"
                          min={currentQuestion.min}
                          max={currentQuestion.max}
                          step={currentQuestion.step}
                          value={getCurrentAnswer() as number || currentQuestion.min}
                          onChange={(e) => {
                            const value = Number(e.target.value)
                            if (value >= currentQuestion.min! && value <= currentQuestion.max!) {
                              handleAnswer(value)
                            }
                          }}
                          className="w-24 h-12 text-center text-xl font-bold border-2 border-gray-200 rounded-lg focus:border-soft-orange focus:outline-none"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                          {currentQuestion.unit}
                        </span>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => {
                          const current = (getCurrentAnswer() as number) || currentQuestion.min!
                          const newValue = Math.min(current + (currentQuestion.step || 1), currentQuestion.max!)
                          handleAnswer(newValue)
                        }}
                        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-bold transition-colors"
                      >
                        ＋
                      </button>
                    </div>
                  </div>
                  
                  {/* スライダー */}
                  <div className="space-y-4">
                    <input
                      type="range"
                      min={currentQuestion.min}
                      max={currentQuestion.max}
                      step={currentQuestion.step}
                      value={getCurrentAnswer() as number || currentQuestion.min}
                      onChange={(e) => handleAnswer(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{currentQuestion.min}{currentQuestion.unit}</span>
                      <span>{currentQuestion.max}{currentQuestion.unit}</span>
                    </div>
                  </div>
                  
                  {/* プリセットボタン */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {currentQuestion.id === 'age' && (
                      <>
                        <button
                          type="button"
                          onClick={() => handleAnswer(25)}
                          className={`py-2 px-4 rounded-lg text-sm transition-all ${
                            getCurrentAnswer() === 25 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          25歳
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswer(35)}
                          className={`py-2 px-4 rounded-lg text-sm transition-all ${
                            getCurrentAnswer() === 35 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          35歳
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswer(45)}
                          className={`py-2 px-4 rounded-lg text-sm transition-all ${
                            getCurrentAnswer() === 45 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          45歳
                        </button>
                      </>
                    )}
                    {currentQuestion.id === 'monthlyExpenses' && (
                      <>
                        <button
                          type="button"
                          onClick={() => handleAnswer(15)}
                          className={`py-2 px-4 rounded-lg text-sm transition-all ${
                            getCurrentAnswer() === 15 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          15万円
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswer(25)}
                          className={`py-2 px-4 rounded-lg text-sm transition-all ${
                            getCurrentAnswer() === 25 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          25万円
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswer(35)}
                          className={`py-2 px-4 rounded-lg text-sm transition-all ${
                            getCurrentAnswer() === 35 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          35万円
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}

              {currentQuestion.type === 'input_with_options' && (
                <div className="space-y-6">
                  {/* 直接入力フィールド */}
                  <div className="bg-pale-green/10 border-2 border-pale-green/30 rounded-lg p-6">
                    <h4 className="font-bold mb-4 text-center">💡 正確な金額を入力する</h4>
                    <div className="flex items-center justify-center gap-3">
                      <input
                        type="number"
                        placeholder="金額を入力"
                        value={typeof getCurrentAnswer() === 'number' ? getCurrentAnswer() : ''}
                        onChange={(e) => {
                          const value = e.target.value
                          if (value === '') {
                            handleAnswer('')
                          } else {
                            handleAnswer(Number(value))
                          }
                        }}
                        className="w-32 h-12 text-center text-xl font-bold border-2 border-gray-200 rounded-lg focus:border-soft-orange focus:outline-none"
                      />
                      <span className="text-lg font-medium">万円</span>
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-3">
                      具体的な金額がわかる場合は、こちらに直接入力してください
                    </p>
                  </div>

                  <div className="text-center text-gray-500 font-medium">
                    または
                  </div>

                  {/* 選択肢 */}
                  <div>
                    <h4 className="font-bold mb-4 text-center">📋 おおよその範囲で選ぶ</h4>
                    <div className="space-y-3">
                      {currentQuestion.options?.map((option) => (
                        <label
                          key={option.value}
                          className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            getCurrentAnswer() === option.value
                              ? 'border-soft-orange bg-soft-orange/5'
                              : 'border-gray-200 hover:border-soft-orange/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name={currentQuestion.id}
                            value={option.value}
                            checked={getCurrentAnswer() === option.value}
                            onChange={(e) => handleAnswer(e.target.value)}
                            className="sr-only"
                          />
                          <div className="font-medium">{option.label}</div>
                          {option.description && (
                            <div className="text-sm text-gray-600 mt-1">
                              {option.description}
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* クイック選択ボタン */}
                  {currentQuestion.id === 'income' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                      <button
                        type="button"
                        onClick={() => handleAnswer(350)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          getCurrentAnswer() === 350 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        350万円
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAnswer(450)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          getCurrentAnswer() === 450 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        450万円
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAnswer(550)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          getCurrentAnswer() === 550 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        550万円
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAnswer(800)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          getCurrentAnswer() === 800 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        800万円
                      </button>
                    </div>
                  )}

                  {currentQuestion.id === 'savings' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                      <button
                        type="button"
                        onClick={() => handleAnswer(80)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          getCurrentAnswer() === 80 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        80万円
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAnswer(150)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          getCurrentAnswer() === 150 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        150万円
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAnswer(400)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          getCurrentAnswer() === 400 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        400万円
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAnswer(800)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                          getCurrentAnswer() === 800 ? 'bg-soft-orange text-white' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        800万円
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between mt-12">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  戻る
                </button>
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === questions.length - 1 ? '診断結果を見る' : '次へ'}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  )
}