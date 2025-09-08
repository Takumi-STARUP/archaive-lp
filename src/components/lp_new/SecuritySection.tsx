export default function SecuritySection() {
  const securityMeasures = [
    {
      title: "不正アクセス対策",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      ),
      items: [
        "最小限の通信ポートとIPアドレス範囲だけを許可し、不正アクセス経路を最小化",
        "必要最低限のアクセス権のみ付与し、誤った権限設定による侵入・情報漏洩を防止",
        "API通信や管理画面へのアクセスをSSL/TLSで暗号化し、通信経路上での盗聴・改ざんリスクを低減"
      ]
    },
    {
      title: "脆弱性対策",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      items: [
        "OSやミドルウェア、コンテナイメージに定期的にパッチを適用し、既知の脆弱性を早期に修正",
        "定期的に脆弱性スキャンを行い、早期発見・対策を実施",
        "不正なリクエストや攻撃パターン（SQLインジェクション、XSSなど）をブロックし、アプリケーション層の脆弱性を軽減"
      ]
    },
    {
      title: "データの保全・保護",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.39 4 7.5 4s7.5-1.79 7.5-4V7c0 2.21-3.39 4-7.5 4S4 9.21 4 7z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7c0-2.21 3.39-4 7.5-4s7.5 1.79 7.5 4"/>
        </svg>
      ),
      items: [
        "保存データの暗号化、および通信経路の暗号化を実施",
        "定期的なバックアップの取得、災害復旧用のマルチリージョンバックアップ、リストア手順の整備",
        "DB毎にアクセス権限を厳密に設定し、誤ったデータ公開や改ざんを防止",
        "データアクセス状況を記録・可視化し、異常検知を行う"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            安心のセキュリティ
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {securityMeasures.map((measure, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                {measure.icon}
                <h3 className="text-lg sm:text-xl font-bold text-[#333333] ml-3">
                  {measure.title}
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {measure.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-[#37B7C4] text-2xl mt-0 mr-3 flex-shrink-0">・</span>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}