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
                <p className="text-gray-600 mb-4">
                  実際の業務データで、より詳細なデモをご覧いただけます
                </p>
                <a
                  href="/apply"
                  className="inline-block bg-[#37B7C4] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#2a9aa5] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  無料デモを申し込む
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