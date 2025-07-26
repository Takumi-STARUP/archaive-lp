import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h1 className="text-4xl font-extrabold mb-8 text-[#37B7C4] drop-shadow">ARCHAIVE ランディングページ選択</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
        <Link href="/lp1" className="px-6 py-4 bg-[#37B7C4] text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition text-center">LP1を見る</Link>
        <Link href="/lp2" className="px-6 py-4 bg-black text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition text-center">LP2を見る</Link>
        <Link href="/lp3" className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition text-center">LP3を見る</Link>
        <Link href="/lp6" className="px-6 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition text-center">LP6を見る</Link>
        <Link href="/lp7" className="px-6 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition text-center">LP7を見る</Link>
        <Link href="/lp8" className="px-6 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition text-center">LP8を見る</Link>
        <Link href="/lp9" className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition text-center">LP9を見る</Link>
        <Link href="/lp10" className="px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-xl shadow-lg hover:scale-105 transition text-center">LP10を見る</Link>
      </div>
      </main>
  );
}