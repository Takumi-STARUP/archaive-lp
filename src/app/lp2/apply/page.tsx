import Link from 'next/link';

export default function ApplyPage2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a2233] to-[#37B7C4] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/20">
          <h1 className="text-4xl font-black mb-6 text-[#37B7C4] drop-shadow">お申し込み（LP2）</h1>
          <p className="text-lg mb-8 text-white/80">
            サービスへのお申し込みありがとうございます。<br />
            未来的な業務体験を、今すぐご体感ください。
          </p>
          <div className="bg-black/60 rounded-lg shadow-lg p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 text-[#37B7C4]">申し込みフォーム</h2>
            <p className="text-white/70 mb-6">
              現在、申し込みフォームは準備中です。お問い合わせは以下の方法でお願いします。
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-[#37B7C4] text-xl">📧</span>
                <span className="text-white/90">info@mysaas.co.jp</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-[#37B7C4] text-xl">📞</span>
                <span className="text-white/90">03-1234-5678</span>
              </div>
            </div>
          </div>
          <Link
            href="/lp2"
            className="inline-block px-8 py-3 bg-[#37B7C4] text-white rounded-lg font-black text-lg hover:bg-[#2596a6] transition"
          >
            LP2トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
} 