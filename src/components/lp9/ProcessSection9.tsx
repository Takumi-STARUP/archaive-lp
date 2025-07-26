'use client';

import { useEffect, useState } from 'react';

const steps = [
  {
    phase: 'PHASE_01',
    title: 'システム診断',
    subtitle: 'SYSTEM ANALYSIS',
    description: 'AI診断ツールで貴社の見積もりプロセスを分析。改善ポイントを可視化。',
    duration: '30秒',
    icon: '🔍',
    tech: 'AI Diagnosis',
    status: 'active'
  },
  {
    phase: 'PHASE_02', 
    title: 'デモ体験',
    subtitle: 'LIVE DEMONSTRATION',
    description: '実際のシステムでAI見積もりを体験。導入効果をリアルタイムで確認。',
    duration: '30分',
    icon: '💎',
    tech: 'Virtual Demo',
    status: 'processing'
  },
  {
    phase: 'PHASE_03',
    title: 'システム導入',
    subtitle: 'IMPLEMENTATION',
    description: 'クラウド環境に即座にデプロイ。AIが学習しながら最適化を開始。',
    duration: '5営業日',
    icon: '🚀',
    tech: 'Cloud Deploy',
    status: 'ready'
  },
];

export default function ProcessSection9() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <section id="process9" className="relative py-24 bg-[#1A202C] overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0">
        {/* Circuit paths animation */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#805AD5" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#319795" stopOpacity="1" />
              <stop offset="100%" stopColor="#805AD5" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <path d="M0,400 Q300,200 600,400 T1200,400" fill="none" stroke="url(#circuitGradient)" strokeWidth="2" />
          <path d="M0,200 Q300,400 600,200 T1200,200" fill="none" stroke="url(#circuitGradient)" strokeWidth="2" />
          <path d="M0,600 Q300,400 600,600 T1200,600" fill="none" stroke="url(#circuitGradient)" strokeWidth="2" />
        </svg>

        {/* Hex grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23805AD5' stroke-width='0.5' opacity='0.1'%3E%3Cpath d='M30 0L52 15V45L30 60L8 45V15Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Section Header with Tech Style */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-8 bg-[#805AD5]/20 blur-2xl"></div>
            <div className="relative">
              <span className="text-sm font-mono text-[#319795] tracking-widest">
                IMPLEMENTATION PROCESS
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-300 mt-2 font-mono">
                <span className="text-[#805AD5]">[</span>
                導入フロー
                <span className="text-[#805AD5]">]</span>
              </h2>
            </div>
          </div>
          <p className="text-xl text-gray-400 font-mono">
            最短<span className="text-[#805AD5] font-bold">5営業日</span>で次世代システムを実装
          </p>
        </div>

        {/* Process Timeline with Futuristic Design */}
        <div className="relative mb-20">
          {/* Progress Bar */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 hidden lg:block">
            <div className="h-1 bg-[#2D3748]/50 relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#805AD5] to-[#319795] transition-all duration-300"
                style={{ width: `${(activeStep + 1) * 33.33}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(128,90,213,0.8)]"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Step Card with Glassmorphism */}
                <div className={`relative group cursor-pointer transition-all duration-500 ${
                  activeStep === idx ? 'scale-105' : 'scale-100'
                }`}
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Card Background */}
                  <div className={`relative bg-[#2D3748]/30 backdrop-blur-md border overflow-hidden transition-all duration-500 ${
                    activeStep === idx 
                      ? 'border-[#805AD5] shadow-[0_0_50px_rgba(128,90,213,0.3)]' 
                      : 'border-[#805AD5]/20 hover:border-[#805AD5]/50'
                  }`}>
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#805AD5]/10 to-[#319795]/10 transition-opacity duration-500 ${
                      activeStep === idx ? 'opacity-100' : 'opacity-0'
                    }`}></div>

                    {/* Tech pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 10px,
                          rgba(128, 90, 213, 0.1) 10px,
                          rgba(128, 90, 213, 0.1) 20px
                        )`
                      }}></div>
                    </div>

                    {/* Phase indicator */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#805AD5] to-[#319795] transform origin-left transition-transform duration-1000"
                      style={{ 
                        transform: activeStep === idx ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    ></div>

                    <div className="relative p-8">
                      {/* Phase Label */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono text-[#319795] tracking-widest">
                          {step.phase}
                        </span>
                        <div className={`px-3 py-1 text-xs font-mono border ${
                          activeStep === idx 
                            ? 'bg-[#805AD5]/20 border-[#805AD5] text-[#805AD5]' 
                            : 'bg-[#319795]/10 border-[#319795]/30 text-gray-400'
                        }`}>
                          {step.tech}
                        </div>
                      </div>

                      {/* Icon with Holographic Effect */}
                      <div className="relative mb-6">
                        <div className={`text-5xl p-4 inline-block relative ${
                          activeStep === idx ? 'animate-pulse' : ''
                        }`}>
                          {/* Holographic layers */}
                          <span className="absolute inset-0 flex items-center justify-center text-[#805AD5]/30 transform translate-x-1 translate-y-1">
                            {step.icon}
                          </span>
                          <span className="absolute inset-0 flex items-center justify-center text-[#319795]/30 transform -translate-x-1 -translate-y-1">
                            {step.icon}
                          </span>
                          <span className="relative z-10">
                            {step.icon}
                          </span>
                        </div>
                      </div>

                      {/* Title and Subtitle */}
                      <h3 className="text-2xl font-bold text-gray-300 mb-2 font-mono">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#319795] font-mono tracking-wider mb-4">
                        {step.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Duration Display */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#805AD5] rounded-full animate-pulse"></div>
                          <span className="text-sm font-mono text-gray-400">Duration:</span>
                        </div>
                        <span className="text-lg font-bold font-mono text-[#805AD5]">
                          {step.duration}
                        </span>
                      </div>

                      {/* Progress indicator for active step */}
                      {activeStep === idx && (
                        <div className="mt-4 h-1 bg-[#1A202C]/50 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#805AD5] to-[#319795] transition-all duration-100"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>

                    {/* Step number hexagon */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1A202C] border-2 border-[#805AD5] flex items-center justify-center font-mono font-bold text-[#805AD5]"
                      style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                      }}
                    >
                      {idx + 1}
                    </div>
                  </div>
                </div>

                {/* Connection line for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 transform -translate-y-1/2 z-10">
                    <div className="relative">
                      <div className="w-full h-px bg-[#805AD5]/30"></div>
                      <div className={`absolute inset-0 h-px bg-gradient-to-r from-[#805AD5] to-[#319795] transition-all duration-1000 ${
                        activeStep > idx ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Support Section */}
        <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-[#2D3748]/30 backdrop-blur-md border border-[#805AD5]/30 p-12 overflow-hidden">
            {/* Tech decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#805AD5]/30"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#805AD5]/30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#805AD5]/30"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#805AD5]/30"></div>

            <h3 className="text-3xl font-bold text-gray-300 mb-8 text-center font-mono">
              <span className="text-[#319795]">&lt;</span>
              ADVANCED SUPPORT
              <span className="text-[#319795]">&gt;</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: '🛰️', 
                  title: '24/7 AI Support', 
                  desc: 'AIチャットボットが即座に対応',
                  metric: '応答時間 < 1秒'
                },
                { 
                  icon: '🧠', 
                  title: 'Machine Learning', 
                  desc: '使うほど精度が向上するAI',
                  metric: '学習効率 99.9%'
                },
                { 
                  icon: '⚡', 
                  title: 'Real-time Update', 
                  desc: '最新機能を自動アップデート',
                  metric: 'ダウンタイム 0%'
                }
              ].map((support, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-[#1A202C]/50 border border-[#319795]/20 p-6 text-center hover:border-[#805AD5]/50 transition-all duration-300">
                    <div className="text-4xl mb-4">{support.icon}</div>
                    <div className="font-bold text-[#805AD5] mb-2 font-mono text-lg">{support.title}</div>
                    <div className="text-gray-400 text-sm mb-4">{support.desc}</div>
                    <div className="text-[#319795] font-mono text-xs bg-[#319795]/10 px-3 py-1 inline-block">
                      {support.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}