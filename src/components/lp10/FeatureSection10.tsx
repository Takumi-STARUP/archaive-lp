'use client';

import { useState } from 'react';
import { 
  Cpu, Shield, Zap, Globe, Database, Cloud,
  ChevronRight, Activity, Lock, Rocket
} from 'lucide-react';

export default function FeatureSection10() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Cpu,
      title: 'AI自動化',
      description: '最先端のAI技術で業務プロセスを自動化',
      details: '機械学習とディープラーニングを活用した次世代の自動化システム',
      stats: { value: '95%', label: '効率向上' },
      color: 'from-[#5DADE2] to-[#2E86AB]'
    },
    {
      icon: Shield,
      title: 'セキュリティ',
      description: '軍事レベルの暗号化でデータを保護',
      details: '256ビットAES暗号化と多層防御システムで最高レベルのセキュリティを実現',
      stats: { value: '100%', label: '保護率' },
      color: 'from-[#B76E79] to-[#8B4049]'
    },
    {
      icon: Zap,
      title: '高速処理',
      description: 'リアルタイムデータ処理で即座に結果を提供',
      details: '分散処理技術により従来の10倍の処理速度を実現',
      stats: { value: '10x', label: '高速化' },
      color: 'from-[#5DADE2] to-[#B76E79]'
    },
    {
      icon: Globe,
      title: 'グローバル対応',
      description: '多言語・多通貨対応で世界中どこでも利用可能',
      details: '50以上の言語と150以上の通貨に対応したグローバルプラットフォーム',
      stats: { value: '50+', label: '対応言語' },
      color: 'from-[#2E86AB] to-[#5DADE2]'
    },
    {
      icon: Database,
      title: 'ビッグデータ',
      description: '大規模データの収集・分析・活用を実現',
      details: 'ペタバイト級のデータを処理可能な次世代データベースアーキテクチャ',
      stats: { value: '1PB+', label: '処理容量' },
      color: 'from-[#8B4049] to-[#B76E79]'
    },
    {
      icon: Cloud,
      title: 'クラウド連携',
      description: 'シームレスなクラウド統合で柔軟な運用',
      details: 'マルチクラウド対応でAWS、Azure、GCPとの完全な互換性',
      stats: { value: '99.9%', label: '稼働率' },
      color: 'from-[#B76E79] to-[#5DADE2]'
    }
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 bg-[#34495E] overflow-hidden">
      {/* Retro Background Pattern */}
      <div className="absolute inset-0">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(93,173,226,0.1) 10px,
                  rgba(93,173,226,0.1) 20px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 10px,
                  rgba(183,110,121,0.1) 10px,
                  rgba(183,110,121,0.1) 20px
                )
              `
            }}
          />
        </div>

        {/* Animated Dots */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => {
            // Generate deterministic positions based on index
            const left = ((i * 37) % 100);
            const top = ((i * 23) % 100);
            const duration = 2 + ((i * 17) % 30) / 10;
            const delay = ((i * 13) % 20) / 10;
            
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#5DADE2] rounded-full opacity-20"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animation: `pulse ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-[#5DADE2] font-mono text-sm mb-2">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>FEATURE.SHOWCASE</span>
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#5DADE2] to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4 relative">
            <span className="relative z-10">次世代機能</span>
            <span className="absolute inset-0 text-[#B76E79] blur-md opacity-50">次世代機能</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            最先端テクノロジーで実現する革新的な機能群
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveFeature(index)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-[#2C3E50]/50 backdrop-blur-sm border border-[#5DADE2]/20 rounded-lg p-6 h-full transition-all duration-300 group-hover:border-[#5DADE2]/50 group-hover:transform group-hover:-translate-y-1 cursor-pointer">
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#B76E79] rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-[#5DADE2] rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-[#B76E79] rounded-full opacity-60"></div>
                  </div>
                  <span className="font-mono text-xs text-[#5DADE2] opacity-60">
                    {`FEATURE_${index + 1}`}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-lg`} />
                  <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                    <feature.icon className="w-10 h-10 text-[#5DADE2]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-300 mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="font-mono text-2xl font-bold text-[#B76E79]">
                      {feature.stats.value}
                    </div>
                    <div className="text-xs text-gray-400">{feature.stats.label}</div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                    hoveredCard === index ? 'translate-x-1 text-[#5DADE2]' : ''
                  }`} />
                </div>

                {/* Active Indicator */}
                {activeFeature === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5DADE2] to-[#B76E79] rounded-b-lg" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Detail Terminal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2C3E50]/80 backdrop-blur-sm border border-[#5DADE2]/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(93,173,226,0.2)]">
            {/* Terminal Header */}
            <div className="bg-[#2C3E50] px-4 py-3 border-b border-[#5DADE2]/20 flex items-center justify-between">
              <div className="font-mono text-xs text-[#5DADE2]">
                {`> FEATURE_DETAILS: ${features[activeFeature].title}`}
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#B76E79]" />
                <Rocket className="w-4 h-4 text-[#5DADE2]" />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6">
              <div className="font-mono text-sm text-[#5DADE2] mb-4">
                <div>{'> INITIALIZING MODULE...'}</div>
                <div>{'> LOADING SPECIFICATIONS...'}</div>
                <div>{'> READY'}</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {(() => {
                    const Icon = features[activeFeature].icon;
                    return <Icon className="w-8 h-8 text-[#5DADE2] mt-1" />;
                  })()}
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-300 mb-2">
                      {features[activeFeature].title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {features[activeFeature].details}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-[#34495E]/50 rounded-lg p-4 text-center">
                    <div className="font-mono text-3xl font-bold text-[#B76E79] mb-1">
                      {features[activeFeature].stats.value}
                    </div>
                    <div className="text-xs text-gray-400">
                      {features[activeFeature].stats.label}
                    </div>
                  </div>
                  <div className="bg-[#34495E]/50 rounded-lg p-4 text-center">
                    <div className="font-mono text-3xl font-bold text-[#5DADE2] mb-1">
                      24/7
                    </div>
                    <div className="text-xs text-gray-400">サポート</div>
                  </div>
                  <div className="bg-[#34495E]/50 rounded-lg p-4 text-center">
                    <div className="font-mono text-3xl font-bold text-[#B76E79] mb-1">
                      ∞
                    </div>
                    <div className="text-xs text-gray-400">拡張性</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.5);
          }
        }
      `}</style>
    </section>
  );
}