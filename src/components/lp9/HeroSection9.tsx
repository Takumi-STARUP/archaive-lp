"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Matrix rain effect characters
const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

export default function HeroSection9() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [glitchText, setGlitchText] = useState('ARCHAIVE');
  const [typewriterText, setTypewriterText] = useState('');
  const [matrixDrops, setMatrixDrops] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);

    // Initialize matrix rain
    const columns = Math.floor(window.innerWidth / 20);
    setMatrixDrops(new Array(columns).fill(1));

    // Typewriter effect
    const fullText = '次世代AI見積もりシステム';
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    // Glitch effect
    const glitchInterval = setInterval(() => {
      const glitchChance = Math.random();
      if (glitchChance < 0.1) {
        const chars = 'ARCHAIVE'.split('');
        const glitchedChars = chars.map(char => 
          Math.random() < 0.3 ? matrixChars[Math.floor(Math.random() * matrixChars.length)] : char
        );
        setGlitchText(glitchedChars.join(''));
        setTimeout(() => setGlitchText('ARCHAIVE'), 100);
      }
    }, 2000);

    return () => {
      clearInterval(typeInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  // Update matrix rain
  useEffect(() => {
    const interval = setInterval(() => {
      setMatrixDrops(prev => prev.map((drop, index) => {
        if (drop > window.innerHeight / 20 && Math.random() > 0.975) {
          return 0;
        }
        return drop + 1;
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen bg-[#1A202C] overflow-hidden">
        <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-black text-gray-300 mb-4 tracking-widest font-mono">
              ARCHAIVE
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-[#1A202C] overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {matrixDrops.map((drop, index) => (
          <div
            key={index}
            className="absolute text-[#319795] font-mono text-sm"
            style={{
              left: `${index * 20}px`,
              top: `${drop * 20}px`,
              textShadow: '0 0 8px #319795',
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </div>
        ))}
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(128, 90, 213, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(128, 90, 213, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(49, 151, 149, 0.05) 2px, transparent 2px),
            linear-gradient(90deg, rgba(49, 151, 149, 0.05) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0'
        }}></div>
      </div>

      {/* Hexagonal Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-10 left-10 w-64 h-64 opacity-10" viewBox="0 0 200 200">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(0)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="#805AD5" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
        </svg>
      </div>

      {/* Animated Tech Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#805AD5] to-transparent animate-scan"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#319795] to-transparent animate-scan-delay-1"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#805AD5] to-transparent animate-scan-delay-2"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#319795] to-transparent animate-scan-delay-3"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border border-[#805AD5]/20 rotate-45 animate-float-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-[#319795]/20 animate-float-reverse"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40">
          <div className="w-full h-full border border-[#805AD5]/10 rotate-12 animate-pulse-slow"></div>
          <div className="absolute inset-0 border border-[#319795]/10 -rotate-12 animate-pulse-slow-reverse"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
        <div className={`text-center max-w-5xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Glitch Logo */}
          <div className="mb-12 relative">
            <h1 className="text-6xl md:text-8xl font-black text-gray-300 mb-4 tracking-widest font-mono relative">
              <span className="relative z-10 glitch" data-text={glitchText}>
                {glitchText}
              </span>
              {/* Glitch layers */}
              <span className="absolute inset-0 text-[#805AD5] opacity-70 glitch-1" aria-hidden="true">
                {glitchText}
              </span>
              <span className="absolute inset-0 text-[#319795] opacity-70 glitch-2" aria-hidden="true">
                {glitchText}
              </span>
            </h1>
            {/* Typewriter subtitle */}
            <div className="text-[#319795] font-mono text-xl tracking-wider">
              <span className="border-r-2 border-[#319795] pr-1 animate-blink">
                {typewriterText}
              </span>
            </div>
          </div>

          {/* Main Copy with Tech Frame */}
          <div className="relative mb-12 p-8 group">
            {/* Tech frame corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#805AD5]/50 group-hover:border-[#805AD5] transition-all duration-300"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#805AD5]/50 group-hover:border-[#805AD5] transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#805AD5]/50 group-hover:border-[#805AD5] transition-all duration-300"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#805AD5]/50 group-hover:border-[#805AD5] transition-all duration-300"></div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6 leading-tight font-mono">
              見積もり作成
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#805AD5] to-[#319795]">
                3分へ。
              </span>
            </h2>
          </div>

          {/* Sub Copy with Tech Style */}
          <div className="mb-12 relative">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-mono tracking-wide">
              <span className="text-[#319795]">&lt;</span>
              AIが、あなたの会社の利益を最大化する
              <span className="text-[#319795]">/&gt;</span>
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto font-mono opacity-80">
              業界初の「チャット式見積AIエージェント」搭載。
              <br />
              図面をアップするだけで、面倒な見積もり業務から解放されます。
            </p>
          </div>

          {/* CTA Buttons with Futuristic Style */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              href="/lp9/apply" 
              className="relative group overflow-hidden"
            >
              <div className="relative px-10 py-5 bg-gradient-to-r from-[#805AD5] to-[#319795] text-white font-mono font-bold text-lg tracking-wider">
                <span className="relative z-10 flex items-center gap-3">
                  <span className="animate-pulse">▶</span>
                  無料でその実力をデモ体験
                </span>
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#805AD5] to-[#319795] opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300"></div>
            </Link>
            
            <Link 
              href="/lp9/reviews" 
              className="relative group"
            >
              <div className="relative px-10 py-5 border-2 border-[#319795] text-gray-300 font-mono font-bold text-lg tracking-wider overflow-hidden">
                <span className="relative z-10">お客様の声を見る</span>
                {/* Background fill on hover */}
                <div className="absolute inset-0 bg-[#319795] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  お客様の声を見る
                </span>
              </div>
              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#319795]"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#319795]"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#319795]"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#319795]"></div>
            </Link>
          </div>
        </div>

        {/* Futuristic Dashboard Preview */}
        <div className={`w-full max-w-5xl transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-[#2D3748]/50 backdrop-blur-lg border border-[#805AD5]/30 p-8 overflow-hidden">
            {/* Glass morphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#805AD5]/10 to-[#319795]/10"></div>
            
            {/* Tech corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#805AD5]"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#805AD5]"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#805AD5]"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#805AD5]"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-300 mb-2 font-mono tracking-wider">
                  <span className="text-[#319795]">[</span> 
                  見積もりダッシュボード 
                  <span className="text-[#319795]">]</span>
                </h3>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#805AD5] to-transparent mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: '進行中の案件', value: '24', unit: '件', color: '#805AD5' },
                  { title: '完了済み見積もり', value: '156', unit: '件', color: '#319795' },
                  { title: '月間効率化', value: '85', unit: '%', color: '#805AD5' }
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="bg-[#1A202C]/80 border border-[#805AD5]/20 p-6 hover:border-[#805AD5]/50 transition-all duration-300">
                      {/* Hexagon decoration */}
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#1A202C] border border-[#805AD5]/50 transform rotate-45"></div>
                      
                      <h4 className="text-sm font-mono text-gray-400 mb-2">{item.title}</h4>
                      <div className="flex items-baseline gap-1">
                        <p className="text-4xl font-black font-mono" style={{ color: item.color }}>
                          {item.value}
                        </p>
                        <span className="text-sm text-gray-400 font-mono">{item.unit}</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="mt-4 h-1 bg-[#1A202C] overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000 glow"
                          style={{
                            width: `${parseInt(item.value)}%`,
                            background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}aa 100%)`,
                            boxShadow: `0 0 10px ${item.color}`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-scan-delay-1 {
          animation: scan 3s linear infinite 0.5s;
        }
        .animate-scan-delay-2 {
          animation: scan 3s linear infinite 1s;
        }
        .animate-scan-delay-3 {
          animation: scan 3s linear infinite 1.5s;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          50% { transform: translate(20px, -20px) rotate(45deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1) rotate(12deg); }
          50% { opacity: 0.3; transform: scale(1.1) rotate(12deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        @keyframes pulse-slow-reverse {
          0%, 100% { opacity: 0.1; transform: scale(1) rotate(-12deg); }
          50% { opacity: 0.3; transform: scale(1.1) rotate(-12deg); }
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 4s ease-in-out infinite 0.5s;
        }
        
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .glitch {
          position: relative;
        }
        
        .glitch-1 {
          animation: glitch-1 0.3s infinite;
          animation-timing-function: steps(2, end);
        }
        
        .glitch-2 {
          animation: glitch-2 0.3s infinite;
          animation-timing-function: steps(2, end);
        }
        
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(40% 0 60% 0); transform: translate(0); }
          20% { clip-path: inset(20% 0 30% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(80% 0 10% 0); transform: translate(2px, -2px); }
          60% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 0); }
          80% { clip-path: inset(50% 0 50% 0); transform: translate(2px, 0); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(60% 0 40% 0); transform: translate(0); }
          20% { clip-path: inset(30% 0 20% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 10% 0); transform: translate(2px, 0); }
          80% { clip-path: inset(50% 0 50% 0); transform: translate(-2px, 0); }
        }
      `}</style>
    </section>
  );
}