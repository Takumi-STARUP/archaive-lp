'use client';

import Button from '@/components/ui/Button';

export default function HeroSection2() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-black via-[#181A1B] to-[#37B7C4]/30 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">ARCHAIVE AIデータ活用クラウド</h1>
        <div className="mx-auto w-32 h-2 bg-gradient-to-r from-[#37B7C4] via-blue-400 to-purple-400 rounded-full mb-8"></div>
        <p className="text-xl md:text-2xl mb-10 font-semibold text-white/90">業界の常識を超える、AI×3Dで未来を切り拓く。</p>
        <a href="/lp2/apply" className="inline-block px-10 py-4 bg-[#37B7C4] text-white rounded-xl font-bold text-2xl shadow-lg hover:scale-105 hover:shadow-cyan-400/50 transition">無料デモ体験</a>
      </div>
      {/* 3Dイメージのダミー */}
      <img src="/images/lp2-hero-3d.png" alt="3Dイメージ" className="absolute right-0 bottom-0 w-1/2 max-w-lg opacity-60 pointer-events-none select-none" />
    </section>
  );
} 