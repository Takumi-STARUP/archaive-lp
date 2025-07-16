'use client';

export default function SolutionSection2() {
  return (
    <section id="solution2" className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold mb-6 text-purple-700 text-center drop-shadow">その課題、業界初の「チャット式見積AI」が解決します。</h2>
        <div className="w-full max-w-2xl bg-white/80 rounded-2xl shadow-xl p-10 flex flex-col items-center border-4 border-purple-200">
          <img src="/images/archaive-logo.png" alt="ARCHAIVEロゴ" className="h-14 mb-4" />
          <p className="text-xl text-gray-700 text-center font-semibold">
            ARCHAIVEのAIエージェントが、<br />見積もり業務の属人化・非効率・ミスを根本から解決。
          </p>
        </div>
      </div>
      {/* Futuristic BG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" className="absolute bottom-0 left-0 w-full h-64 opacity-30">
          <path fill="#c4b5fd" fillOpacity="0.5" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 