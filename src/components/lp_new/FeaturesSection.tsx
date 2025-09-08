'use client';

export default function FeaturesSection() {
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
        <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10h5l-6 7v-5H7l6-7v5z"/>
        </svg>
      ),
      title: "柔軟なAPI連携",
      description: "既存のERP、PLM、生産管理システムなど、社内のあらゆるシステムと連携し、データのハブとなる。"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      ),
      title: "高度な権限設定",
      description: "役職や部門、プロジェクト単位で、ファイルへのアクセス権限を柔軟に設定。セキュアな情報共有を実現。"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 15a4 4 0 004 4h10a4 4 0 004-4M3 15a4 4 0 014-4h10a4 4 0 014 4M3 15V9a4 4 0 014-4h10a4 4 0 014 4v6"/>
        </svg>
      ),
      title: "3Dデータアップロード",
      description: ""
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
        </svg>
      ),
      title: "図面内書き込み",
      description: ""
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"/>
        </svg>
      ),
      title: "組図部品図管理",
      description: ""
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      title: "帳票発行",
      description: ""
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 sm:mb-6">
            ARCHAIVEの主な機能
          </h2>
        </div>

        {/* メイン機能 */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* AIチャット型データ検索 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 sm:p-8 pb-4 flex items-start min-h-[120px]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#37B7C4] rounded-full flex items-center justify-center text-white mr-4 sm:mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#333333] mb-3 sm:mb-4">
                    AIチャット型データ検索
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 h-10">
                    自然な言葉でAIに質問するだけで、あらゆるドキュメントを瞬時に検索。
                  </p>
                </div>
              </div>
              
              {/* UI Preview */}
              <div className="mx-4 mb-4">
                <img 
                  src="/images/サブUI.png" 
                  alt="AIチャット型データ検索 UI" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* 類似図面検索 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 sm:p-8 pb-4 flex items-start min-h-[120px]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#37B7C4] rounded-full flex items-center justify-center text-white mr-4 sm:mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#333333] mb-3 sm:mb-4">
                    類似検索・自動解析
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 h-10">
                    アップロードした図面と似ている過去の図面をAIが検索し、自動解析でデータ化。
                  </p>
                </div>
              </div>
              
              {/* UI Preview */}
              <div className="mx-4 mb-4">
                <img 
                  src="/images/サブUI.png" 
                  alt="類似検索・自動解析 UI" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* AI見積エージェント */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 sm:p-8 pb-4 flex items-start min-h-[120px]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#37B7C4] rounded-full flex items-center justify-center text-white mr-4 sm:mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#333333] mb-3 sm:mb-4">
                    AI見積エージェント
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 h-10">
                    見積りの管理と帳票の発行、チャットでAIが見積り生成する。
                  </p>
                </div>
              </div>
              
              {/* UI Preview */}
              <div className="mx-4 mb-4">
                <img 
                  src="/images/サブUI.png" 
                  alt="AI見積エージェント UI" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* カスタムAIソリューションサービス */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 sm:p-8 pb-4 flex items-start min-h-[120px]">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#37B7C4] rounded-full flex items-center justify-center text-white mr-4 sm:mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-[#333333] mb-3 sm:mb-4">
                    カスタムAIソリューションサービス
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 h-10">
                    貴社独自の業務プロセスに合わせたカスタマイズ機能を開発。
                  </p>
                </div>
              </div>
              
              {/* UI Preview */}
              <div className="mx-4 mb-4">
                <img 
                  src="/images/サブUI.png" 
                  alt="カスタムAIソリューションサービス UI" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* その他の機能 */}
        <div>
          {/* 上段: 説明付きの2つ */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {subFeatures.slice(0, 2).map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#333333] mb-3">
                  {feature.title}
                </h4>
                {feature.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
          
          {/* 下段: 説明なしの4つ */}
          <div className="grid md:grid-cols-4 gap-6">
            {subFeatures.slice(2).map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#333333] mb-3">
                  {feature.title}
                </h4>
                {feature.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}