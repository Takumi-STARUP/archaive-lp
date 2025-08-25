'use client';

export default function Footer() {
  const companyInfo = {
    name: "株式会社ARCHAIVE",
    address: "東京都渋谷区○○○○",
    phone: "03-XXXX-XXXX",
    email: "info@archaive.co.jp"
  };

  const links = {
    service: [
      { label: "機能一覧", href: "#features" },
      { label: "導入事例", href: "#case" },
      { label: "料金プラン", href: "#pricing" },
      { label: "サポート", href: "#support" }
    ],
    company: [
      { label: "会社概要", href: "#about" },
      { label: "ニュース", href: "#news" },
      { label: "採用情報", href: "#careers" },
      { label: "お問い合わせ", href: "#contact" }
    ],
    resources: [
      { label: "資料ダウンロード", href: "#download" },
      { label: "ブログ", href: "#blog" },
      { label: "セミナー・イベント", href: "#events" },
      { label: "FAQ", href: "#faq" }
    ]
  };

  const certifications = [
    { 
      name: "ISO27001", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      )
    },
    { 
      name: "プライバシーマーク", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      )
    },
    { 
      name: "SOC2 Type2", 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* メインフッターコンテンツ */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-[#37B7C4] mb-4">
              ARCHAIVE
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              製造業に特化したAI開発基盤として、データの力で競争力を強化します。
            </p>
            
            {/* 認証情報 */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-400">取得認証</h4>
              <div className="flex space-x-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-1 text-gray-400">{cert.icon}</div>
                    <div className="text-xs text-gray-400">{cert.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              {links.service.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#37B7C4] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#37B7C4] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* リソース */}
          <div>
            <h4 className="text-lg font-semibold mb-4">リソース</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#37B7C4] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 会社詳細情報 */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>{companyInfo.email}</span>
                </div>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>{companyInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{companyInfo.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">SNS</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#37B7C4] transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#37B7C4] transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#37B7C4] transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* コピーライト */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 {companyInfo.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                プライバシーポリシー
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                利用規約
              </a>
              <a href="#security" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                セキュリティ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}