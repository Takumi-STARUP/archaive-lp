'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Phone, Mail, MessageSquare } from 'lucide-react';

export default function CTASection10() {
  const [scanPosition, setScanPosition] = useState(0);
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '今すぐビジネスを次のレベルへ';

  useEffect(() => {
    // Scan line animation
    const scanInterval = setInterval(() => {
      setScanPosition((prev) => (prev + 1) % 100);
    }, 50);

    // Terminal typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(scanInterval);
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="お問い合わせ" className="relative py-20 md:py-32 bg-[#2C3E50] overflow-hidden">
      {/* Retro Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(93,173,226,0.1) 49%, rgba(93,173,226,0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(183,110,121,0.1) 49%, rgba(183,110,121,0.1) 51%, transparent 52%)
            `,
            backgroundSize: '30px 30px'
          }}
        />

        {/* Scan Line */}
        <div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5DADE2] to-transparent opacity-50"
          style={{
            top: `${scanPosition}%`,
            transition: 'top 0.05s linear'
          }}
        />

        {/* Geometric Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#5DADE2]/20 rotate-45" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-[#B76E79]/20 rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-[#5DADE2]/10 -rotate-12" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5DADE2] to-[#B76E79] opacity-20 blur-3xl" />
            
            <div className="relative bg-[#34495E]/90 backdrop-blur-sm border border-[#5DADE2]/30 rounded-lg overflow-hidden shadow-[0_0_100px_rgba(93,173,226,0.3)]">
              {/* Terminal Header */}
              <div className="bg-[#2C3E50] px-6 py-4 border-b border-[#5DADE2]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-[#B76E79] rounded-full shadow-[0_0_10px_rgba(183,110,121,0.8)]"></div>
                    <div className="w-3 h-3 bg-[#5DADE2] rounded-full shadow-[0_0_10px_rgba(93,173,226,0.8)]"></div>
                    <div className="w-3 h-3 bg-[#B76E79] rounded-full shadow-[0_0_10px_rgba(183,110,121,0.8)]"></div>
                  </div>
                  <div className="font-mono text-xs text-[#5DADE2]">
                    INITIALIZE_CONTACT.exe
                  </div>
                </div>
                <Zap className="w-4 h-4 text-[#5DADE2] animate-pulse" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 text-center">
                {/* Terminal Typing Effect */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-4 font-mono">
                    <span className="text-[#5DADE2]">{'> '}</span>
                    {terminalText}
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-[#5DADE2]`}>_</span>
                  </h2>
                </div>

                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  ARCHAIVEの革新的なソリューションで、ビジネスの可能性を解き放ちましょう。
                  専門チームが貴社の成功をサポートします。
                </p>

                {/* CTA Buttons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Free Consultation */}
                  <button className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5DADE2] to-[#2E86AB] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative px-6 py-4 flex flex-col items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-white" />
                      <span className="text-white font-bold">無料相談</span>
                      <span className="text-white/80 text-sm">30分のオンライン相談</span>
                    </div>
                    {/* Scan effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                  </button>

                  {/* Demo Request */}
                  <button className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B76E79] to-[#8B4049] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative px-6 py-4 flex flex-col items-center gap-2">
                      <Zap className="w-6 h-6 text-white" />
                      <span className="text-white font-bold">デモリクエスト</span>
                      <span className="text-white/80 text-sm">実際の動作をご確認</span>
                    </div>
                    {/* Scan effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                  </button>

                  {/* Contact Sales */}
                  <button className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5DADE2] to-[#B76E79] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative px-6 py-4 flex flex-col items-center gap-2">
                      <Phone className="w-6 h-6 text-white" />
                      <span className="text-white font-bold">営業に連絡</span>
                      <span className="text-white/80 text-sm">価格・導入のご相談</span>
                    </div>
                    {/* Scan effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400">
                  <a href="tel:0120-123-456" className="flex items-center gap-2 hover:text-[#5DADE2] transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                    <span className="font-mono">0120-123-456</span>
                  </a>
                  <div className="hidden md:block w-px h-4 bg-gray-600" />
                  <a href="mailto:contact@archaive.com" className="flex items-center gap-2 hover:text-[#5DADE2] transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <span className="font-mono">contact@archaive.com</span>
                  </a>
                </div>

                {/* Urgency Message */}
                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-[#2C3E50]/50 border border-[#5DADE2]/30 rounded-full">
                  <div className="w-2 h-2 bg-[#5DADE2] rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">
                    今なら初期費用
                    <span className="text-[#B76E79] font-bold mx-1">50%OFF</span>
                    キャンペーン実施中
                  </span>
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="h-1 bg-gradient-to-r from-[#5DADE2] via-[#B76E79] to-[#5DADE2] animate-pulse" />
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#5DADE2] rounded-full blur-3xl opacity-10 animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#B76E79] rounded-full blur-3xl opacity-10 animate-pulse" />
          
          {/* Additional Decorative Elements */}
          <div className="absolute top-1/2 -left-10 transform -translate-y-1/2">
            <div className="flex flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-[#5DADE2] rounded-full opacity-30"
                  style={{
                    animation: `pulse ${2 + i * 0.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -right-10 transform -translate-y-1/2">
            <div className="flex flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-[#B76E79] rounded-full opacity-30"
                  style={{
                    animation: `pulse ${2 + i * 0.2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}