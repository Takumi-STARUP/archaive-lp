'use client';

import { useState } from 'react';
import Link from "next/link";
import Icon from "@/components/ui/Icon";

const nav = [
  { label: '課題', href: '#problem3' },
  { label: '特徴', href: '#features3' },
  { label: '機能', href: '#product3' },
  { label: '事例', href: '#cases3' },
  { label: '流れ', href: '#process3' },
  { label: 'FAQ', href: '#faq3' },
];

export default function Header3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-black shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/lp3" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <div className="w-6 h-6 bg-[#37B7C4]"></div>
            </div>
            <span className="text-2xl font-black text-black tracking-tight">ARCHAIVE</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <ul className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="text-black font-medium hover:text-[#37B7C4] transition-colors duration-300 border-b-2 border-transparent hover:border-[#37B7C4] pb-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTAボタン */}
          <div className="hidden md:block">
            <Link
              href="/lp3/apply"
              className="bg-black text-white px-6 py-3 font-bold hover:bg-[#37B7C4] transition-colors duration-300"
            >
              無料デモ体験
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </nav>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-black bg-white">
            <ul className="py-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block px-4 py-2 text-black font-medium hover:bg-gray-100 hover:text-[#37B7C4] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="px-4 pt-4">
                <Link
                  href="/lp3/apply"
                  className="block w-full bg-black text-white px-6 py-3 font-bold text-center hover:bg-[#37B7C4] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
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