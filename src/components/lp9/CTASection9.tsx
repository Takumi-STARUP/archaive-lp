'use client';

import Button from '@/components/ui/Button';

export default function CTASection9() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* メインメッセージ */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            競合が見積もりを作っている間に、
            <span className="block text-[#37B7C4]">あなたの会社は次の受注を決めている。</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            まずは30分のオンラインデモで、その実力と未来の働き方を体験してください。
          </p>
        </div>

        {/* CTAボックス */}
        <div className="bg-black border-4 border-[#37B7C4] p-12">
          <div className="mb-8">
            <div className="text-[#37B7C4] font-bold text-lg mb-2">今すぐ始めよう</div>
            <h3 className="text-3xl font-bold text-white mb-4">見積もり業務を3分に短縮</h3>
            <p className="text-gray-300">
              業界初のチャット式見積AIを無料体験
            </p>
          </div>

          {/* CTAボタン */}
          <div className="space-y-4">
            <Button 
              as="a" 
              href="/lp9/apply" 
              size="lg" 
              className="w-full md:w-auto bg-[#37B7C4] hover:bg-[#2596a6] text-white font-bold text-xl px-12 py-6 transition-all duration-300 shadow-xl"
            >
              無料でその実力をデモ体験
            </Button>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#37B7C4] rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                    <path d="M6.5 0L5.5 1L7 2.5L2 7.5L3.5 9L8.5 4L10 5.5L11 4.5L6.5 0Z" />
                  </svg>
                </div>
                <span>かんたん入力30秒</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#37B7C4] rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                    <path d="M6.5 0L5.5 1L7 2.5L2 7.5L3.5 9L8.5 4L10 5.5L11 4.5L6.5 0Z" />
                  </svg>
                </div>
                <span>無理な勧誘は一切ありません</span>
              </div>
            </div>
          </div>
        </div>

        {/* 追加情報 */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            200社以上の製造業で導入実績 | 平均84倍の業務効率化を実現
          </p>
        </div>
      </div>
    </section>
  );
} 