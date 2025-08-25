'use client';

export default function CaseSection() {
  const highlightCase = {
    companyName: "金属加工・試作メーカー様",
    personName: "田中 様",
    personTitle: "代表取締役",
    quote: "経営判断のスピードが、データを探す時間で決まらなくなった。",
    challenge: "過去20年分の図面データが散在し、類似案件の検索に半日近くかかることも。ベテラン技舠者の知見が属人化し、技術継承が業務上の大きな課題となっていました。",
    solution: "ARCHAIVEのAIチャット型検索により、過去の類似案件を瞬時に発見。ベテランの知見をデータ化し、若手でも同等の判断が可能に。",
    results: [
      { 
        before: "数時間",
        after: "数分",
        description: "情報検索時間" 
      },
      { 
        before: "属人化",
        after: "標準化",
        description: "見積もりプロセス" 
      },
      { 
        before: "不安定",
        after: "安定的",
        description: "品質管理" 
      },
      { 
        before: "数ヶ月",
        after: "数週間",
        description: "新人教育期間" 
      }
    ],
    testimonial: "ARCHAIVEを導入してから、会社の知識が『見える化』されました。これまでベテランの頭の中にしかなかった判断基準が、誰でもアクセスできる形になり、組織全体のレベルが底上げされています。何より、経営判断に必要な過去データを探すのに時間を取られることがなくなり、本当に大切な戦略的思考に集中できるようになりました。"
  };

  const otherCompanies = [
    { 
      name: "精密機械製造",
      icon: (
        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.65-.07-.97l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0014 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.32-.07.64-.07.97 0 .33.03.65.07.97l-2.11 1.63c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.13-.22.07-.49-.12-.64l-2.11-1.63z"/>
        </svg>
      )
    },
    { 
      name: "自動車部品",
      icon: (
        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      )
    },
    { 
      name: "産業機械",
      icon: (
        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      )
    },
    { 
      name: "電子部品",
      icon: (
        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
        </svg>
      )
    },
    { 
      name: "航空宇宙",
      icon: (
        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      )
    },
    { 
      name: "医療機器",
      icon: (
        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12v2h11v-2zm0-4v2h11V8zm0 8v2h7v-2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#37B7C4]/3 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            導入企業の実績
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            実際にARCHAIVEを導入いただいた企業様の声と成果
          </p>
        </div>

        {/* ハイライト事例 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 左側：企業情報と担当者 */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="mr-4">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333333]">{highlightCase.companyName}</h3>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="mr-4">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold text-[#333333]">{highlightCase.personName}</div>
                  <div className="text-gray-600">{highlightCase.personTitle}</div>
                </div>
              </div>

              <blockquote className="text-xl font-bold text-[#37B7C4] mb-6 italic">
                「{highlightCase.quote}」
              </blockquote>
            </div>

            {/* 右側：課題と解決策 */}
            <div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-[#333333] mb-3 flex items-center">
                  <span className="w-3 h-3 bg-[#f54848] rounded-full mr-3"></span>
                  導入前の課題
                </h4>
                <p className="text-gray-600 leading-relaxed pl-6">
                  {highlightCase.challenge}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-[#333333] mb-3 flex items-center">
                  <span className="w-3 h-3 bg-[#37B7C4] rounded-full mr-3"></span>
                  ARCHAIVEによる解決
                </h4>
                <p className="text-gray-600 leading-relaxed pl-6">
                  {highlightCase.solution}
                </p>
              </div>
            </div>
          </div>

          {/* 詳細コメント */}
          <div className="bg-[#37B7C4]/10 rounded-xl p-6 mt-8">
            <p className="text-gray-700 leading-relaxed italic">
              {highlightCase.testimonial}
            </p>
          </div>
        </div>

        {/* その他の導入企業 */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#333333] mb-6">他の導入企業様</h3>
          <div className="grid md:grid-cols-6 gap-6">
            {otherCompanies.map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-center mb-2">{company.icon}</div>
                <div className="text-sm text-gray-600">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 第三者機関からの評価 */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              第三者機関からの評価
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#37B7C4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div className="text-lg font-semibold text-[#333333] mb-2">ISO27001認証取得</div>
                <div className="text-sm text-gray-600">情報セキュリティ管理システム</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#37B7C4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                </div>
                <div className="text-lg font-semibold text-[#333333] mb-2">プライバシーマーク取得</div>
                <div className="text-sm text-gray-600">個人情報保護体制</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#37B7C4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div className="text-lg font-semibold text-[#333333] mb-2">SOC2 Type2準拠</div>
                <div className="text-sm text-gray-600">クラウドセキュリティ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}