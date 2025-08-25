export default function LPNewApply() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#37B7C4]">
          DX専門家 無料相談申し込み
        </h1>
        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-center text-gray-600 mb-8">
            貴社の課題に合わせた最適なソリューションをご提案いたします。<br />
            まずはお気軽にご相談ください。
          </p>
          
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#37B7C4] rounded-full text-white text-2xl font-bold mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#333333] mb-2">お電話でのお問い合わせ</h2>
              <p className="text-2xl font-bold text-[#37B7C4] mb-2">03-XXXX-XXXX</p>
              <p className="text-sm text-gray-600">受付時間: 平日 9:00-18:00</p>
            </div>
            
            <div className="border-t border-gray-300 my-8"></div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#37B7C4] rounded-full text-white text-2xl font-bold mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#333333] mb-4">メールでのお問い合わせ</h2>
              <p className="text-gray-600 mb-6">
                下記のメールアドレスまでお気軽にお問い合わせください。<br />
                24時間以内にご返答いたします。
              </p>
              <p className="text-lg font-semibold text-[#37B7C4]">info@archaive.co.jp</p>
            </div>
            
            <div className="border-t border-gray-300 my-8"></div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#37B7C4] rounded-full text-white text-2xl font-bold mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#333333] mb-4">オンライン面談予約</h2>
              <p className="text-gray-600 mb-6">
                専用フォームからオンライン面談の予約も可能です。
              </p>
              <button className="bg-[#37B7C4] hover:bg-[#2a9aa5] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                予約フォームを開く
              </button>
            </div>
          </div>
          
          <div className="mt-12 p-4 bg-[#37B7C4]/10 rounded-lg">
            <h3 className="font-bold text-[#333333] mb-2">相談内容の例</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 現在の業務課題についてのヒアリング</li>
              <li>• ARCHAIVEの機能デモンストレーション</li>
              <li>• 導入効果のシミュレーション</li>
              <li>• 料金・導入スケジュールのご案内</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}