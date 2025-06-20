import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // セキュリティヘッダー設定
  const securityHeaders = {
    // CSP設定
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' blob: data: https:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; '),
    
    // XSS対策
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    
    // HTTPS強制
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    
    // リファラー制御
    'Referrer-Policy': 'origin-when-cross-origin',
    
    // 権限制御
    'Permissions-Policy': [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'bluetooth=()'
    ].join(', '),
    
    // キャッシュ制御
    'Cache-Control': 'public, max-age=3600, must-revalidate'
  }

  // ヘッダー設定
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // 静的ファイルの長期キャッシュ
  if (request.nextUrl.pathname.startsWith('/static/') || 
      request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  // API レート制限 (簡易版)
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const userIP = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // 実際の実装では Redis などでレート制限を実装
    response.headers.set('X-RateLimit-Limit', '100')
    response.headers.set('X-RateLimit-Remaining', '99')
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}