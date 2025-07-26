'use client';

import { useState, useEffect } from 'react';
import { 
  Terminal, Code, Rocket, CheckCircle, 
  ArrowRight, Loader, Zap, Database
} from 'lucide-react';

const steps = [
    {
      id: '01',
      title: '要件分析',
      description: 'ビジネスニーズの詳細な分析と戦略立案',
      icon: Terminal,
      color: '#5DADE2',
      commands: [
        '> ANALYZING BUSINESS REQUIREMENTS...',
        '> SCANNING CURRENT INFRASTRUCTURE...',
        '> IDENTIFYING OPTIMIZATION OPPORTUNITIES...',
        '> ANALYSIS COMPLETE ✓'
      ],
      details: 'AIを活用した包括的な要件分析により、最適なソリューションを設計'
    },
    {
      id: '02',
      title: 'システム設計',
      description: '最適なアーキテクチャの設計と技術選定',
      icon: Code,
      color: '#B76E79',
      commands: [
        '> INITIALIZING SYSTEM ARCHITECTURE...',
        '> CONFIGURING MICROSERVICES...',
        '> SETTING UP SECURITY PROTOCOLS...',
        '> DESIGN PHASE COMPLETE ✓'
      ],
      details: 'スケーラブルで堅牢なシステムアーキテクチャを構築'
    },
    {
      id: '03',
      title: '実装・開発',
      description: '最新技術を活用した高品質な開発',
      icon: Database,
      color: '#5DADE2',
      commands: [
        '> DEPLOYING CORE MODULES...',
        '> IMPLEMENTING AI ALGORITHMS...',
        '> INTEGRATING THIRD-PARTY APIS...',
        '> DEVELOPMENT COMPLETE ✓'
      ],
      details: 'アジャイル開発手法により迅速かつ確実に実装'
    },
    {
      id: '04',
      title: '導入・最適化',
      description: 'シームレスな導入と継続的な最適化',
      icon: Rocket,
      color: '#B76E79',
      commands: [
        '> LAUNCHING PRODUCTION ENVIRONMENT...',
        '> MIGRATING DATA SECURELY...',
        '> OPTIMIZING PERFORMANCE METRICS...',
        '> SYSTEM ONLINE ✓'
      ],
      details: '無停止での移行と継続的なパフォーマンス向上'
    }
  ];

export default function ProcessSection10() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((step) => (step + 1) % 4); // stepsは4つの要素を持つ
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    if (progress === 0) {
      setTerminalLines([]);
    }

    const commandIndex = Math.floor((progress / 100) * steps[activeStep].commands.length);
    if (commandIndex < steps[activeStep].commands.length) {
      setTerminalLines((prev) => {
        const currentCommand = steps[activeStep].commands[commandIndex];
        if (!prev.includes(currentCommand)) {
          return [...prev, currentCommand];
        }
        return prev;
      });
    }
  }, [mounted, progress, activeStep]);

  return (
    <section id="プロセス" className="relative py-20 md:py-32 bg-[#2C3E50] overflow-hidden">
      {/* Retro Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(93,173,226,0.1) 1px, transparent 1px),
              linear-gradient(rgba(93,173,226,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Animated Lines */}
        {mounted && (
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B76E79] to-transparent opacity-30"
                style={{
                  top: `${30 + i * 20}%`,
                  animation: `slide ${10 + i * 2}s linear infinite`
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-[#B76E79] font-mono text-sm mb-2">
              <Loader className="w-4 h-4 animate-spin" />
              <span>PROCESS.WORKFLOW</span>
              <Zap className="w-4 h-4" />
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B76E79] to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4">
            実装プロセス
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            4つのフェーズで確実に成果を実現
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Progress Bar */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-[#34495E]/50 rounded-full overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DADE2] via-[#B76E79] to-[#5DADE2] animate-pulse" />
              </div>
            </div>
            <div className="relative h-2 bg-[#34495E] rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#5DADE2] to-[#B76E79] transition-all duration-300"
                style={{ width: `${(activeStep * 25) + (progress / 4)}%` }}
              />
              {/* Glow effect */}
              <div
                className="absolute top-0 h-full w-8 bg-white opacity-30 blur-xl"
                style={{ left: `${(activeStep * 25) + (progress / 4) - 2}%` }}
              />
            </div>

            {/* Step Indicators */}
            <div className="absolute inset-0 flex justify-between">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{ left: `${index * 25}%` }}
                >
                  <div
                    className={`absolute -top-3 w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                      index <= activeStep
                        ? 'bg-gradient-to-br from-[#5DADE2] to-[#B76E79] border-transparent shadow-[0_0_20px_rgba(93,173,226,0.5)]'
                        : 'bg-[#34495E] border-[#5DADE2]/30'
                    }`}
                  >
                    {index < activeStep && (
                      <CheckCircle className="w-full h-full p-1 text-white" />
                    )}
                    {index === activeStep && (
                      <div className="w-full h-full rounded-full bg-white opacity-30 animate-ping" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer transition-all duration-300 ${
                  index === activeStep ? 'scale-105' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Glow Effect */}
                {index === activeStep && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5DADE2] to-[#B76E79] opacity-20 blur-xl" />
                )}

                {/* Card */}
                <div
                  className={`relative bg-[#34495E]/50 backdrop-blur-sm border rounded-lg p-6 h-full transition-all duration-300 ${
                    index === activeStep
                      ? 'border-[#5DADE2] shadow-[0_0_30px_rgba(93,173,226,0.3)]'
                      : 'border-[#5DADE2]/20 hover:border-[#5DADE2]/40'
                  }`}
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-2xl font-bold"
                      style={{ color: step.color }}
                    >
                      {step.id}
                    </span>
                    <step.icon
                      className="w-6 h-6"
                      style={{ color: step.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-300 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>

                  {/* Active Indicator */}
                  {index === activeStep && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5DADE2] to-[#B76E79] rounded-b-lg" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm border border-[#5DADE2]/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(93,173,226,0.2)]">
              {/* Terminal Header */}
              <div className="bg-[#34495E] px-4 py-3 border-b border-[#5DADE2]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#B76E79] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#5DADE2] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#B76E79] rounded-full"></div>
                </div>
                <div className="font-mono text-xs text-[#5DADE2]">
                  PROCESS_MONITOR.exe
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="mb-4 text-[#5DADE2]">
                  {'> EXECUTING: '}{steps[activeStep].title}
                </div>
                
                {/* Command Lines */}
                <div className="space-y-2">
                  {mounted && terminalLines.map((line, index) => (
                    <div
                      key={index}
                      className="text-gray-400"
                      style={{
                        animation: 'fadeIn 0.5s ease-out',
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      {line}
                    </div>
                  ))}
                  
                  {/* Cursor */}
                  {mounted && progress < 100 && (
                    <span className="text-[#5DADE2] animate-pulse">_</span>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 bg-[#34495E]/50 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-gradient-to-r from-[#5DADE2] to-[#B76E79] transition-all duration-300"
                    style={{ width: mounted ? `${progress}%` : '0%' }}
                  />
                </div>

                {/* Step Details */}
                <div className="mt-6 p-4 bg-[#34495E]/30 rounded-lg border border-[#5DADE2]/20">
                  <p className="text-gray-400 leading-relaxed">
                    {steps[activeStep].details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
            className="p-3 bg-[#34495E]/50 border border-[#5DADE2]/30 rounded-lg hover:border-[#5DADE2]/60 transition-all duration-300 group"
          >
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#5DADE2] rotate-180" />
          </button>
          <button
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            className="p-3 bg-[#34495E]/50 border border-[#5DADE2]/30 rounded-lg hover:border-[#5DADE2]/60 transition-all duration-300 group"
          >
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#5DADE2]" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}