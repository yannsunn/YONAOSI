'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function AssetSimulator() {
  const [formData, setFormData] = useState({
    age: 30,
    income: 400,
    expenses: 300,
    targetAmount: 2000,
    investmentPeriod: 20,
  })

  const [showResult, setShowResult] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calculationError, setCalculationError] = useState('')

  const calculateProjection = () => {
    const monthlyInvestment = (formData.income - formData.expenses) * 10000 / 12
    const annualReturn = 0.03 // 年利3%想定（保守的な想定）
    // const months = formData.investmentPeriod * 12 // 将来使用予定
    
    const data = []
    let total = 0
    
    for (let year = 0; year <= formData.investmentPeriod; year++) {
      const monthsElapsed = year * 12
      total = monthlyInvestment * monthsElapsed * (1 + annualReturn * year / 2)
      data.push({
        year: `${year}年後`,
        amount: Math.round(total / 10000),
        principal: Math.round(monthlyInvestment * monthsElapsed / 10000),
      })
    }
    
    return data
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsCalculating(true)
    setCalculationError('')
    
    try {
      // 計算処理のシミュレーション
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // 入力値の検証
      if (formData.income <= formData.expenses) {
        throw new Error('年収が年間支出より小さいため、資産形成は困難です。家計の見直しをお勧めします。')
      }
      
      if (formData.investmentPeriod < 5) {
        throw new Error('投資期間5年未満ではリスクが高いため、シミュレーションできません。')
      }
      
      // 成功時の処理
      setShowResult(true)
    } catch (err) {
      setCalculationError(err instanceof Error ? err.message : '計算中にエラーが発生しました')
    } finally {
      setIsCalculating(false)
    }
  }

  const projectionData = calculateProjection()

  return (
    <section className="section-padding py-16 md:py-24 bg-gray-50 section-bg-pattern" aria-labelledby="simulator-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="simulator-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            資産形成シミュレーター
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            将来の資産形成の参考イメージ
          </p>
          <p className="text-sm text-gray-500 mt-2">
            ※ あくまで参考例です。実際の運用成果は市場環境により大きく変動し、元本割れのリスクもあります
          </p>
        </motion.div>

        {/* 💻 PC専用レイアウト */}
        <div className="hidden lg:block">
          <div className="pc-feature-showcase">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card p-8 desktop-card"
            >
              <h3 className="text-2xl font-bold mb-8">シミュレーション条件</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="age" className="block text-base font-medium mb-3">年齢</label>
                    <input
                      type="number"
                      id="age"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none text-lg"
                      min="20"
                      max="65"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="income" className="block text-base font-medium mb-3">年収（万円）</label>
                    <input
                      type="number"
                      id="income"
                      value={formData.income}
                      onChange={(e) => setFormData({ ...formData, income: Number(e.target.value) })}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none text-lg"
                      min="100"
                      max="2000"
                      step="50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="expenses" className="block text-base font-medium mb-3">年間支出（万円）</label>
                    <input
                      type="number"
                      id="expenses"
                      value={formData.expenses}
                      onChange={(e) => setFormData({ ...formData, expenses: Number(e.target.value) })}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none text-lg"
                      min="100"
                      max="1500"
                      step="50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="investmentPeriod" className="block text-base font-medium mb-3">投資期間（年）</label>
                    <input
                      type="number"
                      id="investmentPeriod"
                      value={formData.investmentPeriod}
                      onChange={(e) => setFormData({ ...formData, investmentPeriod: Number(e.target.value) })}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none text-lg"
                      min="5"
                      max="40"
                      required
                    />
                  </div>
                </div>
                
                {calculationError && (
                  <div className="p-4 bg-soft-orange/10 border border-soft-orange/30 rounded-lg">
                    <p className="text-soft-orange font-medium text-base">{calculationError}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="btn-primary w-full flex items-center justify-center gap-3 min-h-[60px] text-xl font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed desktop-hover"
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      計算中...
                    </>
                  ) : (
                    '📈 シミュレーション実行'
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 desktop-card"
            >
              <h3 className="text-2xl font-bold mb-8">予想結果</h3>
              {showResult ? (
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-soft-orange/10 to-lime-green/10 rounded-xl">
                    <p className="text-base text-gray-600 mb-2">
                      {formData.investmentPeriod}年後の予想資産額
                    </p>
                    <p className="text-5xl font-bold text-soft-orange">
                      {projectionData[projectionData.length - 1]?.amount}万円
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                      元本: {projectionData[projectionData.length - 1]?.principal}万円
                    </p>
                  </div>
                  
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={projectionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" fontSize={14} />
                        <YAxis fontSize={14} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #FFB98B',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="amount" 
                          stroke="#FFB98B" 
                          strokeWidth={3}
                          name="予想資産額（万円）"
                          dot={{ fill: '#FFB98B', strokeWidth: 2, r: 6 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="principal" 
                          stroke="#C8E6A0" 
                          strokeWidth={2}
                          name="元本（万円）"
                          dot={{ fill: '#C8E6A0', strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-8xl mb-6">📊</div>
                  <p className="text-xl text-gray-500 mb-4">シミュレーション条件を入力して、</p>
                  <p className="text-xl text-gray-500">将来の資産形成を予測してみましょう</p>
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <p className="text-base font-medium text-gray-700 mb-3">シミュレーションの前提</p>
                    <ul className="text-sm text-gray-600 space-y-1 text-left">
                      <li>• 年利3%での運用を想定（保守的な設定）</li>
                      <li>• 毎月の余剰資金を投資に回すと仮定</li>
                      <li>• 税金やコストは考慮していません</li>
                      <li>• 実際の運用結果は大きく異なる場合があります</li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* 📱 タブレット・モバイル専用レイアウト */}
        <div className="block lg:hidden">
          <div className="mobile-simulator-compact">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card mobile-card"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">シミュレーション条件</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium mb-2">年齢</label>
                    <input
                      type="number"
                      id="age"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none mobile-touch-target"
                      min="20"
                      max="65"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="income" className="block text-sm font-medium mb-2">年収（万円）</label>
                    <input
                      type="number"
                      id="income"
                      value={formData.income}
                      onChange={(e) => setFormData({ ...formData, income: Number(e.target.value) })}
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none mobile-touch-target"
                      min="100"
                      max="2000"
                      step="50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="expenses" className="block text-sm font-medium mb-2">年間支出（万円）</label>
                    <input
                      type="number"
                      id="expenses"
                      value={formData.expenses}
                      onChange={(e) => setFormData({ ...formData, expenses: Number(e.target.value) })}
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none mobile-touch-target"
                      min="100"
                      max="1500"
                      step="50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="investmentPeriod" className="block text-sm font-medium mb-2">投資期間（年）</label>
                    <input
                      type="number"
                      id="investmentPeriod"
                      value={formData.investmentPeriod}
                      onChange={(e) => setFormData({ ...formData, investmentPeriod: Number(e.target.value) })}
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-soft-orange focus:outline-none mobile-touch-target"
                      min="5"
                      max="40"
                      required
                    />
                  </div>
                </div>
                
                {calculationError && (
                  <div className="p-3 sm:p-4 bg-soft-orange/10 border border-soft-orange/30 rounded-lg">
                    <p className="text-soft-orange font-medium text-sm sm:text-base">{calculationError}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="btn-primary mobile-button-full flex items-center justify-center gap-2 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed touch-feedback"
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      計算中...
                    </>
                  ) : (
                    '📈 シミュレーション実行'
                  )}
                </button>
              </form>
            </motion.div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card mobile-card mt-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">予想結果</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-r from-soft-orange/10 to-lime-green/10 rounded-xl">
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                      {formData.investmentPeriod}年後の予想資産額
                    </p>
                    <p className="text-3xl sm:text-4xl font-bold text-soft-orange">
                      {projectionData[projectionData.length - 1]?.amount}万円
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
                      元本: {projectionData[projectionData.length - 1]?.principal}万円
                    </p>
                  </div>
                  
                  <div className="h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={projectionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" fontSize={10} />
                        <YAxis fontSize={10} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #FFB98B',
                            borderRadius: '8px',
                            fontSize: '12px'
                          }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="amount" 
                          stroke="#FFB98B" 
                          strokeWidth={2}
                          name="予想資産額"
                          dot={{ fill: '#FFB98B', strokeWidth: 2, r: 4 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="principal" 
                          stroke="#C8E6A0" 
                          strokeWidth={2}
                          name="元本"
                          dot={{ fill: '#C8E6A0', strokeWidth: 2, r: 3 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">シミュレーションの前提</p>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>• 年利3%での運用を想定</li>
                      <li>• 毎月の余剰資金を投資に回すと仮定</li>
                      <li>• 実際の運用結果は大きく異なる場合があります</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
            
            {!showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card mobile-card mt-6"
              >
                <div className="text-center py-8 sm:py-12">
                  <div className="text-5xl sm:text-6xl mb-4">📊</div>
                  <p className="text-base sm:text-lg text-gray-500 mb-3">シミュレーション条件を入力して、</p>
                  <p className="text-base sm:text-lg text-gray-500 mb-6">将来の資産形成を予測してみましょう</p>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">シミュレーションの前提</p>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1 text-left">
                      <li>• 年利3%での運用を想定（保守的な設定）</li>
                      <li>• 毎月の余剰資金を投資に回すと仮定</li>
                      <li>• 実際の運用結果は大きく異なる場合があります</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* 従来のレイアウト（バックアップ用・非表示） */}
        <div className="hidden">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">シミュレーション条件</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="sim-age" className="block text-sm font-medium mb-2">
                  現在の年齢
                </label>
                <input
                  id="sim-age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent text-sm sm:text-base min-h-[48px] sm:min-h-[44px]"
                  min="20"
                  max="70"
                  aria-describedby="age-help"
                />
                <div id="age-help" className="sr-only">20歳から70歳の範囲で入力してください</div>
              </div>

              <div>
                <label htmlFor="sim-income" className="block text-sm font-medium mb-2">
                  年収（万円）
                </label>
                <input
                  id="sim-income"
                  type="number"
                  value={formData.income}
                  onChange={(e) => setFormData({ ...formData, income: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                  min="100"
                  max="2000"
                  step="50"
                  aria-describedby="income-help"
                />
                <div id="income-help" className="sr-only">100万円から2000万円の範囲で入50万円単位で入力してください</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  年間支出（万円）
                </label>
                <input
                  type="number"
                  value={formData.expenses}
                  onChange={(e) => setFormData({ ...formData, expenses: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                  min="50"
                  max="1500"
                  step="50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  目標金額（万円）
                </label>
                <input
                  type="number"
                  value={formData.targetAmount}
                  onChange={(e) => setFormData({ ...formData, targetAmount: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                  min="100"
                  max="10000"
                  step="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  投資期間（年）
                </label>
                <input
                  type="range"
                  value={formData.investmentPeriod}
                  onChange={(e) => setFormData({ ...formData, investmentPeriod: parseInt(e.target.value) })}
                  className="w-full"
                  min="5"
                  max="40"
                  step="5"
                />
                <div className="text-center mt-2 font-medium">{formData.investmentPeriod}年</div>
              </div>

              {/* エラー表示 */}
              {calculationError && (
                <div className="mb-4 p-4 bg-soft-orange/10 border border-soft-orange/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-soft-orange flex-shrink-0 mt-0.5">
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.232 16.5c-.77.833.192 2.5 1.732 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-sm text-soft-orange font-medium mb-1">計算エラー</p>
                      <p className="text-xs text-soft-orange">{calculationError}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isCalculating}
                className="btn-primary w-full min-h-[48px] sm:min-h-[44px] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" 
                aria-describedby="simulation-note"
              >
                {isCalculating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    📊 計算中...
                  </>
                ) : (
                  '🚀 シミュレーション実行'
                )}
              </button>
              <div id="simulation-note" className="sr-only">入力した条件で資産形成のシミュレーションを実行します</div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">シミュレーション結果</h3>
            
            {calculationError && !showResult ? (
              <div className="text-center py-12">
                <div className="text-soft-orange text-6xl mb-4">🚨</div>
                <p className="text-gray-600 mb-4">計算できませんでした</p>
                <p className="text-sm text-gray-500">入力値を確認して再度お試しください</p>
              </div>
            ) : isCalculating ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-orange/10 rounded-full mb-4">
                  <svg className="animate-spin h-8 w-8 text-soft-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 mb-2">📊 高精度計算中...</p>
                <p className="text-sm text-gray-500">あなたの未来をシミュレーションしています</p>
                <div className="mt-4 bg-gray-100 rounded-full h-2 w-64 mx-auto">
                  <div className="bg-soft-orange h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                </div>
              </div>
            ) : showResult ? (
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}万円`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#FFB98B" 
                      strokeWidth={3}
                      name="資産総額"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="principal" 
                      stroke="#C8E6A0" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="元本"
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="mt-6 p-4 bg-soft-orange/10 rounded-lg">
                  <h4 className="font-bold mb-2">一般的な検討項目例</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• つみたてNISAの活用検討</li>
                    <li>• iDeCoの活用検討</li>
                    <li>• 家計の見直し検討</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    ※ 投資にはリスクが伴います。個別の状況により適切な方法は異なりますので、詳しくはご相談ください
                  </p>
                </div>

                <button 
                  onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                  className="btn-primary w-full mt-6"
                  aria-label="シミュレーション結果を踏まえたYONAOSIの詳細な相談をLINEで申し込む（新しいタブで開きます）"
                >
                  詳細な相談を申し込む
                </button>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4">
                  <path d="M3 13.5L3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V13.5M12 18V15M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p>条件を入力してシミュレーションを実行してください</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}