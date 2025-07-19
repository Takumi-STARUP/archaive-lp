'use client';

import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';

const features = [
  {
    icon: 'ai',
    title: '超高精度な図面読解力',
    description: 'AIが人間を超える精度で図面情報を読み取り、解釈します。',
  },
  {
    icon: 'speed',
    title: '圧倒的な処理スピード',
    description: '人間が数時間かける作業を、AIがわずか数分で完了させます。',
  },
  {
    icon: 'chat',
    title: '誰でも使える対話形式UI',
    description: '専門知識不要。チャットで対話するだけの直感的な操作性。',
  },
];

export default function FeaturesSection2() {
  return (
    <section className="py-20 bg-white text-[#37B7C4] shadow-2xl rounded-3xl">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#37B7C4] drop-shadow">
          なぜARCHAIVEなら、"見積もり3分"が可能なのか？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-2xl shadow-lg p-8 bg-[#37B7C4]/10 text-center flex flex-col items-center">
              <Icon type={f.icon as IconType} size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-[#37B7C4]">{f.title}</h3>
              <p className="text-[#37B7C4]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 