'use client';

import Button from '@/components/ui/Button';

export default function HeroSection2() {
  return (
    <section className="py-20 bg-black text-white shadow-2xl rounded-3xl">
      <div className="container mx-auto px-4 max-w-5xl text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight leading-tight text-white">
          見積もり作成3分へ。<br className="hidden md:block" />AIが、あなたの会社の利益を最大化する。
        </h1>
        <p className="text-2xl mb-8 font-semibold drop-shadow-md text-white">
          業界初の「チャット式見積AIエージェント」搭載。図面をアップするだけで、面倒な見積もり業務から解放されます。
        </p>
        <Button as="a" href="#demo" size="lg" className="bg-[#37B7C4] text-white shadow-xl text-2xl px-12 py-5 rounded-full font-bold hover:scale-105 transition mb-8">
          無料でその実力をデモ体験
        </Button>
        {/* デモ画像ダミー */}
        <div className="relative w-[340px] h-[220px] bg-[#37B7C4]/10 rounded-2xl shadow-2xl border border-[#37B7C4]/30 flex items-center justify-center overflow-hidden backdrop-blur-md">
          <img src="/images/lp2-hero-abstract.png" alt="LP2 3Dアブストラクトダミー画像" className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <span className="relative text-2xl text-[#37B7C4] font-bold z-10">UIデモアニメーション</span>
        </div>
      </div>
    </section>
  );
} 