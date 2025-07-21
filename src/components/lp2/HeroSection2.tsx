'use client';

import Button from '@/components/ui/Button';

export default function HeroSection2() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '600px',
      background: 'linear-gradient(90deg, #181A1B 0%, #888b90 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 0
    }}>
      {/* 左：テキスト・ボタン（縦中央） */}
      <div style={{ flex: 1, zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: 800, height: '100%' }}>
        <div style={{ marginBottom: '1.2rem', width: '100%' }}>
          <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.8rem', letterSpacing: '-0.04em', color: '#fff' }}>ARCHAIVE</div>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#fff', letterSpacing: '-0.03em', textAlign: 'center' }}>見積もり作成3分へ。</h1>
        <p style={{ marginBottom: '1.2rem', fontSize: '1.1rem', color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>AIが、あなたの会社の利益を最大化する。</p>
        <p style={{ marginBottom: '2.2rem', fontSize: '1.05rem', color: '#fff', lineHeight: 1.7, textAlign: 'center', fontWeight: 'bold' }}>
          業界初の「チャット式見積AIエージェント」搭載。<br />図面をアップするだけで、面倒な見積もり業務から解放されます。
        </p>
        <Button as="a" href="/lp2/apply" size="lg" className="bg-[#37B7C4] text-white text-base md:text-xl px-12 py-4 rounded-full font-bold hover:scale-105 transition w-full max-w-[340px] text-center" style={{ fontSize: '1.15rem' }}>
          無料でその実力をデモ体験
        </Button>
      </div>
      {/* 右：画像（やや下寄せ） */}
      <div style={{ flex: 1, zIndex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', minWidth: 0, height: '100%', paddingBottom: '40px' }}>
        <img src="/images/Group 18.png" alt="UIデモサンプル" style={{ width: '440px', maxWidth: '100%', height: 'auto', zIndex: 3, position: 'relative' }} />
      </div>
    </section>
  );
} 