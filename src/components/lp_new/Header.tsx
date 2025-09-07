'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#demo", label: "デモ体験" },
    { href: "#problem-solution", label: "課題と解決" },
    { href: "#features", label: "主要機能" },
    { href: "#process", label: "導入ステップ" },
    { href: "#case", label: "導入事例" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // ヘッダーの高さ分のオフセット
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center"
            >
              <Image
                src="/images/ARCHAIVE_logo.png"
                alt="ARCHAIVE"
                width={120}
                height={40}
              />
            </a>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-600 hover:text-[#37B7C4] transition-colors duration-200 font-bold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA ボタン */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="bg-white border-2 border-gray-300 rounded text-black px-5 py-2.5 text-sm cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity font-semibold"
            >
              <span className="flex items-center gap-1.5">⬇ 資料ダウンロード</span>
            </a>
            <a 
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="bg-transparent border-2 border-[#37B7C4] text-[#37B7C4] rounded px-5 py-2.5 text-sm cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity font-semibold"
            >
              <span className="flex items-center gap-1.5">✉ 無料トライアル</span>
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-[#37B7C4] transition-colors duration-200 font-bold py-2"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 mt-6">
              <a 
                href="#cta"
                onClick={(e) => handleNavClick(e, '#cta')}
                className="bg-white border-2 border-gray-300 rounded text-black px-6 py-3 text-base cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity font-semibold"
              >
                <span className="flex items-center gap-1.5">⬇ 資料ダウンロード</span>
              </a>
              <a 
                href="#cta"
                onClick={(e) => handleNavClick(e, '#cta')}
                className="bg-transparent border-2 border-[#37B7C4] text-[#37B7C4] rounded px-6 py-3 text-base cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity font-semibold"
              >
                <span className="flex items-center gap-1.5">✉ 無料トライアル</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}