import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { ServicesSection } from "@/components/services-section"
import { QuoteCallout } from "@/components/quote-callout"
import { WorkSection } from "@/components/work-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <QuoteCallout />
      <WorkSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
