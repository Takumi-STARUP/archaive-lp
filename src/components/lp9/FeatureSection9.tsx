'use client';

import { useEffect, useState } from 'react';

export default function FeatureSection9() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: '01',
      icon: '⚡',
      title: 'AI自動見積もり',
      subtitle: 'AUTOMATED ESTIMATION',
      description: '図面をアップロードするだけで、AIが瞬時に正確な見積もりを生成。人的ミスを99.9%削減。',
      stats: { label: '処理速度', value: '3秒', unit: '/件' },
      techBadges: ['Machine Learning', 'OCR', 'Deep Analysis']
    },
    {
      id: '02', 
      icon: '🛡️',
      title: '利益最適化エンジン',
      subtitle: 'PROFIT OPTIMIZATION',
      description: '市場データと過去の実績を分析し、最適な利益率を自動計算。収益性を最大化します。',
      stats: { label: '利益向上率', value: '+35', unit: '%' },
      techBadges: ['Real-time Analysis', 'Market Data', 'AI Prediction']
    },
    {
      id: '03',
      icon: '📈',
      title: 'リアルタイム分析',
      subtitle: 'REAL-TIME ANALYTICS',
      description: '見積もりデータをリアルタイムで分析し、ビジネスインサイトを提供。意思決定を加速。',
      stats: { label: 'データ更新', value: '0.1', unit: '秒' },
      techBadges: ['Big Data', 'Stream Processing', 'Visualization']
    },
    {
      id: '04',
      icon: '🤝',
      title: 'チーム連携機能',
      subtitle: 'TEAM COLLABORATION',
      description: 'クラウドベースの共同作業環境で、チーム全体の生産性を向上。リモートワークにも対応。',
      stats: { label: '作業効率', value: '+85', unit: '%' },
      techBadges: ['Cloud Native', 'Real-time Sync', 'Secure Sharing']
    }
  ];

  return (
    <section id="features9" className="relative py-24 bg-[#1A202C] overflow-hidden">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 49%, #805AD5 49%, #805AD5 51%, transparent 51%),
            linear-gradient(0deg, transparent 49%, #805AD5 49%, #805AD5 51%, transparent 51%),
            radial-gradient(circle at 25% 25%, #319795 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #319795 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 100px 100px, 100px 100px',
          backgroundPosition: '0 0, 0 0, 0 0, 50px 50px'
        }}></div>
      </div>

      {/* Animated Tech Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#805AD5]/30 to-transparent"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#319795]/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#805AD5]/30 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header with Tech Style */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative mb-4">
            <div className="absolute -inset-4 bg-[#805AD5]/20 blur-xl"></div>
            <h2 className="relative text-4xl md:text-5xl font-black text-gray-300 font-mono tracking-wider">
              <span className="text-[#319795]">&lt;</span>
              CORE FEATURES
              <span className="text-[#319795]">&gt;</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 font-mono">
            次世代テクノロジーが実現する4つの革新
          </p>
          <div className="mt-4 w-32 h-px bg-gradient-to-r from-transparent via-[#805AD5] to-transparent mx-auto"></div>
        </div>

        {/* Features Grid with Glassmorphism */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              {/* Feature Card with Glass Effect */}
              <div className={`relative bg-[#2D3748]/30 backdrop-blur-md border transition-all duration-500 overflow-hidden ${
                activeFeature === index 
                  ? 'border-[#805AD5] shadow-[0_0_30px_rgba(128,90,213,0.3)]' 
                  : 'border-[#805AD5]/20 hover:border-[#805AD5]/50'
              }`}>
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                  activeFeature === index 
                    ? 'opacity-10 from-[#805AD5] to-[#319795]' 
                    : 'opacity-0'
                }`}></div>

                {/* Tech Corner Decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#805AD5]/50"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#805AD5]/50"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#805AD5]/50"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#805AD5]/50"></div>

                {/* Feature Number with Tech Style */}
                <div className="absolute top-4 right-4 text-6xl font-black text-[#805AD5]/20 font-mono">
                  {feature.id}
                </div>

                <div className="relative p-8">
                  {/* Icon with Glow Effect */}
                  <div className="mb-6 relative inline-block">
                    <div className={`absolute inset-0 blur-xl transition-all duration-500 ${
                      activeFeature === index ? 'bg-[#805AD5]/40' : 'bg-[#805AD5]/0'
                    }`}></div>
                    <div className="relative text-5xl p-4 bg-[#1A202C]/50 border border-[#805AD5]/30 backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    {/* Rotating Tech Ring */}
                    <div className={`absolute inset-0 border-2 border-[#319795]/30 transform ${
                      activeFeature === index ? 'rotate-45' : 'rotate-0'
                    } transition-transform duration-1000`}></div>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-2xl font-bold text-gray-300 mb-2 font-mono">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#319795] font-mono tracking-widest mb-4">
                    {feature.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats Display */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex-1 bg-[#1A202C]/50 p-3 border border-[#805AD5]/20">
                      <div className="text-xs text-gray-400 font-mono">{feature.stats.label}</div>
                      <div className="text-2xl font-black text-[#805AD5] font-mono">
                        {feature.stats.value}
                        <span className="text-sm text-gray-400">{feature.stats.unit}</span>
                      </div>
                    </div>
                    {/* Progress Indicator */}
                    <div className="flex-1">
                      <div className="h-2 bg-[#1A202C]/50 overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-[#805AD5] to-[#319795] transition-all duration-1000 ${
                          activeFeature === index ? 'w-full' : 'w-0'
                        }`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {feature.techBadges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="px-3 py-1 text-xs font-mono text-[#319795] bg-[#319795]/10 border border-[#319795]/30"
                      >
                        #{badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scan Line Effect */}
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#805AD5] to-transparent transition-all duration-1000 ${
                  activeFeature === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tech Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            {features.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-1 transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-[#805AD5] w-16' 
                    : 'bg-[#805AD5]/30'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(128, 90, 213, 0.3); }
          50% { box-shadow: 0 0 40px rgba(128, 90, 213, 0.5); }
        }
      `}</style>
    </section>
  );
}