'use client';

import Link from "next/link";

const nav = [
  { label: '課題', href: '#problem3' },
  { label: '特徴', href: '#features3' },
  { label: '機能', href: '#product3' },
  { label: '事例', href: '#cases3' },
  { label: '流れ', href: '#process3' },
  { label: 'FAQ', href: '#faq3' },
];

const company = [
  { label: '会社概要', href: '/company' },
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '利用規約', href: '/terms' },
  { label: 'お問い合わせ', href: '/contact' },
];

export default function Footer3() {
  return (
    <footer className="bg-black text-white border-t-4 border-[#37B7C4]">
      <div className="container mx-auto px-4 py-16">
        {/* メインフッターコンテンツ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* ロゴ・会社情報 */}
          <div className="md:col-span-2">
            <Link href="/lp3" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <div className="w-8 h-8 bg-[#37B7C4]"></div>
              </div>
              <span className="text-3xl font-black text-white">ARCHAIVE</span>
            </Link>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              業界初の「チャット式見積AI」で、<br />
              見積もり業務を3分に短縮。<br />
              製造業の働き方を革新します。
            </p>
            <div className="space-y-2 text-gray-400">
              <div>ARCHAIVE株式会社</div>
              <div>〒100-0001 東京都千代田区千代田1-1-1</div>
              <div>TEL: 03-1234-5678</div>
              <div>Email: info@archaive.co.jp</div>
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-[#37B7C4] font-bold text-lg mb-6">サービス</h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white hover:underline transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="text-[#37B7C4] font-bold text-lg mb-6">会社情報</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white hover:underline transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA セクション */}
        <div className="border border-gray-600 p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            見積もり業務の効率化を始めませんか？
          </h3>
          <p className="text-gray-300 mb-6">
            まずは無料デモで、その実力を体験してください
          </p>
          <Link
            href="/lp3/apply"
            className="inline-block bg-[#37B7C4] hover:bg-[#2596a6] text-white font-bold px-8 py-4 transition-colors duration-300"
          >
            無料デモを申し込む
          </Link>
        </div>

        {/* SNS・実績 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* SNSリンク */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium">Follow us:</span>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="X(Twitter)"
              className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-[#37B7C4] hover:bg-[#37B7C4]/10 transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-gray-400 hover:text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03C7.69 9.36 4.07 7.6 1.64 4.95c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65-.72-.02-1.4-.22-2-.55v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3a9.02 9.02 0 0 1-5.6 1.93c-.36 0-.71-.02-1.06-.06A12.77 12.77 0 0 0 7.29 21c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.39-.01-.58.88-.64 1.65-1.44 2.25-2.35z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-[#37B7C4] hover:bg-[#37B7C4]/10 transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-gray-400 hover:text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"/>
              </svg>
            </a>
          </div>

          {/* 実績表示 */}
          <div className="flex items-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[#37B7C4]">200+</div>
              <div className="text-xs text-gray-400">導入企業</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#37B7C4]">3分</div>
              <div className="text-xs text-gray-400">見積時間</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#37B7C4]">84倍</div>
              <div className="text-xs text-gray-400">効率化</div>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 ARCHAIVE, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 