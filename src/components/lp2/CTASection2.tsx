'use client';

import Button from '@/components/ui/Button';

export default function CTASection2() {
  return (
    <section id="cta2" className="py-24 bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 text-center relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-700 drop-shadow">
          競合が見積もりを作っている間に、あなたの会社は次の受注を決めている。
        </h2>
        <p className="text-xl mb-8 text-gray-800 font-semibold">
          まずは30分のオンラインデモで、その実力と未来の働き方を体験してください。
        </p>
        <Button as="a" href="/lp2/apply" size="lg" className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white shadow-xl text-2xl px-12 py-5 rounded-full font-bold hover:scale-105 transition mb-4">
          無料でその実力をデモ体験
        </Button>
        <div className="text-base text-gray-500 mt-4">かんたん入力30秒 / 無理な勧誘は一切ありません</div>
      </div>
      {/* Decorative BG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" className="absolute bottom-0 left-0 w-full h-64 opacity-30">
          <path fill="#a5b4fc" fillOpacity="0.5" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
} 