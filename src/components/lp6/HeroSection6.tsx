"use client";

import Link from 'next/link';

export default function HeroSection6() {
  return (
    <section className="relative min-h-screen bg-white pt-20 overflow-hidden">
      {/* Subtle professional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#E2E8F0]/30"></div>
      
      {/* Professional geometric accents */}
      <div className="absolute top-40 right-20 w-24 h-24 border border-gray-200 rotate-45 opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 border border-[#5B8FB9]/20 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#4A5568]/30 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#5B8FB9]/20 rounded-full"></div>

      <div className="relative container mx-auto px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Content Column */}
            <div className="space-y-8">
              {/* Corporate Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-[#E2E8F0] border border-gray-200 shadow-sm">
                <span className="text-[#4A5568] font-semibold text-sm tracking-wide">ENTERPRISE SOLUTION</span>
              </div>

              {/* Main Headline - Large, conservative typography */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-semibold text-[#4A5568] leading-tight">
                  見積もり作成
                  <span className="block text-[#5B8FB9]">3分へ。</span>
                </h1>
                
                <p className="text-2xl text-gray-800 font-medium leading-relaxed">
                  AIが、あなたの会社の利益を最大化する。
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  業界初の「チャット式見積AIエージェント」搭載。図面をアップするだけで、面倒な見積もり業務から解放されます。
                </p>
              </div>

              {/* Conservative CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/lp6/apply" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#5B8FB9] text-white font-semibold text-lg hover:bg-[#4A7A9F] transition-all duration-300 ease-out shadow-lg border-0"
                >
                  無料デモ体験を申し込む
                </Link>
                <Link 
                  href="/lp6/reviews" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4A5568] border-2 border-[#4A5568] font-semibold text-lg hover:bg-[#4A5568] hover:text-white transition-all duration-300 ease-out"
                >
                  導入事例を見る
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#5B8FB9]">200+</div>
                    <div className="text-sm text-gray-600">導入企業</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#5B8FB9]">84倍</div>
                    <div className="text-sm text-gray-600">効率化実績</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[#5B8FB9]">99.8%</div>
                    <div className="text-sm text-gray-600">精度</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Preview Column - Professional mockup */}
            <div className="lg:block">
              <div className="bg-white border border-gray-200 shadow-lg p-8 max-w-lg mx-auto">
                {/* Dashboard Header */}
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-[#4A5568]">見積もりダッシュボード</h3>
                    <div className="w-8 h-8 bg-[#E2E8F0] rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-[#5B8FB9] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-6">
                  {/* Status Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: '進行中', value: '24', color: '#5B8FB9' },
                      { label: '完了', value: '156', color: '#4A5568' },
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-50 border border-gray-200 p-4 text-center">
                        <div className="text-2xl font-semibold" style={{ color: item.color }}>
                          {item.value}
                        </div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4">
                    {['見積もり処理', '品質チェック', 'レポート生成'].map((label, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>{label}</span>
                          <span>{85 + i * 5}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2">
                          <div 
                            className="bg-[#5B8FB9] h-2" 
                            style={{ width: `${85 + i * 5}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Mockup */}
                  <div className="bg-gray-50 border border-gray-200 p-4">
                    <div className="text-sm font-medium text-gray-700 mb-3">月間処理量</div>
                    <div className="flex items-end space-x-2 h-16">
                      {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                        <div 
                          key={i} 
                          className="bg-[#5B8FB9] flex-1 opacity-80" 
                          style={{ height: `${height}%` }} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}