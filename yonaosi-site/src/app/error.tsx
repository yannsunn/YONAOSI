'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラーログ送信 (実際の実装では外部サービスへ)
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto text-center"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-6xl mb-6">😵</div>
          <h1 className="text-2xl font-bold mb-4 text-dark-grey">
            申し訳ございません
          </h1>
          <p className="text-gray-600 mb-6">
            予期しないエラーが発生しました。<br />
            しばらく時間をおいてから再度お試しください。
          </p>
          
          <div className="space-y-4">
            <button
              onClick={reset}
              className="w-full bg-soft-orange hover:bg-soft-orange/80 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              もう一度試す
            </button>
            
            <Link
              href="/"
              className="block w-full bg-gray-100 hover:bg-gray-200 text-dark-grey font-medium py-3 px-6 rounded-lg transition-colors"
            >
              ホームに戻る
            </Link>
          </div>
          
          {error.digest && (
            <p className="text-xs text-gray-400 mt-4">
              エラーID: {error.digest}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  )
}