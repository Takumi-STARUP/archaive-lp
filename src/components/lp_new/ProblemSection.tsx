'use client';

export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "図面や価格・仕様書などの検索に時間がかかり、コストが増大",
      description: "過去の類似実績や仕様を再利用できず、毎回ゼロからの調査に多大な時間が費やされている。",
      impact: "業務時間の大半を消費",
      color: "#f54848"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      title: "業務やデータが属人化している",
      description: "見積もり根拠やトラブル対処法などの重要な情報が、特定の担当者の経験や記憶に依存し、会社のノウハウが失われ続けている。",
      impact: "技術継承の危機",
      color: "#f54848"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "「設計」「調達」「営業」「製造」等で繰り返される確認作業と手戻り",
      description: "部門間のやり取りや手戻りにかかる見えにくい時間が、確実に会社のコストを圧迫している。",
      impact: "業務効率の大幅低下",
      color: "#f54848"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル - ペルソナに深く響く内容 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            日々の業務の中に、貴社の成長を妨げている要因が隠れていませんか？
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            多くの製造業企業が直面している、見えにくいが確実に利益を圧迫している3つの課題
          </p>
        </div>

        {/* 課題一覧 */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              {/* アイコン */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white`} style={{backgroundColor: problem.color}}>
                {problem.icon}
              </div>
              
              {/* タイトル */}
              <h3 className="text-xl font-bold text-[#333333] mb-4 leading-tight">
                {problem.title}
              </h3>
              
              {/* 説明 */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {problem.description}
              </p>
              
              {/* インパクト */}
              <div className="border-t border-gray-200 pt-4">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white`} style={{backgroundColor: problem.color}}>
                  {problem.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底上げメッセージ */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              これらの課題は「仕方がない」ものではありません
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              適切な仕組みとテクノロジーの活用により、これらすべての課題を解決し、<br />
              <span className="text-[#37B7C4] font-semibold">貴社の競争力を大幅に向上させることが可能</span>です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}