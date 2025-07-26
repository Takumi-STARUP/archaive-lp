'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const traditionalPatterns = [
  {
    name: '青海波',
    component: () => (
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="seigaiha" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="30" r="20" fill="none" stroke="#8B3A3A" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="20" fill="none" stroke="#8B3A3A" strokeWidth="0.5"/>
              <circle cx="60" cy="30" r="20" fill="none" stroke="#8B3A3A" strokeWidth="0.5"/>
              <circle cx="15" cy="0" r="20" fill="none" stroke="#8B3A3A" strokeWidth="0.5"/>
              <circle cx="45" cy="0" r="20" fill="none" stroke="#8B3A3A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seigaiha)" />
        </svg>
      </div>
    )
  },
  {
    name: '麻の葉',
    component: () => (
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="asanoha" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <polygon points="20,0 30,10 30,30 20,40 10,30 10,10" fill="none" stroke="#8B3A3A" strokeWidth="0.5"/>
              <line x1="20" y1="0" x2="20" y2="40" stroke="#8B3A3A" strokeWidth="0.5"/>
              <line x1="10" y1="10" x2="30" y2="30" stroke="#8B3A3A" strokeWidth="0.5"/>
              <line x1="30" y1="10" x2="10" y2="30" stroke="#8B3A3A" strokeWidth="0.5"/>
              <polygon points="0,10 10,10 10,30 0,30" fill="none" stroke="#8B3A3A" strokeWidth="0.5"/>
              <polygon points="30,10 40,10 40,30 30,30" fill="none" stroke="#8B3A3A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#asanoha)" />
        </svg>
      </div>
    )
  },
  {
    name: '矢絣',
    component: () => (
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="yagasuri" x="0" y="0" width="30" height="40" patternUnits="userSpaceOnUse">
              <path d="M 5,0 L 10,10 L 15,0 M 5,20 L 10,30 L 15,20 M 5,40 L 10,30 L 15,40" 
                    fill="none" stroke="#8B3A3A" strokeWidth="0.8"/>
              <path d="M 20,10 L 25,20 L 30,10 M 20,30 L 25,40 L 30,30 M 20,0 L 25,10 L 30,0" 
                    fill="none" stroke="#8B3A3A" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#yagasuri)" />
        </svg>
      </div>
    )
  }
];

export default function HeroSection8() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentPattern, setCurrentPattern] = useState(0);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // 自動パターン切り替え
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % traditionalPatterns.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <section className="relative min-h-screen bg-[#FAFAF8] overflow-hidden">
      {/* 伝統的な和風背景パターン */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {mounted ? traditionalPatterns[currentPattern].component() : traditionalPatterns[0].component()}
      </div>

      {/* 和紙風テクスチャー */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 100px,
            rgba(139, 58, 58, 0.02) 100px,
            rgba(139, 58, 58, 0.02) 101px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            rgba(74, 74, 74, 0.02) 100px,
            rgba(74, 74, 74, 0.02) 101px
          )`
        }}></div>
      </div>

      {/* 和風装飾要素 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FAFAF8] to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent opacity-60"></div>

      <div className="relative container mx-auto px-8 py-32 flex items-center justify-center min-h-screen">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full max-w-7xl transform transition-all duration-1000 ${isVisible && mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* メインコンテンツ */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl font-light text-[#4A4A4A] mb-6 tracking-widest">
                ARCHAIVE
              </h1>
              <div className="w-32 h-px bg-[#8B3A3A] mb-8"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-light text-[#4A4A4A] mb-8 leading-tight">
              見積もり作成を
              <span className="block text-[#8B3A3A] font-normal">3分へ。</span>
            </h2>

            <p className="text-xl md:text-2xl text-[#727171] mb-6 font-light leading-relaxed">
              AIが、あなたの会社の利益を最大化する。
            </p>
            <p className="text-base md:text-lg text-[#727171] mb-12 leading-relaxed max-w-2xl">
              業界初の「チャット式見積AIエージェント」搭載。<br />
              図面をアップするだけで、面倒な見積もり業務から解放されます。
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/lp8/apply" 
                className="bg-[#8B3A3A] text-white px-10 py-4 rounded-sm font-light text-lg hover:bg-[#7A2E2E] transition-all duration-300 shadow-sm tracking-wider"
              >
                無料でその実力をデモ体験
              </Link>
              <Link 
                href="/lp8/reviews" 
                className="border border-[#727171] text-[#727171] px-10 py-4 rounded-sm font-light text-lg hover:border-[#8B3A3A] hover:text-[#8B3A3A] transition-all duration-300 tracking-wider"
              >
                お客様の声を見る
              </Link>
            </div>
          </div>

          {/* 縦書きテキスト装飾 */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="relative">
              <div className="writing-mode-vertical-rl text-[#8B3A3A]/60 text-sm tracking-widest font-light">
                革新的見積システム
              </div>
              <div className="absolute -left-4 top-0 w-px h-full bg-[#8B3A3A]/30"></div>
              <div className="absolute -left-8 top-1/2 w-2 h-2 bg-[#8B3A3A]/40 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 下部の和風装飾 */}
      <div className="absolute bottom-8 left-8 hidden md:block">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-[#8B3A3A]/40"></div>
          <div className="w-2 h-2 bg-[#8B3A3A]/40 rounded-full"></div>
          <div className="w-8 h-px bg-[#8B3A3A]/40"></div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-[#8B3A3A]/40"></div>
          <div className="w-2 h-2 bg-[#8B3A3A]/40 rounded-full"></div>
          <div className="w-12 h-px bg-[#8B3A3A]/40"></div>
        </div>
      </div>

      {/* パターン切り替えインジケーター */}
      {mounted && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {traditionalPatterns.map((pattern, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPattern(idx)}
              className={`group relative px-6 py-2 transition-all duration-300 ${
                currentPattern === idx
                  ? 'text-white'
                  : 'text-[#727171] hover:text-[#8B3A3A]'
              }`}
            >
              <span className="relative z-10 text-sm font-light">{pattern.name}</span>
              {currentPattern === idx && (
                <div className="absolute inset-0 bg-[#8B3A3A] rounded-sm -z-10" />
              )}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}