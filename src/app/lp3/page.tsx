import HeroSection3 from '@/components/lp3/HeroSection3';
import HeroSection2 from '@/components/lp3/HeroSection2';
import ProblemSection3 from '@/components/lp3/ProblemSection3';
import SolutionSection3 from '@/components/lp3/SolutionSection3';
import FeaturesSection3 from '@/components/lp3/FeaturesSection3';
import ProductSection3 from '@/components/lp3/ProductSection3';
import CaseSection3 from '@/components/lp3/CaseSection3';
import ProcessSection3 from '@/components/lp3/ProcessSection3';
import FAQSection3 from '@/components/lp3/FAQSection3';
import CTASection3 from '@/components/lp3/CTASection3';
import Header3 from '@/components/lp3/Header3';
import Footer3 from '@/components/lp3/Footer3';

export default function LP3() {
  return (
    <div>
      <Header3 />
      <main>
        <HeroSection2 />
        <ProblemSection3 />
        <SolutionSection3 />
        <FeaturesSection3 />
        <ProductSection3 />
        <CaseSection3 />
        <ProcessSection3 />
        <FAQSection3 />
        <CTASection3 />
      </main>
      <Footer3 />
    </div>
  );
}