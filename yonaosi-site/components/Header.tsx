'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'トップ' },
    { href: '/diagnosis', label: '診断' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="section-padding py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <svg width="120" height="32" viewBox="0 0 150 40" className="text-soft-orange w-[120px] md:w-[150px]">
              <text x="0" y="30" fontSize="28" fontWeight="700" fill="currentColor">YONAOSI</text>
            </svg>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dark-grey hover:text-soft-orange transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button 
            onClick={() => window.open('https://line.me/R/ti/p/@yonaosi', '_blank')}
            className="btn-secondary flex items-center gap-2 text-sm md:text-base px-3 md:px-6 py-2 md:py-3 min-h-[44px] hidden sm:flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.19 22 14.34 21.78 15.41 21.37L21 22L20.37 16.41C21.78 14.34 22 13.19 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
            </svg>
            公式LINE
          </button>

          <button
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-dark-grey hover:text-soft-orange transition-colors duration-300 text-base min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}