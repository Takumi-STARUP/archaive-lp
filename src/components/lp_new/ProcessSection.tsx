'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "SaaS導入",
      subtitle: "課題のボトルネックを解消する",
      description: "標準機能で、最も負荷の高い業務から最適化し、確実な成果を短期間で実感していただく。",
features: []
    },
    {
      number: "02", 
      title: "既存システム連携",
      subtitle: "分断された情報を繋ぎ合わせる",
      description: "貴社が既にお使いのシステムと連携し、組織全体の業務プロセスが淀みなく流れるよう最適化する。",
features: []
    },
    {
      number: "03",
      title: "カスタマイズ開発", 
      subtitle: "競争力の源泉を強化する",
      description: "貴社ならではの強みを、専用の機能として開発・実装。競争力を強化する「武器」を共に創り上げる。",
features: []
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 sm:mb-6 leading-tight">
            業務にシステムを合わせるのであって、<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>システムに業務を合わせるのではない。
          </h2>
        </div>

        {/* ステップ一覧 */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 px-2 sm:p-5 relative">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="max-w-4xl mx-auto">
                <div className="bg-[#37B7C4] text-white p-3 sm:p-2.5 rounded-t-lg font-bold flex items-center w-full">
                  <span className="bg-white text-[#37B7C4] rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mr-2 sm:mr-2.5 text-xs sm:text-sm">
                    {step.number}
                  </span>
                  <span className="text-sm sm:text-base">
                    {step.title}【{step.subtitle}】
                  </span>
                </div>
                <div className="bg-white rounded-b-lg p-3 sm:p-2.5 border border-gray-300 w-full">
                  <p className="m-0 text-gray-600 text-sm sm:text-base" style={{ fontWeight: 550 }}>{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-3 -mb-1 sm:mt-4 sm:-mb-2 md:mt-5 md:-mb-2">
                  <div className="arrow w-0 h-0 border-l-5 border-r-5 border-t-5 border-l-transparent border-r-transparent border-t-[#37B7C4]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ARCHAIVEアプローチ */}
        <div className="text-center mt-6 sm:mt-8 px-2">
          <div className="bg-gray-800 text-white text-center py-3 sm:py-4 px-4 sm:px-8 rounded-lg max-w-4xl mx-auto">
            <p className="text-base sm:text-lg">
              <span className="text-white font-bold text-lg sm:text-2xl">ARCHAIVE</span>
              <span className="text-gray-300">の</span>
              <span className="text-white font-bold text-lg sm:text-2xl">「SaaS + 伴走型開発」</span>
              <span className="text-gray-300">アプローチ</span>
            </p>
          </div>
        </div>

        <style jsx>{`
          .arrow {
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-top: 20px solid #37B7C4;
          }
        `}</style>


      </div>
    </section>
  );
}