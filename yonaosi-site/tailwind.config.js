/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー（オレンジ系）
        'soft-orange': '#FFB98B',
        'soft-orange-light': '#FFD4B3',
        'soft-orange-dark': '#FF9F6B',
        
        // アクセントカラー1（黄緑系）
        'lime-green': '#C8E6A0',
        'lime-green-light': '#E0F2CC',
        'lime-green-dark': '#B8D987',
        
        // アクセントカラー2（水色系）  
        'pale-blue': '#A8D8FF',
        'pale-blue-light': '#CCEBFF',
        'pale-blue-dark': '#85C8FF',
        
        // 既存カラー（互換性のため）
        'pale-green': '#98D8BF',
        
        // ベースカラー
        'off-white': '#F8F9FA',
        'warm-white': '#FEFCFB',
        'dark-grey': '#333333',
        'soft-grey': '#6B7280',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      // Core Web Vitals最適化
      willChange: {
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  // CSS最適化
  corePlugins: {
    preflight: true,
  },
  plugins: [],
}