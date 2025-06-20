'use client'

import { motion } from 'framer-motion'

const statistics = [
  { label: '年間固定費削減', value: '20〜60', unit: '万円' },
  { label: '年収アップ率', value: '80〜90', unit: '%' },
  { label: '電気代削減', value: '最大50', unit: '%' },
  { label: '相談満足度', value: '95', unit: '%以上' },
]

const testimonials = [
  {
    age: '30代',
    gender: '女性',
    occupation: '会社員',
    content: 'NISAとiDeCoの違いが分からなかった私でも、丁寧な説明で理解できました。今では毎月コツコツ積立投資を続けています。',
    result: '月3万円の積立開始',
  },
  {
    age: '40代',
    gender: '男性',
    occupation: '自営業',
    content: '保険の見直しで年間30万円も削減できました。その分を子供の教育資金に回せるようになり、将来への不安が解消されました。',
    result: '年間30万円の固定費削減',
  },
  {
    age: '50代',
    gender: '女性',
    occupation: 'パート',
    content: '老後資金が心配でしたが、現状分析から始めて無理のない計画を立てられました。定期的なフォローアップも心強いです。',
    result: '老後資金2000万円の道筋',
  },
]

export default function ResultsSection() {
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
            実績・成功事例
          </h2>
          <p className="text-lg text-gray-600">
            多くの方々の人生設計をサポートしてきました
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="text-3xl font-bold text-soft-orange mb-2">
                {stat.value}
                <span className="text-lg">{stat.unit}</span>
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-8">利用者の声</h3>
          
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold">{testimonial.age}</span>
                    <span>{testimonial.gender}</span>
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.occupation}</p>
                </div>
                
                <div className="md:w-3/4">
                  <p className="mb-4 text-gray-700">"{testimonial.content}"</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                    <span className="text-soft-orange">✓</span>
                    <span className="text-sm font-medium">{testimonial.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}