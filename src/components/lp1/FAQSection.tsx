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

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-[#37B7C4] text-center">よくあるご質問</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl shadow p-6 border border-blue-100">
              <div className="font-bold text-[#37B7C4] mb-2">Q. {faq.question}</div>
              <div className="text-gray-700">A. {faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 