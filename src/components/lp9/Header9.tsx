'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header9() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-[#1A202C]/95 backdrop-blur-xl' : 'bg-[#1A202C]/80 backdrop-blur-md'
    } border-b border-[#805AD5]/20`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/lp9" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#805AD5] to-[#319795] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#805AD5] to-[#319795] bg-clip-text text-transparent">
              ARCHAIVE
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-[#805AD5] transition-colors">機能</a>
            <a href="#process" className="text-gray-300 hover:text-[#805AD5] transition-colors">プロセス</a>
            <a href="#pricing" className="text-gray-300 hover:text-[#805AD5] transition-colors">料金</a>
            <a href="#contact" className="text-gray-300 hover:text-[#805AD5] transition-colors">お問い合わせ</a>
            <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-[#805AD5] to-[#319795] text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              無料デモ体験
            </a>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#805AD5]/20">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-[#805AD5] transition-colors">機能</a>
              <a href="#process" className="text-gray-300 hover:text-[#805AD5] transition-colors">プロセス</a>
              <a href="#pricing" className="text-gray-300 hover:text-[#805AD5] transition-colors">料金</a>
              <a href="#contact" className="text-gray-300 hover:text-[#805AD5] transition-colors">お問い合わせ</a>
              <a href="#contact" className="inline-block px-6 py-2 bg-gradient-to-r from-[#805AD5] to-[#319795] text-white font-semibold rounded-lg text-center">
                無料デモ体験
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}