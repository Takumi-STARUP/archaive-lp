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
        {/* 極薄のアクセント */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#37B7C4]/3 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>
    ),
    imageDecoration: () => (
      <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
        <div className="w-1 h-32 bg-[#37B7C4]/20"></div>
      </div>
    )
  },
  {
    name: 'ソフト',
    background: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50">
        {/* 柔らかい円形グラデーション */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#37B7C4]/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl"></div>
      </div>
    ),
    imageDecoration: () => (
      <div className="absolute -bottom-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#37B7C4]/30 to-transparent"></div>
    )
  },
  {
    name: 'エレガント',
    background: () => (
      <div className="absolute inset-0 bg-white">
        {/* 控えめな装飾線 */}
        <div className="absolute top-20 left-0 w-1/3 h-px bg-gradient-to-r from-[#37B7C4]/20 to-transparent"></div>
        <div className="absolute bottom-20 right-0 w-1/3 h-px bg-gradient-to-l from-black/10 to-transparent"></div>
        
        {/* 薄い背景パターン */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(55, 183, 196, 0.02) 0%, transparent 50%)'
        }}></div>
      </div>
    ),
    imageDecoration: () => (
      <div className="absolute top-0 left-0 right-0 flex justify-between">
        <div className="w-8 h-8 border-t border-l border-[#37B7C4]/20"></div>
        <div className="w-8 h-8 border-t border-r border-[#37B7C4]/20"></div>
      </div>
    )
  },
  {
    name: 'モノトーン',
    background: () => (
      <div className="absolute inset-0 bg-gray-50">
        {/* モノクロームグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-gray-50 to-gray-100/50"></div>
        
        {/* 幾何学的なアクセント */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] border border-black/5 rounded-full"></div>
          <div className="absolute inset-8 border border-black/3 rounded-full"></div>
        </div>
      </div>
    ),
    imageDecoration: () => (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-32 h-32">
          <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-black/10"></div>
        </div>
      </div>
    )
  }
];

export default function HeroSection2() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDesign, setCurrentDesign] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
                href="/lp10/apply" 
                className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg inline-block text-center"
              >
                無料でその実力をデモ体験
              </Link>
              <Link 
                href="/lp10/reviews" 
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
    </section>
  );
}