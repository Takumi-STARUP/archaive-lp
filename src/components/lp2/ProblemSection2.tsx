'use client';

import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';

const problems = [
  { icon: 'speed', title: 'スピード・精度のバラつき', text: '担当者によって、見積もりのスピードと精度がバラバラ。' },
  { icon: 'search', title: '情報検索の手間', text: '過去の類似案件を探すだけで、膨大な時間が奪われている。' },
  { icon: 'alert', title: 'ミス・確認漏れ', text: '単純な計算ミスや確認漏れで、利益を損なうリスクが常にある。' },
  { icon: 'user', title: '営業の疲弊', text: '結果、営業は疲弊し、ビジネスチャンスを逃している。' },
];

export default function ProblemSection2() {
  return (
    <section id="problem2" className="py-20 bg-white text-[#181A1B] scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-12 text-[#37B7C4] text-center drop-shadow">「人の経験」に頼った見積もりは、もう限界です。</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-gray-100 rounded-2xl shadow border border-gray-100 flex flex-col items-center p-6 h-full">
              <Icon type={p.icon as IconType} size={40} className="mb-4 text-black" />
              <div className="font-bold text-lg md:text-xl mb-2 text-[#181A1B]">{p.title}</div>
              <div className="text-sm md:text-base text-[#181A1B] leading-relaxed">{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 