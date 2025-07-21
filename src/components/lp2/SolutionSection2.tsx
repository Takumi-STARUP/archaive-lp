'use client';

export default function SolutionSection2() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-2 md:px-8 flex flex-col items-center">
        {/* 上部三角形装飾 */}
        <div className="w-32 h-8 mx-auto mb-2 relative z-10" style={{ marginTop: '-2.5rem' }}>
          <svg width="100%" height="100%" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 64,32 128,0" fill="#181A1B" fillOpacity="1" />
          </svg>
        </div>
        {/* カード本体 */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-black py-20 flex flex-col items-center shadow-lg">
          {/* 背景画像（ダミー） */}
          <img src="/images/solution-bg.jpg" alt="背景" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          {/* テキスト本体 */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-[#37B7C4] text-center drop-shadow">その課題、業界初の「チャット式見積AI」が解決します。</h2>
            <div className="w-full flex flex-col items-center">
              <img src="/images/archaive-logo.png" alt="ARCHAIVEロゴ" className="h-14 mb-4" />
              <p className="text-xl md:text-2xl text-white text-center font-semibold">
                ARCHAIVEのAIエージェントが、<br />見積もり業務の属人化・非効率・ミスを根本から解決。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 