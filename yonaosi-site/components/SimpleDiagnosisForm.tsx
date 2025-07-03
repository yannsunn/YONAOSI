'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EnhancedDiagnosisResult from './EnhancedDiagnosisResult'

export default function SimpleDiagnosisForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [showResult, setShowResult] = useState(false)
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    jobType: '',
    concerns: [] as string[]
  })

  const jobTypes = [
    { value: '会社員・公務員', class: 'card-employee', icon: '💼' },
    { value: '経営者・個人事業主', class: 'card-business', icon: '📊' },
    { value: 'アルバイト・パート', class: 'card-part-time', icon: '🕰' },
    { value: 'その他', class: 'card-other', icon: '📁' }
  ]

  const concerns = [
    '保険料が高い',
    '税金を減らしたい',
    '老後資金が不安',
    '投資を始めたい',
    '住宅購入を検討中',
    'その他'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 診断結果を表示
    setIsOpen(false)
    setShowResult(true)
  }

  const handleCloseResult = () => {
    setShowResult(false)
    setStep(1)
    setFormData({ age: '', income: '', jobType: '', concerns: [] })
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn-primary w-full sm:w-auto min-h-[48px] sm:min-h-[44px] text-sm sm:text-base px-4 sm:px-6"
        aria-label="3分で完了する無料資産形成診断を開始する"
      >
        3分で診断を受ける
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="diagnosis-modal-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-sm sm:max-w-md w-full p-4 sm:p-6 md:p-8 mx-2 sm:mx-0"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 id="diagnosis-modal-title" className="text-lg sm:text-xl font-bold">診断フォーム</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none rounded"
                  aria-label="診断フォームを閉じる"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">ステップ {step} / 3</span>
                  <span className="text-sm text-gray-600">{Math.round((step / 3) * 100)}%完了</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3} aria-label="診断の進行状況">
                  <div 
                    className="bg-soft-orange h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h4 className="font-bold mb-4">基本情報</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="age-select" className="block text-sm font-medium mb-2">年齢</label>
                        <select
                          id="age-select"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="w-full p-3 sm:p-3 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none text-sm sm:text-base min-h-[48px] sm:min-h-[44px]"
                          required
                          aria-describedby="age-help"
                        >
                          <option value="">選択してください</option>
                          <option value="20代">20代</option>
                          <option value="30代">30代</option>
                          <option value="40代">40代</option>
                          <option value="50代">50代</option>
                          <option value="60代以上">60代以上</option>
                        </select>
                        <div id="age-help" className="sr-only">あなたの年代を選択してください</div>
                      </div>
                      <div>
                        <fieldset>
                          <legend className="block text-sm font-medium mb-2">職業</legend>
                        <div className="grid grid-cols-2 gap-3">
                          {jobTypes.map((job) => (
                            <label
                              key={job.value}
                              className={`relative cursor-pointer p-4 rounded-lg border-2 transition-all ${
                                formData.jobType === job.value 
                                  ? job.class + ' border-soft-orange' 
                                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="jobType"
                                value={job.value}
                                checked={formData.jobType === job.value}
                                onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                                className="sr-only"
                              />
                              <div className="text-center">
                                <div className="text-2xl mb-1">{job.icon}</div>
                                <div className="text-xs font-medium">{job.value}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                        </fieldset>
                      </div>
                      <div>
                        <label htmlFor="income-select" className="block text-sm font-medium mb-2">年収（税込）</label>
                        <select
                          id="income-select"
                          value={formData.income}
                          onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none"
                          required
                          aria-describedby="income-help"
                        >
                          <option value="">選択してください</option>
                          <option value="〜300万円">〜300万円</option>
                          <option value="300〜500万円">300〜500万円</option>
                          <option value="500〜700万円">500〜700万円</option>
                          <option value="700〜1000万円">700〜1000万円</option>
                          <option value="1000万円以上">1000万円以上</option>
                        </select>
                        <div id="income-help" className="sr-only">あなたの年収を選択してください</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-primary w-full mt-4 sm:mt-6 min-h-[48px] sm:min-h-[44px] text-sm sm:text-base"
                      disabled={!formData.age || !formData.income || !formData.jobType}
                    >
                      次へ
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <fieldset>
                      <legend className="font-bold mb-4">お悩み・ご相談内容</legend>
                      <div className="space-y-3">
                      {concerns.map((concern) => (
                        <label key={concern} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.concerns.includes(concern)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData({ ...formData, concerns: [...formData.concerns, concern] })
                              } else {
                                setFormData({ ...formData, concerns: formData.concerns.filter(c => c !== concern) })
                              }
                            }}
                            className="w-4 h-4 text-soft-orange focus:ring-soft-orange"
                          />
                          <span>{concern}</span>
                        </label>
                      ))}
                      </div>
                    </fieldset>
                    <div className="flex gap-4 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none"
                        aria-label="前のステップに戻る"
                      >
                        戻る
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 btn-primary"
                        disabled={formData.concerns.length === 0}
                      >
                        次へ
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h4 className="font-bold mb-4">診断内容確認</h4>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-600 mb-2">以下の内容で診断を行います：</p>
                      <ul className="text-sm space-y-1">
                        <li>年齢: {formData.age}</li>
                        <li>職業: {formData.jobType}</li>
                        <li>年収: {formData.income}</li>
                        <li>お悩み: {formData.concerns.join('、')}</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <button
                        type="submit"
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        診断結果を見る
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none"
                        aria-label="お悩み選択ステップに戻る"
                      >
                        戻る
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 診断結果表示 */}
      <AnimatePresence>
        {showResult && (
          <EnhancedDiagnosisResult 
            userProfile={formData}
            onClose={handleCloseResult}
          />
        )}
      </AnimatePresence>
    </>
  )
}