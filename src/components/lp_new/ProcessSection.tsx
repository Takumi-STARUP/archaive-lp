'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "SaaS導入で即効性を実現",
      subtitle: "貴社の最大のボトルネックから解消",
      description: "まずは標準機能で、現在最も時間を浪費している業務を特定。貴社の業務フローを理解した上で、最短経路で成果を実感していただきます。",
      features: [
        "現在の業務フローを微細にヒアリング",
        "ボトルネックとなる業務を特定",
        "AIチャット型検索で検索時間を短縮",
        "既存の業務フローを変更せずに効果を実感"
      ]
    },
    {
      number: "02", 
      title: "STEP01の成果を全社に拡張",
      subtitle: "分断されたシステムを繋ぎ、情報の流れを統一",
      description: "STEP01で確認した成果をベースに、既存システムとの連携を実現。部門間でバラバラだった情報が一つに繋がり、組織全体の生産性が向上します。",
      features: [
        "STEP01で確認したニーズをベースに連携設計",
        "貴社の既存ERP・PLMシステムとシームレス連携",
        "部門を超えたデータの自動同期と一元化",
        "全社員が同じ情報で意思決定できる環境を構築"
      ]
    },
    {
      number: "03",
      title: "STEP01-02のデータで独自機能を開発", 
      subtitle: "貴社だけの競争優位性をシステム化",
      description: "STEP01-02で蜂集した貴社の業務データとノウハウを元に、他社では絶対に真似できない独自機能を開発。貴社の知的資産が、競争優位を生み続けるシステムに変わります。",
      features: [
        "STEP01-02で収集した業務データを活用した独自アルゴリズム",
        "貴社のノウハウをシステム化した専用機能",
        "業界特有の課題を解決するオリジナル機能",
        "継続的な改善で進化し続けるシステム"
      ]
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
        <div className="relative space-y-20">
          {/* 接続線 */}
          <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-1 bg-gradient-to-b from-[#37B7C4] to-[#2a9aa5] transform -translate-x-1/2 z-0"></div>
          {steps.map((step, index) => (
            <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 z-10`}>
              {/* ステップ間の接続アロー */}
              {index < steps.length - 1 && (
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 lg:hidden">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-[#37B7C4] rounded-full flex items-center justify-center text-white font-bold mb-2">
                      ↓
                    </div>
                    <div className="text-sm text-[#37B7C4] font-medium">
                      データ・ノウハウを活用
                    </div>
                  </div>
                </div>
              )}
              {/* ステップ番号エリア */}
              <div className="lg:w-1/3 text-center">
                <div className="relative mb-6">
                  {/* シンプルな番号表示 */}
                  <div className="inline-block">
                    <div className="text-6xl font-bold text-[#37B7C4] mb-4 relative">
                      {step.number}
                      {/* プログレスインジケーター */}
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#37B7C4] to-[#2a9aa5] rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* 結果インジケーター */}
                  {index > 0 && (
                    <div className="mt-4">
                      <div className="bg-[#37B7C4]/10 text-[#37B7C4] px-4 py-2 rounded-full text-xs font-bold border border-[#37B7C4]/20">
                        前ステップの成果を活用
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ステップ内容 */}
              <div className="lg:w-2/3">
                <div className="bg-white border-2 border-[#37B7C4]/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#37B7C4]/40">
                  <h3 className="text-2xl font-bold text-[#333333] mb-2">
                    Step {step.number}: {step.title}
                  </h3>
                  <div className="text-lg font-semibold text-[#37B7C4] mb-4">
                    【{step.subtitle}】
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
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
        <div className="mt-24">
          <div className="bg-gradient-to-r from-[#37B7C4]/10 to-[#37B7C4]/5 rounded-2xl p-10 text-center border border-[#37B7C4]/20">
            <h3 className="text-3xl font-bold text-[#333333] mb-8">
              「業務にシステムを合わせる」ことで<br />
              最終的に貴社独自の「競争優位性」を獲得
            </h3>
            
            {/* フローチャート */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4">
                
                {/* STEP 01 */}
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-[#37B7C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#37B7C4] font-bold text-lg">標準</span>
                  </div>
                  <div className="font-semibold text-gray-800 mb-2">SaaS導入</div>
                  <div className="text-sm text-gray-600 max-w-32 mx-auto">貴社の業務フローを理解した上で導入</div>
                </div>
                
                {/* 矢印1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:hidden text-[#37B7C4] text-2xl mb-2">↓</div>
                  <div className="hidden md:block text-[#37B7C4] text-3xl mx-4">→</div>
                  <div className="text-xs text-[#37B7C4] font-medium text-center bg-[#37B7C4]/10 px-3 py-1 rounded-full whitespace-nowrap">
                    成果とデータを活用
                  </div>
                  <div className="hidden md:block text-[#37B7C4] text-3xl mx-4">→</div>
                  <div className="md:hidden text-[#37B7C4] text-2xl mt-2">↓</div>
                </div>
                
                {/* STEP 02 */}
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-[#37B7C4]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#37B7C4] font-bold text-lg">連携</span>
                  </div>
                  <div className="font-semibold text-gray-800 mb-2">システム統合</div>
                  <div className="text-sm text-gray-600 max-w-32 mx-auto">既存システムと連携し全社の情報を一元化</div>
                </div>
                
                {/* 矢印2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:hidden text-[#37B7C4] text-2xl mb-2">↓</div>
                  <div className="hidden md:block text-[#37B7C4] text-3xl mx-4">→</div>
                  <div className="text-xs text-[#37B7C4] font-medium text-center bg-[#37B7C4]/10 px-3 py-1 rounded-full whitespace-nowrap">
                    蓄積されたデータを活用
                  </div>
                  <div className="hidden md:block text-[#37B7C4] text-3xl mx-4">→</div>
                  <div className="md:hidden text-[#37B7C4] text-2xl mt-2">↓</div>
                </div>
                
                {/* STEP 03 */}
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-[#37B7C4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">独自</span>
                  </div>
                  <div className="font-semibold text-gray-800 mb-2">競争優位</div>
                  <div className="text-sm text-gray-600 max-w-32 mx-auto">貴社だけのノウハウをシステム化し競争力を獲得</div>
                </div>
                
              </div>
            </div>
            
            <div className="bg-[#f54848]/5 rounded-xl p-6 border border-[#f54848]/20">
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="text-[#f54848] font-bold">重要：</span>
                <span className="text-[#37B7C4] font-semibold">各ステップの成果とデータが次のステップの基盤となり、</span><br />
                最終的に他社では絶対に真似できない独自システムを構築します
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}