'use client';

import { useState, useEffect } from 'react';

export default function SecuritySection() {
  const securityMeasures = [
    {
      title: "不正アクセス対策",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      ),
      items: [
        "最小限のポート・IPアドレスのみ許可",
        "必要最低限のアクセス権限で侵入リスクを低減",
        "SSL/TLS暗号化で通信を保護"
      ]
    },
    {
      title: "脆弱性対策",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      items: [
        "OS・ミドルウェアへの定期的なパッチ適用",
        "脆弱性スキャンによる早期発見と対策",
        "SQLインジェクション・XSS等の攻撃をブロック"
      ]
    },
    {
      title: "データ保護",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#37B7C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.39 4 7.5 4s7.5-1.79 7.5-4V7c0 2.21-3.39 4-7.5 4S4 9.21 4 7z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7c0-2.21 3.39-4 7.5-4s7.5 1.79 7.5 4"/>
        </svg>
      ),
      items: [
        "保存・通信データの暗号化",
        "定期バックアップとマルチリージョン対応",
        "厳密なアクセス権限管理と監視ログによる異常検知"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'}}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            安心のセキュリティ
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {securityMeasures.map((measure, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 sm:p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl border border-[#37B7C4]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="animate-pulse">
                  {measure.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#333333] ml-3">
                  {measure.title}
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {measure.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="flex items-start opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${(index * 200) + (itemIndex * 100)}ms`, animationFillMode: 'forwards' }}
                  >
                    <span className="text-[#37B7C4] text-2xl mt-0 mr-3 flex-shrink-0">・</span>
                    <span className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}