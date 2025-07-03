/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 YONAOSIブランドカラーパレット - 限界突破最適化完了 🎨
        
        // 🧡 メインカラー（橙色系）- 温かみと安心感を表現
        'soft-orange': '#FFB98B',      // メイン：暖かな橙色
        'soft-orange-light': '#FFD4B3', // ライト：柔らかな橙色
        'soft-orange-dark': '#FF9F6B',  // ダーク：深みのある橙色
        
        // 💚 アクセントカラー1（黄緑系）- 成長と希望を表現
        'lime-green': '#C8E6A0',       // メイン：爽やかな黄緑
        'lime-green-light': '#E0F2CC', // ライト：淡い黄緑
        'lime-green-dark': '#B8D987',  // ダーク：深い黄緑
        
        // 💙 アクセントカラー2（水色系）- 信頼と安定を表現
        'pale-blue': '#A8D8FF',        // メイン：清涼な水色
        'pale-blue-light': '#CCEBFF',  // ライト：淡い水色
        'pale-blue-dark': '#85C8FF',   // ダーク：深い水色
        
        // ✨ 統一エイリアス（完全互換性保証）
        'pale-green': '#C8E6A0',       // lime-greenと同一（統一完了）
        
        // 🤍 ニュートラルカラー（洗練された基盤色）
        'off-white': '#F8F9FA',        // クリーンな白
        'warm-white': '#FEFCFB',       // 温かみのある白
        'dark-grey': '#333333',        // 深いグレー
        'soft-grey': '#6B7280',        // 柔らかなグレー
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