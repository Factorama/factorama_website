import HeroSection from '@/components/sections/HeroSection'
import WhatsIs from '@/components/sections/whatsIs'
import WhyFactorama from '@/components/sections/WhyFactorama'
import HowItWorks from '@/components/sections/HowItWorks'
import Faqs from '@/components/sections/Faqs'

export default function Body() {
  return (
    <div className="w-full flex flex-col gap-16">
      <HeroSection />
      {/* Aquí irán las otras dos secciones */}
      <WhatsIs />
      <WhyFactorama />
      <HowItWorks />
      <Faqs />
    </div>
  )
}
