'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';

const nav = [
  { label: '課題', href: '#problem7', emoji: '🎯' },
  { label: '特徴', href: '#features7', emoji: '✨' },
  { label: '機能', href: '#product7', emoji: '🔧' },
  { label: '事例', href: '#cases7', emoji: '📈' },
  { label: '流れ', href: '#process7', emoji: '🚀' },
  { label: 'FAQ', href: '#faq7', emoji: '❓' },
];

const company = [
  { label: '会社概要', href: '/company', emoji: '🏢' },
  { label: 'プライバシーポリシー', href: '/privacy', emoji: '🔒' },
  { label: '利用規約', href: '/terms', emoji: '📋' },
  { label: 'お問い合わせ', href: '/contact', emoji: '📞' },
];

export default function Footer7() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-[#FF6B6B]/5 via-[#FFE66D]/5 to-[#4ECDC4]/5 text-gray-700 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFE66D]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-bl from-[#4ECDC4]/15 to-[#95E1D3]/10 rounded-2xl rotate-45 animate-spin" style={{animationDuration: '45s'}}></div>
        <div className="absolute bottom-24 left-24 w-32 h-32 bg-gradient-to-tr from-[#95E1D3]/10 to-[#FFE66D]/15 rounded-full animate-bounce" style={{animationDuration: '9s'}}></div>
        <div className="absolute bottom-16 right-16 w-28 h-28 bg-gradient-to-tl from-[#FFE66D]/15 to-[#FF6B6B]/10 rounded-3xl -rotate-12 animate-pulse"></div>
        
        {/* Small floating shapes */}
        <div className="absolute top-1/3 left-20 w-3 h-3 bg-[#4ECDC4]/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-24 w-2 h-2 bg-[#FFE66D]/50 rounded rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-[#FF6B6B]/30 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        {/* Enhanced main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Enhanced logo and company info */}
          <div className="md:col-span-2">
            <Link href="/lp7" className="group flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FFE66D] rounded-full animate-bounce"></div>
              </div>
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]">
                ARCHAIVE
              </span>
            </Link>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
              業界初の「チャット式見積AI」で見積もり業務を<span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">3分</span>に短縮！✨<br />
              製造業の働き方を革新する次世代システムです 🚀
            </p>
            
            <div className="bg-gradient-to-r from-white to-gray-50 border-4 border-[#4ECDC4]/30 rounded-3xl p-6 shadow-lg">
              <h4 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl animate-bounce">🏢</span>
                会社情報
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏗️</span>
                  <span>ARCHAIVE株式会社</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  <span>〒100-0001 東京都千代田区千代田1-1-1</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📞</span>
                  <span>TEL: 03-1234-5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📧</span>
                  <span>Email: info@archaive.co.jp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced navigation */}
          <div>
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mb-6 flex items-center gap-2">
              <span className="text-3xl animate-bounce">⚡</span>
              サービス
            </h3>
            <ul className="space-y-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="group flex items-center gap-3 text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#4ECDC4] transition-all duration-300 font-medium p-2 rounded-xl hover:bg-gradient-to-r hover:from-[#FF6B6B]/5 hover:to-[#4ECDC4]/5"
                  >
                    <span className="text-lg group-hover:animate-bounce">{item.emoji}</span>
                    <span className="group-hover:font-bold">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced company links */}
          <div>
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] to-[#95E1D3] mb-6 flex items-center gap-2">
              <span className="text-3xl animate-bounce">🌟</span>
              会社情報
            </h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="group flex items-center gap-3 text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#4ECDC4] hover:to-[#95E1D3] transition-all duration-300 font-medium p-2 rounded-xl hover:bg-gradient-to-r hover:from-[#4ECDC4]/5 hover:to-[#95E1D3]/5"
                  >
                    <span className="text-lg group-hover:animate-bounce">{item.emoji}</span>
                    <span className="group-hover:font-bold">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced CTA section */}
        <div className="bg-gradient-to-r from-[#FF6B6B]/20 via-[#FFE66D]/15 to-[#4ECDC4]/20 border-4 border-[#4ECDC4] rounded-3xl p-12 mb-16 text-center relative overflow-hidden shadow-2xl">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFE66D]/20 to-transparent rounded-bl-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#95E1D3]/20 to-transparent rounded-tr-3xl"></div>
          
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 flex items-center justify-center gap-3">
              <span className="text-4xl animate-bounce">🎉</span>
              見積もり業務の効率化を始めませんか？
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
            </h3>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              まずは無料デモで、その実力を体験してください！革新的なシステムをお試しいただけます 🚀
            </p>
            <Link
              href="/lp7/apply"
              className="group relative overflow-hidden inline-block bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white font-black px-12 py-5 text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl group-hover:animate-spin">🎯</span>
                無料デモを申し込む
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFE66D] to-[#95E1D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Enhanced SNS and achievements */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          {/* Enhanced social links */}
          <div className="flex items-center gap-6">
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] flex items-center gap-2">
              <span className="text-2xl animate-bounce">🌐</span>
              Follow us:
            </span>
            
            {[
              { 
                href: 'https://twitter.com/', 
                label: 'X(Twitter)', 
                emoji: '🐦',
                gradient: 'from-[#FF6B6B] to-[#FFE66D]',
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03C7.69 9.36 4.07 7.6 1.64 4.95c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65-.72-.02-1.4-.22-2-.55v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3a9.02 9.02 0 0 1-5.6 1.93c-.36 0-.71-.02-1.06-.06A12.77 12.77 0 0 0 7.29 21c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.39-.01-.58.88-.64 1.65-1.44 2.25-2.35z"/>
                  </svg>
                )
              },
              { 
                href: 'https://linkedin.com/', 
                label: 'LinkedIn', 
                emoji: '💼',
                gradient: 'from-[#4ECDC4] to-[#95E1D3]',
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"/>
                  </svg>
                )
              }
            ].map((social, idx) => (
              <a 
                key={social.href}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label}
                className={`group relative w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-125 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-1 right-1 text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {social.emoji}
                </div>
                <div className="group-hover:animate-bounce">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Enhanced achievements */}
          <div className="flex items-center gap-8">
            {[
              { value: '200+', label: '導入企業', emoji: '🏢', color: 'from-[#FF6B6B] to-[#FFE66D]' },
              { value: '3分', label: '見積時間', emoji: '⚡', color: 'from-[#FFE66D] to-[#4ECDC4]' },
              { value: '84倍', label: '効率化', emoji: '🚀', color: 'from-[#4ECDC4] to-[#95E1D3]' }
            ].map((stat, idx) => (
              <div key={idx} className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-[#4ECDC4]">
                <div className="text-2xl mb-2 group-hover:animate-bounce">{stat.emoji}</div>
                <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced copyright */}
        <div className="border-t-4 border-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] pt-8 text-center">
          <div className="bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 rounded-2xl p-6">
            <p className="text-gray-700 font-medium flex items-center justify-center gap-2">
              <span className="text-xl animate-pulse">©</span>
              <span>2024 ARCHAIVE, Inc. All rights reserved.</span>
              <span className="text-xl animate-pulse">✨</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Made with <span className="text-red-500 animate-pulse">❤️</span> for the future of manufacturing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 