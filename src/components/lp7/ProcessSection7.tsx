'use client';

import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'お問い合わせ・デモ予約',
    description: 'フォームから30秒で簡単予約！あっという間に完了します ✨',
    duration: '30秒',
    icon: '📝',
    emoji: '⚡',
    color: 'from-[#FF6B6B] via-[#FFE66D] to-[#FF6B6B]',
    bgGradient: 'from-[#FF6B6B]/20 to-[#FFE66D]/10'
  },
  {
    number: '02', 
    title: 'オンラインデモ・ヒアリング',
    description: '貴社の課題を伺いながら、実際の画面で機能や効果をリアルタイムでご説明！見た瞬間に納得です 🎯',
    duration: '30分',
    icon: '💻',
    emoji: '🚀',
    color: 'from-[#4ECDC4] via-[#95E1D3] to-[#4ECDC4]',
    bgGradient: 'from-[#4ECDC4]/20 to-[#95E1D3]/10'
  },
  {
    number: '03',
    title: 'ご契約・導入サポート',
    description: '専任エキスパートがデータ移行から初期設定まで完全サポート！安心してお任せください 🤝',
    duration: '5営業日',
    icon: '🚀',
    emoji: '🎉',
    color: 'from-[#95E1D3] via-[#FFE66D] to-[#95E1D3]',
    bgGradient: 'from-[#95E1D3]/20 to-[#FFE66D]/10'
  },
];

export default function ProcessSection7() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-cycle through steps every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="process7" className="py-28 bg-gradient-to-br from-[#FF6B6B]/5 via-[#FFE66D]/5 to-[#4ECDC4]/5 scroll-mt-20 overflow-hidden relative">
      {/* Fun floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-28 h-28 bg-gradient-to-br from-[#FF6B6B]/15 to-[#FFE66D]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-bl from-[#4ECDC4]/20 to-[#95E1D3]/15 rounded-2xl rotate-45 animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-24 left-24 w-36 h-36 bg-gradient-to-tr from-[#95E1D3]/15 to-[#FFE66D]/20 rounded-full animate-bounce" style={{animationDuration: '5s'}}></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-tl from-[#FFE66D]/20 to-[#FF6B6B]/15 rounded-3xl -rotate-12 animate-pulse"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-1/4 w-6 h-6 border-2 border-[#4ECDC4]/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-[#FFE66D]/40 rounded rotate-45"></div>
        <div className="absolute top-1/2 left-16 w-3 h-3 bg-[#FF6B6B]/40 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Enhanced section header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] px-10 py-4 mb-8 rounded-2xl shadow-lg">
            <span className="text-white font-black text-xl tracking-wider flex items-center gap-3">
              <span className="text-2xl animate-bounce">🎯</span>
              PROCESS
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.3s' }}>🚀</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-gray-800 mb-6 leading-tight">
            <span className="block">導入までの</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]">
              超簡単な流れ！
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-bold">
            最短で<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] font-black text-3xl">5営業日</span>から支援開始！⚡
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Enhanced process steps */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Colorful connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] transform -translate-y-1/2 rounded-full opacity-30"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`relative group cursor-pointer transform transition-all duration-500 ${
                  currentStep === idx ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => setCurrentStep(idx)}
              >
                {/* Enhanced step card */}
                <div className={`relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-4 rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  currentStep === idx 
                    ? 'border-[#FF6B6B] bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10 shadow-2xl' 
                    : 'border-[#4ECDC4]/30 hover:border-[#FF6B6B]'
                }`}>
                  
                  {/* Background decoration */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Floating emoji decoration */}
                  <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:animate-bounce">
                    {step.emoji}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Enhanced step number */}
                    <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                        {idx + 1}
                      </div>
                    </div>
                    
                    {/* Enhanced icon */}
                    <div className="text-6xl mb-8 mt-6 group-hover:animate-bounce transition-all duration-300">{step.icon}</div>
                    
                    {/* Colorful duration badge */}
                    <div className={`inline-block bg-gradient-to-r ${step.color} text-white px-6 py-2 text-sm font-black mb-6 rounded-2xl shadow-md group-hover:scale-110 transition-all duration-300`}>
                      {step.duration}
                    </div>
                    
                    {/* Enhanced title */}
                    <h3 className="text-2xl font-black text-gray-800 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B6B] group-hover:to-[#4ECDC4] transition-all duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Enhanced description */}
                    <p className="text-gray-700 leading-relaxed font-medium text-lg group-hover:text-gray-800 transition-colors duration-300">
                      {step.description}
                    </p>
                    
                    {/* Animated progress bar */}
                    <div className="mt-8">
                      <div className={`w-16 h-1 bg-gradient-to-r ${step.color} mx-auto rounded-full group-hover:w-full transition-all duration-700`}></div>
                    </div>
                  </div>

                  {/* Sparkle effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-8 left-8 w-2 h-2 bg-[#FFE66D] rounded-full animate-ping"></div>
                    <div className="absolute top-16 right-16 w-1 h-1 bg-[#4ECDC4] rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-[#FF6B6B] rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                    <div className="absolute bottom-8 right-8 w-1 h-1 bg-[#95E1D3] rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
                
                {/* Enhanced arrows */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                    <div className={`w-16 h-16 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-all duration-500`}>
                      <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced support section */}
        <div className={`mt-24 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#FF6B6B]/20 via-[#FFE66D]/15 to-[#4ECDC4]/20 border-4 border-[#4ECDC4] rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFE66D]/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#95E1D3]/20 to-transparent rounded-tr-3xl"></div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-8 flex items-center justify-center gap-3">
                <span className="text-4xl animate-bounce">🎉</span>
                導入後のサポートも超充実！
                <span className="text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: '📞', title: '24/7 完全サポート', desc: 'いつでもお気軽にお電話！専門スタッフが即対応', color: 'from-[#FF6B6B] to-[#FFE66D]', emoji: '⚡' },
                  { icon: '🎓', title: '完全マスター研修', desc: '全社員向けの使い方レクチャーで安心', color: 'from-[#4ECDC4] to-[#95E1D3]', emoji: '🚀' },
                  { icon: '🔧', title: 'フルカスタマイズ', desc: '御社専用の機能追加も完全対応', color: 'from-[#95E1D3] to-[#FFE66D]', emoji: '🎯' }
                ].map((support, idx) => (
                  <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#FF6B6B]">
                    <div className="relative">
                      <div className="text-5xl mb-4 group-hover:animate-bounce">{support.icon}</div>
                      <div className="absolute top-0 right-0 text-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        {support.emoji}
                      </div>
                    </div>
                    <div className={`font-black text-xl text-transparent bg-clip-text bg-gradient-to-r ${support.color} mb-3`}>
                      {support.title}
                    </div>
                    <div className="text-gray-700 font-medium">{support.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}