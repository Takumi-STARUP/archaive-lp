'use client';

import { useState } from 'react';
import HeroSectionSplit from '@/components/lp_new/HeroSectionSplit';
import InteractiveDemo from '@/components/lp_new/InteractiveDemo';
import ProblemSection from '@/components/lp_new/ProblemSection';
import SolutionSection from '@/components/lp_new/SolutionSection';
import FeaturesSection from '@/components/lp_new/FeaturesSection';
import AboutSection from '@/components/lp_new/AboutSection';
import ProcessSection from '@/components/lp_new/ProcessSection';
import CaseSection from '@/components/lp_new/CaseSection';
import CTASection from '@/components/lp_new/CTASection';
import Header from '@/components/lp_new/Header';
import Footer from '@/components/lp_new/Footer';

export default function LPNew() {
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  const handleFloatingNavChange = (show: boolean) => {
    setShowFloatingNav(show);
  };

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <div id="hero">
          <HeroSectionSplit onFloatingNavChange={handleFloatingNavChange} />
          {/* インタラクティブデモセクション */}
          <section className={`py-20 bg-gradient-to-b from-white to-gray-50 transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
                  実際の操作画面で体験してみましょう
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-2">
                  本番環境と同じインターフェースで、ARCHAIVEの検索力を体感できます
                </p>
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
                  href="/lp_new/apply"
                  className="inline-block bg-[#37B7C4] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#2a9aa5] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  無料デモを申し込む
                </a>
              </div>
            </div>
          </section>
        </div>
        <div id="problem" className={`transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <ProblemSection />
        </div>
        <div id="solution" className={`transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <SolutionSection />
        </div>
        <div id="features" className={`transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <FeaturesSection />
        </div>
        <div id="about" className={`transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <AboutSection />
        </div>
        <div id="process" className={`transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <ProcessSection />
        </div>
        <div id="case" className={`transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <CaseSection />
        </div>
        <div id="cta" className={`transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
          <CTASection />
        </div>
      </main>
      <div className={`transition-all duration-300 ${showFloatingNav ? 'lg:pl-56' : ''}`}>
        <Footer />
      </div>
    </div>
  );
}