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
    <section id="features2" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-purple-700 drop-shadow">
なぜARCHAIVEなら、&quot;見積もり3分&quot;が可能なのか？
</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className={`rounded-2xl shadow-lg p-8 bg-gradient-to-br ${f.color} text-center flex flex-col items-center`}> 
              <Icon type={f.icon as IconType} size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-purple-800">{f.title}</h3>
              <p className="text-gray-700">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 