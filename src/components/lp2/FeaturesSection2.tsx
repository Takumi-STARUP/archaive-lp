'use client';

import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';

const features = [
  {
    icon: 'ai',
    title: '超高精度な図面読解力',
    description: 'AIが人間を超える精度で図面情報を読み取り、解釈します。',
    color: 'from-pink-200 to-pink-100',
  },
  {
    icon: 'speed',
    title: '圧倒的な処理スピード',
    description: '人間が数時間かける作業を、AIがわずか数分で完了させます。',
    color: 'from-blue-200 to-blue-100',
  },
  {
    icon: 'chat',
    title: '誰でも使える対話形式UI',
    description: '専門知識不要。チャットで対話するだけの直感的な操作性。',
    color: 'from-green-200 to-green-100',
  },
];

export default function FeaturesSection2() {
  return (
    <section id="features2" className="py-20 bg-white text-[#181A1B]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-[#37B7C4] drop-shadow">なぜARCHAIVEなら、&quot;見積もり3分&quot;が可能なのか？</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-[#37B7C4] via-blue-400 to-purple-400 rounded-full mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-2xl shadow-xl p-8 bg-white border border-[#37B7C4]/20 text-center flex flex-col items-center">
              <Icon type={f.icon as IconType} size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-[#37B7C4]">{f.title}</h3>
              <p className="text-[#181A1B]/90">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 