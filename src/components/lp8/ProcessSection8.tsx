'use client';

const steps = [
  {
    number: '01',
    title: 'お問い合わせ・デモ予約',
    description: 'フォームから30秒で簡単予約。',
    duration: '30秒',
    symbol: '始',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: '02', 
    title: 'オンラインデモ・ヒアリング',
    description: '貴社の課題を伺いながら、実際の画面で機能や効果をご説明します（30分）。',
    duration: '30分',
    symbol: '話',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'ご契約・導入サポート',
    description: '専任スタッフがデータ移行から初期設定まで丁寧にサポートします。',
    duration: '5営業日',
    symbol: '完',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
];

export default function ProcessSection8() {
  return (
    <section id="process8" className="py-32 bg-white scroll-mt-20 relative overflow-hidden">
      {/* 和紙風背景テクスチャー */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 80px,
            rgba(139, 58, 58, 0.05) 80px,
            rgba(139, 58, 58, 0.05) 81px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 80px,
            rgba(114, 113, 113, 0.05) 80px,
            rgba(114, 113, 113, 0.05) 81px
          )`
        }}></div>
      </div>

      {/* 伝統的装飾パターン */}
      <div className="absolute bottom-20 left-20 opacity-5">
        <svg width="150" height="150" viewBox="0 0 150 150">
          {/* 青海波風パターン */}
          <defs>
            <pattern id="seigaiha-process" x="0" y="0" width="30" height="15" patternUnits="userSpaceOnUse">
              <path d="M0,7.5 Q7.5,0 15,7.5 Q22.5,15 30,7.5" fill="none" stroke="#8B3A3A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seigaiha-process)"/>
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        {/* セクションヘッダー - 和風デザイン */}
        <div className="text-center mb-24">
          <div className="relative inline-block mb-8">
            <div className="bg-[#F5F5DC]/80 backdrop-blur-sm px-8 py-3 rounded-sm border border-gray-200/50 mb-8">
              <span className="text-[#727171] font-light tracking-widest text-sm">PROCESS</span>
            </div>
          </div>
          
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-light text-[#4A4A4A] mb-6 leading-tight tracking-wider">
              導入までの
              <span className="block text-[#8B3A3A] font-normal">流れ</span>
            </h2>
            {/* 装飾線 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-[#8B3A3A]"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-px bg-[#8B3A3A]/50"></div>
          </div>
          
          <p className="text-lg text-[#727171] mb-6 font-light mt-8">
            最短で<strong className="text-[#8B3A3A] font-normal">5営業日</strong>から支援開始できます
          </p>
        </div>

        {/* プロセス - 和風デザイン */}
        <div className="relative">
          {/* 伝統的な接続線 */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B3A3A]/30 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* メインカード */}
                <div className="relative bg-[#F5F5DC]/60 backdrop-blur-sm border border-gray-200/50 p-10 text-center group-hover:border-[#8B3A3A]/30 transition-all duration-500 shadow-sm hover:shadow-md rounded-sm">
                  {/* 和紙風テクスチャー */}
                  <div className="absolute inset-0 opacity-5 rounded-sm">
                    <div className="w-full h-full" style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 15px,
                        rgba(139, 58, 58, 0.1) 15px,
                        rgba(139, 58, 58, 0.1) 16px
                      )`
                    }}></div>
                  </div>

                  {/* ステップ番号 - 和風円 */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="relative w-16 h-16 bg-white border-2 border-[#8B3A3A]/20 rounded-full flex items-center justify-center shadow-sm group-hover:border-[#8B3A3A]/50 transition-all duration-300">
                      <span className="text-[#8B3A3A] font-light text-lg tracking-wider">{step.number}</span>
                      {/* 装飾点 */}
                      <div className="absolute top-2 right-2 w-1 h-1 bg-[#8B3A3A]/40 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#8B3A3A]/40 rounded-full"></div>
                    </div>
                  </div>

                  {/* 縦書き和文字 */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="text-xl font-light text-[#8B3A3A] writing-mode-vertical-rl">
                      {step.symbol}
                    </div>
                  </div>

                  {/* アイコン */}
                  <div className="text-[#8B3A3A] mb-6 mt-12 opacity-80 group-hover:opacity-100 transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* 所要時間タグ */}
                  <div className="inline-block bg-[#8B3A3A] text-white px-6 py-2 text-sm font-light mb-6 rounded-sm tracking-wider">
                    {step.duration}
                  </div>
                  
                  {/* タイトル */}
                  <h3 className="text-xl font-light text-[#4A4A4A] mb-6 group-hover:text-[#8B3A3A] transition-colors duration-300 tracking-wider leading-relaxed">
                    {step.title}
                  </h3>

                  {/* 装飾線 */}
                  <div className="w-16 h-px bg-[#8B3A3A]/30 mx-auto mb-6 group-hover:w-24 transition-all duration-300"></div>
                  
                  {/* 説明文 */}
                  <p className="text-[#727171] leading-relaxed font-light text-sm">
                    {step.description}
                  </p>

                  {/* カード装飾 */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-[#8B3A3A]/15 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-[#8B3A3A]/15 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* 伝統的な矢印装飾 */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                    <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                      {/* 和風矢印背景 */}
                      <div className="w-full h-full bg-white/80 backdrop-blur-sm border border-[#8B3A3A]/20 rounded-full flex items-center justify-center shadow-sm group-hover:border-[#8B3A3A]/40 group-hover:bg-[#F5F5DC]/50 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#8B3A3A]/60 group-hover:text-[#8B3A3A] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      {/* 装飾点 */}
                      <div className="absolute top-1 right-1 w-1 h-1 bg-[#8B3A3A]/30 rounded-full"></div>
                      <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#8B3A3A]/30 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* サポート情報セクション - 和風デザイン */}
        <div className="mt-32">
          <div className="relative bg-white/80 backdrop-blur-sm border border-[#8B3A3A]/20 p-12 text-center rounded-sm shadow-sm">
            {/* 和紙風テクスチャー */}
            <div className="absolute inset-0 opacity-5 rounded-sm">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(139, 58, 58, 0.1) 1px, transparent 1px),
                                 radial-gradient(circle at 70% 70%, rgba(139, 58, 58, 0.1) 1px, transparent 1px)`,
                backgroundSize: '25px 25px'
              }}></div>
            </div>

            <div className="relative">
              <h3 className="text-2xl font-light text-[#4A4A4A] mb-8 tracking-wider">導入後のサポートも充実</h3>
              <div className="w-20 h-px bg-[#8B3A3A]/30 mx-auto mb-12"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { 
                    title: '24/7 サポート', 
                    desc: 'いつでもお気軽にお電話ください',
                    symbol: '全',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )
                  },
                  { 
                    title: '操作研修', 
                    desc: '全社員向けの使い方レクチャー',
                    symbol: '学',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )
                  },
                  { 
                    title: 'カスタマイズ', 
                    desc: '御社に合わせた機能追加も可能',
                    symbol: '調',
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  }
                ].map((support, idx) => (
                  <div key={idx} className="relative group">
                    <div className="relative bg-[#F5F5DC]/40 p-8 rounded-sm border border-gray-200/50 hover:border-[#8B3A3A]/30 transition-all duration-300 group-hover:shadow-sm">
                      {/* 縦書き和文字 */}
                      <div className="absolute top-4 right-4 opacity-15 group-hover:opacity-30 transition-opacity duration-300">
                        <div className="text-lg font-light text-[#8B3A3A] writing-mode-vertical-rl">
                          {support.symbol}
                        </div>
                      </div>

                      <div className="text-[#8B3A3A] mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {support.icon}
                      </div>
                      <div className="font-light text-[#8B3A3A] mb-3 tracking-wider">{support.title}</div>
                      <div className="w-8 h-px bg-[#8B3A3A]/30 mx-auto mb-3"></div>
                      <div className="text-[#727171] text-sm font-light leading-relaxed">{support.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 装飾要素 */}
            <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-[#8B3A3A]/10"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-[#8B3A3A]/10"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}