'use client';

export default function SolutionSection10() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black px-6 py-2 mb-6">
            <span className="text-white font-bold tracking-wider">SOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            その課題、業界初の
            <span className="block text-[#37B7C4]">「チャット式見積AI」</span>
            が解決します。
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* メインビジュアル */}
        <div className="bg-gray-50 border-2 border-black p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 左側：テキスト */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                ARCHAIVEのAIエージェントが、<br />
                見積もり業務の属人化・非効率・ミスを根本から解決。
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: '🤖', text: 'AI が図面を瞬時に解析' },
                  { icon: '💬', text: 'チャットで簡単に操作' },
                  { icon: '⚡', text: '3分で正確な見積もりを生成' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#37B7C4] text-white rounded-full flex items-center justify-center font-bold">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium text-black">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 右側：ダミーUI */}
            <div className="flex-1">
              <div className="bg-white border-2 border-gray-300 p-6 max-w-md mx-auto">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-black mb-2">ARCHAIVE AI チャット</h4>
                  <div className="w-full h-0.5 bg-[#37B7C4]"></div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-100 p-3 rounded-l-lg rounded-tr-lg">
                    図面をアップロードしてください
                  </div>
                  <div className="bg-[#37B7C4] text-white p-3 rounded-r-lg rounded-tl-lg ml-8">
                    [図面ファイル]
                  </div>
                  <div className="bg-gray-100 p-3 rounded-l-lg rounded-tr-lg">
                    分析完了しました！<br />
                    見積もりを生成中...
                  </div>
                  <div className="bg-gray-100 p-3 rounded-l-lg rounded-tr-lg">
                    ✅ 見積もり完成<br />
                    総額: ¥1,250,000<br />
                    工期: 15日
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 従来との比較 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 従来の方法 */}
          <div className="bg-gray-100 border-2 border-gray-400 p-8">
            <h3 className="text-xl font-bold text-black mb-6 text-center">従来の見積もり</h3>
            <div className="space-y-4">
              {['図面の手作業確認', '過去事例の検索', '計算・入力作業', '複数回の確認作業'].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <div className="text-2xl font-bold text-red-600">4.2時間</div>
              <div className="text-sm text-gray-600">平均所要時間</div>
            </div>
          </div>

          {/* ARCHAIVEの方法 */}
          <div className="bg-black border-2 border-[#37B7C4] p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">ARCHAIVEの見積もり</h3>
            <div className="space-y-4">
              {['図面アップロード', 'AI自動解析', '見積もり自動生成', '結果確認・調整'].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#37B7C4] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-white">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <div className="text-2xl font-bold text-[#37B7C4]">3分</div>
              <div className="text-sm text-gray-300">平均所要時間</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 