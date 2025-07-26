'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, Zap, Cpu, Globe } from 'lucide-react';

export default function HeroSection10() {
  const [glitchText, setGlitchText] = useState('ARCHAIVE');
  const [matrixRain, setMatrixRain] = useState<{ id: number; x: number; delay: number }[]>([]);
  
  useEffect(() => {
    // Glitch effect
    const glitchInterval = setInterval(() => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const originalText = 'ARCHAIVE';
      let glitched = '';
      
      for (let i = 0; i < originalText.length; i++) {
        // Use deterministic condition based on current time and index
        const shouldGlitch = ((Date.now() + i) % 100) > 95;
        if (shouldGlitch) {
          // Use deterministic character selection based on index
          const charIndex = (Date.now() + i) % glitchChars.length;
          glitched += glitchChars[charIndex];
        } else {
          glitched += originalText[i];
        }
      }
      
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText(originalText), 100);
    }, 3000);

    // Matrix rain effect with deterministic values
    const rain = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: ((i * 17) % 100), // Deterministic x position using prime number multiplication
      delay: ((i * 7) % 5) // Deterministic delay using modulo
    }));
    setMatrixRain(rain);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#34495E]">
      {/* Retro Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(93,173,226,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(93,173,226,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg) scale(2)',
            transformOrigin: 'center bottom'
          }}
        />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5DADE2] to-transparent opacity-20"
              style={{
                top: `${20 * (i + 1)}%`,
                animation: `pulse ${3 + i}s ease-in-out infinite`
              }}
            />
          ))}
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {matrixRain.map((drop) => (
            <div
              key={drop.id}
              className="absolute top-0 text-[#5DADE2] text-xs font-mono opacity-20"
              style={{
                left: `${drop.x}%`,
                animation: `fall 10s linear infinite`,
                animationDelay: `${drop.delay}s`
              }}
            >
              {Array.from({ length: 20 }, (_, idx) => ((drop.id + idx) % 2 === 0 ? '1' : '0')).join('')}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/90 via-[#34495E]/80 to-[#2C3E50]/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        {/* Retro Terminal Window */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-[#2C3E50]/80 backdrop-blur-sm rounded-lg border border-[#5DADE2]/30 shadow-[0_0_50px_rgba(93,173,226,0.3)]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#5DADE2]/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#B76E79] rounded-full shadow-[0_0_10px_rgba(183,110,121,0.8)]"></div>
                <div className="w-3 h-3 bg-[#5DADE2] rounded-full shadow-[0_0_10px_rgba(93,173,226,0.8)]"></div>
                <div className="w-3 h-3 bg-[#B76E79] rounded-full shadow-[0_0_10px_rgba(183,110,121,0.8)]"></div>
              </div>
              <div className="font-mono text-xs text-[#5DADE2]">SYSTEM.INIT</div>
            </div>

            {/* Terminal Content */}
            <div className="p-8">
              <div className="font-mono text-[#5DADE2] text-sm mb-4">
                <div className="mb-2">{'> INITIALIZING ARCHAIVE SYSTEM...'}</div>
                <div className="mb-2">{'> LOADING BUSINESS TRANSFORMATION MODULE...'}</div>
                <div className="mb-4">{'> READY.'}</div>
              </div>

              {/* Glitch Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="relative z-10 text-gray-300">{glitchText}</span>
                <span className="absolute inset-0 text-[#B76E79] blur-sm animate-pulse" style={{ transform: 'translateX(2px)' }}>
                  {glitchText}
                </span>
                <span className="absolute inset-0 text-[#5DADE2] blur-sm animate-pulse" style={{ transform: 'translateX(-2px)' }}>
                  {glitchText}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
                ビジネスの未来を
                <span className="text-[#5DADE2] font-bold mx-2">再定義</span>
                する
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                {/* Primary CTA */}
                <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#5DADE2] to-[#B76E79] rounded-lg transform transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2 text-white font-bold">
                    システムを起動
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Scan line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                </button>

                {/* Secondary CTA */}
                <button className="group relative px-8 py-4 border-2 border-[#5DADE2] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(93,173,226,0.5)]">
                  <div className="absolute inset-0 bg-[#5DADE2] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative z-10 text-gray-300 font-bold group-hover:text-white transition-colors duration-300">
                    デモを見る
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { icon: Zap, label: '高速処理', value: '10x' },
            { icon: Cpu, label: 'AI搭載', value: '99%' },
            { icon: Globe, label: 'グローバル', value: '24/7' }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5DADE2] to-[#B76E79] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-[#2C3E50]/50 backdrop-blur-sm border border-[#5DADE2]/30 rounded-lg p-4 hover:border-[#5DADE2]/60 transition-all duration-300">
                <item.icon className="w-8 h-8 text-[#5DADE2] mx-auto mb-2" />
                <div className="font-mono text-[#B76E79] text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-gray-300 text-sm">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Scan Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5DADE2] to-transparent opacity-50 animate-pulse" />

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}