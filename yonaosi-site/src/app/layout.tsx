import './globals.css'
import type { Metadata } from 'next'

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
      <body className="bg-off-white text-dark-grey">{children}</body>
    </html>
  )
}