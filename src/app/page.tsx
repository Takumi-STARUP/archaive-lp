'use client';

import HeroSectionSplit from '@/components/lp_new/HeroSectionSplit';
import HeroQuickNav from '@/components/lp_new/HeroQuickNav';
import ProblemSolutionSection from '@/components/lp_new/ProblemSolutionSection';
import FeaturesSection from '@/components/lp_new/FeaturesSection';
import ProcessSection from '@/components/lp_new/ProcessSection';
import CaseSection from '@/components/lp_new/CaseSection';
import NewsSection from '@/components/lp_new/NewsSection';
import CTASection from '@/components/lp_new/CTASection';
import SecuritySection from '@/components/lp_new/SecuritySection';
import Header from '@/components/lp_new/Header';
import Footer from '@/components/lp_new/Footer';

export default function Home() {

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <div id="hero">
          <HeroSectionSplit />
        </div>
        <HeroQuickNav />
        {/* ARCHAIVEとは？セクション */}
        <div id="demo" className="mt-16">
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
                    ARCHAIVEとは？
                  </h2>
                  <p className="text-lg text-[#666666] font-bold">
                    AIを活用した製造業向けの次世代ナレッジ検索システム
                  </p>
                </div>
                <div className="max-w-5xl mx-auto">
                  <img 
                    src="/images/top_ui.png" 
                    alt="ARCHAIVE デモ画面" 
                    className="w-full h-auto rounded-xl border border-gray-300"
                  />
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
            </div>
          </section>
        </div>
        <div id="problem-solution" className="mt-16">
          <ProblemSolutionSection />
        </div>
        <div id="features" className="mt-16">
          <FeaturesSection />
        </div>
        <div id="case" className="mt-16">
          <CaseSection />
        </div>
        <div id="process" className="mt-8">
          <ProcessSection />
        </div>
        <div id="news" className="mt-16">
          <NewsSection />
        </div>
        <div id="security" className="mt-16">
          <SecuritySection />
        </div>
        <div id="cta" className="mt-16">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}