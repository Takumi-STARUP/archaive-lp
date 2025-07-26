'use client'

import React, { useState } from 'react'

const ContactSection8 = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-32 bg-white scroll-mt-20 relative overflow-hidden">
      {/* 和紙風背景テクスチャー */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 120px,
            rgba(139, 58, 58, 0.05) 120px,
            rgba(139, 58, 58, 0.05) 121px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 120px,
            rgba(114, 113, 113, 0.05) 120px,
            rgba(114, 113, 113, 0.05) 121px
          )`
        }}></div>
      </div>

      {/* 伝統的装飾パターン */}
      <div className="absolute bottom-20 right-20 opacity-5">
        <svg width="160" height="160" viewBox="0 0 160 160">
          {/* 矢絣風パターン */}
          <defs>
            <pattern id="yagasuri-contact" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20,5 L30,20 L20,35 L10,20 Z" fill="#8B3A3A" opacity="0.2"/>
              <path d="M20,5 L25,15 L20,25 L15,15 Z" fill="#8B3A3A" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#yagasuri-contact)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* セクションヘッダー - 和風デザイン */}
        <div className="text-center mb-24">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-[#4A4A4A] mb-8 tracking-widest">
              お問い合わせ
            </h2>
            {/* 装飾線 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-px bg-[#8B3A3A]"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-px bg-[#8B3A3A]/50"></div>
          </div>
          <p className="text-[#727171] max-w-2xl mx-auto leading-relaxed font-light text-lg mt-8">
            導入に関するご相談・ご質問はお気軽にお問い合わせください
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* フォーム - 和風デザイン */}
          <div className="relative bg-[#F5F5DC]/60 backdrop-blur-sm p-16 rounded-sm border border-gray-200/50 shadow-sm mb-24">
            {/* 和紙風テクスチャー */}
            <div className="absolute inset-0 opacity-5 rounded-sm">
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 30px,
                  rgba(139, 58, 58, 0.1) 30px,
                  rgba(139, 58, 58, 0.1) 31px
                )`
              }}></div>
            </div>

            {/* フォーム装飾 */}
            <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-[#8B3A3A]/15"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-[#8B3A3A]/15"></div>

            <form onSubmit={handleSubmit} className="relative">
              {/* 入力フィールド */}
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div className="group">
                  <label htmlFor="company" className="block text-[#4A4A4A] text-sm mb-4 tracking-wider font-light">
                    会社名 <span className="text-[#8B3A3A]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300/50 rounded-sm focus:outline-none focus:border-[#8B3A3A]/50 transition-all duration-300 bg-white/80 backdrop-blur-sm font-light tracking-wider"
                      placeholder="株式会社〇〇"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-[#8B3A3A]/20 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="name" className="block text-[#4A4A4A] text-sm mb-4 tracking-wider font-light">
                    お名前 <span className="text-[#8B3A3A]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300/50 rounded-sm focus:outline-none focus:border-[#8B3A3A]/50 transition-all duration-300 bg-white/80 backdrop-blur-sm font-light tracking-wider"
                      placeholder="山田 太郎"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-[#8B3A3A]/20 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div className="group">
                  <label htmlFor="email" className="block text-[#4A4A4A] text-sm mb-4 tracking-wider font-light">
                    メールアドレス <span className="text-[#8B3A3A]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300/50 rounded-sm focus:outline-none focus:border-[#8B3A3A]/50 transition-all duration-300 bg-white/80 backdrop-blur-sm font-light tracking-wider"
                      placeholder="example@company.com"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-[#8B3A3A]/20 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-[#4A4A4A] text-sm mb-4 tracking-wider font-light">
                    電話番号
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300/50 rounded-sm focus:outline-none focus:border-[#8B3A3A]/50 transition-all duration-300 bg-white/80 backdrop-blur-sm font-light tracking-wider"
                      placeholder="03-1234-5678"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-[#8B3A3A]/20 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              </div>

              <div className="mb-12 group">
                <label htmlFor="message" className="block text-[#4A4A4A] text-sm mb-4 tracking-wider font-light">
                  お問い合わせ内容 <span className="text-[#8B3A3A]">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-6 py-4 border border-gray-300/50 rounded-sm focus:outline-none focus:border-[#8B3A3A]/50 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none font-light tracking-wider leading-relaxed"
                    placeholder="ご質問・ご要望をお聞かせください"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-[#8B3A3A]/20 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>

              {/* 送信ボタン */}
              <div className="text-center">
                <button
                  type="submit"
                  className="relative bg-[#8B3A3A] text-white px-12 py-4 rounded-sm hover:bg-[#7A2E2E] transition-all duration-300 text-sm tracking-widest font-light shadow-sm group overflow-hidden"
                >
                  <span className="relative z-10">送信する</span>
                  {/* ボタン装飾 */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E2E] to-[#8B3A3A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </form>
          </div>

          {/* 連絡先情報 - 和風デザイン */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: '電話でのお問い合わせ',
                value: '03-1234-5678',
                desc: '平日 9:00-18:00',
                symbol: '話',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                title: 'メールでのお問い合わせ',
                value: 'info@archaive.com',
                desc: '24時間受付',
                symbol: '信',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'オフィス所在地',
                value: '東京都千代田区',
                desc: '丸の内1-1-1',
                symbol: '在',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((contact, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative bg-[#F5F5DC]/40 p-10 rounded-sm border border-gray-200/50 hover:border-[#8B3A3A]/30 transition-all duration-300 group-hover:shadow-sm">
                  {/* 和紙風テクスチャー */}
                  <div className="absolute inset-0 opacity-5 rounded-sm">
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 58, 58, 0.1) 1px, transparent 1px)`,
                      backgroundSize: '15px 15px'
                    }}></div>
                  </div>

                  {/* 縦書き和文字 */}
                  <div className="absolute top-4 right-4 opacity-15 group-hover:opacity-30 transition-opacity duration-300">
                    <div className="text-lg font-light text-[#8B3A3A] writing-mode-vertical-rl">
                      {contact.symbol}
                    </div>
                  </div>

                  <div className="relative">
                    {/* アイコン */}
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-[#8B3A3A] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {contact.icon}
                    </div>

                    {/* タイトル */}
                    <h3 className="text-[#4A4A4A] mb-4 text-sm tracking-wider font-light">{contact.title}</h3>
                    
                    {/* 装飾線 */}
                    <div className="w-8 h-px bg-[#8B3A3A]/30 mx-auto mb-4 group-hover:w-12 transition-all duration-300"></div>
                    
                    {/* 値 */}
                    <p className="text-[#8B3A3A] font-light text-lg mb-2 tracking-wider">{contact.value}</p>
                    
                    {/* 説明 */}
                    <p className="text-xs text-[#727171] font-light tracking-wider">{contact.desc}</p>
                  </div>

                  {/* カード装飾 */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-[#8B3A3A]/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-[#8B3A3A]/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  )
}

export default ContactSection8