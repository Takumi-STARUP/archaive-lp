'use client';

import Link from 'next/link';
import HeroQuickNav from './HeroQuickNav';

export default function HeroSectionSplit({ onFloatingNavChange }: { onFloatingNavChange?: (show: boolean) => void }) {
  return (
    <div className="transition-all duration-500">
      <section className="relative min-h-[80vh] bg-[#37B7C4]">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur text-white rounded-full text-sm font-semibold">
                  製造業DXの新スタンダード
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                分断されたデータと暗黙知を繋ぎ、<br />
                ものづくりの「資産」を築く。
              </h1>
              <div className="mb-10">
                <p className="text-xl md:text-2xl text-white mb-4 font-semibold leading-relaxed">
                  単なる図面管理・検索ではない。
                </p>
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium">
                  図面起点で分断されたデータを繋ぎ、会社の「知の資産」を未来へ引き継ぐ、製造業のためのAI開発基盤です。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#features" className="inline-flex items-center justify-center bg-white text-[#37B7C4] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zm7-18l-5 5h3v6h4V7h3l-5-5z"/></svg>
                  資料ダウンロード
                </Link>
                <Link href="/lp_new/apply" className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#37B7C4] transition-all duration-300">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm4.5 4l5.5 3.5L17.5 8H6.5z"/></svg>
                  無料トライアル
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* UI画面プレースホルダー */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
                {/* ブラウザヘッダー */}
                <div className="bg-gray-900 h-10 flex items-center px-4">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-gray-400 text-xs">
                    https://app.archaive.ai/search
                  </div>
                </div>
                
                {/* アプリケーションヘッダー */}
                <div className="bg-[#37B7C4] text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-xl font-bold">ARCHAIVE</div>
                      <div className="text-sm opacity-80">AI Document Search</div>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <span>製造部 田中様</span>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">田</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* メインコンテンツ */}
                <div className="p-6 bg-gray-50">
                  {/* 検索バー */}
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div className="flex-1 text-gray-500 text-sm">SUS304を使った5mm厚のブラケット図面</div>
                      <button className="px-4 py-2 bg-[#37B7C4] text-white rounded text-sm font-medium hover:bg-[#2a9aa5] transition-colors">
                        検索
                      </button>
                    </div>
                  </div>
                  
                  {/* AI応答 */}
                  <div className="bg-[#37B7C4]/5 rounded-lg p-4 mb-4 border border-[#37B7C4]/20">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#37B7C4] rounded-full flex items-center justify-center text-white text-xs font-bold">
                        AI
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 mb-2">ご要望の条件に合致する図面を3件見つけました。</p>
                        <p className="text-xs text-gray-600">類似度の高い順に表示しています。</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 検索結果 */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">SUS304_bracket_5mm_Rev3.dwg</div>
                          <div className="text-sm text-gray-500 mt-1">設計部 • 2024/01/15 • 関連度: 95%</div>
                          <div className="flex space-x-2 mt-2">
                            <span className="px-2 py-1 bg-gray-100 text-xs rounded">SUS304</span>
                            <span className="px-2 py-1 bg-gray-100 text-xs rounded">5mm</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">最新版</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm opacity-70">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-700">ブラケット見積書_202401.xlsx</div>
                          <div className="text-sm text-gray-500 mt-1">購買部 • 2024/01/10 • 関連度: 88%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* フローティング要素 */}
              <div className="absolute -top-4 -right-4 bg-white text-[#37B7C4] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ● LIVE DEMO
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroQuickNav onFloatingNavChange={onFloatingNavChange} />
    </div>
  );
}
