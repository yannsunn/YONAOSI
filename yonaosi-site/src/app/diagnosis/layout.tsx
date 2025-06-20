import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YONAOSI 無料診断｜3分で分かるお金の改善ポイント【98%満足度】',
  description: '累計5,234人が実践。平均年間52万円の家計改善実績。投資・保険・税金の悩みを3分診断で解決。専門家による無料相談付き。今すぐ診断開始。',
  keywords: ['無料診断', '家計改善', '資産形成', '投資診断', '保険見直し', '税金対策', 'お金の相談'],
  openGraph: {
    title: 'YONAOSI 無料診断｜3分でお金の改善ポイントが分かる',
    description: '平均52万円改善。専門家による無料診断で今すぐ改善ポイントを発見',
    url: 'https://yonaosi.awakeinc.co.jp/diagnosis',
    images: ['/og-diagnosis.jpg'],
  },
  twitter: {
    title: 'YONAOSI無料診断｜3分で52万円改善ポイント発見',
    description: '5,234人実践済み。専門家による無料診断開始',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://yonaosi.awakeinc.co.jp/diagnosis',
  },
}

export default function DiagnosisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}