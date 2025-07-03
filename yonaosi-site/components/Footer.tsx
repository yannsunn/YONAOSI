'use client'

export default function Footer() {
  return (
    <footer className="bg-dark-grey text-white" role="contentinfo">
      <div className="section-padding py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">YONAOSI</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                人生の転換期に寄り添う、
                あなたの専属ファイナンシャルプランナー
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">サービス</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="/diagnosis" className="hover:text-soft-orange transition-colors min-h-[44px] flex items-center">無料診断</a></li>
                <li className="flex justify-center sm:justify-start"><button onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')} className="hover:text-soft-orange transition-colors min-h-[52px] flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-soft-orange text-white rounded-lg">LINE相談</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">お問い合わせ</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <p>support@yonaosi.jp</p>
                <p>まずはお気軽にLINEでご相談ください</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">フォローする</h4>
              <div className="flex gap-6 items-center">
                <button 
                  onClick={() => window.open('https://twitter.com/yonaosi_jp', '_blank')}
                  className="text-gray-300 hover:text-soft-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none rounded"
                  aria-label="TwitterでYONAOSIをフォロー"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://instagram.com/yonaosi_jp', '_blank')}
                  className="text-gray-300 hover:text-soft-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none rounded"
                  aria-label="InstagramでYONAOSIをフォロー"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://facebook.com/yonaosi.jp', '_blank')}
                  className="text-gray-300 hover:text-soft-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-soft-orange focus:ring-opacity-50 focus:outline-none rounded"
                  aria-label="FacebookでYONAOSIをフォロー"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
              
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 YONAOSI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}