'use client'

import { useState, useEffect } from 'react'

export default function ContactSection9() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitSuccess(false)
    }, 3000)
  }

  return (
    <section id="contact9" className="relative py-24 bg-[#1A202C] overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0">
        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, #805AD5 1px, transparent 1px),
              linear-gradient(90deg, #319795 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'slide 20s linear infinite'
          }}></div>
        </div>

        {/* Floating tech elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#805AD5]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#319795]/10 rounded-full blur-3xl animate-pulse-slow-reverse"></div>
        </div>

        {/* Tech particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#805AD5]/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header with Tech Style */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block relative mb-6">
              <div className="absolute -inset-8 bg-[#805AD5]/20 blur-2xl"></div>
              <div className="relative">
                <span className="text-sm font-mono text-[#319795] tracking-widest">
                  CONTACT FORM
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-gray-300 mt-2 font-mono">
                  <span className="text-[#805AD5]">&lt;</span>
                  お問い合わせ
                  <span className="text-[#805AD5]">&gt;</span>
                </h2>
              </div>
            </div>
            <p className="text-xl text-gray-400 font-mono">
              AIシステムへのアクセスを開始
            </p>
          </div>

          {/* Contact Form with Futuristic Design */}
          <div className={`relative transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative bg-[#2D3748]/30 backdrop-blur-md border border-[#805AD5]/30 p-8 md:p-12 overflow-hidden">
              {/* Tech corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#805AD5]"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#805AD5]"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#805AD5]"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#805AD5]"></div>

              {/* Form status indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${submitSuccess ? 'bg-[#319795]' : 'bg-[#805AD5]'} animate-pulse`}></div>
                <span className="text-xs font-mono text-gray-400">
                  {submitSuccess ? 'SUCCESS' : 'READY'}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-xs font-mono text-[#319795] mb-2 tracking-wider">
                      NAME <span className="text-[#805AD5]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-[#1A202C]/50 border border-[#805AD5]/30 text-gray-300 font-mono placeholder-gray-500 focus:border-[#805AD5] focus:outline-none transition-all duration-300"
                        placeholder="山田 太郎"
                      />
                      {/* Animated border on focus */}
                      <div className={`absolute inset-0 border border-[#805AD5] pointer-events-none transition-all duration-300 ${
                        focusedField === 'name' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}></div>
                      {/* Glow effect */}
                      {focusedField === 'name' && (
                        <div className="absolute -inset-1 bg-[#805AD5]/20 blur-xl pointer-events-none"></div>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-xs font-mono text-[#319795] mb-2 tracking-wider">
                      EMAIL <span className="text-[#805AD5]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-[#1A202C]/50 border border-[#805AD5]/30 text-gray-300 font-mono placeholder-gray-500 focus:border-[#805AD5] focus:outline-none transition-all duration-300"
                        placeholder="example@company.com"
                      />
                      <div className={`absolute inset-0 border border-[#805AD5] pointer-events-none transition-all duration-300 ${
                        focusedField === 'email' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}></div>
                      {focusedField === 'email' && (
                        <div className="absolute -inset-1 bg-[#805AD5]/20 blur-xl pointer-events-none"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Company Field */}
                <div className="relative">
                  <label htmlFor="company" className="block text-xs font-mono text-[#319795] mb-2 tracking-wider">
                    COMPANY
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-[#1A202C]/50 border border-[#805AD5]/30 text-gray-300 font-mono placeholder-gray-500 focus:border-[#805AD5] focus:outline-none transition-all duration-300"
                      placeholder="株式会社サンプル"
                    />
                    <div className={`absolute inset-0 border border-[#805AD5] pointer-events-none transition-all duration-300 ${
                      focusedField === 'company' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}></div>
                    {focusedField === 'company' && (
                      <div className="absolute -inset-1 bg-[#805AD5]/20 blur-xl pointer-events-none"></div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-xs font-mono text-[#319795] mb-2 tracking-wider">
                    MESSAGE <span className="text-[#805AD5]">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-[#1A202C]/50 border border-[#805AD5]/30 text-gray-300 font-mono placeholder-gray-500 focus:border-[#805AD5] focus:outline-none transition-all duration-300 resize-none"
                      placeholder="お問い合わせ内容をご記入ください..."
                    />
                    <div className={`absolute inset-0 border border-[#805AD5] pointer-events-none transition-all duration-300 ${
                      focusedField === 'message' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}></div>
                    {focusedField === 'message' && (
                      <div className="absolute -inset-1 bg-[#805AD5]/20 blur-xl pointer-events-none"></div>
                    )}
                  </div>
                  {/* Character counter */}
                  <div className="mt-2 text-right text-xs font-mono text-gray-500">
                    {formData.message.length} / 500
                  </div>
                </div>

                {/* Submit Button with Futuristic Style */}
                <div className="relative">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className="w-full relative overflow-hidden group py-4 font-mono font-bold tracking-wider bg-gradient-to-r from-[#805AD5] to-[#319795] text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>送信中...</span>
                        </>
                      ) : submitSuccess ? (
                        <>
                          <span className="text-xl">✓</span>
                          <span>送信完了</span>
                        </>
                      ) : (
                        <>
                          <span className="text-xl">▶</span>
                          <span>送信する</span>
                        </>
                      )}
                    </span>
                    {/* Scan effect */}
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                    {/* Pulse effect on success */}
                    {submitSuccess && (
                      <div className="absolute inset-0 bg-[#319795] animate-ping"></div>
                    )}
                  </button>
                  {/* Tech frame */}
                  <div className="absolute -inset-1 border border-[#805AD5]/30 pointer-events-none"></div>
                </div>
              </form>
            </div>

            {/* Connection Status */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#319795] rounded-full animate-pulse"></div>
                  <span>SECURE CONNECTION</span>
                </div>
                <span className="text-[#805AD5]">|</span>
                <span>256-BIT ENCRYPTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }
        @keyframes slide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes pulse-slow-reverse {
          0%, 100% { opacity: 0.3; transform: scale(1.1); }
          50% { opacity: 0.1; transform: scale(1); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}