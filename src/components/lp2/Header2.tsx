'use client';

import Link from "next/link";
import Icon from "@/components/ui/Icon";

const nav = [
  { label: '課題', href: '#problem2' },
  { label: '特徴', href: '#features2' },
  { label: '機能', href: '#product2' },
  { label: '事例', href: '#cases2' },
  { label: '流れ', href: '#process2' },
  { label: 'FAQ', href: '#faq2' },
];

export default function Header2() {
  return (
    <header className="w-full bg-black/90 backdrop-blur-lg shadow-lg sticky top-0 z-30 border-b border-white/20">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* ロゴ */}
        <Link href="/lp2" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#37B7C4] to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <Icon type="ai" size={24} />
          </div>
          <span className="text-[#37B7C4] font-black text-2xl tracking-tight drop-shadow">ARCHAIVE</span>
        </Link>
        {/* ナビゲーション */}
        <ul className="hidden md:flex gap-8 text-white font-bold">
          {nav.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="hover:text-[#37B7C4] transition px-3 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#37B7C4]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* CTAボタン */}
        <Link
          href="#cta2"
          className="hidden md:inline-block px-8 py-3 bg-[#37B7C4] text-white rounded-full font-black text-lg hover:scale-105 transition shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#37B7C4] focus:ring-offset-2 focus:ring-offset-black"
        >
          無料デモ体験
        </Link>
      </nav>
    </header>
  );
} 