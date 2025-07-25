'use client';

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

export default function ProductSection2() {
  return (
    <section id="product2" className="py-20 bg-black text-[#37B7C4] shadow-2xl scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-[#37B7C4] text-center drop-shadow max-w-2xl mx-auto leading-tight">
          革命を支える、盤石なデータ活用基盤
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white text-center mb-10 font-semibold max-w-2xl mx-auto leading-relaxed">
          この革命的な見積もり自動化は、ARCHAIVEの強力なデータ活用基盤があるからこそ実現できます。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {features.map((f, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-[#37B7C4]/10 rounded-2xl shadow p-8 border border-[#37B7C4]/20">
              <Icon type={f.icon as IconType} size={40} className="shrink-0" />
              <div>
                <div className="font-bold text-[#37B7C4] text-lg md:text-xl mb-1 leading-snug">{f.title}</div>
                <div className="text-white text-sm sm:text-base md:text-lg leading-relaxed">{f.description}</div>
              </div>
            </div>
          ))}
        </div>
        {/* UIスクリーンショットやGIFのダミー */}
        <div className="flex flex-wrap justify-center gap-6">
          <img src="/images/lp2-ui-demo1.png" alt="LP2 UIデモ1" className="w-64 h-40 object-cover rounded-lg border border-[#37B7C4]/20 shadow" />
          <img src="/images/lp2-ui-demo2.png" alt="LP2 UIデモ2" className="w-64 h-40 object-cover rounded-lg border border-[#37B7C4]/20 shadow" />
        </div>
      </div>
    </section>
  );
} 