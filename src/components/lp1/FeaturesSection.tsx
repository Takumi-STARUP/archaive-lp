import Icon from '@/components/ui/Icon';

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
    title: '誰でも使える対話UI',
    description: '専門知識は不要。チャットで対話するだけの直感的な操作性。',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-[#37B7C4] text-center">なぜARCHAIVEなら、"見積もり3分"が可能なのか？</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 border border-blue-100 transition hover:shadow-xl">
              <Icon type={feature.icon as any} size={48} className="mb-4" />
              <h3 className="text-xl font-bold text-[#37B7C4] mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 