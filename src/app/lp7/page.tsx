import Header7 from '@/components/lp7/Header7'
import HeroSection7 from '@/components/lp7/HeroSection7'
import FeatureSection7 from '@/components/lp7/FeatureSection7'
import ProcessSection7 from '@/components/lp7/ProcessSection7'
import PricingSection7 from '@/components/lp7/PricingSection7'
import ContactSection7 from '@/components/lp7/ContactSection7'
import Footer7 from '@/components/lp7/Footer7'

export default function LP7Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-blue-50 to-yellow-50">
      <Header7 />
      <main>
        <HeroSection7 />
        <FeatureSection7 />
        <ProcessSection7 />
        <PricingSection7 />
        <ContactSection7 />
      </main>
      <Footer7 />
    </div>
  )
}