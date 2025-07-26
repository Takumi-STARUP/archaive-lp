import Header6 from '@/components/lp6/Header6'
import HeroSection6 from '@/components/lp6/HeroSection6'
import FeatureSection6 from '@/components/lp6/FeatureSection6'
import ProcessSection6 from '@/components/lp6/ProcessSection6'
import PricingSection6 from '@/components/lp6/PricingSection6'
import ContactSection6 from '@/components/lp6/ContactSection6'
import Footer6 from '@/components/lp6/Footer6'

export default function LP6Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header6 />
      <main>
        <HeroSection6 />
        <FeatureSection6 />
        <ProcessSection6 />
        <PricingSection6 />
        <ContactSection6 />
      </main>
      <Footer6 />
    </div>
  )
}