'use client';

import Link from "next/link";

const nav = [
  { label: '特徴', href: '#features' },
  { label: '導入流れ', href: '#process' },
  { label: '料金プラン', href: '#pricing' },
  { label: 'お問い合わせ', href: '#contact' },
];

const company = [
  { label: '会社概要', href: '/company' },
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '利用規約', href: '/terms' },
  { label: 'セキュリティ', href: '/security' },
];

const solutions = [
  { label: '製造業向けソリューション', href: '/solutions/manufacturing' },
  { label: '建設業向けソリューション', href: '/solutions/construction' },
  { label: '自動車業界向け', href: '/solutions/automotive' },
  { label: 'API・連携サービス', href: '/solutions/api' },
];

export default function Footer6() {
  return (
    <footer className="bg-[#E2E8F0] border-t border-gray-200">
      <div className="container mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Information */}
          <div className="md:col-span-1">
            <Link href="/lp6" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#4A5568] flex items-center justify-center rounded-sm">
                <div className="w-8 h-8 bg-white rounded-sm"></div>
              </div>
              <span className="text-3xl font-semibold text-[#4A5568]">ARCHAIVE</span>
            </Link>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              業界初の「チャット式見積AI」で、見積もり業務を3分に短縮。製造業の働き方を革新し、企業の成長を支援します。
            </p>
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="font-medium text-[#4A5568]">ARCHAIVE株式会社</div>
              <div>〒100-0001 東京都千代田区千代田1-1-1</div>
              <div>TEL: 03-1234-5678</div>
              <div>Email: info@archaive.co.jp</div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-[#4A5568] font-semibold text-lg mb-6">ソリューション</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-600 hover:text-[#5B8FB9] hover:underline transition-all duration-300 ease-out text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#4A5568] font-semibold text-lg mb-6">サービス</h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-600 hover:text-[#5B8FB9] hover:underline transition-all duration-300 ease-out text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#4A5568] font-semibold text-lg mb-6">企業情報</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-600 hover:text-[#5B8FB9] hover:underline transition-all duration-300 ease-out text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white border border-gray-200 shadow-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#4A5568] mb-4">
              見積もり業務の効率化を今すぐ始めませんか？
            </h3>
            <p className="text-gray-600 mb-6">
              まずは無料デモで、ARCHAIVEの実力を体験してください。
              専門スタッフが貴社の課題に合わせた最適なソリューションをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lp6/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#5B8FB9] hover:bg-[#4A7A9F] text-white font-semibold text-lg transition-all duration-300 ease-out shadow-lg"
              >
                無料デモを申し込む
              </Link>
              <Link
                href="/lp6/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4A5568] border-2 border-[#4A5568] font-semibold text-lg hover:bg-[#4A5568] hover:text-white transition-all duration-300 ease-out"
              >
                料金プランを見る
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators & Social */}
        <div className="border-t border-gray-300 pt-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Trust Indicators */}
            <div>
              <h4 className="font-semibold text-[#4A5568] mb-6">実績・認証</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { value: '200+', label: '導入企業' },
                  { value: '99.8%', label: '精度' },
                  { value: '84倍', label: '効率化' },
                  { value: '24/7', label: 'サポート' }
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white border border-gray-200 p-4 shadow-sm">
                    <div className="text-xl font-semibold text-[#5B8FB9]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Certifications */}
              <div className="flex flex-wrap gap-4">
                {['ISO 27001', 'SOC 2', 'GDPR対応', 'JIS Q 15001'].map((cert, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 px-3 py-2 text-xs text-gray-600 font-medium shadow-sm">
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-semibold text-[#4A5568] mb-6">フォロー・お問い合わせ</h4>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-gray-600 font-medium text-sm">SNS:</span>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="X(Twitter)"
                  className="w-10 h-10 border border-gray-300 bg-white flex items-center justify-center hover:border-[#5B8FB9] hover:bg-[#5B8FB9] hover:text-white transition-all duration-300 ease-out group"
                >
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03C7.69 9.36 4.07 7.6 1.64 4.95c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65-.72-.02-1.4-.22-2-.55v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3a9.02 9.02 0 0 1-5.6 1.93c-.36 0-.71-.02-1.06-.06A12.77 12.77 0 0 0 7.29 21c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.39-.01-.58.88-.64 1.65-1.44 2.25-2.35z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="w-10 h-10 border border-gray-300 bg-white flex items-center justify-center hover:border-[#5B8FB9] hover:bg-[#5B8FB9] hover:text-white transition-all duration-300 ease-out group"
                >
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube"
                  className="w-10 h-10 border border-gray-300 bg-white flex items-center justify-center hover:border-[#5B8FB9] hover:bg-[#5B8FB9] hover:text-white transition-all duration-300 ease-out group"
                >
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5C1.6 4.3.8 5.1.5 6.2 0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.1 1.1 1.9 2.2 2.2 1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                  </svg>
                </a>
              </div>

              {/* Quick Contact */}
              <div className="bg-white border border-gray-200 p-4 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">お急ぎの方はお電話で</div>
                <div className="text-lg font-semibold text-[#5B8FB9] mb-1">03-1234-5678</div>
                <div className="text-xs text-gray-500">平日 9:00-18:00 / 緊急時24時間対応</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2024 ARCHAIVE, Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span>Made in Japan</span>
              <span>•</span>
              <span>Enterprise Grade Security</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 