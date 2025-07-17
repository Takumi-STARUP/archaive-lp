'use client';

const faqs = [
  {
    question: 'PC操作が苦手でも使えますか？',
    answer: 'はい。チャット形式の直感的なUIなので、どなたでも簡単にご利用いただけます。',
  },
  {
    question: '料金体系はどうなっていますか？',
    answer: 'ご利用規模や機能に応じたプランをご用意しています。詳細はお問い合わせください。',
  },
  {
    question: 'データ移行や初期設定はサポートしてもらえますか？',
    answer: '専任スタッフがデータ移行から初期設定まで丁寧にサポートします。',
  },
  {
    question: 'セキュリティ対策は万全ですか？',
    answer: '最新のセキュリティ技術を導入し、厳重な管理体制を敷いています。',
  },
];

export default function FAQSection2() {
  return (
    <section id="faq2" className="py-20 bg-white text-[#181A1B]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-extrabold mb-4 text-[#37B7C4] text-center drop-shadow">よくあるご質問</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-[#37B7C4] via-blue-400 to-purple-400 rounded-full mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 rounded-2xl shadow p-8 border-2 border-purple-100">
              <div className="font-bold text-blue-700 mb-2 text-lg">Q. {faq.question}</div>
              <div className="text-gray-800 text-base">A. {faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 