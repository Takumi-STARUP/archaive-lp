'use client'

import React from 'react'

const plans = [
  {
    name: 'スターター',
    target: '小規模企業向け',
    price: '¥50,000',
    unit: '月額（税抜）',
    features: [
      '基本機能すべて利用可能',
      'ユーザー数：10名まで',
      'ストレージ：100GB',
      'メールサポート',
      '月次レポート',
      'SSL暗号化・セキュリティ対策',
      '基本API連携'
    ],
    limitations: [
      '電話サポート対象外',
      'カスタマイズ機能制限あり'
    ],
    recommended: false
  },
  {
    name: 'プロフェッショナル',
    target: '中規模企業向け',
    price: '¥150,000',
    unit: '月額（税抜）',
    features: [
      'スターターの全機能',
      'ユーザー数：50名まで',
      'ストレージ：500GB',
      '電話・メールサポート',
      '週次レポート',
      '高度なAPI連携',
      '基本カスタマイズ対応',
      'ワークフロー自動化',
      '高度なセキュリティ機能'
    ],
    limitations: [
      '専任担当者は付きません'
    ],
    recommended: true
  },
  {
    name: 'エンタープライズ',
    target: '大企業向け',
    price: 'お見積り',
    unit: 'ご相談ください',
    features: [
      'プロフェッショナルの全機能',
      'ユーザー数：無制限',
      'ストレージ：無制限',
      '24時間365日サポート',
      'リアルタイムレポート',
      '専任担当者・アカウントマネージャー',
      'フルカスタマイズ対応',
      'オンプレミス対応',
      'SLA保証',
      '高度なセキュリティ監査'
    ],
    limitations: [],
    recommended: false
  }
]

const PricingSection6 = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 shadow-sm mb-6">
            <span className="text-[#4A5568] font-semibold text-sm tracking-wide">PRICING</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#4A5568] mb-6 leading-tight">
            料金プラン
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            企業規模とニーズに合わせた、柔軟な料金体系をご用意しております。
            まずは無料デモでその効果をご体験ください。
          </p>
        </div>

        {/* Pricing Table */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white border-2 shadow-lg overflow-hidden relative ${
                  plan.recommended ? 'border-[#5B8FB9]' : 'border-gray-200'
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-[#5B8FB9] text-white text-center py-3 text-sm font-semibold">
                      <span className="inline-flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        最も人気
                      </span>
                    </div>
                  </div>
                )}
                
                <div className={`p-8 ${plan.recommended ? 'pt-12' : ''}`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-[#4A5568] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{plan.target}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-semibold text-[#5B8FB9]">
                        {plan.price}
                      </span>
                      {plan.unit && (
                        <span className="text-gray-600 ml-2 block text-sm">{plan.unit}</span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-[#4A5568] mb-4 text-sm">含まれる機能：</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <svg className="w-4 h-4 text-[#5B8FB9] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Limitations */}
                    {plan.limitations.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <h5 className="font-medium text-gray-500 mb-2 text-xs">制限事項：</h5>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, idx) => (
                            <li key={idx} className="flex items-start text-xs">
                              <svg className="w-3 h-3 text-gray-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-gray-500">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.recommended 
                      ? 'bg-[#5B8FB9] text-white hover:bg-[#4A7A9F] shadow-lg'
                      : 'border-2 border-[#4A5568] text-[#4A5568] hover:bg-[#4A5568] hover:text-white'
                  }`}>
                    {plan.price === 'お見積り' ? 'お問い合わせ' : 'プランを選択'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-white border border-gray-200 shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-[#4A5568] mb-4">料金に関する重要事項</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#5B8FB9] rounded-full mr-2 mt-2"></div>
                    表示価格はすべて税抜きです
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#5B8FB9] rounded-full mr-2 mt-2"></div>
                    初期導入費用が別途必要となります（50,000円〜）
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#5B8FB9] rounded-full mr-2 mt-2"></div>
                    年間契約で10%割引適用可能
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#5B8FB9] rounded-full mr-2 mt-2"></div>
                    30日間の無料トライアル期間あり
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[#4A5568] mb-4">サポート・保証</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#5B8FB9] rounded-full mr-2 mt-2"></div>
                    全プラン共通で99.9%稼働率保証
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#5B8FB9] rounded-full mr-2 mt-2"></div>
                    データバックアップ・復旧サービス
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#5B8FB9] rounded-full mr-2 mt-2"></div>
                    セキュリティアップデート自動適用
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#5B8FB9] rounded-full mr-2 mt-2"></div>
                    いつでもプラン変更可能（月末締切）
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-[#E2E8F0] border border-gray-200 shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[#4A5568] mb-4">投資対効果（ROI）</h3>
            <p className="text-gray-600 mb-6">
              平均的な導入企業では、3ヶ月で投資回収を実現
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: '時間削減効果', value: '84倍', desc: '見積もり作業時間の短縮' },
                { label: '年間コスト削減', value: '¥2,400万', desc: '人件費・効率化による削減額' },
                { label: '投資回収期間', value: '3ヶ月', desc: '平均的なROI達成期間' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 shadow-md">
                  <div className="text-2xl font-semibold text-[#5B8FB9] mb-2">{item.value}</div>
                  <div className="font-medium text-[#4A5568] mb-1">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection6