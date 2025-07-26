'use client';

const features = [
  { 
    title: '超高精度な図面読解力', 
    description: 'AIが人間を超える精度で図面情報を読み取り、解釈します。', 
    icon: '📋',
    gradient: 'from-indigo-500 to-blue-500'
  },
  { 
    title: '圧倒的な処理スピード', 
    description: '人間が数時間かける作業を、AIがわずか数分で完了させます。', 
    icon: '⚡',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    title: '誰でも使える対話形式UI', 
    description: '専門知識不要。チャットで対話するだけの直感的な操作性。', 
    icon: '💬',
    gradient: 'from-pink-500 to-rose-500'
  },
];

export default function FeaturesSection10() {
  return (
    <section id="features3" className="py-24 bg-black text-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#37B7C4] px-6 py-2 mb-6">
            <span className="text-white font-bold tracking-wider">FEATURES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            なぜARCHAIVEなら、
            <span className="block text-[#37B7C4]">"見積もり3分"が可能なのか？</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* 機能一覧 */}
        <div className="space-y-24">
          {features.map((feature, idx) => (
            <div key={idx} className="group">
              <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                {/* テキスト側 */}
                <div className="flex-1">
                  <div className="bg-white p-8 border-l-4 border-[#37B7C4] relative">
                    {/* 背景の装飾 */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#37B7C4]"></div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl font-black text-[#37B7C4]">
                        0{idx + 1}
                      </div>
                      <div className="text-3xl">{feature.icon}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>

                    {/* 装飾ライン */}
                    <div className="mt-6">
                      <div className="w-16 h-1 bg-[#37B7C4]"></div>
                    </div>
                  </div>
                </div>

                {/* ビジュアル側 */}
                <div className="flex-1">
                  <div className="bg-gray-900 border-2 border-[#37B7C4] p-8">
                    {/* ダミーのUI表示 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-[#37B7C4]">
                        <div className="w-3 h-3 bg-[#37B7C4] rounded-full"></div>
                        <span className="text-sm font-mono">{feature.title}</span>
                      </div>
                      
                      {/* 機能別のダミーUI */}
                      {idx === 0 && (
                        <div className="space-y-2">
                          <div className="bg-gray-800 p-4 text-sm">
                            <span className="text-green-400">✓ </span>図面解析開始...
                          </div>
                          <div className="bg-gray-800 p-4 text-sm">
                            <span className="text-green-400">✓ </span>CADデータ読み込み完了
                          </div>
                          <div className="bg-gray-800 p-4 text-sm">
                            <span className="text-green-400">✓ </span>部品数: 247個 検出
                          </div>
                          <div className="bg-gray-800 p-4 text-sm">
                            <span className="text-[#37B7C4]">■ </span>解析精度: 98.7%
                          </div>
                        </div>
                      )}
                      
                      {idx === 1 && (
                        <div className="space-y-2">
                          <div className="bg-gray-800 p-4 text-sm flex justify-between">
                            <span>処理速度</span>
                            <span className="text-[#37B7C4]">3.2秒</span>
                          </div>
                          <div className="bg-gray-800 p-4 text-sm flex justify-between">
                            <span>従来比</span>
                            <span className="text-green-400">84倍高速</span>
                          </div>
                          <div className="bg-gray-800 p-4 text-sm">
                            <div className="flex justify-between mb-2">
                              <span>進捗</span>
                              <span>100%</span>
                            </div>
                            <div className="w-full bg-gray-700 h-2">
                              <div className="bg-[#37B7C4] h-2" style={{width: '100%'}}></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {idx === 2 && (
                        <div className="space-y-2">
                          <div className="bg-gray-800 p-3 text-sm rounded">
                            💬 図面をアップロードしました
                          </div>
                          <div className="bg-[#37B7C4] text-white p-3 text-sm rounded ml-8">
                            分析中...
                          </div>
                          <div className="bg-gray-800 p-3 text-sm rounded">
                            ✅ 見積もり完成！<br/>
                            総額: ¥850,000
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 