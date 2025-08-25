'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#problem", label: "課題" },
    { href: "#solution", label: "解決策" },
    { href: "#features", label: "機能" },
    { href: "#process", label: "導入の流れ" },
    { href: "#case", label: "事例" },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#37B7C4] mr-2">
              ARCHAIVE
            </div>
            <div className="text-sm text-gray-600 hidden md:block">
              AI図面データ活用システム
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-[#37B7C4] transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA ボタン */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              size="md"
              className="border-[#37B7C4] text-[#37B7C4] hover:bg-[#37B7C4] hover:text-white bg-white border-2"
            >
              資料ダウンロード
            </Button>
            <Button
              size="md"
              className="bg-[#37B7C4] hover:bg-[#2a9aa5] text-white"
            >
              無料相談
            </Button>
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
                  className="text-gray-600 hover:text-[#37B7C4] transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 mt-6">
              <Button
                size="md"
                className="border-[#37B7C4] text-[#37B7C4] hover:bg-[#37B7C4] hover:text-white bg-white border-2"
              >
                資料ダウンロード
              </Button>
              <Button
                size="md"
                className="bg-[#37B7C4] hover:bg-[#2a9aa5] text-white"
              >
                無料相談
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}