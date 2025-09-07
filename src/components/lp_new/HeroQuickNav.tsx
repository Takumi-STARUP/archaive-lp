'use client';

import Link from 'next/link';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

export default function HeroQuickNav({ onFloatingNavChange }: { onFloatingNavChange?: (show: boolean) => void }) {
  const { ref, isIntersecting } = useIntersectionObserver({ 
    threshold: 0,
    rootMargin: '-80px 0px 0px 0px',  // ヘッダーの高さ（80px）を考慮
    triggerOnce: false 
  });
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    setShowFloating(!isIntersecting);
    onFloatingNavChange?.(!isIntersecting);
  }, [isIntersecting, onFloatingNavChange]);

  return (
    <>
      <section className="bg-white" ref={ref as any}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <QuickNavItem href="#demo" title="実際に" label="体験する" />
            <QuickNavItem href="#problem-solution" title="ARCHAIVEが解決する" label="課題と解決策" />
            <QuickNavItem href="#features" title="ARCHAIVEの" label="主要機能" />
            <QuickNavItem href="#process" title="ARCHAIVEの" label="導入ステップ" />
            <QuickNavItem href="#case" title="ARCHAIVEの" label="導入事例" />
            <QuickNavItem href="#cta" title="今すぐ" label="相談・資料請求" />
          </div>
        </div>
      </section>

      {showFloating && (
        <nav className="fixed left-0 top-[80px] bottom-0 z-40 hidden lg:block w-56">
          <div className="flex flex-col h-full bg-white/95 backdrop-blur shadow-lg border-r border-gray-200 divide-y divide-gray-200 rounded-none">
            <FloatingItem href="#demo" title="実際に" label="体験する" />
            <FloatingItem href="#problem-solution" title="ARCHAIVEが解決する" label="課題と解決策" />
            <FloatingItem href="#features" title="ARCHAIVEの" label="主要機能" />
            <FloatingItem href="#process" title="ARCHAIVEの" label="導入ステップ" />
            <FloatingItem href="#case" title="ARCHAIVEの" label="導入事例" />
            <FloatingItem href="#cta" title="今すぐ" label="相談・資料請求" />
          </div>
        </nav>
      )}
    </>
  );
}

function QuickNavItem({ href, title, label }: { href: string; title: string; label: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80; // ヘッダーの高さ + 余白
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group flex items-center justify-between py-6 px-6 hover:bg-gray-50 transition-colors"
    >
      <div>
        <div className="text-xs text-gray-400 tracking-widest">{title}</div>
        <div className="text-base font-semibold text-gray-800 mt-1">{label}</div>
      </div>
      <svg
        className="w-4 h-4 text-gray-300 group-hover:text-[#37B7C4] transition-colors"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
      </svg>
    </a>
  );
}

function FloatingItem({ href, title, label }: { href: string; title: string; label: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80; // ヘッダーの高さ + 余白
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors flex-1"
    >
      <div className="pr-3">
        <div className="text-[10px] text-gray-400 tracking-widest">{title}</div>
        <div className="text-sm font-semibold text-gray-800 mt-1 leading-tight">{label}</div>
      </div>
      <svg
        className="w-4 h-4 text-gray-300 group-hover:text-[#37B7C4] transition-colors"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
      </svg>
    </a>
  );
}


