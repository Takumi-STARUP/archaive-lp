'use client';

import { useState, useEffect } from 'react';

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentTooltip, setCurrentTooltip] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const tooltipData = {
    0: ['特徴1', '特徴2', '特徴3'],
    1: ['特徴1', '特徴2', '特徴3'],
    2: ['特徴1', '特徴2', '特徴3'],
    3: ['特徴1', '特徴2', '特徴3']
  };

  useEffect(() => {
    if (hoveredCard !== null) {
      setCurrentTooltip(0);
      const id = setInterval(() => {
        setCurrentTooltip(prev => {
          const next = prev + 1;
          return next >= 3 ? 2 : next; // Stop at 2 (all 3 visible)
        });
      }, 300);
      setIntervalId(id);
      return () => clearInterval(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  }, [hoveredCard]);
  const mainFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      ),
      title: "AIチャット型データ検索",
      description: "自然な言葉でAIに質問するだけで、あらゆるドキュメントを瞬時に検索。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      ),
      title: "類似検索・自動解析",
      description: "アップロードした図面と似ている過去の図面をAIが検索し、自動解析でデータ化。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      title: "AI見積エージェント",
      description: "見積りの管理と帳票の発行、チャットでAIが見積り生成する。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "カスタムAIソリューションサービス",
      description: "貴社独自の業務プロセスに合わせたカスタマイズ機能を開発。"
    }
  ];

  const subFeatures = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10h5l-6 7v-5H7l6-7v5z"/>
        </svg>
      ),
      title: "柔軟なAPI連携",
      description: "既存のERP、PLM、生産管理システムなど、社内のあらゆるシステムと連携し、データのハブとなる。",
      hasSpecialLayout: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      ),
      title: "高度な権限設定",
      description: "役職や部門、プロジェクト単位で、ファイルへのアクセス権限を柔軟に設定。セキュアな情報共有を実現。",
      hasSpecialLayout: true
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 15a4 4 0 004 4h10a4 4 0 004-4M3 15a4 4 0 014-4h10a4 4 0 014 4M3 15V9a4 4 0 014-4h10a4 4 0 014 4v6"/>
        </svg>
      ),
      title: "3Dデータアップロード",
      description: "",
      hasSpecialLayout: false
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
        </svg>
      ),
      title: "図面内書き込み",
      description: "",
      hasSpecialLayout: false
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"/>
        </svg>
      ),
      title: "組図部品図管理",
      description: "",
      hasSpecialLayout: false
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      title: "帳票発行",
      description: "",
      hasSpecialLayout: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 sm:mb-6">
            ARCHAIVEの主な機能
          </h2>
        </div>

        {/* メイン機能 - 左右交互レイアウト */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
            
            {/* AIチャット型データ検索 */}
            <div 
              className={`flex items-center justify-between w-full gap-2 transition-all duration-300 relative ${
                hoveredCard === 0 ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-[40%] -mt-12">
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-2 underline">01</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#37B7C4]">
                    AIチャット型データ検索
                  </h4>
                </div>
                <div className="ml-0">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
                    自然な言葉でAIに質問するだけで、あらゆるドキュメントを瞬時に検索。
                  </p>
                </div>
              </div>
              <div className="w-[55%] relative">
                <img 
                  src="/images/チャット検索1.jpg" 
                  alt="AIチャット型データ検索の操作画面。自然言語での質問入力と検索結果の表示" 
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === 0 ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 */}
                <div className="absolute -right-12 top-8 space-y-2 z-50">
                  {tooltipData[0].map((tooltip, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-lg shadow-xl p-3 border-2 border-[#37B7C4] relative transition-all duration-300 ${
                        hoveredCard === 0 && index <= currentTooltip 
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
                      }`}
                    >
                      <div className="text-sm text-gray-600 text-center min-w-[180px] whitespace-nowrap">
                        {tooltip}
                      </div>
                      {/* 左向き矢印 */}
                      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#37B7C4]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 類似図面検索 - 逆配置 */}
            <div 
              className={`flex items-center justify-between w-full gap-2 transition-all duration-300 relative ${
                hoveredCard === 1 ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-[55%] relative">
                <img 
                  src="/images/sub_ui.png" 
                  alt="類似検索・自動解析機能の画面。アップロードした図面と類似図面の比較表示" 
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === 1 ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 */}
                <div className="absolute -left-12 top-8 space-y-2 z-50">
                  {tooltipData[1].map((tooltip, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-lg shadow-xl p-3 border-2 border-[#37B7C4] relative transition-all duration-300 ${
                        hoveredCard === 1 && index <= currentTooltip 
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'
                      }`}
                    >
                      <div className="text-sm text-gray-600 text-center min-w-[180px] whitespace-nowrap">
                        {tooltip}
                      </div>
                      {/* 右向き矢印 */}
                      <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-[#37B7C4]"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[40%] -mt-12">
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-2 underline">02</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#37B7C4]">
                    類似検索・自動解析
                  </h4>
                </div>
                <div className="ml-0">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
                    アップロードした図面と似ている過去の図面をAIが検索し、自動解析でデータ化。
                  </p>
                </div>
              </div>
            </div>

            {/* AI見積エージェント */}
            <div 
              className={`flex items-center justify-between w-full gap-2 transition-all duration-300 relative ${
                hoveredCard === 2 ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-[40%] -mt-12">
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-2 underline">03</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#37B7C4]">
                    AI見積エージェント
                  </h4>
                </div>
                <div className="ml-0">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
                    見積りの管理と帳票の発行、チャットでAIが見積り生成する。
                  </p>
                </div>
              </div>
              <div className="w-[55%] relative">
                <img 
                  src="/images/図面ページ_見積.jpg" 
                  alt="AI見積エージェントの操作画面。チャット形式での見積作成と管理機能" 
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === 2 ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 */}
                <div className="absolute -right-12 top-8 space-y-2 z-50">
                  {tooltipData[2].map((tooltip, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-lg shadow-xl p-3 border-2 border-[#37B7C4] relative transition-all duration-300 ${
                        hoveredCard === 2 && index <= currentTooltip 
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
                      }`}
                    >
                      <div className="text-sm text-gray-600 text-center min-w-[180px] whitespace-nowrap">
                        {tooltip}
                      </div>
                      {/* 左向き矢印 */}
                      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#37B7C4]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* カスタムAIソリューションサービス - 逆配置 */}
            <div 
              className={`flex items-center justify-between w-full gap-2 transition-all duration-300 relative ${
                hoveredCard === 3 ? 'z-40' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-[55%] relative">
                <img 
                  src="/images/sub_ui.png" 
                  alt="カスタムAIソリューションの管理画面。カスタマイズ機能の設定と運用状況" 
                  className={`w-full h-auto rounded shadow-lg transition-all duration-300 ${
                    hoveredCard === 3 ? '-translate-y-2 shadow-xl' : ''
                  }`}
                  loading="lazy"
                />
                {/* 吹き出し群 */}
                <div className="absolute -left-12 top-8 space-y-2 z-50">
                  {tooltipData[3].map((tooltip, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-lg shadow-xl p-3 border-2 border-[#37B7C4] relative transition-all duration-300 ${
                        hoveredCard === 3 && index <= currentTooltip 
                          ? 'opacity-100 scale-100 translate-x-0' 
                          : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'
                      }`}
                    >
                      <div className="text-sm text-gray-600 text-center min-w-[180px] whitespace-nowrap">
                        {tooltip}
                      </div>
                      {/* 右向き矢印 */}
                      <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-[#37B7C4]"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[40%] -mt-12">
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#333333] block mb-2 underline">04</span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#37B7C4]">
                    カスタムAIソリューション<br />サービス
                  </h4>
                </div>
                <div className="ml-0">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
                    貴社独自の業務プロセスに合わせたカスタマイズ機能を開発。
                  </p>
                </div>
              </div>
            </div>
            
          </div>

        {/* その他の機能 */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 mt-8 sm:mt-12 md:mt-16">
          {/* 上段: 説明付きの2つ */}
          <div className="flex justify-center gap-6">
            {subFeatures.slice(0, 2).map((feature, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#37B7C4] transition-all duration-300" style={{ maxWidth: '400px' }}>
                <div className="flex flex-col h-full">
                  {/* 上部: 薄いグレー背景のアイコンエリア */}
                  <div className="bg-gray-100 p-4 flex justify-center items-center" style={{ minHeight: '80px' }}>
                    {feature.icon}
                    <h4 className="text-xl font-bold text-[#333333] ml-4">
                      {feature.title}
                    </h4>
                  </div>
                  {/* 下部: 白背景のテキストエリア */}
                  <div className="bg-white p-6 flex-1">
                    {feature.description && (
                      <p className="text-base text-gray-700 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 下段: 説明なしの4つ */}
          <div className="grid md:grid-cols-4 gap-6">
            {subFeatures.slice(2).map((feature, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#37B7C4] transition-all duration-300">
                {/* 上部: 薄いグレー背景のアイコンエリア */}
                <div className="bg-gray-100 p-4 flex flex-col justify-center items-center" style={{ minHeight: '120px' }}>
                  <div className="flex items-center">
                    {feature.icon}
                    <h4 className="text-lg font-bold text-[#333333] ml-3">
                      {feature.title}
                    </h4>
                  </div>
                </div>
                {/* 下部: 白背景のテキストエリア */}
                <div className="bg-white p-4 text-center">
                  {feature.description && (
                    <p className="text-base text-gray-700 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}