
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
