'use client';

import { useEffect, useState } from 'react';

export default function PricingSection9() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      tier: 'STARTER',
      name: 'スターター',
      price: '50,000',
      unit: '月',
      description: '小規模チーム向け',
      users: '〜10名',
      processing: '1,000件/月',
      features: [
        { name: 'AI見積もり生成', included: true },
        { name: 'リアルタイム分析', included: true },
        { name: 'クラウドストレージ', value: '10GB' },
        { name: 'API連携', value: '基本' },
        { name: 'サポート', value: 'メール' },
        { name: 'SLA保証', included: false }
      ],
      color: '#319795',
      glow: 'rgba(49, 151, 149, 0.5)',
      recommended: false
    },
    {
      tier: 'PROFESSIONAL',
      name: 'プロフェッショナル',
      price: '150,000',
      unit: '月',
      description: '成長企業向け',
      users: '〜50名',
      processing: '10,000件/月',
      features: [
        { name: 'AI見積もり生成', included: true },
        { name: 'リアルタイム分析', included: true },
        { name: 'クラウドストレージ', value: '100GB' },
        { name: 'API連携', value: '高度' },
        { name: 'サポート', value: '24/7' },
        { name: 'SLA保証', value: '99.9%' }
      ],
      color: '#805AD5',
      glow: 'rgba(128, 90, 213, 0.5)',
      recommended: true
    },
    {
      tier: 'ENTERPRISE',
      name: 'エンタープライズ',
      price: 'カスタム',
      unit: '',
      description: '大企業向け',
      users: '無制限',
      processing: '無制限',
      features: [
        { name: 'AI見積もり生成', included: true },
        { name: 'リアルタイム分析', included: true },
        { name: 'クラウドストレージ', value: '無制限' },
        { name: 'API連携', value: 'カスタム' },
        { name: 'サポート', value: '専任チーム' },
        { name: 'SLA保証', value: '99.99%' }
      ],
      color: '#805AD5',
      glow: 'rgba(128, 90, 213, 0.8)',
      recommended: false
    }
  ];

  return (
    <section id="pricing9" className="relative py-24 bg-[#1A202C] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Tech grid animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-conic-gradient(
                from 0deg at 50% 50%,
                #805AD5 0deg,
                transparent 10deg,
                transparent 20deg,
                #319795 30deg,
                transparent 40deg,
                transparent 60deg
              )
            `,
            backgroundSize: '200px 200px',
            animation: 'rotate 60s linear infinite'
          }}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#805AD5] rounded-full animate-float-up"
              style={{
                left: `${(i * 5) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${10 + i % 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative mb-6">
            <span className="text-sm font-mono text-[#319795] tracking-widest">
              PRICING PLANS
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-300 mt-2 font-mono">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#805AD5] to-[#319795]">
                料金プラン
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 font-mono">
            ビジネス規模に合わせた最適なプランを選択
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${hoveredPlan === index ? 'scale-105 z-10' : 'scale-100'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Glow effect */}
              {hoveredPlan === index && (
                <div 
                  className="absolute -inset-4 rounded-lg blur-xl transition-opacity duration-500"
                  style={{ backgroundColor: plan.glow, opacity: 0.5 }}
                ></div>
              )}

              {/* Card */}
              <div className={`relative bg-[#2D3748]/50 backdrop-blur-md border overflow-hidden h-full ${
                plan.recommended 
                  ? 'border-[#805AD5]' 
                  : 'border-[#805AD5]/20 hover:border-[#805AD5]/50'
              }`}>
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#805AD5] to-[#319795] px-6 py-2">
                    <span className="text-white font-mono text-xs tracking-wider">RECOMMENDED</span>
                  </div>
                )}

                {/* Tech decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#805AD5]/20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#805AD5]/20"></div>

                {/* Animated scan line */}
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#805AD5] to-transparent transition-all duration-1000 ${
                  hoveredPlan === index ? 'opacity-100' : 'opacity-0'
                }`}></div>

                <div className="relative p-8">
                  {/* Plan tier */}
                  <div className="text-xs font-mono tracking-widest mb-2" style={{ color: plan.color }}>
                    {plan.tier}
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl font-bold text-gray-300 mb-2 font-mono">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  {/* Price display with tech style */}
                  <div className="mb-8 relative">
                    <div className="flex items-baseline justify-center gap-1">
                      {plan.price === 'カスタム' ? (
                        <span className="text-3xl font-bold text-gray-300 font-mono">{plan.price}</span>
                      ) : (
                        <>
                          <span className="text-sm text-gray-400">¥</span>
                          <span className="text-4xl font-black font-mono" style={{ color: plan.color }}>
                            {plan.price}
                          </span>
                          <span className="text-sm text-gray-400">/{plan.unit}</span>
                        </>
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs text-gray-400 font-mono">
                        {plan.users} | {plan.processing}
                      </span>
                    </div>
                  </div>

                  {/* Features list with tech indicators */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">{feature.name}</span>
                        <span className="text-sm font-mono" style={{ color: plan.color }}>
                          {feature.included === true ? (
                            <span className="text-[#319795]">✓</span>
                          ) : feature.included === false ? (
                            <span className="text-gray-500">-</span>
                          ) : (
                            <span className="text-gray-400">{feature.value}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full relative overflow-hidden group py-4 font-mono font-bold tracking-wider transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-[#805AD5] to-[#319795] text-white'
                      : 'bg-[#1A202C] text-gray-300 border border-[#805AD5]/30 hover:border-[#805AD5]'
                  }`}>
                    <span className="relative z-10">
                      {plan.price === 'カスタム' ? 'お問い合わせ' : 'プランを選択'}
                    </span>
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#805AD5] to-[#319795] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Scan effect */}
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </button>
                </div>

                {/* Bottom tech line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#805AD5] to-transparent opacity-20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-400 font-mono text-sm">
            全てのプランに30日間の無料トライアル付き
          </p>
          <div className="mt-2 inline-flex items-center gap-2 text-[#319795] font-mono text-xs">
            <div className="w-2 h-2 bg-[#319795] rounded-full animate-pulse"></div>
            <span>いつでもプラン変更可能</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-up {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}