import type { Metadata } from 'next'
import Header from '@components/Header'
import HeroSection from '@components/HeroSection'
import ProblemSolutionSection from '@components/ProblemSolutionSection'
import ResultsShowcase from '@components/ResultsShowcase'
import SupportServices from '@components/SupportServices'
import AssetSimulator from '@components/AssetSimulator'
import PowerfulCTA from '@components/PowerfulCTA'
import FAQSection from '@components/FAQSection'
import Footer from '@components/Footer'

// SEO超最適化メタデータ
export const metadata: Metadata = {
  metadataBase: new URL('https://yonaosi.awakeinc.co.jp'),
  title: 'YONAOSI｜世直しの専門家による資産形成プラットフォーム【無料診断3分】',
  description: '世直しの専門家が多くの方の改善を実現。年間最大52万円の家計改善可能性。情報格差から消費者を守り、投資・保険・不動産の適正選択をサポート。98%満足度の中立的アドバイス。',
  keywords: ['世直し', '適正価格', '資産形成', '家計改善', '投資相談', 'NISA', 'iDeCo', '保険見直し', '税金対策', '不動産選択', '情報格差', '中立的アドバイス'],
  authors: [{ name: 'YONAOSI編集部' }],
  creator: 'YONAOSI',
  publisher: 'YONAOSI Inc.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://yonaosi.awakeinc.co.jp',
    siteName: 'YONAOSI',
    title: 'YONAOSI｜世直しの専門家による資産形成プラットフォーム',
    description: '情報格差から消費者を守る世直しの専門家。最大年間52万円の改善可能性。中立的立場で適正な選択をサポート。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YONAOSI - 資産形成プラットフォーム',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yonaosi_jp',
    creator: '@yonaosi_jp',
    title: 'YONAOSI｜世直しの専門家による無料診断',
    description: '情報格差から守る中立的アドバイス。多くの方が実践。最大年間52万円改善可能性。',
    images: ['/twitter-card.jpg'],
  },
  alternates: {
    canonical: 'https://yonaosi.awakeinc.co.jp',
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'msvalidate.01': 'bing-site-verification-code',
    },
  },
  category: 'finance',
}

// 構造化データ（SEO強化）
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://yonaosi.awakeinc.co.jp/#organization",
      "name": "YONAOSI",
      "url": "https://yonaosi.awakeinc.co.jp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yonaosi.awakeinc.co.jp/logo.png"
      },
      "sameAs": [
        "https://twitter.com/yonaosi_jp"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://yonaosi.awakeinc.co.jp/#website",
      "url": "https://yonaosi.awakeinc.co.jp",
      "name": "YONAOSI",
      "description": "人生転換期の資産形成プラットフォーム",
      "publisher": {
        "@id": "https://yonaosi.awakeinc.co.jp/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "YONAOSI診断サービス",
      "description": "3分で完了する無料診断で資産形成の改善ポイントを特定。世直しの専門家による中立的なアドバイス",
      "provider": {
        "@id": "https://yonaosi.awakeinc.co.jp/#organization"
      },
      "serviceType": "資産形成コンサルティング",
      "brand": {
        "@type": "Brand",
        "name": "世直しの専門家",
        "description": "歪んだ情報社会を正し、適正な選択ができる世の中を創る"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "JPY",
        "description": "無料診断サービス"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "年収500万円以上の方、すべての資産形成を考える方"
      }
    },
    {
      "@type": "AboutPage",
      "name": "世直しの信念",
      "description": "情報格差による不適正な金融商品、保険、不動産選択から消費者を守る使命",
      "mainEntity": {
        "@type": "Mission",
        "name": "世直しの専門家としての使命",
        "description": "中立的立場から適正価格・適正条件を提示し、消費者の最適な選択をサポート"
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ResultsShowcase />
        <SupportServices />
        <AssetSimulator />
        <PowerfulCTA />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}