'use client'

import React from 'react'

const features = [
  {
    title: '高度なセキュリティ',
    description: '国際規格に準拠した万全のセキュリティ体制で、お客様の重要なデータを保護します。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    symbol: '守'
  },
  {
    title: '柔軟な拡張性',
    description: 'ビジネスの成長に合わせて、システムを柔軟に拡張。将来を見据えた設計です。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    symbol: '拡'
  },
  {
    title: '専門的なサポート',
    description: '経験豊富な専門チームが、導入から運用まで一貫してサポートいたします。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    symbol: '支'
  },
  {
    title: '実証済みの効果',
    description: '導入企業の95%以上が業務効率の向上を実感。確かな成果をお約束します。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    symbol: '効'
  }
]

const FeatureSection8 = () => {
  return (
    <section id="features" className="py-32 bg-[#FAFAF8] scroll-mt-20 relative overflow-hidden">
      {/* 和紙風テクスチャー背景 */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 60px,
            rgba(114, 113, 113, 0.05) 60px,
            rgba(114, 113, 113, 0.05) 61px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 60px,
            rgba(139, 58, 58, 0.05) 60px,
            rgba(139, 58, 58, 0.05) 61px
          )`
        }}></div>
      </div>

      {/* 伝統的装飾パターン */}
      <div className="absolute top-20 right-20 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <pattern id="traditional-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#8B3A3A"/>
              <path d="M10,10 L30,30 M30,10 L10,30" stroke="#8B3A3A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#traditional-pattern)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* セクションヘッダー - 和風デザイン */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-[#4A4A4A] mb-8 tracking-widest">
              選ばれる理由
            </h2>
            {/* 装飾線 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-[#8B3A3A]"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-px bg-[#8B3A3A]/50"></div>
          </div>
          <p className="text-[#727171] max-w-2xl mx-auto leading-relaxed font-light text-lg mt-8">
            大手企業様から信頼される、確かな実績と技術力
          </p>
        </div>

        {/* 特徴カード - 和風デザイン */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* 和風カード */}
              <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-sm border border-gray-200/50 hover:border-[#8B3A3A]/30 transition-all duration-500 h-full shadow-sm hover:shadow-md">
                {/* 和紙風テクスチャー */}
                <div className="absolute inset-0 opacity-5 rounded-sm">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 20px,
                      rgba(139, 58, 58, 0.1) 20px,
                      rgba(139, 58, 58, 0.1) 21px
                    )`
                  }}></div>
                </div>

                {/* 左上の装飾 */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#8B3A3A]/20 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 右下の装飾 */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#8B3A3A]/20 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* 縦書き和文字 */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className="text-2xl font-light text-[#8B3A3A] writing-mode-vertical-rl">
                    {feature.symbol}
                  </div>
                </div>

                {/* アイコン */}
                <div className="text-[#8B3A3A] mb-8 opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {feature.icon}
                </div>

                {/* タイトル */}
                <h3 className="text-xl font-light text-[#4A4A4A] mb-6 tracking-wider leading-relaxed">
                  {feature.title}
                </h3>

                {/* 装飾線 */}
                <div className="w-12 h-px bg-[#8B3A3A]/30 mb-6 group-hover:w-16 transition-all duration-300"></div>

                {/* 説明文 */}
                <p className="text-sm text-[#727171] leading-relaxed font-light">
                  {feature.description}
                </p>

                {/* ホバー時の背景効果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 導入企業セクション - 和風デザイン */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <p className="text-[#727171] text-sm tracking-widest font-light">導入実績企業（一部）</p>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-px bg-[#8B3A3A]/30"></div>
            </div>
          </div>
          
          {/* 企業ロゴエリア */}
          <div className="relative bg-white/60 backdrop-blur-sm rounded-sm border border-gray-200/50 p-12">
            {/* 和紙風テクスチャー */}
            <div className="absolute inset-0 opacity-5 rounded-sm">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 58, 58, 0.1) 1px, transparent 1px),
                                 radial-gradient(circle at 75% 75%, rgba(139, 58, 58, 0.1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative flex flex-wrap justify-center items-center gap-16">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="group relative">
                  <div className="w-40 h-16 bg-[#F5F5DC]/80 rounded-sm flex items-center justify-center text-[#727171] text-xs tracking-widest border border-gray-200/50 hover:border-[#8B3A3A]/30 transition-all duration-300 group-hover:shadow-sm">
                    <div className="relative">
                      企業ロゴ
                      {/* 装飾点 */}
                      <div className="absolute -top-1 -left-2 w-1 h-1 bg-[#8B3A3A]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-1 -right-2 w-1 h-1 bg-[#8B3A3A]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 装飾要素 */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-[#8B3A3A]/10"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-[#8B3A3A]/10"></div>
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

export default FeatureSection8