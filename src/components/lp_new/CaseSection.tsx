'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function CaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      id: 1,
      image: "/images/松田さん.png",
      title: "見積・納品書作成・請求業務が図面起点の案件管理により大幅に削減しました。",
      subtitle: "株式会社クロステック",
      author: "松田 忠明 様",
      hasInterview: true,
      link: "/case/crosstech"
    },
    {
      id: 2,
      image: "/images/中西さん.jpg", 
      title: "図面を探す時間が大幅に削減され、類似案件の検索も容易になりました。",
      subtitle: "株式会社エイ・エム・シィ",
      author: "中西 弘栄 様",
      hasInterview: true,
      link: "/case/amc"
    },
    {
      id: 3,
      image: "/api/placeholder/300/180",
      title: "多数の図面を一括で処理し、概算見積もりをCSVで出力できる機能は、私たちの業務を効率化してくれています。",
      subtitle: "スエナミ工業株式会社",
      author: "横山 智一 様",
      hasInterview: true,
      link: "/case/suenami"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 sm:mb-6">
            導入企業の実績
          </h2>
        </div>

        {/* カルーセル */}
        <div className="relative w-full max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 overflow-hidden">
          {/* モバイル表示 (sm未満) */}
          <div className="block sm:hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {caseStudies.map((caseItem, index) => (
                <div key={caseItem.id} className="min-w-full flex-shrink-0 flex flex-col items-center text-center">
                  {/* 画像と会社名・名前 */}
                  <Link href={caseItem.link} className="relative w-full h-64 mb-4 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
                    {caseItem.image === "/api/placeholder/300/180" ? (
                      <div className="w-full h-full bg-gradient-to-br from-[#37B7C4]/20 to-[#37B7C4]/10 flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#37B7C4]/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </div>
                    ) : (
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.author} 
                        className="w-full h-full object-cover"
                      />
                    )}
                    
                    {/* 黒グラデーションと会社名・名前オーバーレイ */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-3 text-white text-left">
                        <div className="text-sm font-bold">{caseItem.subtitle}</div>
                        <div className="text-xs">{caseItem.author}</div>
                      </div>
                    </div>
                  </Link>
                  
                  {/* コンテンツ */}
                  <div className="px-2">
                    <p className="text-base font-bold text-[#333333] leading-relaxed">
                      {caseItem.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* デスクトップ表示 (sm以上) */}
          <div className="hidden sm:block">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6 md:gap-8"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {caseStudies.map((caseItem, index) => (
                <div key={caseItem.id} className="min-w-[calc(50%-0.75rem)] md:min-w-[calc(33.333%-1.5rem)] flex-shrink-0 flex flex-col items-center text-center">
                  {/* 画像と会社名・名前 */}
                  <Link href={caseItem.link} className="relative w-full h-72 md:h-80 mb-6 overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
                  {caseItem.image === "/api/placeholder/300/180" ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#37B7C4]/20 to-[#37B7C4]/10 flex items-center justify-center">
                      <svg className="w-20 h-20 text-[#37B7C4]/50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </div>
                  ) : (
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.author} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* 黒グラデーションと会社名・名前オーバーレイ */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white text-left">
                      <div className="text-sm font-bold">{caseItem.subtitle}</div>
                      <div className="text-xs">{caseItem.author}</div>
                    </div>
                  </div>
                </Link>
                
                  {/* コンテンツ */}
                  <div className="px-4">
                    <p className="text-lg font-bold text-[#333333] leading-relaxed">
                      {caseItem.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* カルーセルコントロール */}
        <div className="flex justify-center items-center gap-3 sm:gap-5 mt-6 sm:mt-8">
          <button 
            onClick={prevSlide}
            aria-label="Previous slide"
            className="bg-transparent border-2 border-[#37B7C4] rounded-full w-8 h-8 sm:w-10 sm:h-10 text-[#37B7C4] text-sm sm:text-lg cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-[#37B7C4] hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            ←
          </button>
          
          {/* インジケーター */}
          <div className="flex gap-1.5 sm:gap-2.5">
            {caseStudies.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-300 cursor-pointer ${
                  index === currentIndex ? 'bg-[#37B7C4]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            aria-label="Next slide"
            className="bg-transparent border-2 border-[#37B7C4] rounded-full w-8 h-8 sm:w-10 sm:h-10 text-[#37B7C4] text-sm sm:text-lg cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-[#37B7C4] hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>

        {/* その他の導入企業 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-12 md:mb-16 mt-12 sm:mt-16 md:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4 sm:mb-6 text-center">他の導入企業様</h3>
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* 最初のロゴセット */}
              <div className="flex flex-shrink-0">
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">産業機械A社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">電子部品B社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">航空宇宙C社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">医療機器D社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">建設機械E社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">食品機械F社</span>
                  </div>
                </div>
              </div>
              {/* 重複するロゴセット（シームレスなループのため） */}
              <div className="flex flex-shrink-0">
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">産業機械A社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">電子部品B社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">航空宇宙C社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">医療機器D社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">建設機械E社</span>
                  </div>
                </div>
                <div className="mx-4 sm:mx-8 flex items-center justify-center w-24 sm:w-32 h-12 sm:h-16">
                  <div className="w-20 sm:w-24 h-10 sm:h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">食品機械F社</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* セキュリティセクション */}
        <div className="text-center py-8 sm:py-10 px-4 sm:px-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#333333] mb-4 sm:mb-5">
            安心のセキュリティ
          </h2>
          <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start flex-wrap gap-6 sm:gap-5 max-w-5xl mx-auto">
            <div className="max-w-[250px] text-left sm:text-left text-center">
              <h3 className="text-base sm:text-lg font-bold text-[#333333] mb-2 sm:mb-2.5 flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                ISO27001認証取得
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                情報セキュリティ管理システムの国際標準規格に準拠し、データを安全に保管できます。
                認証取得済み
              </p>
            </div>
            <div className="max-w-[250px] text-left sm:text-left text-center">
              <h3 className="text-base sm:text-lg font-bold text-[#333333] mb-2 sm:mb-2.5 flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                プライバシーマーク取得
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                個人情報保護体制の確立と適切な個人情報の取り扱いを実施しています。
              </p>
            </div>
            <div className="max-w-[250px] text-left sm:text-left text-center">
              <h3 className="text-base sm:text-lg font-bold text-[#333333] mb-2 sm:mb-2.5 flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
                SOC2 Type2準拠
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                クラウドセキュリティの国際的な監査基準に準拠した安全なシステム運用を行っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}