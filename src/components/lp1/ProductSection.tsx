import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';

const features = [
  {
    icon: 'doc',
    title: 'AI類似図面検索',
    description: '「こんな感じ」という曖昧な指示でも、AIが過去の類似図面を瞬時に発見。',
  },
  {
    icon: 'doc',
    title: 'AI-OCRによる全文検索',
    description: '紙図面やPDF内の文字も全てテキスト化。どんな情報も見逃しません。',
  },
  {
    icon: 'doc',
    title: '関連ドキュメントの一元管理',
    description: '図面、仕様書、過去の見積書などを自動で紐付け、一元管理。',
  },
  {
    icon: 'diff',
    title: '差分検出',
    description: '新旧2つの図面の違いをAIが一瞬で検出し、変更点の見落としを防ぎます。',
  },
];

export default function ProductSection() {
  return (
    <section id="product" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-[#37B7C4] text-center">革命を支える、盤石なデータ活用基盤</h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          この革命的な見積もり自動化は、ARCHAIVEの強力なデータ活用基盤があるからこそ実現できます。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {features.map((f, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-blue-50 rounded-xl shadow p-6 border border-blue-100">
              <Icon type={f.icon as IconType} size={40} className="shrink-0" />
              <div>
                <div className="font-bold text-[#37B7C4] text-lg mb-1">{f.title}</div>
                <div className="text-gray-700">{f.description}</div>
              </div>
            </div>
          ))}
        </div>
        {/* UIスクリーンショットやGIFのダミー */}
        <div className="flex flex-wrap justify-center gap-6">
          <img src="/images/lp1-ui-demo1.png" alt="LP1 UIデモ1" className="w-64 h-40 object-cover rounded-lg border border-blue-100 shadow" />
          <img src="/images/lp1-ui-demo2.png" alt="LP1 UIデモ2" className="w-64 h-40 object-cover rounded-lg border border-blue-100 shadow" />
        </div>
      </div>
    </section>
  );
} 