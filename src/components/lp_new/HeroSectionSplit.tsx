'use client';

import Link from 'next/link';

export default function HeroSectionSplit() {
  return (
    <div className="transition-all duration-500">
      <section className="relative h-[calc(80vh-64px)] bg-[#37B7C4]">
        {/* 背景画像 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/background_geometric.png')" }}
        ></div>
        {/* 白い台形エリア */}
        <div 
          className="absolute bg-white"
          style={{
            top: '0%',
            right: '0%',
            width: '100%',
            height: '100%',
            clipPath: 'polygon(70% 0%, 100% 0%, 100% 100%, 50% 100%)',
            zIndex: 8
          }}
        ></div>
        {/* メインカラーの半透明オーバーレイ */}
        <div 
          className="absolute inset-0 bg-[#2A8B96]/40"
          style={{ zIndex: 6 }}
        ></div>
        <div className="container mx-auto px-4 py-16 relative z-10 h-full overflow-visible">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] overflow-visible">
            <div className="text-left max-w-2xl">
              <div className="mb-6">
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                1枚の図面から、<br />
                1秒で過去の全ナレッジをAI活用
              </h1>
              <div className="mb-10">
                <p className="text-xl md:text-2xl text-white mb-4 font-semibold leading-relaxed">
                  AIにより、「誰でも」「早く」「正確な」見積りを実現。
                </p>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-semibold">
                  眠るデータを"資産"へ。製造業DXの新常識、はじまる。
                </p>
              </div>
              <div className="flex flex-col gap-4 max-w-md">
                <Link href="/download" className="bg-white border-2 border-white rounded-lg text-[#37B7C4] px-12 py-4 text-lg font-bold cursor-pointer flex items-center justify-center w-full hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    サービス紹介資料
                  </span>
                </Link>
                <Link href="/apply" className="bg-transparent border-2 border-white text-white rounded-lg px-12 py-4 text-lg font-bold cursor-pointer flex items-center justify-center w-full hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    無料デモの申込み
                  </span>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative overflow-visible">
              {/* UI画面 - 画像を使用 */}
              <div className="relative scale-[1.1]" style={{ transformOrigin: 'left center', overflow: 'visible' }}>
                <img 
                  src="/images/generated_6.png" 
                  alt="ARCHAIVEのAI見積システムのダッシュボード画面。図面検索と見積作成機能を表示" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
