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
    <section id="features2" className="py-20 bg-white text-[#181A1B] scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-16 text-black drop-shadow">
          なぜARCHAIVEなら、"見積もり3分"が可能なのか？
        </h2>
        <div className="flex flex-col gap-32">
          {/* 1つ目 */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-extrabold text-[#37B7C4] opacity-10 select-none pointer-events-none z-0">01</span>
            <div className="flex-1 relative z-10">
              <h3 className="font-bold text-2xl md:text-3xl mb-4 text-[#37B7C4]">超高精度な図面読解力</h3>
              <p className="text-base md:text-lg text-[#181A1B] leading-relaxed mb-2">AIが人間を超える精度で図面情報を読み取り、解釈します。</p>
            </div>
            <div className="flex-1 flex justify-center relative z-10">
              <img src="/images/feature1.png" alt="超高精度な図面読解力" className="w-full max-w-md rounded-xl shadow" />
            </div>
          </div>
          {/* 2つ目 */}
          <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-extrabold text-[#37B7C4] opacity-10 select-none pointer-events-none z-0">02</span>
            <div className="flex-1 relative z-10">
              <h3 className="font-bold text-2xl md:text-3xl mb-4 text-[#37B7C4]">圧倒的な処理スピード</h3>
              <p className="text-base md:text-lg text-[#181A1B] leading-relaxed mb-2">人間が数時間かける作業を、AIがわずか数分で完了させます。</p>
            </div>
            <div className="flex-1 flex justify-center relative z-10">
              <img src="/images/feature2.png" alt="圧倒的な処理スピード" className="w-full max-w-md rounded-xl shadow" />
            </div>
          </div>
          {/* 3つ目 */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-extrabold text-[#37B7C4] opacity-10 select-none pointer-events-none z-0">03</span>
            <div className="flex-1 relative z-10">
              <h3 className="font-bold text-2xl md:text-3xl mb-4 text-[#37B7C4]">誰でも使える対話形式UI</h3>
              <p className="text-base md:text-lg text-[#181A1B] leading-relaxed mb-2">専門知識不要。チャットで対話するだけの直感的な操作性。</p>
            </div>
            <div className="flex-1 flex justify-center relative z-10">
              <img src="/images/feature3.png" alt="誰でも使える対話形式UI" className="w-full max-w-md rounded-xl shadow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 