import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './styles/global.css'
import { Header } from './sections/Header'
import { HeroSection } from './sections/HeroSection'
import { ProblemSection } from './sections/ProblemSection'
import { ApproachSection } from './sections/ApproachSection'
import { ServicesSection } from './sections/ServicesSection'
import { MethodSection } from './sections/MethodSection'
import { ContactSection } from './sections/ContactSection'
import { Footer } from './sections/Footer'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? 'es'
  }, [i18n.resolvedLanguage])

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ApproachSection />
        <ServicesSection />
        <MethodSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
