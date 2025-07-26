'use client';

const steps = [
  {
    number: '01',
    title: 'お問い合わせ・デモ予約',
    description: 'オンラインフォームから30秒で簡単にデモンストレーションをご予約いただけます。お客様のご都合に合わせて日程を調整いたします。',
    duration: '30秒',
    details: ['フォーム入力', '日程調整', '資料準備']
  },
  {
    number: '02', 
    title: 'オンラインデモ・ヒアリング',
    description: '貴社の課題を詳しく伺いながら、実際の画面でARCHAIVEの機能や効果をご説明します。ご質問にも丁寧にお答えいたします。',
    duration: '30分',
    details: ['課題ヒアリング', 'デモンストレーション', '質疑応答']
  },
  {
    number: '03',
    title: 'ご提案・お見積り',
    description: 'ヒアリング内容をもとに、最適なプランをご提案いたします。詳細なお見積りと導入スケジュールをご提示します。',
    duration: '3営業日',
    details: ['プラン設計', '見積り作成', 'スケジュール策定']
  },
  {
    number: '04',
    title: 'ご契約・導入開始',
    description: '契約締結後、専任スタッフがデータ移行から初期設定まで丁寧にサポートします。スムーズな運用開始をお約束いたします。',
    duration: '5営業日',
    details: ['契約手続き', 'システム設定', '運用開始']
  },
];

export default function ProcessSection6() {
  return (
    <section id="process" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#E2E8F0] border border-gray-200 shadow-sm mb-6">
            <span className="text-[#4A5568] font-semibold text-sm tracking-wide">PROCESS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#4A5568] mb-6 leading-tight">
            導入までの
            <span className="block text-[#5B8FB9]">流れ</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            最短で<strong className="text-[#5B8FB9] font-semibold">5営業日</strong>から支援開始。
            お客様の業務に最適化されたソリューションを迅速に提供いたします。
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Step Card */}
                <div className="bg-white border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-all duration-300 group-hover:border-[#5B8FB9] relative">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-[#4A5568] text-white flex items-center justify-center font-semibold text-lg group-hover:bg-[#5B8FB9] transition-all duration-300 shadow-md">
                      {idx + 1}
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="mt-8 mb-6">
                    <div className="inline-flex items-center px-3 py-1 bg-[#5B8FB9] text-white text-sm font-semibold">
                      {step.duration}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#4A5568] mb-4 group-hover:text-[#5B8FB9] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Details List */}
                  <div className="border-t border-gray-200 pt-4">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-[#5B8FB9] rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Arrow (Desktop only) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:border-[#5B8FB9] group-hover:shadow-md transition-all duration-300">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-[#5B8FB9] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Information */}
        <div className="mt-20 bg-gray-50 border border-gray-200 shadow-lg p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-[#4A5568] mb-4">
                導入後のサポート体制
              </h3>
              <p className="text-gray-600">
                充実したサポート体制で、お客様の成功を継続的に支援いたします
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: '24/7 サポート', 
                  desc: '専任チームによる電話・メール・フォームでの包括的サポート',
                  details: ['緊急時対応', 'トラブルシューティング', '運用相談']
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: '操作研修・トレーニング', 
                  desc: '全社員向けの包括的な使い方レクチャーとトレーニングプログラム',
                  details: ['基本操作研修', '管理者向け研修', 'フォローアップ研修']
                },
                { 
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'カスタマイズ対応', 
                  desc: '御社の業務フローに合わせた機能追加・カスタマイズが可能',
                  details: ['機能追加開発', 'ワークフロー最適化', 'システム連携']
                }
              ].map((support, idx) => (
                <div key={idx} className="bg-white border border-gray-200 shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-[#E2E8F0] border border-gray-200 flex items-center justify-center text-[#5B8FB9] mx-auto mb-4 group-hover:bg-[#5B8FB9] group-hover:text-white transition-all duration-300">
                    {support.icon}
                  </div>
                  <h4 className="font-semibold text-[#4A5568] mb-2 group-hover:text-[#5B8FB9] transition-colors duration-300">
                    {support.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {support.desc}
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {support.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-center justify-center">
                        <div className="w-1 h-1 bg-[#5B8FB9] rounded-full mr-1"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}