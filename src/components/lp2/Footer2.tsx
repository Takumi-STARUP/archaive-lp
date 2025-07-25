'use client';

import Icon from "@/components/ui/Icon";

const nav = [
  { label: '課題', href: '/lp2#problem2' },
  { label: '特徴', href: '/lp2#features2' },
  { label: '機能', href: '/lp2#product2' },
  { label: '事例', href: '/lp2#cases2' },
  { label: '流れ', href: '/lp2#process2' },
  { label: 'FAQ', href: '/lp2#faq2' },
];

export default function Footer2() {
  return (
    <footer className="bg-white text-black py-16 border-t border-black/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* 左：ロゴと会社情報 */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#37B7C4] to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Icon type="ai" size={28} />
            </div>
            <span className="font-black text-[#37B7C4] text-2xl">ARCHAIVE</span>
          </div>
          <div className="text-sm text-black/70">ARCHAIVE株式会社</div>
          <div className="text-sm text-black/70">東京都千代田区1-2-3</div>
          <div className="text-sm text-black/70">info@archaive.co.jp</div>
        </div>
        {/* 中央：ナビゲーション */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-bold text-[#37B7C4] mb-2">メニュー</span>
          <div className="flex gap-4 flex-wrap justify-center">
            {nav.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="px-4 py-2 rounded-lg hover:text-[#37B7C4] hover:bg-black/5 transition text-black text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        {/* 右：SNS */}
        <div className="flex gap-4">
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="X(Twitter)"
            className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center hover:bg-[#37B7C4]/10 transition"
          >
            <svg className="w-5 h-5 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03C7.69 9.36 4.07 7.6 1.64 4.95c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65-.72-.02-1.4-.22-2-.55v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3a9.02 9.02 0 0 1-5.6 1.93c-.36 0-.71-.02-1.06-.06A12.77 12.77 0 0 0 7.29 21c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.39-.01-.58.88-.64 1.65-1.44 2.25-2.35z"/>
            </svg>
          </a>
          <a 
            href="https://facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center hover:bg-[#37B7C4]/10 transition"
          >
            <svg className="w-5 h-5 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22h-1.91c-1.5 0-1.79.71-1.79 1.75v2.3h3.58l-.47 3.62h-3.11V24h6.09A1.32 1.32 0 0 0 24 22.68V1.32A1.32 1.32 0 0 0 22.68 0"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center hover:bg-[#37B7C4]/10 transition"
          >
            <svg className="w-5 h-5 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-black/50 mt-8 border-t border-black/10 pt-8">
        &copy; 2024 ARCHAIVE, Inc. All rights reserved.
      </div>
    </footer>
  );
} 