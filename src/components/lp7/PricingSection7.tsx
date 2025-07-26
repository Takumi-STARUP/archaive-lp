'use client'

import React, { useState, useRef, useEffect } from 'react'

const PricingSection7 = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const plans = [
    {
      name: 'スターター',
      subtitle: '小規模チーム向け',
      description: '個人や小規模チームに最適なお手軽プラン！',
      price: {
        monthly: '¥3,980',
        yearly: '¥39,800'
      },
      originalPrice: {
        monthly: '¥5,980',
        yearly: '¥59,800'
      },
      features: [
        '基本機能すべて利用可能',
        '5ユーザーまで同時利用',
        '10GB高速ストレージ',
        'メールサポート完備',
        'モバイルアプリ対応',
        '基本レポート機能'
      ],
      color: 'from-[#FF6B6B] via-[#FFE66D] to-[#FF6B6B]',
      bgGradient: 'from-[#FF6B6B]/10 to-[#FFE66D]/5',
      buttonColor: 'from-[#FF6B6B] to-[#FFE66D]',
      popular: false,
      emoji: '🚀',
      badge: '人気'
    },
    {
      name: 'プロフェッショナル',
      subtitle: '成長企業向け',
      description: '拡大するビジネスに最適な万能プラン！',
      price: {
        monthly: '¥9,980',
        yearly: '¥99,800'
      },
      originalPrice: {
        monthly: '¥14,980',
        yearly: '¥149,800'
      },
      features: [
        'スターターの全機能',
        '無制限ユーザー利用',
        '100GB大容量ストレージ',
        '優先サポート対応',
        'API連携機能',
        '高度な分析レポート',
        'カスタムダッシュボード',
        'チーム管理機能'
      ],
      color: 'from-[#4ECDC4] via-[#95E1D3] to-[#4ECDC4]',
      bgGradient: 'from-[#4ECDC4]/15 to-[#95E1D3]/10',
      buttonColor: 'from-[#4ECDC4] to-[#95E1D3]',
      popular: true,
      emoji: '⭐',
      badge: '最人気'
    },
    {
      name: 'エンタープライズ',
      subtitle: '大規模組織向け',
      description: '大企業に最適なフル機能プラン！',
      price: {
        monthly: 'お問い合わせ',
        yearly: 'お問い合わせ'
      },
      originalPrice: {
        monthly: '',
        yearly: ''
      },
      features: [
        'プロの全機能利用',
        '完全カスタマイズ対応',
        '無制限ストレージ',
        '専任サポート担当',
        'オンプレミス導入',
        'SLA保証付き',
        '高度セキュリティ',
        '専用トレーニング'
      ],
      color: 'from-[#95E1D3] via-[#FFE66D] to-[#95E1D3]',
      bgGradient: 'from-[#95E1D3]/15 to-[#FFE66D]/10',
      buttonColor: 'from-[#95E1D3] to-[#FFE66D]',
      popular: false,
      emoji: '👑',
      badge: '最強'
    }
  ]

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

  return (
    <section ref={sectionRef} id="pricing7" className="py-28 bg-gradient-to-br from-[#FF6B6B]/5 via-[#FFE66D]/5 to-[#4ECDC4]/5 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFE66D]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-24 w-24 h-24 bg-gradient-to-bl from-[#4ECDC4]/15 to-[#95E1D3]/10 rounded-2xl rotate-45 animate-spin" style={{animationDuration: '35s'}}></div>
        <div className="absolute bottom-32 left-28 w-40 h-40 bg-gradient-to-tr from-[#95E1D3]/10 to-[#FFE66D]/15 rounded-full animate-bounce" style={{animationDuration: '7s'}}></div>
        <div className="absolute bottom-16 right-20 w-28 h-28 bg-gradient-to-tl from-[#FFE66D]/15 to-[#FF6B6B]/10 rounded-3xl -rotate-12 animate-pulse"></div>
        
        {/* Small geometric shapes */}
        <div className="absolute top-1/4 left-12 w-4 h-4 bg-[#4ECDC4]/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-[#FFE66D]/50 rounded rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#FF6B6B]/40 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced header */}
        <div className={`max-w-4xl mx-auto text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] px-10 py-4 mb-8 rounded-2xl shadow-lg">
            <span className="text-white font-black text-xl tracking-wider flex items-center gap-3">
              <span className="text-2xl animate-bounce">💰</span>
              PRICING
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-gray-800 mb-6 leading-tight">
            <span className="block">シンプルで</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]">
              超分かりやすい料金！
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-bold">
            🎯 ビジネスの規模に合わせて、最適なプランを選択！
          </p>

          {/* Enhanced billing toggle */}
          <div className="inline-flex items-center bg-gradient-to-r from-white to-gray-50 rounded-2xl p-2 shadow-xl border-4 border-[#4ECDC4]/30">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-8 py-3 rounded-xl font-black text-lg transition-all duration-300 ${
                billingPeriod === 'monthly' 
                  ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              月払い 📅
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-8 py-3 rounded-xl font-black text-lg transition-all duration-300 ${
                billingPeriod === 'yearly' 
                  ? 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              年払い 🎉
              <span className="ml-2 text-sm bg-[#FFE66D] text-gray-800 px-2 py-1 rounded-full">2ヶ月分お得</span>
            </button>
          </div>
        </div>

        {/* Enhanced pricing cards */}
        <div className={`grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-4 ${
                plan.popular 
                  ? 'border-[#FF6B6B] transform scale-110 shadow-2xl bg-gradient-to-br from-[#FF6B6B]/5 to-[#4ECDC4]/5' 
                  : 'border-[#4ECDC4]/30 hover:border-[#FF6B6B] hover:scale-105'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-6 py-2 rounded-2xl shadow-lg">
                    <span className="font-black text-sm flex items-center gap-2">
                      <span className="text-lg animate-pulse">{plan.emoji}</span>
                      {plan.badge}
                    </span>
                  </div>
                </div>
              )}

              {/* Background decoration */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Floating emoji */}
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:animate-bounce">
                {plan.emoji}
              </div>

              <div className="p-10 relative z-10">
                {/* Plan icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-3xl mb-6 flex items-center justify-center text-3xl shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                  {plan.emoji}
                </div>
                
                {/* Plan details */}
                <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mb-2">
                  {plan.subtitle}
                </p>
                <p className="text-gray-700 mb-6 font-medium">
                  {plan.description}
                </p>
                
                {/* Pricing */}
                <div className="mb-8">
                  {plan.originalPrice[billingPeriod] && (
                    <div className="text-lg text-gray-400 line-through font-medium mb-1">
                      {plan.originalPrice[billingPeriod]}
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
                      {plan.price[billingPeriod]}
                    </span>
                    {plan.price[billingPeriod] !== 'お問い合わせ' && (
                      <span className="text-gray-600 font-semibold">
                        /{billingPeriod === 'monthly' ? '月' : '年'}
                      </span>
                    )}
                  </div>
                  {billingPeriod === 'yearly' && plan.price[billingPeriod] !== 'お問い合わせ' && (
                    <div className="text-sm text-[#4ECDC4] font-bold mt-1">
                      💰 年間 {Math.round((59800 - 39800) / 39800 * 100)}% OFF!
                    </div>
                  )}
                </div>
                
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/feature">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#4ECDC4] to-[#95E1D3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:scale-125 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium group-hover/feature:text-gray-800 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`group/btn relative overflow-hidden w-full bg-gradient-to-r ${plan.buttonColor} text-white py-4 px-6 font-black text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="text-xl group-hover/btn:animate-spin">
                      {plan.price[billingPeriod] === 'お問い合わせ' ? '📞' : '🚀'}
                    </span>
                    {plan.price[billingPeriod] === 'お問い合わせ' ? 'お問い合わせ' : '今すぐ始める'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFE66D] to-[#95E1D3] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Sparkle effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-12 left-12 w-2 h-2 bg-[#FFE66D] rounded-full animate-ping"></div>
                <div className="absolute top-20 right-16 w-1 h-1 bg-[#4ECDC4] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-[#FF6B6B] rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute bottom-12 right-12 w-1 h-1 bg-[#95E1D3] rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced guarantee section */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#FF6B6B]/20 via-[#FFE66D]/15 to-[#4ECDC4]/20 border-4 border-[#4ECDC4] rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFE66D]/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#95E1D3]/20 to-transparent rounded-tr-3xl"></div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-6 flex items-center justify-center gap-3">
                <span className="text-4xl animate-bounce">🛡️</span>
                安心の保証制度
                <span className="text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: '💰', title: '30日間返金保証', desc: '満足いただけない場合は全額返金', color: 'from-[#FF6B6B] to-[#FFE66D]', emoji: '✨' },
                  { icon: '💳', title: '多様な支払い方法', desc: 'クレジットカード・銀行振込対応', color: 'from-[#4ECDC4] to-[#95E1D3]', emoji: '💎' },
                  { icon: '🔄', title: 'いつでもプラン変更', desc: 'ビジネスの成長に合わせて柔軟に', color: 'from-[#95E1D3] to-[#FFE66D]', emoji: '🚀' }
                ].map((item, idx) => (
                  <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#FF6B6B]">
                    <div className="relative">
                      <div className="text-5xl mb-4 group-hover:animate-bounce">{item.icon}</div>
                      <div className="absolute top-0 right-0 text-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        {item.emoji}
                      </div>
                    </div>
                    <div className={`font-black text-xl text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-3`}>
                      {item.title}
                    </div>
                    <div className="text-gray-700 font-medium">{item.desc}</div>
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

export default PricingSection7