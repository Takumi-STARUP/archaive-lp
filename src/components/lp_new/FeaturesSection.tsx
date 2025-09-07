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
      title: "類似図面検索",
      description: "アップロードした図面と似ている過去の図面をAIが検索し、変更点を抽出。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "図面自動解析",
      description: "AIが図面や書類を自動で解析し、データ化。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "貴社専用機能開発",
      description: "貴社独自の業務プロセスに合わせたカスタマイズ機能を開発。"
    }
  ];

  const subFeatures = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
        </svg>
      ),
      title: "柔軟なAPI連携",
      description: "既存システムと連携し、データのハブとなる。"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      ),
      title: "高度な権限設定",
      description: "部門やプロジェクト単位でアクセス権限を設定。"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#37B7C4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "3Dデータアップロード",
      description: "3Dファイルのアップロードと管理に対応。"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#37B7C4]/20">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4 sm:mb-6">
            ARCHAIVEの主な機能
          </h2>
        </div>

        {/* メイン機能 */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* AIチャット型データ検索 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 sm:p-8 pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#37B7C4] rounded-full flex items-center justify-center mb-4 sm:mb-6 text-white">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#333333] mb-3 sm:mb-4">
                  AIチャット型データ検索
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  自然な言葉でAIに質問するだけで、あらゆるドキュメントを瞬時に検索。
                </p>
              </div>
              
              {/* UI Preview */}
              <div className="mx-4 mb-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#37B7C4] h-6 flex items-center px-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <div className="bg-white rounded-lg p-3 mb-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="bg-[#37B7C4]/10 rounded-lg p-3 border border-[#37B7C4]">
                      <div className="text-xs font-bold text-[#37B7C4] mb-2">AIチャット検索</div>
                      <div className="h-2 bg-[#37B7C4]/30 rounded w-full mb-1"></div>
                      <div className="h-2 bg-[#37B7C4]/30 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 類似図面検索 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 pb-4">
                <div className="w-16 h-16 bg-[#37B7C4] rounded-full flex items-center justify-center mb-6 text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#333333] mb-4">
                  類似図面検索
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  アップロードした図面と似ている過去の図面をAIが検索し、変更点を抽出。
                </p>
              </div>
              
              {/* UI Preview */}
              <div className="mx-4 mb-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#37B7C4] h-6 flex items-center px-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="bg-white rounded-lg p-2">
                        <div className="h-16 bg-gray-200 rounded mb-1"></div>
                        <div className="h-1 bg-gray-200 rounded"></div>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <div className="h-16 bg-gray-200 rounded mb-1"></div>
                        <div className="h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-[#37B7C4]/20 rounded-lg p-2">
                      <div className="text-xs text-[#37B7C4] font-bold">高精度マッチング</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 図面自動解析 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 pb-4">
                <div className="w-16 h-16 bg-[#37B7C4] rounded-full flex items-center justify-center mb-6 text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#333333] mb-4">
                  図面自動解析
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AIが図面や書類を自動で解析し、データ化。
                </p>
              </div>
              
              {/* UI Preview */}
              <div className="mx-4 mb-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#37B7C4] h-6 flex items-center px-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                    </div>
                    <div className="mt-2 bg-[#37B7C4]/20 rounded-lg p-2">
                      <div className="text-xs text-[#37B7C4] font-bold">自動解析システム</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 貴社専用機能開発 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 pb-4">
                <div className="w-16 h-16 bg-[#37B7C4] rounded-full flex items-center justify-center mb-6 text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#333333] mb-4">
                  貴社専用機能開発
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  貴社独自の業務プロセスに合わせたカスタマイズ機能を開発。
                </p>
              </div>
              
              {/* UI Preview */}
              <div className="mx-4 mb-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[#37B7C4] h-6 flex items-center px-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="bg-white rounded p-2">
                        <div className="h-8 bg-[#37B7C4]/20 rounded mb-1"></div>
                        <div className="h-1 bg-gray-200 rounded"></div>
                      </div>
                      <div className="bg-white rounded p-2">
                        <div className="h-8 bg-[#37B7C4]/20 rounded mb-1"></div>
                        <div className="h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-white rounded p-2 mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="h-2 bg-gray-200 rounded w-20"></div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-4 bg-[#37B7C4]/30 rounded"></div>
                          <div className="w-4 h-4 bg-[#37B7C4]/30 rounded"></div>
                        </div>
                      </div>
                      <div className="h-1 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-[#37B7C4]/10 rounded-lg p-2 border border-[#37B7C4]/30">
                      <div className="text-xs text-[#37B7C4] font-bold">カスタム機能実装</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* その他の機能 */}
        <div>
          <div className="grid md:grid-cols-3 gap-6">
            {subFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#333333] mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}