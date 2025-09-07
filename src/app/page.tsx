'use client';

import { useState } from 'react';
import HeroSectionSplit from '@/components/lp_new/HeroSectionSplit';
import HeroQuickNav from '@/components/lp_new/HeroQuickNav';
import InteractiveDemo from '@/components/lp_new/InteractiveDemo';
import ProblemSolutionSection from '@/components/lp_new/ProblemSolutionSection';
import FeaturesSection from '@/components/lp_new/FeaturesSection';
import ProcessSection from '@/components/lp_new/ProcessSection';
import CaseSection from '@/components/lp_new/CaseSection';
import CTASection from '@/components/lp_new/CTASection';
import Header from '@/components/lp_new/Header';
import Footer from '@/components/lp_new/Footer';

export default function Home() {
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  const handleFloatingNavChange = (show: boolean) => {
    setShowFloatingNav(show);
  };

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <div id="hero">
          <HeroSectionSplit />
        </div>
        <HeroQuickNav onFloatingNavChange={handleFloatingNavChange} />
        {/* インタラクティブデモセクション */}
        <div id="demo" className={`transition-all duration-300 mt-16 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
                  実際の操作画面で体験してみましょう
                </h2>
                <p className="text-sm text-[#37B7C4] font-medium">
                  ※ デモ環境のため、実際のデータは表示されません
                </p>
              </div>
              <div className="max-w-6xl mx-auto">
                <InteractiveDemo />
              </div>
              <div className="text-center mt-8">
                <a
                  href="/apply"
                  className="bg-transparent border-2 border-[#37B7C4] text-[#37B7C4] rounded-lg px-8 py-4 text-lg font-bold cursor-pointer flex items-center justify-center min-w-[280px] hover:bg-[#37B7C4]/10 hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    無料トライアル申し込み
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div id="problem-solution" className={`transition-all duration-300 mt-16 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <ProblemSolutionSection />
        </div>
        <div id="features" className={`transition-all duration-300 mt-16 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <FeaturesSection />
        </div>
        <div id="process" className={`transition-all duration-300 mt-16 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <ProcessSection />
        </div>
        <div id="case" className={`transition-all duration-300 mt-16 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <CaseSection />
        </div>
        <div id="cta" className={`transition-all duration-300 mt-16 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <CTASection />
        </div>
      </main>
      <div className={`transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
        <Footer />
      </div>
    </div>
  );
}