import HeroSection from '@/components/lp_new/HeroSection';
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
  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="solution">
          <SolutionSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <div id="case">
          <CaseSection />
        </div>
        <div id="cta">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}