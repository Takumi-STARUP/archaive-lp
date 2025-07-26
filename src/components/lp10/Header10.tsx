'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header10() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const fullText = '> ARCHAIVE_SYSTEM_READY_';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#2C3E50]/95 backdrop-blur-md shadow-[0_0_30px_rgba(93,173,226,0.3)]' 
          : 'bg-[#2C3E50]/80 backdrop-blur-sm'
      }`}
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(93,173,226,0.03) 2px,
            rgba(93,173,226,0.03) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(93,173,226,0.03) 2px,
            rgba(93,173,226,0.03) 4px
          )
        `,
        backgroundSize: '50px 50px'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            {/* Retro Terminal Logo */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#5DADE2] blur-xl opacity-40"></div>
              <div className="relative bg-[#34495E] border border-[#5DADE2] p-3 rounded-lg shadow-[0_0_20px_rgba(93,173,226,0.5)]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#B76E79] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#5DADE2] rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-[#B76E79] rounded-full animate-pulse delay-150"></div>
                </div>
                <div className="mt-2 font-mono text-[#5DADE2] text-xs">
                  {terminalText}<span className="animate-pulse">|</span>
                </div>
              </div>
            </div>

            {/* Logo Text */}
            <Link href="/" className="group">
              <h1 className="text-2xl font-bold text-gray-300 tracking-wider relative">
                <span className="relative z-10 group-hover:text-[#5DADE2] transition-colors duration-300">
                  ARCHAIVE
                </span>
                <span className="absolute inset-0 text-[#B76E79] blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  ARCHAIVE
                </span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['機能', 'プロセス', '実績', '料金', 'お問い合わせ'].map((item, index) => (
              <Link
                key={item}
                href={`#${item}`}
                className="relative text-gray-300 hover:text-[#5DADE2] transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 font-medium">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#B76E79] to-[#5DADE2] group-hover:w-full transition-all duration-300"></span>
                {/* Retro glow effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 bg-[#5DADE2] blur-xl opacity-30"></span>
                </span>
              </Link>
            ))}

            {/* CTA Button */}
            <button className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DADE2] to-[#B76E79] opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[#34495E] m-[1px] rounded-lg"></div>
              <span className="relative z-10 block px-6 py-2 text-gray-300 font-bold group-hover:text-white transition-colors duration-300">
                無料相談
              </span>
              {/* Retro scan line effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-[#5DADE2] blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative">
              {menuOpen ? (
                <X className="w-6 h-6 text-[#5DADE2]" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300 group-hover:text-[#5DADE2] transition-colors duration-300" />
              )}
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#2C3E50]/95 backdrop-blur-md border-t border-[#5DADE2]/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['機能', 'プロセス', '実績', '料金', 'お問い合わせ'].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-300 hover:text-[#5DADE2] transition-colors duration-300 py-2 border-b border-[#5DADE2]/10 last:border-0"
                >
                  {item}
                </Link>
              ))}
              <button className="w-full bg-gradient-to-r from-[#5DADE2] to-[#B76E79] text-white py-3 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(93,173,226,0.5)] transition-all duration-300">
                無料相談
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Retro scan line animation */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5DADE2] to-transparent opacity-50 animate-pulse"></div>
    </header>
  );
}