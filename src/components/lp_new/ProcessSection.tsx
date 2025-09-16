'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "SaaS導入",
      subtitle: "課題のボトルネックを解消する",
      description: "標準機能で、最も負荷の高い業務から最適化し、確実な成果を短期間で実感していただく。",
      bgColor: "bg-[#37B7C4]/85",
      textColor: "text-[#37B7C4]",
      arrowColor: "fill-[#37B7C4]/85",
      features: []
    },
    {
      number: "02", 
      title: "既存システム連携",
      subtitle: "分断された情報を繋ぎ合わせる",
      description: "貴社が既にお使いのシステムと連携し、組織全体の業務プロセスが淀みなく流れるよう最適化する。",
      bgColor: "bg-[#37B7C4]/95",
      textColor: "text-[#37B7C4]",
      arrowColor: "fill-[#37B7C4]/95",
      features: []
    },
    {
      number: "03",
      title: "カスタマイズ開発", 
      subtitle: "競争力の源泉を強化する",
      description: "貴社ならではの強みを、専用の機能として開発・実装。競争力を強化する「武器」を共に創り上げる。",
      bgColor: "bg-[#37B7C4]",
      textColor: "text-[#37B7C4]",
      features: []
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-3 sm:mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-2 sm:mb-3 leading-tight">
            業務にシステムを合わせるのであって、<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>システムに業務を合わせるのではない。
          </h2>
        </div>

        {/* ステップ一覧 */}
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 px-2 sm:p-5 relative">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="max-w-4xl mx-auto transform hover:-translate-y-1 transition-all duration-500">
                <div className={`${step.bgColor} text-white p-3 sm:p-2.5 rounded-t-lg font-bold flex items-center w-full border-2 border-[#37B7C4] border-b-0`}>
                  <span className={`bg-white ${step.textColor} rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mr-2 sm:mr-2.5 text-xs sm:text-sm`}>
                    {step.number}
                  </span>
                  <span className="text-sm sm:text-base">
                    {step.title}【{step.subtitle}】
                  </span>
                </div>
                <div className="bg-white rounded-b-lg p-3 sm:p-2.5 border-2 border-[#37B7C4] w-full">
                  <p className="m-0 text-gray-600 text-sm sm:text-base" style={{ fontWeight: 600 }}>{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-2.5 mb-0 sm:mt-3 sm:mb-0.5 md:mt-3.5 md:mb-1">
                  <svg
                    width="40"
                    height="20"
                    viewBox="0 0 40 20"
                    className={step.arrowColor}
                  >
                    <path d="M20 20L0 0H40L20 20Z" />
                  </svg>
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



      </div>
    </section>
  );
}