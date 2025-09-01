import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h1 className="text-4xl font-extrabold mb-8 text-[#37B7C4] drop-shadow">ARCHAIVE ランディングページ選択</h1>
      <div className="flex flex-col items-center gap-8">
        {/* メインLP（最新版） */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">推奨</p>
          <Link 
            href="/lp_new" 
            className="inline-block px-8 py-6 bg-gradient-to-r from-[#37B7C4] to-[#2a9aa5] text-white rounded-xl font-bold text-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            LP最新版を見る
          </Link>
          <p className="text-xs text-gray-500 mt-2">条件付きパディング実装済み</p>
        </div>
        
        {/* 既存LP */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">過去バージョン</p>
          <Link 
            href="/lp1" 
            className="inline-block px-6 py-4 bg-gray-400 text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition text-center"
          >
            LP1を見る
          </Link>
        </div>
      </div>
    </main>
  );
}