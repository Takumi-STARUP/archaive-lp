'use client';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#37B7C4]/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-6xl">
        {/* 統合LPとしての戦略的メッセージ */}
        <div className="bg-gradient-to-r from-[#37B7C4]/10 to-[#37B7C4]/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              なぜARCHAIVEが選ばれるのか
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                私たちは<span className="font-bold text-[#37B7C4]">「ただの便利なSaaS」</span>ではありません。
              </p>
              
              {/* 戦略的ポジショニング */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#37B7C4] mb-6">
                  SaaSの手軽さ × 伴走型開発の柔軟性
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-left">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#37B7C4] rounded-full flex items-center justify-center text-white font-bold mr-4">
                        1
                      </div>
                      <h4 className="text-lg font-bold text-[#333333]">手軽にツールを導入したい担当者様</h4>
                    </div>
                    <p className="text-gray-600 pl-16">
                      まずはSaaSの標準機能から。<br />
                      低リスクで確実な成果を短期間で実現します。
                    </p>
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#37B7C4] rounded-full flex items-center justify-center text-white font-bold mr-4">
                        2
                      </div>
                      <h4 className="text-lg font-bold text-[#333333]">システム全体の課題を抱える経営者様</h4>
                    </div>
                    <p className="text-gray-600 pl-16">
                      組織全体の最適化まで。<br />
                      貴社専用のシステムへと成長させていきます。
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-center text-lg font-medium text-[#333333]">
                    <span className="text-[#37B7C4] font-bold">どちらのニーズにも</span>応え、<br />
                    「SaaSから始め、ゆくゆくはシステム全体も」という<br />
                    <span className="text-[#37B7C4] font-bold">成長のストーリー</span>を共に描きます
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 実際のUI画面イメージ */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-[#333333] mb-8">
              直感的で使いやすいインターフェース
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* UI画面プレースホルダー1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-[#37B7C4] h-8 flex items-center px-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="bg-[#37B7C4]/10 rounded-lg p-4 border-2 border-[#37B7C4]">
                    <div className="text-sm font-bold text-[#37B7C4] mb-2">AIチャット検索</div>
                    <div className="h-2 bg-[#37B7C4]/30 rounded w-full mb-2"></div>
                    <div className="h-2 bg-[#37B7C4]/30 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="px-6 pb-4">
                  <p className="text-sm text-center text-gray-600">自然言語での検索</p>
                </div>
              </div>
              
              {/* UI画面プレースホルダー2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-[#37B7C4] h-8 flex items-center px-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white rounded-lg p-3">
                      <div className="h-20 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="h-20 bg-gray-200 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-[#37B7C4]/20 rounded-lg p-2">
                    <div className="text-xs text-[#37B7C4] font-bold">高精度マッチング</div>
                  </div>
                </div>
                <div className="px-6 pb-4">
                  <p className="text-sm text-center text-gray-600">類似図面検索</p>
                </div>
              </div>
              
              {/* UI画面プレースホルダー3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-[#37B7C4] h-8 flex items-center px-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
                      <div className="h-3 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
                      <div className="h-3 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
                      <div className="h-3 bg-gray-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-4">
                  <p className="text-sm text-center text-gray-600">システム連携状況</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}