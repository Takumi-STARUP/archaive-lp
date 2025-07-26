'use client'

import React from 'react'

const plans = [
  {
    name: 'スターター',
    nameEn: 'Starter',
    price: '¥50,000',
    unit: '月額',
    features: [
      '基本機能全て利用可能',
      '10ユーザーまで',
      'メールサポート',
      '月次レポート',
      'SSL暗号化'
    ],
    recommended: false,
    symbol: '始'
  },
  {
    name: 'プロフェッショナル',
    nameEn: 'Professional',
    price: '¥150,000',
    unit: '月額',
    features: [
      'スターターの全機能',
      '50ユーザーまで',
      '電話・メールサポート',
      '週次レポート',
      'API連携',
      'カスタマイズ対応'
    ],
    recommended: true,
    symbol: '専'
  },
  {
    name: 'エンタープライズ',
    nameEn: 'Enterprise',
    price: 'お見積り',
    unit: '',
    features: [
      'プロフェッショナルの全機能',
      'ユーザー数無制限',
      '24時間サポート',
      'リアルタイムレポート',
      '専任担当者',
      'オンプレミス対応'
    ],
    recommended: false,
    symbol: '究'
  }
]

const PricingSection8 = () => {
  return (
    <section id="pricing" className="py-32 bg-[#FAFAF8] scroll-mt-20 relative overflow-hidden">
      {/* 和紙風背景テクスチャー */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 70px,
            rgba(139, 58, 58, 0.05) 70px,
            rgba(139, 58, 58, 0.05) 71px
          ),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 70px,
            rgba(114, 113, 113, 0.05) 70px,
            rgba(114, 113, 113, 0.05) 71px
          )`
        }}></div>
      </div>

      {/* 伝統的装飾パターン */}
      <div className="absolute top-20 left-20 opacity-5">
        <svg width="180" height="180" viewBox="0 0 180 180">
          {/* 麻の葉風パターン */}
          <defs>
            <pattern id="asanoha-pricing" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <g stroke="#8B3A3A" strokeWidth="0.5" fill="none">
                <path d="M30,5 L15,30 L30,55 L45,30 Z"/>
                <path d="M15,30 L30,5 L45,30 L30,55 Z"/>
                <path d="M30,30 L30,5 M30,30 L15,30 M30,30 L45,30 M30,30 L30,55"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#asanoha-pricing)"/>
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* セクションヘッダー - 和風デザイン */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-[#4A4A4A] mb-8 tracking-widest">
              料金プラン
            </h2>
            {/* 装飾線 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-[#8B3A3A]"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-px bg-[#8B3A3A]/50"></div>
          </div>
          <p className="text-[#727171] max-w-2xl mx-auto leading-relaxed font-light text-lg mt-8">
            企業規模に合わせた、柔軟な料金体系
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative group transition-all duration-500 ${
                plan.recommended ? 'transform lg:-translate-y-4' : ''
              }`}
            >
              {/* プランカード */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-sm overflow-hidden shadow-sm hover:shadow-md border border-gray-200/50 hover:border-[#8B3A3A]/30 transition-all duration-500">
                {/* 和紙風テクスチャー */}
                <div className="absolute inset-0 opacity-5 rounded-sm">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 25px,
                      rgba(139, 58, 58, 0.1) 25px,
                      rgba(139, 58, 58, 0.1) 26px
                    )`
                  }}></div>
                </div>

                {/* おすすめバッジ */}
                {plan.recommended && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="bg-[#8B3A3A] text-white px-6 py-2 text-xs tracking-widest font-light rounded-sm shadow-sm transform rotate-3">
                      おすすめ
                      <div className="absolute top-1 left-1 w-1 h-1 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                )}

                {/* 縦書き和文字 */}
                <div className="absolute top-6 right-6 opacity-15 group-hover:opacity-30 transition-opacity duration-300">
                  <div className="text-2xl font-light text-[#8B3A3A] writing-mode-vertical-rl">
                    {plan.symbol}
                  </div>
                </div>

                <div className="relative p-12 h-full flex flex-col">
                  {/* プラン名 */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-light text-[#4A4A4A] mb-3 tracking-wider">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#727171] tracking-widest uppercase font-light">{plan.nameEn}</p>
                    <div className="w-12 h-px bg-[#8B3A3A]/30 mt-4"></div>
                  </div>
                  
                  {/* 価格 */}
                  <div className="mb-10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-light text-[#8B3A3A] tracking-wider">
                        {plan.price}
                      </span>
                      {plan.unit && (
                        <span className="text-sm text-[#727171] font-light">{plan.unit}</span>
                      )}
                    </div>
                  </div>

                  {/* 機能リスト */}
                  <ul className="space-y-5 mb-12 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="mr-4 mt-2">
                          <div className="w-2 h-2 bg-[#8B3A3A]/60 rounded-full group-hover/item:bg-[#8B3A3A] transition-colors duration-300"></div>
                        </div>
                        <span className="text-sm text-[#727171] leading-relaxed font-light group-hover/item:text-[#4A4A4A] transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAボタン */}
                  <button className={`w-full py-4 rounded-sm text-sm tracking-wider font-light transition-all duration-300 relative overflow-hidden group/btn ${
                    plan.recommended 
                      ? 'bg-[#8B3A3A] text-white hover:bg-[#7A2E2E] shadow-sm'
                      : 'border border-[#727171] text-[#727171] hover:border-[#8B3A3A] hover:text-[#8B3A3A] hover:bg-[#F5F5DC]/30'
                  }`}>
                    <span className="relative z-10">
                      {plan.price === 'お見積り' ? 'お問い合わせ' : '選択する'}
                    </span>
                    {/* ボタン装飾 */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-current opacity-20"></div>
                    {plan.recommended && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E2E] to-[#8B3A3A] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                    )}
                  </button>
                </div>

                {/* カード装飾 */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#8B3A3A]/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#8B3A3A]/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* ホバー時の背景効果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 注意事項 - 和風デザイン */}
        <div className="text-center mt-20">
          <div className="relative bg-white/60 backdrop-blur-sm rounded-sm border border-gray-200/50 p-8 max-w-2xl mx-auto">
            {/* 和紙風テクスチャー */}
            <div className="absolute inset-0 opacity-5 rounded-sm">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 50%, rgba(139, 58, 58, 0.1) 1px, transparent 1px),
                                 radial-gradient(circle at 75% 50%, rgba(139, 58, 58, 0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="relative">
              <div className="w-8 h-px bg-[#8B3A3A]/30 mx-auto mb-4"></div>
              <p className="text-[#727171] text-sm leading-relaxed font-light">
                ※ 表示価格は全て税抜きです。
                <br />
                ※ 初期導入費用が別途必要となります。
              </p>
              <div className="w-8 h-px bg-[#8B3A3A]/30 mx-auto mt-4"></div>
            </div>

            {/* 装飾要素 */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[#8B3A3A]/10"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[#8B3A3A]/10"></div>
          </div>
        </div>

        {/* 追加情報セクション */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-sm border border-[#8B3A3A]/20 p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-xl font-light text-[#4A4A4A] mb-6 tracking-wider">
              導入をご検討中の方へ
            </h3>
            <div className="w-16 h-px bg-[#8B3A3A]/30 mx-auto mb-6"></div>
            <p className="text-[#727171] leading-relaxed font-light mb-8">
              プラン選択にお迷いの場合は、お気軽にご相談ください。<br />
              貴社の規模や要件に応じて、最適なプランをご提案いたします。
            </p>
            <button className="bg-[#8B3A3A] text-white px-8 py-3 rounded-sm font-light tracking-wider hover:bg-[#7A2E2E] transition-all duration-300 shadow-sm">
              無料相談を申し込む
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  )
}

export default PricingSection8