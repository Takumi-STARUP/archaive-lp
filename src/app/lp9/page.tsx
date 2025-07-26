import Header9 from '@/components/lp9/Header9'
import HeroSection9 from '@/components/lp9/HeroSection9'
import FeatureSection9 from '@/components/lp9/FeatureSection9'
import ProcessSection9 from '@/components/lp9/ProcessSection9'
import PricingSection9 from '@/components/lp9/PricingSection9'
import ContactSection9 from '@/components/lp9/ContactSection9'
import Footer9 from '@/components/lp9/Footer9'

export default function LP9Page() {
  return (
    <div className="min-h-screen bg-[#1A202C]">
      <Header9 />
      <main>
        <HeroSection9 />
        <FeatureSection9 />
        <ProcessSection9 />
        <PricingSection9 />
        <ContactSection9 />
      </main>
      <Footer9 />
    </div>
  )
}