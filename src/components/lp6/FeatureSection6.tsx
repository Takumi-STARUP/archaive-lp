'use client'

import React from 'react'

const features = [
  {
    title: '超高精度な図面読解力',
    description: 'AIが人間を超える精度で図面情報を読み取り、解釈します。長年の業界経験をもとに開発された独自アルゴリズムにより、複雑な図面でも99.8%の精度で処理します。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '99.8%',
    statLabel: '精度'
  },
  {
    title: '圧倒的な処理スピード',
    description: '人間が数時間かける見積もり作業を、AIがわずか3分で完了させます。大幅な時間短縮により、営業効率を84倍に向上させることができます。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '84倍',
    statLabel: '効率化'
  },
  {
    title: '直感的な操作性',
    description: '専門知識不要で、チャットで対話するだけの直感的な操作を実現。従業員への研修コストを削減し、導入から運用開始まで最短5営業日で完了します。',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    stat: '5日',
    statLabel: '導入期間'
  }
]

const FeatureSection6 = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 shadow-sm mb-6">
            <span className="text-[#4A5568] font-semibold text-sm tracking-wide">FEATURES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#4A5568] mb-6 leading-tight">
            なぜARCHAIVEなら、
            <span className="block text-[#5B8FB9]">"見積もり3分"が可能なのか？</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            業界をリードする技術力と、企業の実務に特化した機能により、
            見積もり業務の革新的な効率化を実現します。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#E2E8F0] border border-gray-200 flex items-center justify-center text-[#5B8FB9] group-hover:bg-[#5B8FB9] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-[#4A5568] mb-4 group-hover:text-[#5B8FB9] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              {/* Stat */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">{feature.statLabel}</span>
                  <span className="text-2xl font-semibold text-[#5B8FB9]">{feature.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-white border border-gray-200 shadow-lg p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-[#4A5568] mb-4">
                信頼と実績
              </h3>
              <p className="text-gray-600">
                多くの企業様にご信頼いただき、業務効率化を実現しています
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { value: '200+', label: '導入企業数', desc: '製造業を中心に幅広い業界で採用' },
                { value: '10,000+', label: '処理件数/月', desc: '月間見積もり処理実績' },
                { value: '99.8%', label: '顧客満足度', desc: 'ユーザー満足度調査結果' },
                { value: '24/7', label: 'サポート体制', desc: '専任チームによる安心サポート' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-semibold text-[#5B8FB9] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-medium text-[#4A5568] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Company Logos Placeholder */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-center text-gray-500 mb-6 font-medium">導入実績企業（一部）</p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="w-32 h-16 bg-[#E2E8F0] border border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">COMPANY</span>
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

export default FeatureSection6