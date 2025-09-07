'use client';
import Image from 'next/image';

export default function Footer() {
  const companyInfo = {
    name: "株式会社ARCHAIVE",
    email: "info@archaive.co.jp"
  };

  const links = [
    { label: "機能一覧", href: "#features" },
    { label: "導入事例", href: "#case" },
    { label: "導入ステップ", href: "#process" },
    { label: "お問い合わせ", href: "#cta" },
    { label: "会社概要", href: "https://starup01.jp/", external: true }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* メインフッターコンテンツ */}
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* ロゴ */}
          <div className="max-w-md">
            <Image
              src="/images/ARCHAIVE_logo.png"
              alt="ARCHAIVE"
              width={140}
              height={46}
            />
          </div>

          {/* ナビゲーションリンク */}
          <nav className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-6">
              {links.slice(0, -1).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#37B7C4] transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div>
              <a
                href={links[links.length - 1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#37B7C4] transition-colors duration-200 text-sm"
              >
                {links[links.length - 1].label}
              </a>
            </div>
          </nav>

        </div>
      </div>

      {/* コピーライト */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © 2024 STAR UP All Right Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200">
                プライバシーポリシー
              </a>
              <a href="#terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200">
                利用規約
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}