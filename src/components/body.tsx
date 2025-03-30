import HeroSection from './sections/HeroSection'
import WhatsIs from './sections/whatsIs'

export default function Body() {
  return (
    <div className="w-full flex flex-col gap-16">
      <HeroSection />
      {/* Aquí irán las otras dos secciones */}
      <WhatsIs />
    </div>
  )
}
