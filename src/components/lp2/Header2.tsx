'use client';

import Link from "next/link";
import Icon from "@/components/ui/Icon";

const nav = [
  { label: '課題', href: '/lp2#problem2' },
  { label: '特徴', href: '/lp2#features2' },
  { label: '機能', href: '/lp2#product2' },
  { label: '事例', href: '/lp2#cases2' },
  { label: '流れ', href: '/lp2#process2' },
  { label: 'FAQ', href: '/lp2#faq2' },
];

export default function Header2() {
  return (
    <header className="sticky top-0 z-30 w-full flex justify-center bg-[#181A1B]" style={{ minHeight: 56 }}>
      <nav className="w-full max-w-5xl flex items-center justify-between px-8 py-1 bg-white rounded-full shadow-lg border border-[#f3e3d6] mt-4 mb-4" style={{ minHeight: 40 }}>
        {/* ロゴ */}
        <Link href="/lp2" className="flex items-center gap-2 min-w-[160px]">
          <div className="w-9 h-9 bg-white border-4 border-[#38aee6] rounded-full flex items-center justify-center shadow" style={{ boxShadow: '0 2px 8px rgba(56,174,230,0.10)' }}>
            <Icon type="ai" size={24} className="text-[#38aee6]" />
          </div>
          <span className="text-[#181A1B] font-black text-xl tracking-tight ml-2">ARCHAIVE</span>
        </Link>
        {/* ナビゲーション */}
        <ul className="flex-1 flex justify-center gap-8 text-[#181A1B] font-bold text-lg">
          {nav.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="hover:text-[#37B7C4] transition px-2 py-1 rounded focus:outline-none"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* CTAボタン */}
        <Link
          href="/lp2/apply"
          className="px-8 py-3 bg-[#181A1B] text-white rounded-full font-black text-lg shadow hover:scale-105 transition min-w-[160px] text-center"
        >
          無料デモ体験
        </Link>
      </nav>
    </header>
  );
} 