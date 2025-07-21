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
    <section id="process2" className="py-20 bg-black text-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white text-center">
          導入までの流れ
        </h2>
        <p className="mb-10 text-base md:text-lg text-white text-center">最短で5営業日から支援開始できます！</p>
        <div className="flex flex-col gap-6">
          {/* STEP1 */}
          <div className="flex flex-col md:flex-row items-stretch bg-white rounded-md">
            <div className="bg-[#37B7C4] text-black font-bold flex items-center justify-center px-8 py-4 text-xl md:text-2xl min-w-[140px] md:min-w-[180px] rounded-l-md">
              STEP1
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-stretch">
              <div className="flex-1 flex items-center px-6 py-4 text-black font-bold text-lg md:text-xl justify-start w-full">
                お問い合わせ・デモ予約
              </div>
              <div className="flex-1 flex items-center px-6 py-4 text-black text-base md:text-lg justify-start w-full border-t md:border-t-0 md:border-l border-gray-200">
                フォームから30秒で簡単予約。
              </div>
            </div>
          </div>
          {/* STEP2 */}
          <div className="flex flex-col md:flex-row items-stretch bg-white rounded-md">
            <div className="bg-[#37B7C4] text-black font-bold flex items-center justify-center px-8 py-4 text-xl md:text-2xl min-w-[140px] md:min-w-[180px] rounded-l-md">
              STEP2
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-stretch">
              <div className="flex-1 flex items-center px-6 py-4 text-black font-bold text-lg md:text-xl justify-start w-full">
                オンラインデモ・ヒアリング
              </div>
              <div className="flex-1 flex items-center px-6 py-4 text-black text-base md:text-lg justify-start w-full border-t md:border-t-0 md:border-l border-gray-200">
                貴社の課題を伺いながら、実際の画面で機能や効果をご説明します（30分）。
              </div>
            </div>
          </div>
          {/* STEP3 */}
          <div className="flex flex-col md:flex-row items-stretch bg-white rounded-md">
            <div className="bg-[#37B7C4] text-black font-bold flex items-center justify-center px-8 py-4 text-xl md:text-2xl min-w-[140px] md:min-w-[180px] rounded-l-md">
              STEP3
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-stretch">
              <div className="flex-1 flex items-center px-6 py-4 text-black font-bold text-lg md:text-xl justify-start w-full">
                ご契約・導入サポート
              </div>
              <div className="flex-1 flex items-center px-6 py-4 text-black text-base md:text-lg justify-start w-full border-t md:border-t-0 md:border-l border-gray-200">
                専任スタッフがデータ移行から初期設定まで丁寧にサポートします。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 