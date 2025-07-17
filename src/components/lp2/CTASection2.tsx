'use client';

import Button from '@/components/ui/Button';

export default function CTASection2() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-[#181A1B] to-[#37B7C4]/40 text-white text-center relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-[#37B7C4] drop-shadow">今すぐ未来の業務体験を</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-[#37B7C4] via-blue-400 to-purple-400 rounded-full mb-8"></div>
        <p className="text-xl mb-10 text-white/90">AI×3Dで、あなたのビジネスに新しい価値を。</p>
        <a href="/lp2/apply" className="inline-block px-12 py-5 bg-[#37B7C4] text-white rounded-2xl font-bold text-2xl shadow-2xl hover:scale-105 hover:shadow-cyan-400/70 transition-all duration-200 ring-2 ring-[#37B7C4]/40">無料デモ体験</a>
      </div>
      {/* Decorative BG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" className="absolute bottom-0 left-0 w-full h-64 opacity-30">
          <path fill="#a5b4fc" fillOpacity="0.5" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 