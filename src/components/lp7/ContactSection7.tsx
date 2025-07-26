'use client'

import React, { useState, useRef, useEffect } from 'react'

const ContactSection7 = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Show success message or handle response
      console.log('Form submitted:', formData)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact7" className="py-28 bg-gradient-to-br from-[#FF6B6B]/5 via-[#FFE66D]/5 to-[#4ECDC4]/5 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-20 w-32 h-32 bg-gradient-to-br from-[#FF6B6B]/10 to-[#FFE66D]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-28 w-24 h-24 bg-gradient-to-bl from-[#4ECDC4]/15 to-[#95E1D3]/10 rounded-2xl rotate-45 animate-spin" style={{animationDuration: '40s'}}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-tr from-[#95E1D3]/10 to-[#FFE66D]/15 rounded-full animate-bounce" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-24 right-24 w-28 h-28 bg-gradient-to-tl from-[#FFE66D]/15 to-[#FF6B6B]/10 rounded-3xl -rotate-12 animate-pulse"></div>
        
        {/* Small geometric shapes */}
        <div className="absolute top-1/3 left-16 w-5 h-5 bg-[#4ECDC4]/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-[#FFE66D]/50 rounded rotate-45"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#FF6B6B]/40 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced header */}
        <div className={`max-w-4xl mx-auto text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] px-10 py-4 mb-8 rounded-2xl shadow-lg">
            <span className="text-white font-black text-xl tracking-wider flex items-center gap-3">
              <span className="text-2xl animate-bounce">📞</span>
              CONTACT
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-gray-800 mb-6 leading-tight">
            <span className="block">お気軽に</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]">
              お問い合わせください！
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-bold">
            🎯 導入のご相談やご質問など、何でもお気軽にどうぞ！
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4] mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className={`max-w-7xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid md:grid-cols-5 gap-12">
            {/* Enhanced Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-[#FF6B6B]/15 via-[#FFE66D]/10 to-[#4ECDC4]/15 border-4 border-[#4ECDC4]/30 rounded-3xl p-8 relative overflow-hidden shadow-xl">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FFE66D]/20 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#95E1D3]/20 to-transparent rounded-tr-3xl"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-3">
                    <span className="text-3xl animate-bounce">📮</span>
                    お問い合わせ方法
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: '📧', emoji: '✨', title: 'メール', value: 'support@archaive.jp', color: 'from-[#4ECDC4] to-[#95E1D3]' },
                      { icon: '📞', emoji: '🚀', title: '電話', value: '03-1234-5678', color: 'from-[#FFE66D] to-[#FF6B6B]' },
                      { icon: '🕐', emoji: '⚡', title: '営業時間', value: '平日 9:00-18:00', color: 'from-[#95E1D3] to-[#4ECDC4]' }
                    ].map((item, idx) => (
                      <div key={idx} className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg relative`}>
                          <span className="group-hover:animate-pulse">{item.icon}</span>
                          <div className="absolute -top-1 -right-1 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                            {item.emoji}
                          </div>
                        </div>
                        <div>
                          <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mb-1">
                            {item.title}
                          </p>
                          <p className="text-gray-800 font-semibold">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 border-4 border-[#FFE66D]/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <h4 className="text-2xl font-black text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-3xl animate-bounce">❓</span>
                  よくあるご質問
                </h4>
                <p className="text-gray-700 mb-6 font-medium">
                  お問い合わせの前に、FAQもぜひご確認ください！
                </p>
                <a href="#faq7" className="group inline-flex items-center gap-2 text-white bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] px-6 py-3 rounded-2xl font-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <span className="group-hover:animate-bounce">📚</span>
                  FAQを見る
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-gradient-to-br from-white to-gray-50 border-4 border-[#4ECDC4]/30 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFE66D]/10 to-transparent rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#95E1D3]/10 to-transparent rounded-tr-3xl"></div>
                
                <div className="relative">
                  <h3 className="text-3xl font-black text-gray-800 mb-8 flex items-center gap-3">
                    <span className="text-4xl animate-bounce">📝</span>
                    お問い合わせフォーム
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: 'company', label: '会社名', type: 'text', required: false, emoji: '🏢' },
                        { name: 'name', label: 'お名前', type: 'text', required: true, emoji: '👤' }
                      ].map((field, idx) => (
                        <div key={field.name} className="group">
                          <label htmlFor={field.name} className="block text-lg font-black text-gray-800 mb-3 flex items-center gap-2">
                            <span className="text-xl group-hover:animate-bounce">{field.emoji}</span>
                            {field.label}
                            {field.required && <span className="text-[#FF6B6B] font-black">*</span>}
                          </label>
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-6 py-4 rounded-2xl border-4 transition-all duration-300 font-medium text-lg ${
                              focusedField === field.name
                                ? 'border-[#FF6B6B] bg-gradient-to-r from-[#FF6B6B]/5 to-[#4ECDC4]/5 shadow-lg transform scale-105'
                                : 'border-gray-200 hover:border-[#4ECDC4]'
                            }`}
                            required={field.required}
                            placeholder={`${field.label}を入力してください`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: 'email', label: 'メールアドレス', type: 'email', required: true, emoji: '📧' },
                        { name: 'phone', label: '電話番号', type: 'tel', required: false, emoji: '📱' }
                      ].map((field, idx) => (
                        <div key={field.name} className="group">
                          <label htmlFor={field.name} className="block text-lg font-black text-gray-800 mb-3 flex items-center gap-2">
                            <span className="text-xl group-hover:animate-bounce">{field.emoji}</span>
                            {field.label}
                            {field.required && <span className="text-[#FF6B6B] font-black">*</span>}
                          </label>
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-6 py-4 rounded-2xl border-4 transition-all duration-300 font-medium text-lg ${
                              focusedField === field.name
                                ? 'border-[#FF6B6B] bg-gradient-to-r from-[#FF6B6B]/5 to-[#4ECDC4]/5 shadow-lg transform scale-105'
                                : 'border-gray-200 hover:border-[#4ECDC4]'
                            }`}
                            required={field.required}
                            placeholder={`${field.label}を入力してください`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-lg font-black text-gray-800 mb-3 flex items-center gap-2">
                        <span className="text-xl group-hover:animate-bounce">💬</span>
                        お問い合わせ内容
                        <span className="text-[#FF6B6B] font-black">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={6}
                        className={`w-full px-6 py-4 rounded-2xl border-4 transition-all duration-300 resize-none font-medium text-lg ${
                          focusedField === 'message'
                            ? 'border-[#FF6B6B] bg-gradient-to-r from-[#FF6B6B]/5 to-[#4ECDC4]/5 shadow-lg transform scale-105'
                            : 'border-gray-200 hover:border-[#4ECDC4]'
                        }`}
                        required
                        placeholder="お問い合わせ内容を詳しくお聞かせください"
                      />
                    </div>

                    <div className="flex items-center gap-4 bg-gradient-to-r from-[#FFE66D]/10 to-[#95E1D3]/10 rounded-2xl p-6">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="w-6 h-6 text-[#4ECDC4] rounded-lg focus:ring-[#4ECDC4] border-4 border-[#4ECDC4]/30"
                        required
                      />
                      <label htmlFor="privacy" className="text-lg text-gray-700 font-medium">
                        <a href="#privacy" className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] font-black hover:from-[#FFE66D] hover:to-[#95E1D3] transition-all duration-300">
                          プライバシーポリシー
                        </a>
                        に同意します
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden w-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white py-6 px-8 font-black text-xl rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span className={`text-2xl ${isSubmitting ? 'animate-spin' : 'group-hover:animate-bounce'}`}>
                          {isSubmitting ? '🔄' : '📤'}
                        </span>
                        {isSubmitting ? '送信中...' : '今すぐ送信する'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFE66D] to-[#95E1D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response time guarantee */}
        <div className={`mt-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#FF6B6B]/20 via-[#FFE66D]/15 to-[#4ECDC4]/20 border-4 border-[#4ECDC4] rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FFE66D]/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#95E1D3]/20 to-transparent rounded-tr-3xl"></div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-8 flex items-center justify-center gap-3">
                <span className="text-4xl animate-bounce">⚡</span>
                迅速対応をお約束！
                <span className="text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: '📨', title: '24時間以内', desc: 'メールでの初回回答', color: 'from-[#FF6B6B] to-[#FFE66D]', emoji: '⚡' },
                  { icon: '📞', title: '即日対応', desc: '緊急時のお電話サポート', color: 'from-[#4ECDC4] to-[#95E1D3]', emoji: '🚀' },
                  { icon: '🎯', title: '完全サポート', desc: '導入まで専任担当がフォロー', color: 'from-[#95E1D3] to-[#FFE66D]', emoji: '💎' }
                ].map((item, idx) => (
                  <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#FF6B6B]">
                    <div className="relative">
                      <div className="text-5xl mb-4 group-hover:animate-bounce">{item.icon}</div>
                      <div className="absolute top-0 right-0 text-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        {item.emoji}
                      </div>
                    </div>
                    <div className={`font-black text-xl text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-3`}>
                      {item.title}
                    </div>
                    <div className="text-gray-700 font-medium">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection7