'use client'

import React, { useState } from 'react'

const ContactSection6 = () => {
  const [formData, setFormData] = useState({
    company: '',
    department: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    employees: '',
    industry: '',
    interest: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#E2E8F0] border border-gray-200 shadow-sm mb-6">
            <span className="text-[#4A5568] font-semibold text-sm tracking-wide">CONTACT</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#4A5568] mb-6 leading-tight">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            導入に関するご相談・ご質問はお気軽にお問い合わせください。
            専門スタッフが丁寧にサポートいたします。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 border border-gray-200 shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-[#4A5568] mb-6">
                  無料デモ・お問い合わせフォーム
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-[#4A5568] font-semibold mb-2">
                        会社名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300"
                        placeholder="株式会社〇〇"
                      />
                    </div>

                    <div>
                      <label htmlFor="department" className="block text-[#4A5568] font-semibold mb-2">
                        部署名
                      </label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300"
                        placeholder="営業部"
                      />
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[#4A5568] font-semibold mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300"
                        placeholder="山田 太郎"
                      />
                    </div>

                    <div>
                      <label htmlFor="position" className="block text-[#4A5568] font-semibold mb-2">
                        役職
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300"
                        placeholder="営業部長"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-[#4A5568] font-semibold mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300"
                        placeholder="example@company.co.jp"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[#4A5568] font-semibold mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300"
                        placeholder="03-1234-5678"
                      />
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="employees" className="block text-[#4A5568] font-semibold mb-2">
                        従業員数
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">選択してください</option>
                        <option value="1-10">1-10名</option>
                        <option value="11-50">11-50名</option>
                        <option value="51-100">51-100名</option>
                        <option value="101-500">101-500名</option>
                        <option value="501-1000">501-1000名</option>
                        <option value="1000+">1000名以上</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-[#4A5568] font-semibold mb-2">
                        業界
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">選択してください</option>
                        <option value="manufacturing">製造業</option>
                        <option value="construction">建設業</option>
                        <option value="automotive">自動車業界</option>
                        <option value="electronics">電子機器</option>
                        <option value="machinery">機械工業</option>
                        <option value="other">その他</option>
                      </select>
                    </div>
                  </div>

                  {/* Interest */}
                  <div>
                    <label htmlFor="interest" className="block text-[#4A5568] font-semibold mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">選択してください</option>
                      <option value="demo">無料デモ体験</option>
                      <option value="pricing">料金・プランについて</option>
                      <option value="implementation">導入について</option>
                      <option value="features">機能詳細について</option>
                      <option value="support">サポートについて</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[#4A5568] font-semibold mb-2">
                      詳細・ご要望
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8FB9] focus:border-transparent transition-all duration-300 resize-vertical"
                      placeholder="具体的なご質問・ご要望がございましたらお聞かせください"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-[#5B8FB9] text-white px-12 py-4 font-semibold text-lg hover:bg-[#4A7A9F] transition-all duration-300 shadow-lg border-0"
                    >
                      送信する
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-white border border-gray-200 shadow-lg p-8">
                <h3 className="text-xl font-semibold text-[#4A5568] mb-6">
                  その他のお問い合わせ方法
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E2E8F0] border border-gray-200 flex items-center justify-center text-[#5B8FB9] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A5568] mb-1">電話でのお問い合わせ</h4>
                      <p className="text-[#5B8FB9] font-semibold">03-1234-5678</p>
                      <p className="text-sm text-gray-500">平日 9:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E2E8F0] border border-gray-200 flex items-center justify-center text-[#5B8FB9] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A5568] mb-1">メールでのお問い合わせ</h4>
                      <p className="text-[#5B8FB9] font-semibold">info@archaive.co.jp</p>
                      <p className="text-sm text-gray-500">24時間受付</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E2E8F0] border border-gray-200 flex items-center justify-center text-[#5B8FB9] flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A5568] mb-1">本社所在地</h4>
                      <p className="text-gray-600">東京都千代田区</p>
                      <p className="text-gray-600">丸の内1-1-1</p>
                      <p className="text-sm text-gray-500">東京駅徒歩5分</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#E2E8F0] border border-gray-200 shadow-lg p-8">
                <h3 className="text-xl font-semibold text-[#4A5568] mb-6">
                  営業時間・サポート時間
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-medium text-[#4A5568]">営業時間</span>
                    <span className="text-gray-600">平日 9:00-18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-medium text-[#4A5568]">電話サポート</span>
                    <span className="text-gray-600">平日 9:00-18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-medium text-[#4A5568]">メールサポート</span>
                    <span className="text-gray-600">24時間受付</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-[#4A5568]">緊急サポート</span>
                    <span className="text-gray-600">24時間対応</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white border border-gray-200">
                  <p className="text-sm text-gray-600">
                    ※土日祝日のお問い合わせは、翌営業日に順次対応いたします。
                    緊急時は24時間対応いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection6