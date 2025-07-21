'use client';

const cases = [
  {
    company: '山田製作所',
    person: '山田 太郎',
    position: '営業部長',
    comment: '現場の誰でも使える直感的なUIで、属人化も解消できました。',
    info: '40代／製造業',
  },
  {
    company: 'ABCパーツ',
    person: '佐藤 花子',
    position: 'DX推進担当',
    comment: '導入サポートも手厚く、安心して現場展開できました。',
    info: '40代／製造業',
  },
];

export default function CaseSection2() {
  return (
    <section id="cases2" className="py-20 bg-white text-[#181A1B] scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#181A1B]">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-gray-100 rounded-2xl shadow p-8 flex flex-col items-center text-center border border-gray-100 h-full">
              <div className="font-bold text-lg md:text-xl mb-2 text-[#181A1B]">{c.company}</div>
              <p className="text-base md:text-lg mb-6 leading-relaxed">“{c.comment}”</p>
              <div className="text-xs text-gray-500 mt-auto">{c.person}（{c.position}）<br />{c.info}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a href="/lp2/reviews" className="inline-block px-10 py-4 bg-[#181A1B] text-white text-lg font-bold rounded-full shadow hover:scale-105 transition">ユーザーレビューを見る</a>
        </div>
      </div>
    </section>
  );
} 