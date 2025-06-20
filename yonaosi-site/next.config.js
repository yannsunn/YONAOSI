/** @type {import('next').NextConfig} */
const nextConfig = {
  // パフォーマンス最適化
  experimental: {
    scrollRestoration: true,
    serverMinification: true,
    serverComponentsExternalPackages: ['jspdf', 'html2canvas'],
  },
  
  // 画像最適化
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1年
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // 圧縮最適化
  compress: true,
  
  // Bundle Analyzer（開発時のみ）
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE === 'true' && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      )
    }
    return config
  },
  
  // Core Web Vitals最適化
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  
  // SEO最適化
  trailingSlash: false,
  
  // 出力最適化
  output: 'standalone',
  
  // Headers設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' blob: data:",
              "font-src 'self'",
              "connect-src 'self'",
              "frame-src 'none'"
            ].join('; '),
          }
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig