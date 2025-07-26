'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';

const nav = [
  { label: '課題', href: '#problem9', code: '01' },
  { label: '特徴', href: '#features9', code: '02' },
  { label: '機能', href: '#product9', code: '03' },
  { label: '事例', href: '#cases9', code: '04' },
  { label: '流れ', href: '#process9', code: '05' },
  { label: 'FAQ', href: '#faq9', code: '06' },
];

const company = [
  { label: '会社概要', href: '/company' },
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '利用規約', href: '/terms' },
  { label: 'お問い合わせ', href: '/contact' },
];

export default function Footer9() {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#1A202C] text-gray-300 border-t border-[#805AD5]/50 overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0">
        {/* Matrix grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                #805AD5 0px,
                #805AD5 1px,
                transparent 1px,
                transparent 40px
              ),
              repeating-linear-gradient(
                90deg,
                #319795 0px,
                #319795 1px,
                transparent 1px,
                transparent 40px
              )
            `
          }}></div>
        </div>

        {/* Animated scan lines */}
        <div className="absolute inset-0">
          <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#805AD5]/50 to-transparent animate-scan-vertical"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo & Company Info - Tech Style */}
          <div className={`lg:col-span-5 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link href="/lp9" className="inline-block mb-8 group">
              <div className="flex items-center gap-4">
                {/* Hexagonal logo */}
                <div className="relative">
                  <div className="w-16 h-16 bg-[#2D3748] flex items-center justify-center relative overflow-hidden group-hover:bg-[#2D3748]/80 transition-all duration-300"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                    }}>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#805AD5] to-[#319795]"
                      style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                      }}></div>
                  </div>
                  {/* Rotating ring */}
                  <div className="absolute inset-0 border-2 border-[#805AD5]/30 animate-spin-slow"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      animationDuration: '10s'
                    }}></div>
                </div>
                <div>
                  <span className="text-3xl font-black text-gray-300 font-mono tracking-widest">
                    ARCHAIVE
                  </span>
                  <div className="text-xs font-mono text-[#319795] mt-1">
                    NEXT GENERATION AI SYSTEM
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-gray-400 mb-8 leading-relaxed font-mono text-sm">
              <span className="text-[#319795]">&gt;</span> 業界初の「チャット式見積AI」で、<br />
              <span className="text-[#319795]">&gt;</span> 見積もり業務を3分に短縮。<br />
              <span className="text-[#319795]">&gt;</span> 製造業の働き方を革新します。
            </p>

            {/* Tech-style company info */}
            <div className="space-y-3 text-sm font-mono">
              <div className="flex items-center gap-3">
                <span className="text-[#805AD5]">▶</span>
                <span className="text-gray-400">ARCHAIVE株式会社</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#805AD5]">▶</span>
                <span className="text-gray-400">〒100-0001 東京都千代田区千代田1-1-1</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#805AD5]">▶</span>
                <span className="text-gray-400">TEL: 03-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#805AD5]">▶</span>
                <span className="text-gray-400">info@archaive.co.jp</span>
              </div>
            </div>
          </div>

          {/* Navigation Links - Grid Style */}
          <div className={`lg:col-span-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-lg font-bold text-gray-300 mb-6 font-mono">
              <span className="text-[#805AD5]">[</span> SERVICE MENU <span className="text-[#805AD5]">]</span>
            </h3>
            <div className="space-y-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 text-gray-400 hover:text-[#805AD5] transition-all duration-300"
                >
                  <span className="text-xs font-mono text-[#319795]">{item.code}</span>
                  <span className="flex-1 font-mono tracking-wider">{item.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#805AD5]">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links & Status */}
          <div className={`lg:col-span-3 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-lg font-bold text-gray-300 mb-6 font-mono">
              <span className="text-[#805AD5]">[</span> SYSTEM STATUS <span className="text-[#805AD5]">]</span>
            </h3>
            
            {/* Real-time status */}
            <div className="bg-[#2D3748]/30 backdrop-blur-sm border border-[#805AD5]/20 p-4 mb-6">
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">SERVER STATUS</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#319795] rounded-full animate-pulse"></div>
                    <span className="text-[#319795]">ONLINE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">UPTIME</span>
                  <span className="text-[#805AD5]">99.99%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">VERSION</span>
                  <span className="text-gray-300">v2.0.4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">TIME</span>
                  <span className="text-[#319795]">{time.toLocaleTimeString('ja-JP')}</span>
                </div>
              </div>
            </div>

            {/* Company links */}
            <div className="space-y-3">
              {company.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-mono text-gray-400 hover:text-[#805AD5] transition-colors duration-300"
                >
                  <span className="text-[#319795] mr-2">›</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section with Futuristic Design */}
        <div className={`relative mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-[#2D3748]/30 backdrop-blur-md border border-[#805AD5]/30 p-12 text-center overflow-hidden">
            {/* Tech decorations */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#805AD5]/50"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#805AD5]/50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#805AD5]/50"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#805AD5]/50"></div>

            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, #805AD5 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-300 mb-4 font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#805AD5] to-[#319795]">
                  INITIALIZE YOUR FUTURE
                </span>
              </h3>
              <p className="text-gray-400 mb-8 font-mono">
                次世代AIシステムで業務効率を最大化
              </p>
              <Link
                href="/lp9/apply"
                className="inline-block relative group overflow-hidden"
              >
                <div className="relative px-10 py-4 bg-gradient-to-r from-[#805AD5] to-[#319795] text-white font-mono font-bold tracking-wider">
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="animate-pulse">▶</span>
                    ACCESS DEMO SYSTEM
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats & Social - Tech Dashboard Style */}
        <div className={`flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Social Links with Tech Style */}
          <div className="flex items-center gap-6">
            <span className="text-xs font-mono text-gray-400 tracking-wider">CONNECT://</span>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="X(Twitter)"
              className="relative w-12 h-12 group"
            >
              <div className="absolute inset-0 bg-[#2D3748]/50 border border-[#805AD5]/30 transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#805AD5] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03C7.69 9.36 4.07 7.6 1.64 4.95c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65-.72-.02-1.4-.22-2-.55v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3a9.02 9.02 0 0 1-5.6 1.93c-.36 0-.71-.02-1.06-.06A12.77 12.77 0 0 0 7.29 21c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.39-.01-.58.88-.64 1.65-1.44 2.25-2.35z"/>
                </svg>
              </div>
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="relative w-12 h-12 group"
            >
              <div className="absolute inset-0 bg-[#2D3748]/50 border border-[#319795]/30 transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#319795] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"/>
                </svg>
              </div>
            </a>
          </div>

          {/* Performance Metrics */}
          <div className="flex items-center gap-8">
            {[
              { label: 'COMPANIES', value: '200+', color: '#805AD5' },
              { label: 'SPEED', value: '3min', color: '#319795' },
              { label: 'EFFICIENCY', value: '84x', color: '#805AD5' }
            ].map((stat, index) => (
              <div key={index} className="relative">
                <div className="bg-[#2D3748]/30 border border-[#805AD5]/20 px-6 py-3">
                  <div className="text-2xl font-black font-mono" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-gray-500 tracking-widest">
                    {stat.label}
                  </div>
                </div>
                {/* Tech corner decoration */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#805AD5]"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#805AD5]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright with Tech Style */}
        <div className="border-t border-[#805AD5]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-mono text-gray-500">
              &copy; 2024 ARCHAIVE, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
              <span>BUILD: v2.0.4</span>
              <span className="text-[#805AD5]">|</span>
              <span>STATUS: <span className="text-[#319795]">OPERATIONAL</span></span>
              <span className="text-[#805AD5]">|</span>
              <span>SECURE: <span className="text-[#319795]">256-BIT</span></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200vh); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-scan-vertical {
          animation: scan-vertical 5s linear infinite;
        }
      `}</style>
    </footer>
  );
} 