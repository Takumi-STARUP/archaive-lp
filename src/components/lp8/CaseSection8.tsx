'use client';

import Icon from '@/components/ui/Icon';

const cases = [
  {
    company: '山田製作所',
    industry: '製造業',
    logo: 'factory',
    quote: '現場の誰でも使える直感的なUIで、属人化も解消できました。',
    person: '山田 太郎',
    position: '営業部長',
    info: '40代／製造業',
  },
  {
    company: 'ABCパーツ',
    industry: '製造業',
    logo: 'factory',
    quote: '導入サポートも手厚く、安心して現場展開できました。',
    person: '佐藤 花子',
    position: 'DX推進担当',
    info: '40代／製造業',
  },
];

export default function CaseSection8() {
  return (
    <section id="cases3" className="py-24 bg-[#FAFAF8] text-gray-700 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#8B3A3A] px-6 py-2 mb-6">
            <span className="text-gray-700 font-medium tracking-wider">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-700 mb-4 leading-tight">
            お客様の
            <span className="block text-[#8B3A3A]">声</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* お客様の声 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {cases.map((testimonial, idx) => (
            <div key={idx} className="group">
              <div className="bg-white p-8 border-l-4 border-[#8B3A3A] relative">
                {/* 引用符装飾 */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#8B3A3A] flex items-center justify-center">
                  <span className="text-gray-700 font-medium text-xl">"</span>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-xl text-black mb-2">{testimonial.company}</h3>
                  <div className="w-12 h-0.5 bg-[#8B3A3A]"></div>
                </div>
                
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-black">{testimonial.person}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-xs text-gray-500">{testimonial.info}</div>
                  </div>
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Icon type={testimonial.logo as any} size={24} className="text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 実績統計 */}
        <div className="border border-gray-600 p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '200+', label: '導入企業数', desc: '製造業を中心に導入' },
              { value: '95%', label: '顧客満足度', desc: '継続利用率も高水準' },
              { value: '3分', label: '平均見積時間', desc: '従来の1/80の時間' },
              { value: '99.2%', label: '精度向上率', desc: 'ヒューマンエラーを削減' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-medium text-[#8B3A3A] mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="/lp8/reviews" 
            className="inline-block bg-white text-black border-2 border-white px-8 py-4 font-medium text-lg hover:bg-[#FAFAF8] hover:text-gray-700 transition-all duration-300"
          >
            さらに多くのお客様の声を見る
          </a>
        </div>
      </div>
    </section>
  );
} 