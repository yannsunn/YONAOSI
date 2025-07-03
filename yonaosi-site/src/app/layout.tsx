import './globals.css'
import type { Metadata } from 'next'
import AccessibilityEnhancements from '@components/AccessibilityEnhancements'

export const metadata: Metadata = {
  title: 'YONAOSI - 人生の転換期に寄り添う、あなたの専属ファイナンシャルプランナー',
  description: 'ライフプランニングと資産形成を中核に、家計・キャリア・住宅・ローンの見直しをトータルサポート',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-off-white text-dark-grey">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-soft-orange text-white px-4 py-2 rounded-lg z-50">
          メインコンテンツにスキップ
        </a>
        <AccessibilityEnhancements />
        {children}
      </body>
    </html>
  )
}