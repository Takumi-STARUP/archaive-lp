import Header10 from '@/components/lp10/Header10';
import HeroSection10 from '@/components/lp10/HeroSection10';
import FeatureSection10 from '@/components/lp10/FeatureSection10';
import ProcessSection10 from '@/components/lp10/ProcessSection10';
import TestimonialSection10 from '@/components/lp10/TestimonialSection10';
import CTASection10 from '@/components/lp10/CTASection10';
import Footer10 from '@/components/lp10/Footer10';

export default function LP10Page() {
  return (
    <div className="min-h-screen bg-[#34495E]">
      <Header10 />
      <main>
        <HeroSection10 />
        <FeatureSection10 />
        <ProcessSection10 />
        <TestimonialSection10 />
        <CTASection10 />
      </main>
      <Footer10 />
    </div>
  );
}