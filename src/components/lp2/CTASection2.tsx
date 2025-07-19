'use client';

import Button from '@/components/ui/Button';

export default function CTASection2() {
  return (
    <section className="py-20 bg-black text-white shadow-2xl rounded-3xl">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-white drop-shadow">
          競合が見積もりを作っている間に、あなたの会社は次の受注を決めている。
        </h2>
        <p className="text-xl mb-8 text-white font-semibold">
          まずは30分のオンラインデモで、その実力と未来の働き方を体験してください。
        </p>
        <Button as="a" href="/lp2/apply" size="lg" className="bg-[#37B7C4] text-white shadow-xl text-2xl px-12 py-5 rounded-full font-bold hover:scale-105 transition mb-4">
          無料でその実力をデモ体験
        </Button>
        <div className="text-base text-white/70 mt-4">かんたん入力30秒 / 無理な勧誘は一切ありません</div>
      </div>
    </section>
  );
} 