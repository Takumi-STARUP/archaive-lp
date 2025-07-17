'use client';

import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';

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

export default function ProcessSection2() {
  return (
    <section id="process2" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-[#37B7C4] text-center drop-shadow">ご利用開始までのかんたん3ステップ</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-[#37B7C4] via-blue-400 to-purple-400 rounded-full mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center bg-black rounded-2xl shadow-xl p-10 border-2 border-[#37B7C4]/20">
              <Icon type={step.icon as IconType} size={48} className="mb-4" />
              <h3 className="text-2xl font-bold text-[#37B7C4] mb-2">{step.title}</h3>
              <p className="text-white/90 text-center text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 