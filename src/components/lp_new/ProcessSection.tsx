'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "SaaS導入",
      subtitle: "課題のボトルネックを解消する",
      description: "標準機能で、最も負荷の高い業務から最適化し、確実な成果を短期間で実感していただく。",
      features: [
        "AIチャット型検索の導入",
        "類似図面検索機能",
        "基本的なデータ管理機能",
        "ユーザー権限設定"
      ],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      color: "#37B7C4"
    },
    {
      number: "02", 
      title: "既存システム連携",
      subtitle: "分断された情報を繋ぎ合わせる",
      description: "貴社が既にお使いのシステムと連携し、組織全体の業務プロセスが淀みなく流れるよう最適化する。",
      features: [
        "ERP・PLMシステム連携",
        "生産管理システム連携",
        "データ同期の自動化",
        "統合ダッシュボード構築"
      ],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
        </svg>
      ),
      color: "#37B7C4"
    },
    {
      number: "03",
      title: "カスタマイズ開発", 
      subtitle: "競争力の源泉を強化する",
      description: "貴社ならではの強みを、専用の機能として開発・実装。競争力を強化する「武器」を共に創り上げる。",
      features: [
        "独自業務プロセスの機能化",
        "専用アルゴリズム開発",
        "業界特化機能の実装",
        "継続的な機能改善"
      ],
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      color: "#37B7C4"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            業務にシステムを合わせるのであって、<br />
            システムに業務を合わせるのではない。
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            ARCHAIVEの「SaaS + 伴走型開発」アプローチ
          </p>
        </div>

        {/* ステップ一覧 */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* ステップ番号とアイコン */}
              <div className="lg:w-1/3 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-[#37B7C4] rounded-full flex items-center justify-center mx-auto text-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#f54848] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* ステップ内容 */}
              <div className="lg:w-2/3">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-[#333333] mb-2">
                    Step {step.number}: {step.title}
                  </h3>
                  <div className="text-lg font-semibold text-[#37B7C4] mb-4">
                    【{step.subtitle}】
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* 機能リスト */}
                  <div className="grid md:grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#37B7C4] rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 進化の流れ */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#37B7C4]/10 to-[#37B7C4]/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              段階的に成長し、最終的に貴社独自の「競争力」を獲得
            </h3>
            <div className="flex justify-center items-center space-x-8 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#37B7C4]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#37B7C4] font-bold">標準</span>
                </div>
                <div className="text-sm text-gray-600">SaaS導入</div>
              </div>
              <div className="text-[#37B7C4] text-2xl">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#37B7C4]/40 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#37B7C4] font-bold">連携</span>
                </div>
                <div className="text-sm text-gray-600">システム統合</div>
              </div>
              <div className="text-[#37B7C4] text-2xl">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#37B7C4] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">独自</span>
                </div>
                <div className="text-sm text-gray-600">競争優位</div>
              </div>
            </div>
            <p className="text-lg text-gray-600">
              <span className="text-[#37B7C4] font-semibold">お客様のペースで、確実に成果を積み重ねながら</span>、<br />
              最終的に他社では真似のできない独自システムを構築します
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}