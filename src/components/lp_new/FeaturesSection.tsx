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
      description: "自然な言葉でAIに質問するだけで、図面内のテキスト、Officeファイル、PDFなど、あらゆるドキュメントの中身を横断的に瞬時に検索。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      ),
      title: "類似図面検索",
      description: "アップロードした図面や画像と、形状や特徴が似ている過去の図面をAIが検索。検索後に差分検出で図面の変更点を瞬時に抽出。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "図面自動解析",
      description: "高精度でAIが図面や書類を自動で解析し、データ化。手作業によるデータ入力作業を大幅に削減。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "貴社専用機能開発",
      description: "既存のSaaS機能では対応しきれない、貴社独自の業務プロセスに合わせたカスタマイズ機能を開発。"
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
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "3Dデータアップロード",
      description: "CADデータを含む3Dファイルのアップロードと管理に対応。設計データの一元管理を実現。"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#37B7C4]/5 via-white to-[#37B7C4]/10">
      <div className="container mx-auto max-w-6xl">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            ARCHAIVEの主要機能
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            「After」の世界を実現する、ARCHAIVEのコア機能
          </p>
        </div>

        {/* メイン機能 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#333333] mb-8 text-center">メイン機能</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#37B7C4] rounded-full flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-[#333333] mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* サブ機能 */}
        <div>
          <h3 className="text-2xl font-bold text-[#333333] mb-8 text-center">サポート機能</h3>
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

        {/* 機能統合メッセージ */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              これらの機能が連携し、シームレスな業務体験を実現
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              単体の機能ではなく、すべてが有機的に連携することで、<br />
              <span className="text-[#37B7C4] font-semibold">真の業務改革を実現します</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}