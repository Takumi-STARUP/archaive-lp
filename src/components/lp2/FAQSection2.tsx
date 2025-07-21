'use client';

import { useState } from 'react';
import Icon from '../ui/Icon';

const faqGroups = [
  {
    category: 'FAQ',
    faqs: [
      { question: 'PC操作が苦手でも使えますか？', answer: 'はい。チャット形式の直感的なUIなので、どなたでも簡単にご利用いただけます。' },
      { question: '料金体系はどうなっていますか？', answer: 'ご利用規模や機能に応じたプランをご用意しています。詳細はお問い合わせください。' },
      { question: 'データ移行や初期設定はサポートしてもらえますか？', answer: '専任スタッフがデータ移行から初期設定まで丁寧にサポートします。' },
      { question: 'セキュリティ対策は万全ですか？', answer: '最新のセキュリティ技術を導入し、厳重な管理体制を敷いています。' },
    ],
  },
];

export default function FAQSection2() {
  const [open, setOpen] = useState<{ group: number; idx: number } | null>(null);

  return (
    <section id="faq2" className="py-20 bg-[#f7f9fa] text-[#181A1B] scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-12 text-center">FAQ</h2>
        <div className="space-y-10">
          {faqGroups.map((group, gidx) => (
            <div key={gidx}>
              <div className="font-bold text-lg md:text-xl mb-4 text-left">{group.category}</div>
              <div className="space-y-6">
                {group.faqs.map((faq, i) => {
                  const isOpen = open && open.group === gidx && open.idx === i;
                  return (
                    <div key={i} className="flex flex-col w-full">
                      <button
                        onClick={() => {
                          setOpen(isOpen ? null : { group: gidx, idx: i });
                        }}
                        aria-expanded={isOpen ? 'true' : 'false'}
                        aria-controls={`faq-a-${gidx}-${i}`}
                        className={`w-full bg-white rounded-lg px-6 py-4 flex items-center text-left border-2 outline-none group transition-colors duration-150 ${isOpen ? 'border-[#2596a6]' : 'border-transparent hover:border-[#37B7C4]'}`}
                      >
                        <span className="font-bold mr-3 text-[#181A1B]">Q.</span>
                        <span className="text-base md:text-lg text-[#181A1B] flex-1">{faq.question}</span>
                        <span className="ml-4 p-2 rounded-full transition">
                          <Icon type="arrow" size={24} className={`text-[#37B7C4] transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                        </span>
                      </button>
                      {isOpen && (
                        <div
                          id={`faq-a-${gidx}-${i}`}
                          className="w-full bg-white rounded-lg px-6 py-4 mt-2 flex items-center text-left shadow"
                        >
                          <span className="font-bold mr-3 text-[#181A1B]">A.</span>
                          <span className="text-base md:text-lg text-[#181A1B] flex-1">{faq.answer}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 