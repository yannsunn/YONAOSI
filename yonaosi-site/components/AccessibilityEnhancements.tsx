'use client'

import { useEffect } from 'react'

/**
 * アクセシビリティ向上のための追加機能
 */
export default function AccessibilityEnhancements() {
  useEffect(() => {
    // ESCキーでモーダルを閉じる機能
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // モーダルが開いている場合は閉じる
        const openModals = document.querySelectorAll('[role="dialog"]')
        if (openModals.length > 0) {
          const closeButton = document.querySelector('[aria-label*="閉じる"]') as HTMLButtonElement
          if (closeButton) {
            closeButton.click()
          }
        }
      }
    }

    // フォーカス管理
    const manageFocus = () => {
      const modals = document.querySelectorAll('[role="dialog"]')
      modals.forEach(modal => {
        if (modal) {
          // モーダル内の最初のフォーカス可能な要素にフォーカス
          const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
          if (focusableElements.length > 0) {
            (focusableElements[0] as HTMLElement).focus()
          }
        }
      })
    }

    // 高コントラストモード対応
    const checkHighContrast = () => {
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.documentElement.classList.add('high-contrast')
      }
    }

    // reduced-motionの確認
    const checkReducedMotion = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduced-motion')
      }
    }

    document.addEventListener('keydown', handleEscKey)
    checkHighContrast()
    checkReducedMotion()

    // モーダルの状態変化を監視
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes)
          const hasModal = addedNodes.some(node => 
            node instanceof Element && node.querySelector('[role="dialog"]')
          )
          if (hasModal) {
            setTimeout(manageFocus, 100) // DOM更新後にフォーカス
          }
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      observer.disconnect()
    }
  }, [])

  return null // UIを持たないコンポーネント
}

// ユーティリティ関数：フォーカス可能な要素を取得
export const getFocusableElements = (container: Element) => {
  return container.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
}

// ユーティリティ関数：フォーカストラップ
export const trapFocus = (container: Element) => {
  const focusableElements = getFocusableElements(container)
  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

  const handleTabKey = (e: Event) => {
    const keyboardEvent = e as KeyboardEvent
    if (keyboardEvent.key !== 'Tab') {
      return
    }

    if (keyboardEvent.shiftKey) {
      if (document.activeElement === firstElement) {
        keyboardEvent.preventDefault()
        lastElement.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        keyboardEvent.preventDefault()
        firstElement.focus()
      }
    }
  }

  container.addEventListener('keydown', handleTabKey)
  
  return () => {
    container.removeEventListener('keydown', handleTabKey)
  }
}