'use client';

import Button from '@/components/ui/Button';

export default function HeroSection2() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 text-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text */}
        <div className="md:w-1/2 w-full text-center md:text-left z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight leading-tight">
            見積もり作成3分へ。<br className="hidden md:block" />AIが、あなたの会社の利益を最大化する。
          </h1>
          <p className="text-2xl mb-8 font-semibold drop-shadow-md">
            業界初の「チャット式見積AIエージェント」搭載。図面をアップするだけで、面倒な見積もり業務から解放されます。
          </p>
          <Button as="a" href="#demo" size="lg" className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white shadow-xl text-2xl px-12 py-5 rounded-full font-bold hover:scale-105 transition mb-4">
            無料でその実力をデモ体験
          </Button>
        </div>
        {/* Right: Animation Placeholder with glassmorphism + dummy image */}
        <div className="md:w-1/2 w-full flex justify-center mt-12 md:mt-0 z-10">
          <div className="relative w-[340px] h-[260px] bg-white/20 rounded-3xl shadow-2xl border border-white/30 flex items-center justify-center overflow-hidden animate-fade-in backdrop-blur-lg">
            <img src="/images/lp2-hero-abstract.png" alt="LP2 3Dアブストラクトダミー画像" className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <span className="relative text-3xl text-blue-900 font-bold animate-pulse z-10">UIデモアニメーション</span>
          </div>
        </div>
      </div>
      {/* 3D Abstract Art BG (placeholder) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" className="absolute bottom-0 left-0 w-full h-64 opacity-40">
          <path fill="#a5b4fc" fillOpacity="0.5" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease;
        }
      `}</style>
    </section>
  );
} 