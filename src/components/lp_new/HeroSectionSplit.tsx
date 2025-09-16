'use client';

import Link from 'next/link';

export default function HeroSectionSplit() {
  return (
    <div className="transition-all duration-500">
      <section className="relative h-[80vh]" style={{ backgroundImage: "url('/images/generated_2.png')", backgroundSize: 'cover', backgroundPosition: '70% 0%', backgroundRepeat: 'no-repeat' }}>
        <div className="container mx-auto px-4 py-16 relative z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="text-left max-w-2xl bg-[#37B7C4]/70 backdrop-blur-sm rounded-xl p-8">
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
            <div className="hidden lg:block">
              {/* 右半分は空白 */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
