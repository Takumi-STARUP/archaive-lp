'use client';

export default function SolutionSection2() {
  return (
    <section className="py-20 bg-black text-white shadow-2xl rounded-3xl">
      <div className="container mx-auto px-4 max-w-5xl text-center flex flex-col items-center">
        <h2 className="text-4xl font-extrabold mb-6 text-white text-center drop-shadow">その課題、業界初の「チャット式見積AI」が解決します。</h2>
        <div className="w-full max-w-2xl bg-[#37B7C4]/10 rounded-2xl shadow-xl p-10 flex flex-col items-center border-4 border-[#37B7C4]/40">
          <img src="/images/archaive-logo.png" alt="ARCHAIVEロゴ" className="h-14 mb-4" />
          <p className="text-xl text-white text-center font-semibold">
            ARCHAIVEのAIエージェントが、<br />見積もり業務の属人化・非効率・ミスを根本から解決。
          </p>
        </div>
      </div>
    </section>
  );
} 