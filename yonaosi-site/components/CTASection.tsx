'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-padding py-16 md:py-24 bg-gradient-to-r from-soft-orange/10 to-pale-blue/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          今すぐ始める、理想の未来への第一歩
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          専門家があなたの人生設計を無料でサポートします
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/consultation" className="btn-primary">
            無料相談を予約する
          </Link>
          <button className="btn-secondary flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.19 22 14.34 21.78 15.41 21.37L21 22L20.37 16.41C21.78 14.34 22 13.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
            </svg>
            公式LINEで相談する
          </button>
        </div>

        <div className="card inline-block">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-left">
              <h3 className="font-bold mb-2">LINE登録特典</h3>
              <p className="text-sm text-gray-600">
                今なら無料相談チケットをプレゼント！
                <br />
                資産形成ガイドブックも無料配布中
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <rect width="120" height="120" fill="white"/>
                <path d="M30 30h10v10h-10zM40 30h10v10h-10zM50 30h10v10h-10zM60 30h10v10h-10zM70 30h10v10h-10zM80 30h10v10h-10zM30 40h10v10h-10zM50 40h10v10h-10zM70 40h10v10h-10zM30 50h10v10h-10zM40 50h10v10h-10zM50 50h10v10h-10zM60 50h10v10h-10zM70 50h10v10h-10zM80 50h10v10h-10zM30 60h10v10h-10zM50 60h10v10h-10zM70 60h10v10h-10zM30 70h10v10h-10zM40 70h10v10h-10zM50 70h10v10h-10zM60 70h10v10h-10zM70 70h10v10h-10zM80 70h10v10h-10zM30 80h10v10h-10zM50 80h10v10h-10zM70 80h10v10h-10z" fill="#333333"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}