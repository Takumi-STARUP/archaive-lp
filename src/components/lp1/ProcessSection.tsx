import Icon from '@/components/ui/Icon';

const steps = [
  {
    icon: 'arrow',
    title: 'お問い合わせ・デモ予約',
    description: 'フォームから30秒で簡単予約。',
  },
  {
    icon: 'chat',
    title: 'オンラインデモ・ヒアリング',
    description: '貴社の課題を伺いながら、実際の画面で機能や効果をご説明します（30分）。',
  },
  {
    icon: 'check',
    title: 'ご契約・導入サポート',
    description: '専任スタッフがデータ移行から初期設定まで丁寧にサポートします。',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-[#37B7C4] text-center">ご利用開始までのかんたん3ステップ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 border border-blue-100">
              <Icon type={step.icon as any} size={48} className="mb-4" />
              <h3 className="text-xl font-bold text-[#37B7C4] mb-2">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 