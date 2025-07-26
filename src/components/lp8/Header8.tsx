'use client';

import { useState } from 'react';
import Link from "next/link";

const nav = [
  { label: '課題', href: '#problem8' },
  { label: '特徴', href: '#features8' },
  { label: '機能', href: '#product8' },
  { label: '事例', href: '#cases8' },
  { label: '流れ', href: '#process8' },
  { label: 'FAQ', href: '#faq8' },
];

export default function Header8() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F5DC] shadow-sm border-b border-gray-200/30">
      <div className="container mx-auto px-8">
        <nav className="relative flex items-center justify-between h-20">
          {/* 伝統的な装飾線 */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B3A3A]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B3A3A]/20 to-transparent"></div>

          {/* ロゴ - 和風デザイン */}
          <Link href="/lp8" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-[#4A4A4A] rounded-sm flex items-center justify-center shadow-sm border border-gray-300/20">
                <div className="w-7 h-7 bg-[#8B3A3A] rounded-sm"></div>
              </div>
              {/* 縦書き装飾 */}
              <div className="absolute -right-2 top-0 w-px h-full bg-[#8B3A3A]/30"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light text-[#4A4A4A] tracking-widest">ARCHAIVE</span>
              <div className="h-px bg-[#8B3A3A]/50 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </Link>

          {/* デスクトップナビゲーション - 和風スタイル */}
          <ul className="hidden md:flex items-center gap-12">
            {nav.map((item, index) => (
              <li key={item.href} className="relative group">
                <a 
                  href={item.href} 
                  className="relative text-[#727171] font-light text-sm tracking-wider hover:text-[#8B3A3A] transition-all duration-300 py-2"
                >
                  {item.label}
                  {/* 和風装飾 */}
                  <div className="absolute -bottom-1 left-1/2 w-4 h-px bg-[#8B3A3A] transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  {/* 縦書き装飾点 */}
                  <div className="absolute -left-3 top-1/2 w-1 h-1 bg-[#8B3A3A]/20 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </li>
            ))}
          </ul>

          {/* CTAボタン - 和風スタイル */}
          <div className="hidden md:block">
            <Link
              href="/lp8/apply"
              className="relative bg-[#8B3A3A] text-white px-8 py-3 rounded-sm font-light tracking-wider text-sm hover:bg-[#7A2E2E] transition-all duration-300 shadow-sm border border-[#8B3A3A]/20 group overflow-hidden"
            >
              <span className="relative z-10">無料デモ体験</span>
              {/* 和風ホバー効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E2E] to-[#8B3A3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              {/* 装飾線 */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
            </Link>
          </div>

          {/* モバイルメニューボタン - 和風スタイル */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-[#4A4A4A] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-[#4A4A4A] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-[#4A4A4A] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            {/* 装飾円 */}
            <div className="absolute inset-0 border border-[#8B3A3A]/20 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </nav>

        {/* モバイルメニュー - 和風スタイル */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#8B3A3A]/20 bg-[#F5F5DC] backdrop-blur-sm">
            {/* 和紙風テクスチャー */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(139, 58, 58, 0.1) 20px,
                  rgba(139, 58, 58, 0.1) 21px
                )`
              }}></div>
            </div>
            <ul className="relative py-6 space-y-1">
              {nav.map((item, index) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block px-6 py-3 text-[#727171] font-light tracking-wider hover:bg-white/50 hover:text-[#8B3A3A] transition-all duration-300 border-l-2 border-transparent hover:border-[#8B3A3A]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-[#8B3A3A]/40 rounded-full"></div>
                      {item.label}
                    </div>
                  </a>
                </li>
              ))}
              <li className="px-6 pt-4">
                <Link
                  href="/lp8/apply"
                  className="block w-full bg-[#8B3A3A] text-white px-6 py-3 rounded-sm font-light text-center hover:bg-[#7A2E2E] transition-all duration-300 shadow-sm border border-[#8B3A3A]/20 tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  無料デモ体験
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* 和風背景パターン */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 58, 58, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 80% 50%, rgba(139, 58, 58, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </header>
  );
} 