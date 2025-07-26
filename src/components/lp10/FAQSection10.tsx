'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';

const faqs = [
  {
    q: 'PC操作が苦手でも使えますか？',
    a: 'はい。チャット形式の直感的なUIなので、どなたでも簡単にご利用いただけます。',
  },
  {
    q: '料金体系はどうなっていますか？',
    a: 'ご利用規模や機能に応じたプランをご用意しています。詳細はお問い合わせください。',
  },
  {
    q: 'データ移行や初期設定はサポートしてもらえますか？',
    a: '専任スタッフがデータ移行から初期設定まで丁寧にサポートします。',
  },
  {
    q: 'セキュリティ対策は万全ですか？',
    a: '最新のセキュリティ技術を導入し、厳重な管理体制を敷いています。',
  },
];

export default function FAQSection10() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq3" className="py-24 bg-black text-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#37B7C4] px-6 py-2 mb-6">
            <span className="text-white font-bold tracking-wider">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            よくある
            <span className="block text-[#37B7C4]">ご質問</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
        
        {/* FAQ リスト */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group">
              <div className="bg-white border-l-4 border-[#37B7C4] overflow-hidden">
                <button
                  className="w-full text-left p-6 flex items-center justify-between group-hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className="flex-1">
                    <span className="font-bold text-sm text-[#37B7C4] mr-3">Q.</span>
                    <span className="font-bold text-lg text-black">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 bg-black flex items-center justify-center transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-45' : ''
                  }`}>
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="w-0.5 h-4 bg-white absolute"></div>
                  </div>
                </button>
                
                {openIndex === idx && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="flex">
                      <span className="font-bold text-sm text-[#37B7C4] mr-3">A.</span>
                      <div className="flex-1 text-gray-700 leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* 追加CTA */}
        <div className="mt-16 border border-gray-600 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">他にご不明な点はございませんか？</h3>
          <p className="mb-6 text-gray-300">
            専門スタッフが無料で詳しくご説明いたします
          </p>
          <a 
            href="/lp10/apply" 
            className="inline-block bg-[#37B7C4] text-white px-8 py-4 font-bold hover:bg-[#2596a6] transition-colors duration-300"
          >
            無料相談を予約する
          </a>
        </div>
      </div>
    </section>
  );
} 