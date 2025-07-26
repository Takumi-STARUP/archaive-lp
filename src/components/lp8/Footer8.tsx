'use client';

import Link from "next/link";

const nav = [
  { label: '課題', href: '#problem8' },
  { label: '特徴', href: '#features8' },
  { label: '機能', href: '#product8' },
  { label: '事例', href: '#cases8' },
  { label: '流れ', href: '#process8' },
  { label: 'FAQ', href: '#faq8' },
];

const company = [
  { label: '会社概要', href: '/company' },
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '利用規約', href: '/terms' },
  { label: 'お問い合わせ', href: '/contact' },
];

export default function Footer8() {
  return (
    <footer className="relative bg-[#FAFAF8] text-[#727171] overflow-hidden">
      {/* 和紙風背景テクスチャー */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            -30deg,
            transparent,
            transparent 100px,
            rgba(139, 58, 58, 0.05) 100px,
            rgba(139, 58, 58, 0.05) 101px
          ),
          repeating-linear-gradient(
            30deg,
            transparent,
            transparent 100px,
            rgba(114, 113, 113, 0.05) 100px,
            rgba(114, 113, 113, 0.05) 101px
          )`
        }}></div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">
        {/* メインフッターコンテンツ - 和風レイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* ロゴ・会社情報 */}
          <div className="lg:col-span-6">
            {/* ブランドロゴ */}
            <Link href="/lp8" className="flex items-center gap-4 mb-8 group">
              <div className="relative">
                <div className="w-14 h-14 bg-[#4A4A4A] rounded-sm flex items-center justify-center shadow-sm border border-gray-300/20 group-hover:border-[#8B3A3A]/30 transition-all duration-300">
                  <div className="w-9 h-9 bg-[#8B3A3A] rounded-sm"></div>
                </div>
                {/* 装飾線 */}
                <div className="absolute -right-2 top-0 w-px h-full bg-[#8B3A3A]/20"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-light text-[#4A4A4A] tracking-widest">ARCHAIVE</span>
                <div className="h-px bg-[#8B3A3A]/30 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </Link>

            {/* ブランドメッセージ */}
            <div className="mb-8">
              <p className="text-[#727171] text-lg mb-2 font-light leading-relaxed tracking-wider">
                業界初の「チャット式見積AI」で、
              </p>
              <p className="text-[#727171] text-lg mb-2 font-light leading-relaxed tracking-wider">
                見積もり業務を3分に短縮。
              </p>
              <p className="text-[#8B3A3A] text-lg font-light leading-relaxed tracking-wider">
                製造業の働き方を革新します。
              </p>
            </div>

            {/* 会社情報 */}
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-sm border border-gray-200/50">
              <div className="space-y-2 text-[#727171] font-light">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#8B3A3A]/40 rounded-full"></div>
                  <span className="tracking-wider">ARCHAIVE株式会社</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#8B3A3A]/40 rounded-full"></div>
                  <span className="tracking-wider">〒100-0001 東京都千代田区千代田1-1-1</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#8B3A3A]/40 rounded-full"></div>
                  <span className="tracking-wider">TEL: 03-1234-5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#8B3A3A]/40 rounded-full"></div>
                  <span className="tracking-wider">Email: info@archaive.co.jp</span>
                </div>
              </div>
            </div>
          </div>

          {/* ナビゲーション・リンク */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* サービスナビゲーション */}
            <div>
              <div className="relative mb-8">
                <h3 className="text-[#8B3A3A] font-light text-lg tracking-wider">サービス</h3>
                <div className="w-12 h-px bg-[#8B3A3A]/30 mt-2"></div>
              </div>
              <ul className="space-y-4">
                {nav.map((item, index) => (
                  <li key={item.href} className="group">
                    <a 
                      href={item.href} 
                      className="flex items-center gap-3 text-[#727171] hover:text-[#8B3A3A] transition-all duration-300 font-light tracking-wider"
                    >
                      <div className="w-1 h-1 bg-[#8B3A3A]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 会社情報 */}
            <div>
              <div className="relative mb-8">
                <h3 className="text-[#8B3A3A] font-light text-lg tracking-wider">会社情報</h3>
                <div className="w-12 h-px bg-[#8B3A3A]/30 mt-2"></div>
              </div>
              <ul className="space-y-4">
                {company.map((item, index) => (
                  <li key={item.href} className="group">
                    <a 
                      href={item.href} 
                      className="flex items-center gap-3 text-[#727171] hover:text-[#8B3A3A] transition-all duration-300 font-light tracking-wider"
                    >
                      <div className="w-1 h-1 bg-[#8B3A3A]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA セクション - 和風デザイン */}
        <div className="relative bg-white/80 backdrop-blur-sm border border-[#8B3A3A]/20 p-12 mb-16 text-center rounded-sm shadow-sm">
          {/* 和紙風テクスチャー */}
          <div className="absolute inset-0 opacity-5 rounded-sm">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 75%, rgba(139, 58, 58, 0.1) 1px, transparent 1px),
                               radial-gradient(circle at 75% 25%, rgba(139, 58, 58, 0.1) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-light text-[#4A4A4A] mb-4 tracking-wider">
              見積もり業務の効率化を始めませんか？
            </h3>
            <div className="w-16 h-px bg-[#8B3A3A]/30 mx-auto mb-6"></div>
            <p className="text-[#727171] mb-8 font-light leading-relaxed">
              まずは無料デモで、その実力を体験してください
            </p>
            <Link
              href="/lp8/apply"
              className="inline-block bg-[#8B3A3A] text-white font-light px-10 py-4 rounded-sm hover:bg-[#7A2E2E] transition-all duration-300 shadow-sm tracking-wider"
            >
              無料デモを申し込む
            </Link>
          </div>

          {/* 装飾要素 */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#8B3A3A]/10"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#8B3A3A]/10"></div>
        </div>

        {/* SNS・実績セクション - 和風デザイン */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16">
          {/* SNSリンク */}
          <div className="flex items-center gap-6">
            <span className="text-[#727171] font-light tracking-wider">Follow us:</span>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X(Twitter)"
                className="w-12 h-12 border border-gray-300/50 rounded-sm flex items-center justify-center hover:border-[#8B3A3A]/50 hover:bg-[#8B3A3A]/5 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-[#727171] group-hover:text-[#8B3A3A] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03C7.69 9.36 4.07 7.6 1.64 4.95c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65-.72-.02-1.4-.22-2-.55v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3a9.02 9.02 0 0 1-5.6 1.93c-.36 0-.71-.02-1.06-.06A12.77 12.77 0 0 0 7.29 21c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.39-.01-.58.88-.64 1.65-1.44 2.25-2.35z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-12 h-12 border border-gray-300/50 rounded-sm flex items-center justify-center hover:border-[#8B3A3A]/50 hover:bg-[#8B3A3A]/5 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-[#727171] group-hover:text-[#8B3A3A] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 実績表示 - 和風スタイル */}
          <div className="bg-white/60 backdrop-blur-sm px-8 py-4 rounded-sm border border-gray-200/50">
            <div className="flex items-center gap-12 text-center">
              <div className="group">
                <div className="text-2xl font-light text-[#8B3A3A] mb-1 tracking-wider">200+</div>
                <div className="text-xs text-[#727171] tracking-wider font-light">導入企業</div>
                <div className="w-full h-px bg-[#8B3A3A]/20 mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
              <div className="w-px h-12 bg-[#8B3A3A]/20"></div>
              <div className="group">
                <div className="text-2xl font-light text-[#8B3A3A] mb-1 tracking-wider">3分</div>
                <div className="text-xs text-[#727171] tracking-wider font-light">見積時間</div>
                <div className="w-full h-px bg-[#8B3A3A]/20 mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
              <div className="w-px h-12 bg-[#8B3A3A]/20"></div>
              <div className="group">
                <div className="text-2xl font-light text-[#8B3A3A] mb-1 tracking-wider">84倍</div>
                <div className="text-xs text-[#727171] tracking-wider font-light">効率化</div>
                <div className="w-full h-px bg-[#8B3A3A]/20 mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト - 和風デザイン */}
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-[#8B3A3A]/20 to-transparent mb-8"></div>
          <div className="text-center">
            <p className="text-[#727171] text-sm font-light tracking-widest">
              &copy; 2024 ARCHAIVE, Inc. All rights reserved.
            </p>
            {/* 装飾点 */}
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-1 h-1 bg-[#8B3A3A]/30 rounded-full"></div>
              <div className="w-1 h-1 bg-[#8B3A3A]/20 rounded-full"></div>
              <div className="w-1 h-1 bg-[#8B3A3A]/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 伝統的装飾パターン */}
      <div className="absolute top-20 right-20 opacity-3">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <defs>
            <pattern id="traditional-footer" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="#8B3A3A"/>
              <path d="M5,5 L25,25 M25,5 L5,25" stroke="#8B3A3A" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#traditional-footer)"/>
        </svg>
      </div>
    </footer>
  );
} 