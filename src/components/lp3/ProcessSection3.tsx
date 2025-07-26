'use client';

const steps = [
  {
    number: '01',
    title: 'お問い合わせ・デモ予約',
    description: 'フォームから30秒で簡単予約。',
    duration: '30秒',
    icon: '📝'
  },
  {
    number: '02', 
    title: 'オンラインデモ・ヒアリング',
    description: '貴社の課題を伺いながら、実際の画面で機能や効果をご説明します（30分）。',
    duration: '30分',
    icon: '💻'
  },
  {
    number: '03',
    title: 'ご契約・導入サポート',
    description: '専任スタッフがデータ移行から初期設定まで丁寧にサポートします。',
    duration: '5営業日',
    icon: '🚀'
  },
];

export default function ProcessSection3() {
  return (
    <section id="process3" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black px-6 py-2 mb-6">
            <span className="text-white font-bold tracking-wider">PROCESS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            導入までの
            <span className="block text-[#37B7C4]">流れ</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            最短で<strong className="text-[#37B7C4]">5営業日</strong>から支援開始できます！
          </p>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* プロセス */}
        <div className="relative">
          {/* 接続線 */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* ステップカード */}
                <div className="bg-gray-50 border-2 border-gray-300 p-8 text-center group-hover:border-[#37B7C4] transition-all duration-300 relative">
                  {/* ステップ番号 */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-[#37B7C4] transition-colors duration-300">
                      {idx + 1}
                    </div>
                  </div>
                  
                  {/* アイコン */}
                  <div className="text-4xl mb-6 mt-8">{step.icon}</div>
                  
                  {/* 所要時間 */}
                  <div className="inline-block bg-[#37B7C4] text-white px-4 py-1 text-sm font-bold mb-4">
                    {step.duration}
                  </div>
                  
                  {/* タイトル */}
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#37B7C4] transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* 説明 */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* 装飾ライン */}
                  <div className="mt-6">
                    <div className="w-12 h-0.5 bg-[#37B7C4] mx-auto group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>
                
                {/* 矢印（大画面のみ） */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-[#37B7C4] transition-colors duration-300">
                      <svg className="w-6 h-6 text-gray-600 group-hover:text-[#37B7C4] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* サポート情報 */}
        <div className="mt-16 bg-black border-2 border-[#37B7C4] p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">導入後のサポートも充実</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📞', title: '24/7 サポート', desc: 'いつでもお気軽にお電話ください' },
              { icon: '🎓', title: '操作研修', desc: '全社員向けの使い方レクチャー' },
              { icon: '🔧', title: 'カスタマイズ', desc: '御社に合わせた機能追加も可能' }
            ].map((support, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{support.icon}</div>
                <div className="font-bold text-[#37B7C4] mb-1">{support.title}</div>
                <div className="text-gray-300 text-sm">{support.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}