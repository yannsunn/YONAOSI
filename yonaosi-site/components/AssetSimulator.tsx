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

  const calculateProjection = () => {
    const monthlyInvestment = (formData.income - formData.expenses) * 10000 / 12
    const annualReturn = 0.05 // 年利5%想定
    const months = formData.investmentPeriod * 12
    
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResult(true)
  }

  const projectionData = calculateProjection()

  return (
    <section className="section-padding py-16 md:py-24 bg-gray-50 section-bg-pattern">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            資産形成シミュレーター
          </h2>
          <p className="text-lg text-gray-600">
            あなたの条件で将来の資産形成をシミュレーション
          </p>
          <p className="text-sm text-gray-500 mt-2">
            ※ このシミュレーションは参考例であり、運用成果を保証するものではありません
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h3 className="text-xl font-bold mb-6">シミュレーション条件</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  現在の年齢
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                  min="20"
                  max="70"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  年収（万円）
                </label>
                <input
                  type="number"
                  value={formData.income}
                  onChange={(e) => setFormData({ ...formData, income: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-soft-orange focus:border-transparent"
                  min="100"
                  max="2000"
                  step="50"
                />
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

              <button type="submit" className="btn-primary w-full">
                シミュレーション実行
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <h3 className="text-xl font-bold mb-6">シミュレーション結果</h3>
            
            {showResult ? (
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
                      stroke="#98D8BF" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="元本"
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="mt-6 p-4 bg-soft-orange/10 rounded-lg">
                  <h4 className="font-bold mb-2">推奨アクション</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• つみたてNISAで年間40万円の非課税投資</li>
                    <li>• iDeCoで節税しながら老後資金準備</li>
                    <li>• 固定費見直しで投資余力を増やす</li>
                  </ul>
                </div>

                <button 
                  onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
                  className="btn-primary w-full mt-6"
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