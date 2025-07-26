'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header6() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Conservative enterprise styling */}
          <Link href="/lp6" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#4A5568] flex items-center justify-center rounded-sm">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-semibold text-[#4A5568] tracking-tight">
              ARCHAIVE
            </span>
          </Link>

          {/* Desktop Navigation - Professional spacing */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#features" className="text-gray-800 hover:text-[#5B8FB9] transition-all duration-300 ease-out font-medium">
              特徴
            </a>
            <a href="#process" className="text-gray-800 hover:text-[#5B8FB9] transition-all duration-300 ease-out font-medium">
              導入流れ
            </a>
            <a href="#pricing" className="text-gray-800 hover:text-[#5B8FB9] transition-all duration-300 ease-out font-medium">
              料金プラン
            </a>
            <a href="#contact" className="text-gray-800 hover:text-[#5B8FB9] transition-all duration-300 ease-out font-medium">
              お問い合わせ
            </a>
            {/* Conservative CTA button */}
            <a href="#contact" className="px-6 py-3 bg-[#5B8FB9] text-white font-semibold hover:bg-[#4A7A9F] transition-all duration-300 ease-out shadow-md border-0">
              無料デモ体験
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#4A5568] hover:text-[#5B8FB9] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-800 hover:text-[#5B8FB9] transition-all duration-300 ease-out font-medium py-2">
                特徴
              </a>
              <a href="#process" className="text-gray-800 hover:text-[#5B8FB9] transition-all duration-300 ease-out font-medium py-2">
                導入流れ
              </a>
              <a href="#pricing" className="text-gray-800 hover:text-[#5B8FB9] transition-all duration-300 ease-out font-medium py-2">
                料金プラン
              </a>
              <a href="#contact" className="text-gray-800 hover:text-[#5B8FB9] transition-all duration-300 ease-out font-medium py-2">
                お問い合わせ
              </a>
              <a href="#contact" className="mt-4 px-6 py-3 bg-[#5B8FB9] text-white font-semibold hover:bg-[#4A7A9F] transition-all duration-300 ease-out text-center">
                無料デモ体験
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}