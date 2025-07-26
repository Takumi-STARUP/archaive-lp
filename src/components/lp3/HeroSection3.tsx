"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

// 固定された位置とアニメーション値でHydration errorを防ぐ
const particlePositions = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: (i * 7.33) % 100, // 固定されたパターン
  top: (i * 13.21) % 100,
  delay: (i * 0.1) % 5,
  duration: 15 + (i % 10)
}));

// 5つの背景パターン
const backgroundPatterns = [
  {
    name: '幾何学',
    component: () => (
      <div className="absolute inset-0">
        {/* 幾何学パターン背景 */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#37B7C4]/20 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-black/10 rounded-full"></div>
        <div className="absolute bottom-40 left-32 w-20 h-20 bg-[#37B7C4]/10 rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-black/20"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 border-2 border-[#37B7C4]/10 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-black/5 -rotate-12"></div>
      </div>
    )
  },
  {
    name: 'グリッド',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* グリッドパターン */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #37B7C4 1px, transparent 1px), linear-gradient(to bottom, #37B7C4 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.05
        }}></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#37B7C4]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      </div>
    )
  },
  {
    name: 'パーティクル',
    component: () => (
      <div className="absolute inset-0">
        {particlePositions.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          >
            {/* 異なる幾何学図形をランダムに表示 */}
            {particle.id % 4 === 0 && <div className="w-full h-full border border-[#37B7C4]/30 rotate-45"></div>}
            {particle.id % 4 === 1 && <div className="w-full h-full bg-black/10 rounded-full"></div>}
            {particle.id % 4 === 2 && <div className="w-full h-full bg-[#37B7C4]/20"></div>}
            {particle.id % 4 === 3 && <div className="w-full h-full border border-black/20 rounded-full"></div>}
          </div>
        ))}
      </div>
    )
  },
  {
    name: 'ドット',
    component: () => (
      <div className="absolute inset-0">
        {/* ドットパターン */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #37B7C4 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.1
        }}></div>
        {/* 大きなドット装飾 */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#37B7C4] rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-black/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-[#37B7C4]/20 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-black/30 rounded-full"></div>
      </div>
    )
  },
  {
    name: 'ウェーブ',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* ウェーブパターン */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#37B7C4" stopOpacity="0.1" />
              <stop offset="50%" stopColor="black" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#37B7C4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,20 Q20,10 40,20 T80,20 L100,50 L100,100 L0,100 Z" fill="url(#waveGradient)" />
          <path d="M0,60 Q25,50 50,60 T100,60 L100,100 L0,100 Z" fill="url(#waveGradient)" opacity="0.5" />
          <path d="M0,80 Q30,70 60,80 T100,80 L100,100 L0,100 Z" fill="url(#waveGradient)" opacity="0.3" />
        </svg>
        {/* 追加装飾 */}
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-[#37B7C4]/10 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 bg-black/5 rounded-full"></div>
      </div>
    )
  },
  {
    name: '波動',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* 波動アニメーション - 複数レイヤー */}
        <div className="absolute inset-0">
          <div className="wave-layer wave-layer-1"></div>
          <div className="wave-layer wave-layer-2"></div>
          <div className="wave-layer wave-layer-3"></div>
          <div className="wave-layer wave-layer-4"></div>
        </div>
        {/* 装飾要素 */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-[#37B7C4]/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-black/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-[#37B7C4]/20 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    )
  },
  {
    name: 'オーロラ',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* オーロラグラデーションアニメーション */}
        <div className="aurora-layer aurora-1"></div>
        <div className="aurora-layer aurora-2"></div>
        <div className="aurora-layer aurora-3"></div>
        {/* 星のような装飾 */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#37B7C4] rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-black/40 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-[#37B7C4]/60 rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-black/30 rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
      </div>
    )
  },
  {
    name: 'バブル',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* 上昇するバブル */}
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
        <div className="bubble bubble-11"></div>
        <div className="bubble bubble-12"></div>
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#37B7C4]/5 via-transparent to-black/5"></div>
      </div>
    )
  },
  {
    name: 'ネオンライン',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* 流れるネオンライン */}
        <div className="neon-line neon-line-1"></div>
        <div className="neon-line neon-line-2"></div>
        <div className="neon-line neon-line-3"></div>
        <div className="neon-line neon-line-4"></div>
        <div className="neon-line neon-line-5"></div>
        <div className="neon-line neon-line-6"></div>
        {/* グリッド装飾 */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, transparent 98%, #37B7C4 100%), linear-gradient(180deg, transparent 98%, black 100%)',
          backgroundSize: '80px 80px',
          opacity: 0.03
        }}></div>
      </div>
    )
  },
  {
    name: 'スターフィールド',
    component: () => (
      <div className="absolute inset-0 overflow-hidden">
        {/* 星のフィールド */}
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>
        <div className="star star-13"></div>
        <div className="star star-14"></div>
        <div className="star star-15"></div>
        <div className="star star-16"></div>
        <div className="star star-17"></div>
        <div className="star star-18"></div>
        <div className="star star-19"></div>
        <div className="star star-20"></div>
        {/* 動く星座ライン */}
        <div className="constellation-line constellation-1"></div>
        <div className="constellation-line constellation-2"></div>
        <div className="constellation-line constellation-3"></div>
      </div>
    )
  }
];

export default function HeroSection3() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  // 背景を変更する関数
  const changeBg = () => {
    setCurrentBg((prev) => (prev + 1) % backgroundPatterns.length);
  };

  // サーバーサイドでは非表示、クライアントでマウント後に表示
  if (!mounted) {
    return (
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* デフォルト背景（幾何学） */}
        {backgroundPatterns[0].component()}

        <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl">
            {/* ロゴ */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-black text-[#37B7C4] mb-4 tracking-tight">
                ARCHAIVE
              </h1>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>

            {/* メインコピー */}
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              見積もり作成
              <span className="block text-[#37B7C4]">3分へ。</span>
            </h2>

            {/* サブコピー */}
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              AIが、あなたの会社の利益を最大化する。
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              業界初の「チャット式見積AIエージェント」搭載。<br />
              図面をアップするだけで、面倒な見積もり業務から解放されます。
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/lp3/apply" 
                className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
              >
                無料でその実力をデモ体験
              </Link>
              <Link 
                href="/lp3/reviews" 
                className="bg-white text-black border-2 border-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                お客様の声を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* 選択された背景 */}
      {backgroundPatterns[currentBg].component()}

      {/* 背景切り替えボタン */}
      <div className="absolute top-4 right-4 z-40">
        <button
          onClick={changeBg}
          className="group bg-black/80 hover:bg-black text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-sm font-medium">背景: {backgroundPatterns[currentBg].name}</span>
        </button>
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 hidden group-hover:block">
          {backgroundPatterns.map((pattern, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBg(idx)}
              className={`block w-full text-left px-3 py-1 text-sm rounded hover:bg-gray-100 ${
                currentBg === idx ? 'text-[#37B7C4] font-bold' : 'text-gray-700'
              }`}
            >
              {pattern.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen">
        <div className={`text-center max-w-4xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* ロゴ */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-black text-[#37B7C4] mb-4 tracking-tight">
              ARCHAIVE
            </h1>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          {/* メインコピー */}
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            見積もり作成
            <span className="block text-[#37B7C4]">3分へ。</span>
          </h2>

          {/* サブコピー */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            AIが、あなたの会社の利益を最大化する。
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            業界初の「チャット式見積AIエージェント」搭載。<br />
            図面をアップするだけで、面倒な見積もり業務から解放されます。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/lp3/apply" 
              className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              無料でその実力をデモ体験
            </Link>
            <Link 
              href="/lp3/reviews" 
              className="bg-white text-black border-2 border-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              お客様の声を見る
            </Link>
          </div>
        </div>

        {/* ダッシュボードプレビュー */}
        <div className={`w-full max-w-4xl transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white border-2 border-black shadow-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-black mb-2">見積もりダッシュボード</h3>
              <div className="w-16 h-0.5 bg-[#37B7C4] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['進行中の案件', '完了済み見積もり', '月間効率化'].map((title, i) => (
                <div key={i} className="text-center">
                  <div className="w-full h-24 bg-gray-100 border border-gray-300 mb-3 flex items-center justify-center">
                    <div className="w-16 h-2 bg-[#37B7C4]" style={{ width: `${60 + i * 20}%` }} />
                  </div>
                  <h4 className="text-sm font-medium text-gray-700">{title}</h4>
                  <p className="text-2xl font-bold text-black">{['24件', '156件', '85%'][i]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -20px) rotate(120deg); }
          66% { transform: translate(-10px, 10px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }

        /* 波動アニメーション - より強く見えるように改良 */
        @keyframes wave-flow {
          0% { transform: translateX(-100%) scaleY(0.8); opacity: 0.6; }
          50% { transform: translateX(0%) scaleY(1.2); opacity: 1; }
          100% { transform: translateX(100%) scaleY(0.8); opacity: 0.6; }
        }
        .wave-layer {
          position: absolute;
          width: 200%;
          height: 120px;
          background: linear-gradient(90deg, transparent, #37B7C4, transparent);
          border-radius: 60px;
          animation: wave-flow linear infinite;
          filter: blur(1px);
        }
        .wave-layer-1 {
          top: 15%;
          animation-duration: 8s;
          opacity: 0.3;
          background: linear-gradient(90deg, transparent, #37B7C4, transparent);
        }
        .wave-layer-2 {
          top: 35%;
          animation-duration: 12s;
          animation-delay: -2s;
          opacity: 0.25;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.4), transparent);
        }
        .wave-layer-3 {
          top: 55%;
          animation-duration: 10s;
          animation-delay: -4s;
          opacity: 0.35;
          background: linear-gradient(90deg, transparent, #37B7C4, transparent);
        }
        .wave-layer-4 {
          top: 75%;
          animation-duration: 15s;
          animation-delay: -6s;
          opacity: 0.2;
          background: linear-gradient(90deg, transparent, rgba(55,183,196,0.8), transparent);
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* オーロラアニメーション - より鮮やかに改良 */
        @keyframes aurora-dance {
          0% { transform: translateX(-50%) scaleX(1) scaleY(0.8) rotate(0deg); opacity: 0.4; }
          25% { transform: translateX(-25%) scaleX(1.2) scaleY(1.2) rotate(5deg); opacity: 0.7; }
          50% { transform: translateX(0%) scaleX(0.8) scaleY(1.5) rotate(-3deg); opacity: 0.9; }
          75% { transform: translateX(25%) scaleX(1.5) scaleY(1) rotate(7deg); opacity: 0.6; }
          100% { transform: translateX(50%) scaleX(1) scaleY(0.8) rotate(0deg); opacity: 0.4; }
        }
        .aurora-layer {
          position: absolute;
          width: 150%;
          height: 400px;
          border-radius: 50%;
          filter: blur(3px);
          animation: aurora-dance ease-in-out infinite;
        }
        .aurora-1 {
          top: 5%;
          left: -25%;
          background: linear-gradient(45deg, rgba(55,183,196,0.6), transparent, rgba(55,183,196,0.4));
          animation-duration: 20s;
        }
        .aurora-2 {
          top: 25%;
          left: -25%;
          background: linear-gradient(-45deg, transparent, rgba(0,0,0,0.3), transparent);
          animation-duration: 25s;
          animation-delay: -5s;
        }
        .aurora-3 {
          top: 45%;
          left: -25%;
          background: linear-gradient(60deg, rgba(55,183,196,0.5), transparent, rgba(0,0,0,0.2), transparent);
          animation-duration: 18s;
          animation-delay: -10s;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        /* バブルアニメーション - より目立つように改良 */
        @keyframes bubble-rise {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
        }
        @keyframes bubble-float {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
        .bubble {
          position: absolute;
          border-radius: 50%;
          animation: bubble-rise linear infinite, bubble-float ease-in-out infinite;
          box-shadow: inset -3px -3px 6px rgba(255,255,255,0.3), 0 0 10px rgba(55,183,196,0.2);
        }
        .bubble-1 { left: 10%; width: 25px; height: 25px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), #37B7C4); animation-duration: 15s, 3s; animation-delay: 0s, 0s; }
        .bubble-2 { left: 20%; width: 20px; height: 20px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(0,0,0,0.4)); animation-duration: 12s, 4s; animation-delay: -2s, -1s; }
        .bubble-3 { left: 30%; width: 35px; height: 35px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), #37B7C4); animation-duration: 18s, 5s; animation-delay: -4s, -2s; }
        .bubble-4 { left: 40%; width: 18px; height: 18px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(0,0,0,0.4)); animation-duration: 14s, 3.5s; animation-delay: -6s, -3s; }
        .bubble-5 { left: 50%; width: 40px; height: 40px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), #37B7C4); animation-duration: 20s, 6s; animation-delay: -8s, -4s; }
        .bubble-6 { left: 60%; width: 28px; height: 28px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(0,0,0,0.4)); animation-duration: 16s, 4.5s; animation-delay: -10s, -5s; }
        .bubble-7 { left: 70%; width: 32px; height: 32px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), #37B7C4); animation-duration: 13s, 3.8s; animation-delay: -12s, -6s; }
        .bubble-8 { left: 80%; width: 22px; height: 22px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(0,0,0,0.4)); animation-duration: 17s, 5.2s; animation-delay: -14s, -7s; }
        .bubble-9 { left: 90%; width: 38px; height: 38px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), #37B7C4); animation-duration: 19s, 4.2s; animation-delay: -16s, -8s; }
        .bubble-10 { left: 15%; width: 24px; height: 24px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(0,0,0,0.4)); animation-duration: 11s, 3.2s; animation-delay: -18s, -9s; }
        .bubble-11 { left: 35%; width: 36px; height: 36px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), #37B7C4); animation-duration: 21s, 5.8s; animation-delay: -20s, -10s; }
        .bubble-12 { left: 75%; width: 26px; height: 26px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(0,0,0,0.4)); animation-duration: 15s, 4.8s; animation-delay: -22s, -11s; }

        /* ネオンラインアニメーション - より明るく改良 */
        @keyframes neon-flow {
          0% { transform: translateX(-200px) translateY(0px); opacity: 0; box-shadow: 0 0 0px transparent; }
          10% { opacity: 1; box-shadow: 0 0 20px #37B7C4; }
          90% { opacity: 1; box-shadow: 0 0 20px #37B7C4; }
          100% { transform: translateX(calc(100vw + 200px)) translateY(-50px); opacity: 0; box-shadow: 0 0 0px transparent; }
        }
        @keyframes neon-glow {
          0%, 100% { box-shadow: 0 0 5px #37B7C4, 0 0 10px #37B7C4; }
          50% { box-shadow: 0 0 15px #37B7C4, 0 0 25px #37B7C4, 0 0 35px #37B7C4; }
        }
        .neon-line {
          position: absolute;
          width: 4px;
          height: 120px;
          animation: neon-flow linear infinite, neon-glow ease-in-out infinite;
          filter: blur(0.5px);
        }
        .neon-line-1 { 
          top: 12%; 
          background: linear-gradient(to bottom, transparent, #37B7C4, transparent);
          animation-duration: 8s, 2s; 
        }
        .neon-line-2 { 
          top: 28%; 
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.6), transparent);
          animation-duration: 12s, 2.5s; 
          animation-delay: -2s, -0.5s; 
        }
        .neon-line-3 { 
          top: 42%; 
          background: linear-gradient(to bottom, transparent, #37B7C4, transparent);
          animation-duration: 10s, 3s; 
          animation-delay: -4s, -1s; 
        }
        .neon-line-4 { 
          top: 58%; 
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.6), transparent);
          animation-duration: 14s, 2.2s; 
          animation-delay: -6s, -1.5s; 
        }
        .neon-line-5 { 
          top: 72%; 
          background: linear-gradient(to bottom, transparent, #37B7C4, transparent);
          animation-duration: 9s, 2.8s; 
          animation-delay: -8s, -2s; 
        }
        .neon-line-6 { 
          top: 88%; 
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.6), transparent);
          animation-duration: 11s, 3.5s; 
          animation-delay: -10s, -2.5s; 
        }

        /* スターフィールドアニメーション - より鮮やかに改良 */
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.4; transform: scale(0.8); box-shadow: 0 0 0px transparent; }
          50% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 10px #37B7C4; }
        }
        @keyframes star-move {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-15px) translateY(-15px); }
        }
        @keyframes star-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.8); }
        }
        .star {
          position: absolute;
          border-radius: 50%;
          animation: star-twinkle ease-in-out infinite, star-move linear infinite, star-pulse ease-in-out infinite;
        }
        .star-1 { top: 10%; left: 10%; width: 3px; height: 3px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 3s, 20s, 4s; }
        .star-2 { top: 15%; left: 25%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 4s, 25s, 5s; animation-delay: 0.5s, -5s, 1s; }
        .star-3 { top: 20%; left: 45%; width: 4px; height: 4px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 2.5s, 18s, 3.5s; animation-delay: 1s, -10s, 2s; }
        .star-4 { top: 25%; left: 65%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 3.5s, 22s, 4.5s; animation-delay: 1.5s, -15s, 0.5s; }
        .star-5 { top: 30%; left: 80%; width: 3px; height: 3px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 4.5s, 19s, 3s; animation-delay: 2s, -3s, 1.5s; }
        .star-6 { top: 35%; left: 15%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 3s, 24s, 5.5s; animation-delay: 2.5s, -8s, 2.5s; }
        .star-7 { top: 40%; left: 35%; width: 3px; height: 3px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 2.8s, 21s, 4.2s; animation-delay: 3s, -12s, 0.8s; }
        .star-8 { top: 45%; left: 55%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 4s, 17s, 3.8s; animation-delay: 3.5s, -7s, 3.2s; }
        .star-9 { top: 50%; left: 75%; width: 4px; height: 4px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 3.2s, 23s, 5.2s; animation-delay: 4s, -14s, 1.8s; }
        .star-10 { top: 55%; left: 5%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 3.8s, 16s, 4.8s; animation-delay: 4.5s, -6s, 2.2s; }
        .star-11 { top: 60%; left: 20%; width: 3px; height: 3px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 2.7s, 20s, 3.2s; animation-delay: 5s, -11s, 3.8s; }
        .star-12 { top: 65%; left: 40%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 4.2s, 18s, 4.5s; animation-delay: 5.5s, -4s, 1.2s; }
        .star-13 { top: 70%; left: 60%; width: 3px; height: 3px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 3.5s, 22s, 5.8s; animation-delay: 6s, -9s, 2.8s; }
        .star-14 { top: 75%; left: 85%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 2.9s, 19s, 3.5s; animation-delay: 6.5s, -13s, 4.2s; }
        .star-15 { top: 80%; left: 12%; width: 4px; height: 4px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 4.1s, 21s, 4.8s; animation-delay: 7s, -2s, 0.2s; }
        .star-16 { top: 85%; left: 30%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 3.3s, 17s, 5.5s; animation-delay: 7.5s, -16s, 3.5s; }
        .star-17 { top: 90%; left: 50%; width: 3px; height: 3px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 3.7s, 24s, 4.2s; animation-delay: 8s, -1s, 1.8s; }
        .star-18 { top: 95%; left: 70%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 2.6s, 18s, 3.8s; animation-delay: 8.5s, -17s, 4.5s; }
        .star-19 { top: 18%; left: 90%; width: 3px; height: 3px; background: radial-gradient(circle, #37B7C4, rgba(55,183,196,0.3)); animation-duration: 4.3s, 20s, 5.2s; animation-delay: 9s, -5s, 2.5s; }
        .star-20 { top: 42%; left: 8%; width: 2px; height: 2px; background: radial-gradient(circle, rgba(0,0,0,0.7), rgba(0,0,0,0.2)); animation-duration: 3.1s, 23s, 4.8s; animation-delay: 9.5s, -18s, 0.8s; }

        @keyframes constellation-glow {
          0% { opacity: 0.2; transform: scaleX(0); box-shadow: 0 0 0px transparent; }
          50% { opacity: 0.8; transform: scaleX(1); box-shadow: 0 0 15px #37B7C4; }
          100% { opacity: 0.2; transform: scaleX(0); box-shadow: 0 0 0px transparent; }
        }
        .constellation-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, #37B7C4, transparent);
          animation: constellation-glow ease-in-out infinite;
          transform-origin: left center;
          filter: blur(0.5px);
        }
        .constellation-1 { top: 25%; left: 20%; width: 180px; animation-duration: 8s; }
        .constellation-2 { top: 55%; left: 35%; width: 150px; animation-duration: 12s; animation-delay: -4s; }
        .constellation-3 { top: 75%; left: 60%; width: 120px; animation-duration: 10s; animation-delay: -8s; }
      `}</style>
    </section>
  );
}