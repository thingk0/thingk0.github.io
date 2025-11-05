import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ isOpen, onClose, children }) {
  // 모달이 열렸을 때 body 스크롤 잠금
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // ESC 키 닫기
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    // 배경 오버레이 (외부 클릭 시 닫기)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fadeIn"
      onClick={onClose}
      aria-label="Modal backdrop"
    >
      {/* 모달 본체 (내부 클릭 시 닫히지 않도록 stopPropagation) */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body
  )
}
