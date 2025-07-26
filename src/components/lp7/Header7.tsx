'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

const nav = [
  { label: '課題', href: '#problem7', emoji: '🎯' },
  { label: '特徴', href: '#features7', emoji: '✨' },
  { label: '機能', href: '#product7', emoji: '🔧' },
  { label: '事例', href: '#cases7', emoji: '📈' },
  { label: '流れ', href: '#process7', emoji: '🚀' },
  { label: 'FAQ', href: '#faq7', emoji: '❓' },
];

export default function Header7() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-[#FF6B6B]/95 to-[#4ECDC4]/95 backdrop-blur-lg shadow-lg' 
        : 'bg-gradient-to-r from-[#FF6B6B]/20 to-[#4ECDC4]/20 backdrop-blur-sm'
    }`}>
      {/* Floating geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-4 h-4 bg-[#FFE66D]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-20 w-3 h-3 bg-[#95E1D3]/40 rounded rotate-45"></div>
        <div className="absolute bottom-2 left-1/3 w-2 h-2 bg-[#FF6B6B]/30 rounded-full"></div>
        <div className="absolute top-1 right-1/4 w-5 h-1 bg-[#4ECDC4]/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <nav className="flex items-center justify-between h-20">
          {/* ロゴ - More playful and colorful */}
          <Link href="/lp7" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-full"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFE66D] rounded-full animate-bounce"></div>
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
              scrolled ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]'
            }`}>
              ARCHAIVE
            </span>
          </Link>

          {/* デスクトップナビゲーション - More colorful and friendly */}
          <ul className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className={`flex items-center gap-2 px-4 py-2 font-semibold rounded-2xl transition-all duration-300 group ${
                    scrolled 
                      ? 'text-white hover:bg-white/20' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#FF6B6B]/10 hover:to-[#4ECDC4]/10 hover:text-[#4ECDC4]'
                  }`}
                >
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <span className="group-hover:font-bold transition-all duration-300">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTAボタン - More colorful and playful */}
          <div className="hidden md:block">
            <Link
              href="/lp7/apply"
              className="relative overflow-hidden bg-gradient-to-r from-[#FFE66D] to-[#95E1D3] text-gray-800 px-8 py-3 font-bold rounded-2xl hover:from-[#FF6B6B] hover:to-[#4ECDC4] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl group-hover:animate-bounce">🎉</span>
                無料デモ体験
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* モバイルメニューボタン - More colorful */}
          <button
            className={`md:hidden w-10 h-10 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
              scrolled ? 'bg-white/20' : 'bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-white' : 'bg-gray-700'
            } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-white' : 'bg-gray-700'
            } ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-white' : 'bg-gray-700'
            } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </nav>

        {/* モバイルメニュー - More colorful and friendly */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-gradient-to-b from-[#FF6B6B]/95 to-[#4ECDC4]/95 backdrop-blur-lg rounded-b-2xl">
            <ul className="py-6 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="flex items-center gap-3 px-6 py-3 text-white font-semibold hover:bg-white/20 transition-all duration-300 rounded-2xl mx-2 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                      {item.emoji}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
              <li className="px-4 pt-4">
                <Link
                  href="/lp7/apply"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#FFE66D] to-[#95E1D3] text-gray-800 px-6 py-4 font-bold text-center rounded-2xl hover:from-[#FF6B6B] hover:to-[#4ECDC4] hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl group-hover:animate-bounce">🎉</span>
                  無料デモ体験
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
} 