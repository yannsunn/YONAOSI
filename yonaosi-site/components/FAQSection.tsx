'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: '初回相談に費用はかかりますか？',
    answer: 'もちろん無料です。「話を聞くだけ」でも大歓迎。無理な勧誘は一切ありません。まずは気軽にお話を聞かせてください。',
  },
  {
    question: 'どんな人が相談に来ていますか？',
    answer: '資産形成やライフプランニングにご関心をお持ちの方であれば、どなたでもご相談いただけます。お一人おひとりの状況に合わせて、最適なアドバイスをご提供いたします。',
  },
  {
    question: '相談してから、どのくらいで効果が出ますか？',
    answer: '税金の見直しや保険の最適化は、実行後比較的早期に変化を感じていただける場合があります。投資は長期的な視点が必要ですが、正しい方法で始めることが重要です。効果や実感には個人差があり、成果を保証するものではありません。',
  },
  {
    question: '特定の商品を売りつけられませんか？',
    answer: 'そのご心配、よく分かります。でもご安心ください。私たちは特定の会社から報酬をもらっていないので、本当にあなたのためになることだけをお話しします。「今は何もしない方が良い」とお伝えすることもあります。あなたの味方として、一緒に考えさせてください。',
  },
  {
    question: '地方に住んでいても相談できますか？',
    answer: 'もちろんです！すべてオンラインで完結するので、日本全国どこからでも相談可能。全国各地のお客様をサポートしています。時差のある海外在住の方のご相談も承っています。オンラインだからこそ、移動時間ゼロで気軽に相談できます。',
  },
  {
    question: '個人情報は安全ですか？',
    answer: 'お客様の情報は適切なセキュリティで保護されています。SSL暗号化通信、認証システム、定期的なセキュリティ監査を実施。また、ご相談内容は守秘義務により厳重に管理され、第三者に提供することは一切ありません。情報管理には細心の注意を払っています。',
  },
  {
    question: '今すぐ始めないとダメですか？',
    answer: 'もちろん、あなたのペースで大丈夫です。ただ、早めに始めることで選択肢が増える可能性があります。まずは今の状況を整理して、何から始めるべきかを一緒に考えてみませんか？無理なく進められる方法を見つけましょう。',
  },
]

export default function FAQSection() {
  return (
    <section className="section-padding py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            よくあるご質問
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            お客様からよくいただく質問にお答えします
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4" aria-label="よくある質問と回答">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Accordion.Item value={`item-${index}`} className="card">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between text-left py-3 sm:py-4 md:py-3 hover:text-soft-orange transition-colors min-h-[48px] sm:min-h-[44px]" aria-expanded="false">
                    <span className="font-medium pr-3 sm:pr-4 text-sm sm:text-base">{faq.question}</span>
                    <svg
                      className="transform transition-transform duration-300 data-[state=open]:rotate-180"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pb-3 sm:pb-4 pt-2 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            その他のご質問はお気軽にお問い合わせください
          </p>
          <button 
            onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
            className="btn-secondary min-h-[48px] sm:min-h-[44px] px-4 sm:px-6 py-3 text-sm sm:text-base"
            aria-label="YONAOSI公式LINEでお問い合わせ（新しいタブで開きます）"
          >
            LINEでお問い合わせ
          </button>
        </motion.div>
      </div>
    </section>
  )
}