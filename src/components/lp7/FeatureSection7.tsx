'use client'

import React, { useState, useRef, useEffect } from 'react'

const FeatureSection7 = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: '📊',
      title: 'AIデータ分析',
      description: '超直感的なダッシュボードで、ビジネス状況を瞬時に把握！意思決定が爆速になります ⚡',
      color: 'from-[#FF6B6B] via-[#FFE66D] to-[#FF6B6B]',
      bgColor: 'from-[#FF6B6B]/20 to-[#FFE66D]/10',
      accent: '#FF6B6B',
      emoji: '📈'
    },
    {
      icon: '🚀',
      title: '完全自動化',
      description: '面倒な繰り返し作業を自動化して、クリエイティブな業務に集中できる革新的システム！',
      color: 'from-[#4ECDC4] via-[#95E1D3] to-[#4ECDC4]',
      bgColor: 'from-[#4ECDC4]/20 to-[#95E1D3]/10',
      accent: '#4ECDC4',
      emoji: '⚡'
    },
    {
      icon: '👥',
      title: 'スマートチーム連携',
      description: 'チーム全体がスムーズに情報共有！プロジェクトの進行が見違えるほど効率的に ✨',
      color: 'from-[#FFE66D] via-[#95E1D3] to-[#FFE66D]',
      bgColor: 'from-[#FFE66D]/20 to-[#95E1D3]/10',
      accent: '#FFE66D',
      emoji: '🤝'
    },
    {
      icon: '🛡️',
      title: '最強セキュリティ',
      description: '大切なデータを最新のセキュリティ技術で完全保護！安心して使える堅牢なシステム 🔒',
      color: 'from-[#95E1D3] via-[#4ECDC4] to-[#95E1D3]',
      bgColor: 'from-[#95E1D3]/20 to-[#4ECDC4]/10',
      accent: '#95E1D3',
      emoji: '🔐'
    },
    {
      icon: '📱',
      title: 'どこでもアクセス',
      description: 'PC、スマホ、タブレット完全対応！外出先でもビジネスを止めない自由な働き方を実現 🌍',
      color: 'from-[#FF6B6B] via-[#4ECDC4] to-[#FF6B6B]',
      bgColor: 'from-[#FF6B6B]/20 to-[#4ECDC4]/10',
      accent: '#FF6B6B',
      emoji: '🌐'
    },
    {
      icon: '⚡',
      title: '超高速処理',
      description: 'ストレス完全ゼロの操作感！サクサク動いて作業効率が劇的にアップする爽快体験 🎯',
      color: 'from-[#FFE66D] via-[#FF6B6B] to-[#FFE66D]',
      bgColor: 'from-[#FFE66D]/20 to-[#FF6B6B]/10',
      accent: '#FFE66D',
      emoji: '💨'
    }
  ];

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

  // Auto-rotate features every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="features7" className="py-24 bg-gradient-to-br from-[#FF6B6B]/5 via-[#FFE66D]/5 to-[#4ECDC4]/5 overflow-hidden relative">
      {/* Floating background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFE66D]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-bl from-[#4ECDC4]/15 to-[#95E1D3]/10 rounded-2xl rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 bg-gradient-to-tr from-[#95E1D3]/10 to-[#FFE66D]/15 rounded-full animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 bg-gradient-to-tl from-[#FFE66D]/15 to-[#FF6B6B]/10 rounded-3xl -rotate-12 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header with animated elements */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] px-8 py-3 mb-8 rounded-2xl shadow-lg">
            <span className="text-white font-black text-lg tracking-wider flex items-center gap-2">
              <span className="text-2xl animate-bounce">✨</span>
              FEATURES
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
            <span className="block">使いやすい機能で</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]">
              ビジネスが激変！
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-bold mb-4">
            🚀 シンプルで直感的な機能が、あなたのビジネスを次のレベルへ
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Feature cards with enhanced design */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-4 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer ${
                activeFeature === index 
                  ? 'border-[#FF6B6B] bg-gradient-to-br from-[#FF6B6B]/5 to-[#4ECDC4]/5 scale-105 shadow-2xl' 
                  : 'border-[#4ECDC4]/30 hover:border-[#FF6B6B]'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              {/* Background decoration */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Floating emoji decoration */}
              <div className="absolute top-4 right-4 text-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 group-hover:animate-bounce">
                {feature.emoji}
              </div>
              
              <div className="relative z-10">
                {/* Icon with enhanced styling */}
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center text-3xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <span className="group-hover:animate-pulse">{feature.icon}</span>
                </div>
                
                {/* Title with gradient effect */}
                <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B6B] group-hover:to-[#4ECDC4] transition-all duration-300">
                  {feature.title}
                </h3>
                
                {/* Description with enhanced typography */}
                <p className="text-gray-700 leading-relaxed font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Animated bottom accent */}
                <div className="mt-6">
                  <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>

              {/* Sparkle effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-6 left-6 w-2 h-2 bg-[#FFE66D] rounded-full animate-ping"></div>
                <div className="absolute top-12 right-12 w-1 h-1 bg-[#4ECDC4] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-[#FF6B6B] rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#FF6B6B]/20 via-[#FFE66D]/15 to-[#4ECDC4]/20 border-4 border-[#4ECDC4] rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#FFE66D]/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#95E1D3]/20 to-transparent rounded-tr-3xl"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-4xl animate-bounce">🎉</span>
                  すべての機能を30日間無料体験！
                </h3>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium leading-relaxed">
                  クレジットカード不要で、今すぐ全機能をお試し！<br />
                  使いやすさを実感して、ビジネスの変化を体験してください ✨
                </p>
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-10 py-4 font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-xl group-hover:animate-spin">🚀</span>
                    無料トライアルを始める
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFE66D] to-[#95E1D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '30日', label: '無料期間', emoji: '📅', color: 'from-[#FF6B6B] to-[#FFE66D]' },
                  { value: '全機能', label: '利用可能', emoji: '⚡', color: 'from-[#4ECDC4] to-[#95E1D3]' },
                  { value: '無制限', label: 'サポート', emoji: '🤝', color: 'from-[#95E1D3] to-[#FFE66D]' },
                  { value: '即開始', label: '利用開始', emoji: '🎯', color: 'from-[#FFE66D] to-[#FF6B6B]' }
                ].map((item, idx) => (
                  <div key={idx} className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#4ECDC4]">
                    <div className="text-3xl mb-2 group-hover:animate-bounce">{item.emoji}</div>
                    <div className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-1`}>
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection7