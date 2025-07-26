"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// 5つのミニマルデザインバリエーション
const designVariations = [
  {
    name: 'ミニマル',
    background: () => (
      <div className="absolute inset-0 bg-gray-50">
        {/* シンプルな円 */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#37B7C4]/5 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-black/5 rounded-full"></div>
      </div>
    ),
    imageDecoration: () => null
  },
  {
    name: 'ピュア',
    background: () => (
      <div className="absolute inset-0 bg-white">
        {/* 極薄のアクセント - 強化版 */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#37B7C4]/8 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent"></div>
        
        {/* 浮遊する光の粒子 */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#37B7C4]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#37B7C4]/20 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-[#37B7C4]/25 rounded-full animate-pulse animation-delay-2000"></div>
        
        {/* 繊細な線のグリッド */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, rgba(55, 183, 196, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(55, 183, 196, 0.03) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* 光のリング */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-[#37B7C4]/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-gray-200/30 rounded-full animate-spin-slow-reverse"></div>
      </div>
    ),
    imageDecoration: () => (
      <>
        <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
          <div className="w-1 h-32 bg-[#37B7C4]/20"></div>
        </div>
        {/* 追加装飾 */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#37B7C4]/10 rounded-tr-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#37B7C4]/10 rounded-bl-3xl"></div>
      </>
    )
  },
  {
    name: 'ソフト',
    background: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50">
        {/* 柔らかい円形グラデーション - 強化版 */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#37B7C4]/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gray-200/40 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
        
        {/* 波紋エフェクト */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32">
          <div className="absolute inset-0 bg-[#37B7C4]/10 rounded-full animate-ping-slow"></div>
          <div className="absolute inset-0 bg-[#37B7C4]/20 rounded-full animate-ping-slow animation-delay-1000"></div>
          <div className="absolute inset-0 bg-[#37B7C4]/15 rounded-full animate-ping-slow animation-delay-2000"></div>
        </div>
        
        {/* ソフトな幾何学模様 */}
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border-2 border-[#37B7C4]/10 rounded-full transform rotate-45"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 border-2 border-gray-200/20 rounded-2xl transform -rotate-12"></div>
        
        {/* 流れる光のライン */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#37B7C4]/20 to-transparent animate-slide-right"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent animate-slide-right-slow"></div>
        </div>
      </div>
    ),
    imageDecoration: () => (
      <>
        <div className="absolute -bottom-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#37B7C4]/30 to-transparent"></div>
        {/* ソフトなグロー効果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#37B7C4]/5 to-transparent blur-xl"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/50 to-transparent"></div>
      </>
    )
  },
  {
    name: 'エレガント',
    background: () => (
      <div className="absolute inset-0 bg-white">
        {/* 控えめな装飾線 - 強化版 */}
        <div className="absolute top-20 left-0 w-1/2 h-px bg-gradient-to-r from-[#37B7C4]/30 to-transparent"></div>
        <div className="absolute bottom-20 right-0 w-1/2 h-px bg-gradient-to-l from-black/20 to-transparent"></div>
        <div className="absolute left-20 top-0 h-1/3 w-px bg-gradient-to-b from-[#37B7C4]/20 to-transparent"></div>
        <div className="absolute right-20 bottom-0 h-1/3 w-px bg-gradient-to-t from-black/15 to-transparent"></div>
        
        {/* 薄い背景パターン - 複数レイヤー */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(55, 183, 196, 0.04) 0%, transparent 50%)'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(0, 0, 0, 0.02) 0%, transparent 40%)'
        }}></div>
        
        {/* エレガントな幾何学装飾 */}
        <div className="absolute top-1/3 left-1/4 w-px h-32 bg-[#37B7C4]/20 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-px h-32 bg-black/10 transform -rotate-45"></div>
        
        {/* ダイヤモンド形の装飾 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-[#37B7C4]/10 transform rotate-45"></div>
          <div className="absolute inset-4 border border-[#37B7C4]/5 transform rotate-0"></div>
          <div className="absolute inset-8 border border-black/5 transform rotate-45"></div>
        </div>
        
        {/* 点線の装飾 */}
        <div className="absolute top-1/4 right-1/3 w-24 h-24">
          <div className="absolute inset-0 border border-dashed border-[#37B7C4]/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16">
          <div className="absolute inset-0 border border-dashed border-black/10 rounded-full"></div>
        </div>
      </div>
    ),
    imageDecoration: () => (
      <>
        <div className="absolute top-0 left-0 right-0 flex justify-between">
          <div className="w-8 h-8 border-t border-l border-[#37B7C4]/20"></div>
          <div className="w-8 h-8 border-t border-r border-[#37B7C4]/20"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between">
          <div className="w-8 h-8 border-b border-l border-[#37B7C4]/20"></div>
          <div className="w-8 h-8 border-b border-r border-[#37B7C4]/20"></div>
        </div>
        {/* エレガントなフレーム装飾 */}
        <div className="absolute inset-4 border border-[#37B7C4]/5 pointer-events-none"></div>
      </>
    )
  },
  {
    name: 'モノトーン',
    background: () => (
      <div className="absolute inset-0 bg-gray-50">
        {/* モノクロームグラデーション - 強化版 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-gray-50 to-gray-100"></div>
        
        {/* 幾何学的なアクセント - 拡張版 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] border border-black/10 rounded-full"></div>
          <div className="absolute inset-8 border border-black/8 rounded-full"></div>
          <div className="absolute inset-16 border border-black/5 rounded-full"></div>
          <div className="absolute inset-24 border border-black/3 rounded-full"></div>
        </div>
        
        {/* モノクロームパターン */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.02) 35px, rgba(0,0,0,0.02) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0,0,0,0.02) 35px, rgba(0,0,0,0.02) 70px)
          `
        }}></div>
        
        {/* グレースケールの装飾要素 */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-transparent rounded-2xl transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-gray-300/20 to-transparent rounded-3xl transform -rotate-12"></div>
        
        {/* 点のグリッド */}
        <div className="absolute top-1/3 right-1/3 grid grid-cols-3 gap-4">
          <div className="w-2 h-2 bg-black/10 rounded-full"></div>
          <div className="w-2 h-2 bg-black/8 rounded-full"></div>
          <div className="w-2 h-2 bg-black/6 rounded-full"></div>
          <div className="w-2 h-2 bg-black/8 rounded-full"></div>
          <div className="w-2 h-2 bg-black/10 rounded-full"></div>
          <div className="w-2 h-2 bg-black/8 rounded-full"></div>
          <div className="w-2 h-2 bg-black/6 rounded-full"></div>
          <div className="w-2 h-2 bg-black/8 rounded-full"></div>
          <div className="w-2 h-2 bg-black/10 rounded-full"></div>
        </div>
        
        {/* モノトーンのライン装飾 */}
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
        <div className="absolute right-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-black/8 to-transparent"></div>
      </div>
    ),
    imageDecoration: () => (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-black/10"></div>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32">
          <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-black/5"></div>
        </div>
        {/* モノトーンシャドウ効果 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5"></div>
      </div>
    )
  }
];

export default function HeroSection2() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDesign, setCurrentDesign] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  // サーバーサイドでは静的な背景のみを表示
  if (!mounted) {
    return (
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gray-50">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#37B7C4]/5 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-black/5 rounded-full"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            <div>
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-black text-[#37B7C4] mb-4 tracking-tight">ARCHAIVE</h1>
                <div className="w-24 h-1 bg-black"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                見積もり作成を
                <span className="block text-[#37B7C4]">AIで3分に。</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
                図面を読み込み、チャットで完成。
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed">
                業界初の「チャット式見積AIエージェント」が、<br />
                あなたの見積もり業務を劇的に効率化します。
              </p>
              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#37B7C4]">200+</div>
                  <div className="text-sm text-gray-600">導入企業</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#37B7C4]">3分</div>
                  <div className="text-sm text-gray-600">見積時間</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#37B7C4]">84倍</div>
                  <div className="text-sm text-gray-600">効率化</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/lp3/apply" className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg inline-block text-center">
                  無料でその実力をデモ体験
                </Link>
                <Link href="/lp3/reviews" className="bg-white text-black border-2 border-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 inline-block text-center">
                  お客様の声を見る
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Group 18.png"
                alt="ARCHAIVE UI モックアップ"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 選択された背景 */}
      {designVariations[currentDesign].background()}

      {/* デザイン切り替えボタン */}
      <div className="absolute top-4 right-4 z-40">
        <button
          onClick={() => setCurrentDesign((prev) => (prev + 1) % designVariations.length)}
          className="group bg-black/80 hover:bg-black text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-sm font-medium">デザイン: {designVariations[currentDesign].name}</span>
        </button>
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 hidden group-hover:block">
          {designVariations.map((design, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentDesign(idx)}
              className={`block w-full text-left px-3 py-1 text-sm rounded hover:bg-gray-100 ${
                currentDesign === idx ? 'text-[#37B7C4] font-bold' : 'text-gray-700'
              }`}
            >
              {design.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* 左側：テキストコンテンツ */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* ロゴ */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-black text-[#37B7C4] mb-4 tracking-tight">
                ARCHAIVE
              </h1>
              <div className="w-24 h-1 bg-black"></div>
            </div>

            {/* メインコピー */}
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              見積もり作成を
              <span className="block text-[#37B7C4]">AIで3分に。</span>
            </h2>

            {/* サブコピー */}
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              図面を読み込み、チャットで完成。
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed">
              業界初の「チャット式見積AIエージェント」が、<br />
              あなたの見積もり業務を劇的に効率化します。
            </p>

            {/* メトリクス */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#37B7C4]">200+</div>
                <div className="text-sm text-gray-600">導入企業</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#37B7C4]">3分</div>
                <div className="text-sm text-gray-600">見積時間</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#37B7C4]">84倍</div>
                <div className="text-sm text-gray-600">効率化</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/lp3/apply" 
                className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg inline-block text-center"
              >
                無料でその実力をデモ体験
              </Link>
              <Link 
                href="/lp3/reviews" 
                className="bg-white text-black border-2 border-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 inline-block text-center"
              >
                お客様の声を見る
              </Link>
            </div>
          </div>

          {/* 右側：モックアップ画像 */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* モックアップ画像（背景透過） */}
              <Image
                src="/images/Group 18.png"
                alt="ARCHAIVE UI モックアップ"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              
              {/* デザインごとの装飾 */}
              {designVariations[currentDesign].imageDecoration()}
            </div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 1; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 1; }
        }
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }
        .animate-slide-right-slow {
          animation: slide-right 10s linear infinite;
          animation-delay: 2s;
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 45s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}