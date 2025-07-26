"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Fun floating elements with colorful designs
const floatingElements = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: (i * 11.37) % 100,
  top: (i * 17.91) % 100,
  delay: (i * 0.2) % 8,
  duration: 12 + (i % 8),
  size: 12 + (i % 20),
  shape: i % 5
}));

// Vibrant background patterns with modern geometric shapes
const colorfulBackgrounds = [
  {
    name: '🌈 レインボー',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-colored geometric shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[#FF6B6B]/30 to-[#FFE66D]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-bl from-[#4ECDC4]/25 to-[#95E1D3]/15 rounded-2xl rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-16 left-20 w-48 h-48 bg-gradient-to-tr from-[#95E1D3]/20 to-[#FFE66D]/25 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-tl from-[#FFE66D]/30 to-[#FF6B6B]/20 rounded-3xl -rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border-4 border-[#4ECDC4]/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-3 border-[#FF6B6B]/30 rounded-2xl rotate-45"></div>
      </div>
    )
  },
  {
    name: '✨ スターバースト',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* Star burst pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 via-[#FFE66D]/10 to-[#4ECDC4]/5"></div>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${(i * 23.7) % 100}%`,
              top: `${(i * 31.3) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 4)}s`
            }}
          >
            {i % 4 === 0 && <div className="w-8 h-8 bg-[#FF6B6B]/40 clip-path-star rotate-12"></div>}
            {i % 4 === 1 && <div className="w-6 h-6 bg-[#4ECDC4]/50 rounded-full"></div>}
            {i % 4 === 2 && <div className="w-10 h-2 bg-[#FFE66D]/60 rounded-full rotate-45"></div>}
            {i % 4 === 3 && <div className="w-4 h-4 bg-[#95E1D3]/40 rounded rotate-45"></div>}
          </div>
        ))}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-[#FF6B6B]/10 via-transparent to-transparent rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#4ECDC4]/10 via-transparent to-transparent rounded-full"></div>
      </div>
    )
  },
  {
    name: '🎨 アートワーク',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract artistic patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <radialGradient id="artGradient1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#FFE66D" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="artGradient2" cx="30%" cy="70%">
              <stop offset="0%" stopColor="#95E1D3" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <path d="M200,300 Q400,100 600,300 T900,300 Q700,500 500,300 T100,300 Z" fill="url(#artGradient1)" />
          <circle cx="200" cy="200" r="150" fill="url(#artGradient2)" />
          <path d="M700,600 Q800,400 900,600 T1000,600" stroke="#FF6B6B" strokeWidth="4" fill="none" opacity="0.3" />
          <polygon points="100,700 200,600 150,800" fill="#FFE66D" opacity="0.4" />
        </svg>
        <div className="absolute top-16 right-32 w-28 h-28 bg-gradient-to-r from-[#FF6B6B]/20 to-[#FFE66D]/30 rounded-full transform rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-24 left-16 w-44 h-12 bg-gradient-to-r from-[#4ECDC4]/25 to-[#95E1D3]/20 rounded-full transform -rotate-12"></div>
      </div>
    )
  }
];

export default function HeroSection7() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const heroTexts = [
    { main: "見積もり作成", sub: "3分へ。", emoji: "⚡" },
    { main: "業務効率", sub: "84倍アップ！", emoji: "🚀" },
    { main: "AI見積もり", sub: "革命開始。", emoji: "🤖" }
  ];

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
    
    // Auto-rotate text every 3 seconds
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    // Auto-rotate background every 10 seconds
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % colorfulBackgrounds.length);
    }, 10000);

    return () => {
      clearInterval(textInterval);
      clearInterval(bgInterval);
    };
  }, []);

  // Fun background changer
  const changeBg = () => {
    setCurrentBg((prev) => (prev + 1) % colorfulBackgrounds.length);
  };

  if (!mounted) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-[#FF6B6B]/10 via-[#FFE66D]/10 to-[#4ECDC4]/10 overflow-hidden">
        {colorfulBackgrounds[0].component()}
        <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center max-w-5xl">
            <div className="mb-12">
              <div className="relative inline-block">
                <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] mb-6 tracking-tight animate-pulse">
                  ARCHAIVE
                </h1>
                <div className="absolute -top-4 -right-6 text-4xl animate-bounce">🎯</div>
              </div>
              <div className="w-32 h-2 bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] mx-auto rounded-full"></div>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-gray-800 mb-8 leading-tight">
              {heroTexts[0].main}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] animate-pulse">
                {heroTexts[0].sub}
              </span>
            </h2>

            <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-bold">
              🤖 AIが、あなたの会社の利益を最大化する。
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
              業界初の「チャット式見積AIエージェント」搭載！✨<br />
              図面をアップするだけで、面倒な見積もり業務から解放されます 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/lp7/apply" 
                className="group relative overflow-hidden bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-12 py-5 font-black text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-2xl group-hover:animate-spin">🎉</span>
                  無料でその実力をデモ体験
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFE66D] to-[#95E1D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/lp7/reviews" 
                className="group bg-white text-gray-800 border-4 border-[#4ECDC4] px-12 py-5 font-black text-xl rounded-2xl hover:bg-gradient-to-r hover:from-[#FF6B6B]/10 hover:to-[#4ECDC4]/10 hover:border-[#FF6B6B] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl group-hover:animate-bounce">👥</span>
                  お客様の声を見る
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FF6B6B]/10 via-[#FFE66D]/10 to-[#4ECDC4]/10 overflow-hidden">
      {/* Dynamic colorful background */}
      {colorfulBackgrounds[currentBg].component()}

      {/* Floating colorful elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float opacity-60"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
              width: `${element.size}px`,
              height: `${element.size}px`
            }}
          >
            {element.shape === 0 && <div className="w-full h-full bg-gradient-to-br from-[#FF6B6B]/40 to-[#FFE66D]/60 rounded-full"></div>}
            {element.shape === 1 && <div className="w-full h-full bg-gradient-to-br from-[#4ECDC4]/50 to-[#95E1D3]/40 rounded-2xl rotate-45"></div>}
            {element.shape === 2 && <div className="w-full h-full border-2 border-[#FFE66D]/60 rounded-full"></div>}
            {element.shape === 3 && <div className="w-full h-full bg-gradient-to-r from-[#95E1D3]/30 to-[#4ECDC4]/50 rounded"></div>}
            {element.shape === 4 && <div className="w-full h-full border-2 border-[#FF6B6B]/40 rounded-2xl rotate-12"></div>}
          </div>
        ))}
      </div>

      {/* Colorful background changer */}
      <div className="absolute top-6 right-6 z-40">
        <button
          onClick={changeBg}
          className="group bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] hover:from-[#FFE66D] hover:to-[#95E1D3] text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <span className="flex items-center gap-2 font-bold">
            <span className="text-xl group-hover:animate-spin">🎨</span>
            {colorfulBackgrounds[currentBg].name}
          </span>
        </button>
      </div>

      <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
        <div className={`text-center max-w-5xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Colorful animated logo */}
          <div className="mb-12">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] mb-6 tracking-tight">
                ARCHAIVE
              </h1>
              <div className="absolute -top-4 -right-6 text-4xl animate-bounce">{heroTexts[textIndex].emoji}</div>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Dynamic main copy */}
          <h2 className="text-4xl md:text-7xl font-black text-gray-800 mb-8 leading-tight">
            <span className="transition-all duration-500">{heroTexts[textIndex].main}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] transition-all duration-500">
              {heroTexts[textIndex].sub}
            </span>
          </h2>

          {/* Colorful sub copy */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-bold">
            🤖 AIが、あなたの会社の利益を最大化する。
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
            業界初の「チャット式見積AIエージェント」搭載！✨<br />
            図面をアップするだけで、面倒な見積もり業務から解放されます 🚀
          </p>

          {/* Colorful CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link 
              href="/lp7/apply" 
              className="group relative overflow-hidden bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-12 py-5 font-black text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl group-hover:animate-spin">🎉</span>
                無料でその実力をデモ体験
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFE66D] to-[#95E1D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/lp7/reviews" 
              className="group bg-white text-gray-800 border-4 border-[#4ECDC4] px-12 py-5 font-black text-xl rounded-2xl hover:bg-gradient-to-r hover:from-[#FF6B6B]/10 hover:to-[#4ECDC4]/10 hover:border-[#FF6B6B] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl group-hover:animate-bounce">👥</span>
                お客様の声を見る
              </span>
            </Link>
          </div>
        </div>

        {/* Colorful dashboard preview */}
        <div className={`w-full max-w-5xl transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-br from-white to-[#F8F9FA] border-4 border-[#4ECDC4] rounded-3xl shadow-2xl p-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFE66D]/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#95E1D3]/20 to-transparent rounded-tr-3xl"></div>
            
            <div className="text-center mb-8 relative">
              <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-4 flex items-center justify-center gap-2">
                <span className="text-3xl">📊</span>
                見積もりダッシュボード
                <span className="text-3xl">✨</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: '進行中の案件', value: '24件', emoji: '🔥', color: 'from-[#FF6B6B] to-[#FFE66D]', progress: 70 },
                { title: '完了済み見積もり', value: '156件', emoji: '✅', color: 'from-[#4ECDC4] to-[#95E1D3]', progress: 85 },
                { title: '月間効率化', value: '84倍', emoji: '⚡', color: 'from-[#95E1D3] to-[#FFE66D]', progress: 95 }
              ].map((item, i) => (
                <div key={i} className="group text-center">
                  <div className={`w-full h-32 bg-gradient-to-br ${item.color} rounded-2xl mb-4 flex flex-col items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}>
                    <div className="text-4xl mb-2 group-hover:animate-bounce">{item.emoji}</div>
                    <div className="w-3/4 h-2 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-700 mb-2">{item.title}</h4>
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(10px, -15px) rotate(90deg) scale(1.1); }
          50% { transform: translate(-5px, -25px) rotate(180deg) scale(0.9); }
          75% { transform: translate(-15px, -10px) rotate(270deg) scale(1.05); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}