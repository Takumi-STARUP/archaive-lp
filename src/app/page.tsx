import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h1 className="text-4xl font-extrabold mb-8 text-[#37B7C4] drop-shadow">ARCHAIVE ランディングページ選択</h1>
      <div className="flex gap-8">
        <Link href="/lp1" className="px-8 py-4 bg-[#37B7C4] text-white rounded-xl font-bold text-2xl shadow-lg hover:scale-105 transition">LP1を見る</Link>
        <Link href="/lp2" className="px-8 py-4 bg-black text-white rounded-xl font-bold text-2xl shadow-lg hover:scale-105 transition">LP2を見る</Link>
      </div>
      </main>
  );
}