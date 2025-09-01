'use client';

export default function SolutionSection() {
  const solutions = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      before: "図面や価格・仕様書などの検索に時間がかかる",
      after: "AIと対話するだけで、欲しいデータが5秒で見つかる",
      detail: "「厚さ5mmのSUS304を使ったブラケット図面は？」といった自然な対話で、AIが意図を汲み取り、最適な候補を瞬時に提示する。",
      improvement: "数時間 → 数秒へ"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
      before: "業務やデータが属人化している",
      after: "ベテランも新人も、すぐに同一情報に辿り着ける",
      detail: "ベテランの頭の中にあった知見を、誰もがアクセスできる「会社の資産」に変え、新任者でも的確な判断を可能にする。",
      improvement: "属人化 → 全社共有へ"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      before: "部門間で繰り返される確認作業と手戻り",
      after: "社内のデータが一元管理・見える化され、部門間の壁を超える",
      detail: "ARCHAIVEがハブとなり、全部門の情報がリアルタイムに連携。開発スピードを劇的に向上させる。",
      improvement: "何度も確認 → 一度で完了へ"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            ARCHAIVEが実現する新しい働き方
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Before → After で見る、劇的な業務改善効果
          </p>
        </div>

        {/* ソリューション一覧 */}
        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* アイコンと改善指標 */}
              <div className="lg:w-1/3 text-center">
                <div className="w-24 h-24 bg-[#37B7C4] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {solution.icon}
                </div>
                <div className="bg-[#37B7C4] text-white px-6 py-3 rounded-full font-bold text-lg">
                  {solution.improvement}
                </div>
              </div>

              {/* Before → After */}
              <div className="lg:w-2/3">
                <div className="relative">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Before */}
                    <div className="bg-gray-100 rounded-2xl p-6 relative border border-gray-200">
                      <div className="absolute -top-3 left-6 bg-gray-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Before
                      </div>
                      <h4 className="text-lg font-medium text-gray-600 mb-4 mt-4 min-h-[60px]">
                        {solution.before}
                      </h4>
                    </div>

                    {/* After */}
                    <div className="bg-gradient-to-br from-[#37B7C4]/15 to-[#37B7C4]/10 border-2 border-[#37B7C4]/30 rounded-2xl p-8 relative shadow-lg transform hover:scale-105 transition-all duration-300">
                      <div className="absolute -top-3 left-6 bg-[#37B7C4] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
                        After
                      </div>
                      <h4 className="text-xl font-bold text-[#37B7C4] mb-4 mt-4 min-h-[60px] leading-tight">
                        {solution.after}
                      </h4>
                      {/* キラキラ効果を追加 */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-[#37B7C4] rounded-full animate-pulse"></div>
                      <div className="absolute top-4 right-6 w-2 h-2 bg-[#37B7C4]/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                  
                  {/* Arrow positioned between Before and After */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-3 shadow-lg border border-[#37B7C4]/20">
                      <div className="text-[#37B7C4] text-3xl font-bold animate-pulse">
                        →
                      </div>
                    </div>
                  </div>
                </div>

                {/* 詳細説明 */}
                <div className="mt-6 p-6 bg-white border border-gray-200 rounded-xl">
                  <p className="text-gray-600 leading-relaxed">
                    {solution.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 統合メッセージ */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#37B7C4]/10 to-[#37B7C4]/5 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#333333] mb-6">
              これら全てを実現するのが、ARCHAIVEです
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              単なる業務効率化ツールではなく、<br />
              <span className="text-[#37B7C4] font-semibold">貴社の競争力そのものを強化する、戦略的パートナー</span>
            </p>
            
            {/* 改善の段階表現 */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-700 mb-6">導入企業が実感する3つの変革</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#37B7C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#37B7C4] font-bold text-xl">1</span>
                  </div>
                  <h5 className="font-bold text-[#333333] mb-2">即効性</h5>
                  <p className="text-sm text-gray-600">
                    導入初日から<br />
                    検索時間が劇的に改善
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#37B7C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#37B7C4] font-bold text-xl">2</span>
                  </div>
                  <h5 className="font-bold text-[#333333] mb-2">持続性</h5>
                  <p className="text-sm text-gray-600">
                    知識が蓄積され<br />
                    組織力が継続的に向上
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#37B7C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#37B7C4] font-bold text-xl">3</span>
                  </div>
                  <h5 className="font-bold text-[#333333] mb-2">拡張性</h5>
                  <p className="text-sm text-gray-600">
                    業務範囲の拡大に応じて<br />
                    価値も無限に拡大
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}