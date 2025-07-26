'use client';

import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, User, Sparkles } from 'lucide-react';

export default function TestimonialSection10() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [glitchEffect, setGlitchEffect] = useState(false);

  const testimonials = [
    {
      id: '001',
      name: '田中 太郎',
      company: 'テクノロジー株式会社',
      role: 'CEO',
      content: 'ARCHAIVEの導入により、業務効率が飛躍的に向上しました。特にAI自動化機能は革新的で、従来の10倍の速度でデータ処理が可能になりました。',
      rating: 5,
      stats: { efficiency: '+95%', cost: '-60%', time: '10x' }
    },
    {
      id: '002',
      name: '佐藤 花子',
      company: 'イノベーション・ラボ',
      role: 'CTO',
      content: 'セキュリティ面での安心感が素晴らしいです。軍事レベルの暗号化により、機密データも安全に管理できています。サポート体制も24時間対応で心強いです。',
      rating: 5,
      stats: { security: '100%', uptime: '99.9%', support: '24/7' }
    },
    {
      id: '003',
      name: '鈴木 健一',
      company: 'グローバル商事',
      role: 'COO',
      content: 'グローバル展開において、多言語・多通貨対応が非常に助かっています。世界中の拠点でシームレスに利用でき、ビジネスの可能性が大きく広がりました。',
      rating: 5,
      stats: { languages: '50+', currencies: '150+', regions: '190+' }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 300);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 300);
  };

  return (
    <section id="実績" className="relative py-20 md:py-32 bg-[#34495E] overflow-hidden">
      {/* Retro Background */}
      <div className="absolute inset-0">
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            // Generate deterministic values based on index
            const left = ((i * 41) % 100);
            const top = ((i * 31) % 100);
            const opacity = 0.2 + ((i * 19) % 80) / 100;
            const duration = 3 + ((i * 23) % 40) / 10;
            const delay = ((i * 17) % 30) / 10;
            
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  opacity: opacity,
                  animation: `twinkle ${duration}s infinite`,
                  animationDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>

        {/* Retro Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(93,173,226,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(183,110,121,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-[#B76E79] font-mono text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>CLIENT.TESTIMONIALS</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B76E79] to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4 relative">
            <span className={`relative z-10 ${glitchEffect ? 'animate-glitch' : ''}`}>
              お客様の声
            </span>
            <span className="absolute inset-0 text-[#5DADE2] blur-md opacity-50">
              お客様の声
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            導入企業様からの評価とフィードバック
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="relative bg-[#2C3E50]/80 backdrop-blur-sm border border-[#5DADE2]/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(93,173,226,0.3)]">
              {/* Terminal Header */}
              <div className="bg-[#2C3E50] px-4 py-3 border-b border-[#5DADE2]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#B76E79] rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-[#5DADE2] rounded-full animate-pulse delay-75"></div>
                  <div className="w-3 h-3 bg-[#B76E79] rounded-full animate-pulse delay-150"></div>
                </div>
                <div className="font-mono text-xs text-[#5DADE2]">
                  TESTIMONIAL_{testimonials[activeIndex].id}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Quote Icon */}
                <div className="relative mb-6">
                  <Quote className="w-12 h-12 text-[#5DADE2] opacity-30" />
                  <div className="absolute inset-0 bg-[#5DADE2] blur-xl opacity-20"></div>
                </div>

                {/* Testimonial Text */}
                <div className={`transition-all duration-300 ${glitchEffect ? 'opacity-0' : 'opacity-100'}`}>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                    {testimonials[activeIndex].content}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(testimonials[activeIndex].stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-[#34495E]/50 rounded-lg p-4 text-center border border-[#5DADE2]/20"
                      >
                        <div className="font-mono text-2xl font-bold text-[#B76E79] mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 uppercase">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-[#34495E] rounded-full border-2 border-[#5DADE2] flex items-center justify-center">
                          <User className="w-8 h-8 text-[#5DADE2]" />
                        </div>
                        <div className="absolute inset-0 bg-[#5DADE2] rounded-full blur-xl opacity-30"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-300">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonials[activeIndex].role} @ {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#B76E79] text-[#B76E79]"
                          style={{
                            animation: `pulse ${1.5 + i * 0.1}s ease-in-out infinite`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <button
                onClick={handlePrevious}
                className="pointer-events-auto -translate-x-full md:translate-x-0 p-3 bg-[#2C3E50]/80 border border-[#5DADE2]/30 rounded-lg hover:border-[#5DADE2]/60 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-[#5DADE2]" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto translate-x-full md:translate-x-0 p-3 bg-[#2C3E50]/80 border border-[#5DADE2]/30 rounded-lg hover:border-[#5DADE2]/60 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#5DADE2]" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                    setGlitchEffect(true);
                    setTimeout(() => setGlitchEffect(false), 300);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-[#5DADE2] to-[#B76E79]'
                      : 'w-2 bg-[#34495E] border border-[#5DADE2]/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#5DADE2] rounded-full blur-3xl opacity-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#B76E79] rounded-full blur-3xl opacity-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        .animate-glitch {
          animation: glitch 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}