import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Stats } from "@/components/Stats"
import { Features } from "@/components/Features"
import { Footer } from "@/components/Footer"
import { FeaturedIn } from "@/components/FeaturedIn"
import { WhatWeDo } from "@/components/WhatWeDo"
import { ProductOffering } from "@/components/ProductOffering"
import { InvestmentClasses } from "@/components/InvestmentClasses"
import { Community } from "@/components/Community"
import { InvestmentCalculator } from "@/components/InvestmentCalculator"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { FAQ } from "@/components/FAQ"
import { DisclaimerModal } from "@/components/DisclaimerModal"
import { Preloader } from "@/components/Preloader"
import { BuiltWithBoltBadge } from "@/components/BuiltWithBoltBadge"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Preloader />
      <Navigation />
      <div className="pt-16">
        <Hero />
        <FeaturedIn />
        <WhatWeDo />
        <Stats />
        <ProductOffering />
        <InvestmentClasses />
        <InvestmentCalculator />
        <FAQ />
        <Community />
        <Features />
        <Footer />
        <WhatsAppButton />
        <DisclaimerModal />
        <BuiltWithBoltBadge />
      </div>
    </div>
  )
}

export default Index