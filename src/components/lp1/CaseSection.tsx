import Icon from '@/components/ui/Icon';

const cases = [
  {
    company: '山田製作所',
    person: '山田 太郎',
    position: '営業部長',
    logoUrl: '/images/lp1-company1.png',
    photoUrl: '/images/lp1-person1.png',
    before: '見積もり作成に毎回2時間以上かかっていた。',
    after: 'AI導入で3分に短縮、営業効率が大幅アップ。',
    comment: '現場の誰でも使える直感的なUIで、属人化も解消できました。',
  },
  {
    company: 'ABCパーツ',
    person: '佐藤 花子',
    position: 'DX推進担当',
    logoUrl: '/images/lp1-company2.png',
    photoUrl: '/images/lp1-person2.png',
    before: '過去案件の検索や見積もり精度に課題。',
    after: 'AIが類似案件を瞬時に提案、利益率も向上。',
    comment: '導入サポートも手厚く、安心して現場展開できました。',
  },
];

export default function CaseSection() {
  return (
    <section id="cases" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-[#37B7C4] text-center">すでに、競争力を手に入れた企業様の声</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {cases.map((c, idx) => (
            <div key={idx} className="w-full md:w-[340px] bg-blue-50 rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col items-center">
              <img src={c.logoUrl} alt={c.company + 'ロゴ'} className="h-10 mb-2" />
              <img src={c.photoUrl} alt={c.person + '写真'} className="w-16 h-16 rounded-full border-2 border-[#37B7C4] mb-2 object-cover" />
              <div className="font-bold text-blue-700 mb-1">{c.company}</div>
              <div className="text-sm text-gray-600 mb-2">{c.person}（{c.position}）</div>
              <div className="text-xs text-gray-500 mb-1">導入前: {c.before}</div>
              <div className="text-xs text-[#37B7C4] mb-2">導入後: {c.after}</div>
              <div className="italic text-gray-700 text-center">“{c.comment}”</div>
            </div>
          ))}
        </div>
        {/* 導入企業ロゴ一覧例 */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <img src="/images/company-yamada.png" alt="山田製作所ロゴ" className="h-8" />
          <img src="/images/company-abc.png" alt="ABCパーツロゴ" className="h-8" />
          <Icon type="company" size={32} />
          <Icon type="company" size={32} />
        </div>
      </div>
    </section>
  );
} 