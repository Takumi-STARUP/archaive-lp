'use client';

import Icon from '@/components/ui/Icon';
import { IconType } from '@/components/ui/Icon';

const problems = [
  { icon: 'speed', title: 'スピード・精度のバラつき', text: '担当者によって、見積もりのスピードと精度がバラバラ。' },
  { icon: 'search', title: '情報検索の手間', text: '過去の類似案件を探すだけで、膨大な時間が奪われている。' },
  { icon: 'alert', title: 'ミス・確認漏れ', text: '単純な計算ミスや確認漏れで、利益を損なうリスクが常にある。' },
  { icon: 'user', title: '営業の疲弊', text: '結果、営業は疲弊し、ビジネスチャンスを逃している。' },
];

export default function ProblemSection6() {
  return (
    <section id="problem3" className="py-24 bg-black text-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#37B7C4] px-6 py-2 mb-6">
            <span className="text-white font-bold tracking-wider">PROBLEMS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            「人の経験」に頼った見積もりは、
            <span className="block text-[#37B7C4]">もう限界です。</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* 問題リスト */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="group">
              <div className="bg-white p-8 h-full border-l-4 border-[#37B7C4] relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* 背景装飾 */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-100 rotate-45 transform translate-x-8 -translate-y-8"></div>
                
                <div className="relative z-10">
                  {/* アイコン */}
                  <div className="mb-4">
                    <Icon type={problem.icon as IconType} size={48} className="text-black group-hover:text-[#37B7C4] transition-colors duration-300" />
                  </div>

                  {/* タイトル */}
                  <h3 className="font-bold text-xl text-black mb-3 leading-tight">
                    {problem.title}
                  </h3>

                  {/* 説明 */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {problem.text}
                  </p>

                  {/* 装飾ライン */}
                  <div className="mt-6">
                    <div className="w-12 h-0.5 bg-[#37B7C4] group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 統計情報 */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '73%', label: '見積もり業務の属人化率', desc: '担当者によって品質にバラつき' },
              { value: '4.2時間', label: '1案件あたりの平均時間', desc: '非効率な手作業による時間ロス' },
              { value: '15%', label: '計算ミス・確認漏れ率', desc: '利益損失のリスクが常に存在' }
            ].map((stat, idx) => (
              <div key={idx} className="border border-gray-600 p-6">
                <div className="text-3xl font-bold text-[#37B7C4] mb-2">{stat.value}</div>
                <div className="text-white font-medium mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 