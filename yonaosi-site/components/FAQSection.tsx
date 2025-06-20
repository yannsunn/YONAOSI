'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: '初回相談に費用はかかりますか？',
    answer: 'はい、初回相談には費用をいただきません。強引な勧誘は一切ありません。相談後、サービスを利用するかはお客様の自由です。多くの方が相談だけでも「目からウロコ」の情報を得られたと喜んでいただいています。初回相談で改善できる点を発見される方もいらっしゃいます。',
  },
  {
    question: 'どんな人が相談に来ていますか？',
    answer: '20代の新社会人から60代の退職前の方まで幅広くご相談いただいています。特に多いのは30〜40代の「このままでいいのか不安」を感じている方。年収300万円から3,000万円まで、様々な方の資産形成をサポートしています。「相談してよかった」とおっしゃっていただくことがあります。',
  },
  {
    question: '相談してから、どのくらいで効果が出ますか？',
    answer: '税金の見直しや保険の最適化は、実行した翌月から効果が出る可能性があります。投資は長期的な視点が必要ですが、正しい方法で始めることで将来の改善の可能性があります。「相談してよかった」と実感いただく方もいらっしゃいます。節税を実現された方もいらっしゃいます。効果には個人差があります。',
  },
  {
    question: '特定の商品を売りつけられませんか？',
    answer: '私たちは完全中立の立場です。特定の金融機関や保険会社の商品を販売することはありません。お客様にとって最適な選択肢を、市場全体から選んでご提案します。商品選びの「基準」をお教えするので、ご自身で判断できるようになります。「今は何も買わない」という選択肢をご提案することもあります。',
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
    answer: '強制はしませんが、「時間」は取り戻せない資産です。一般的に、早く始めるほど複利の効果を活用できる可能性があります。ただし、効果は個人の状況により異なります。まずは相談で、あなたの「今」を診断してみませんか？',
  },
]

export default function FAQSection() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            よくあるご質問
          </h2>
          <p className="text-lg text-gray-600">
            お客様からよくいただく質問にお答えします
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
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
                  <Accordion.Trigger className="w-full flex items-center justify-between text-left py-4 md:py-3 hover:text-soft-orange transition-colors min-h-[44px]">
                    <span className="font-medium pr-4">{faq.question}</span>
                    <svg
                      className="transform transition-transform duration-300 data-[state=open]:rotate-180"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pb-4 pt-2 text-gray-600 text-sm md:text-base leading-relaxed">
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
          <p className="text-gray-600 mb-4">
            その他のご質問はお気軽にお問い合わせください
          </p>
          <button 
            onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
            className="btn-secondary min-h-[44px] px-6 py-3"
          >
            LINEでお問い合わせ
          </button>
        </motion.div>
      </div>
    </section>
  )
}