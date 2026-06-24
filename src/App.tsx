import './styles/global.css'
import { Header } from './sections/Header'
import { HeroSection } from './sections/HeroSection'
import { ProblemSection } from './sections/ProblemSection'
import { ServicesSection } from './sections/ServicesSection'
import { MethodSection } from './sections/MethodSection'
import { DifferentiatorSection } from './sections/DifferentiatorSection'
import { CasesSection } from './sections/CasesSection'
import { AudienceSection } from './sections/AudienceSection'
import { ReferralSection } from './sections/ReferralSection'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <MethodSection />
        <DifferentiatorSection />
        <CasesSection />
        <AudienceSection />
        <ReferralSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
