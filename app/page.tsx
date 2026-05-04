"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { HeroSection } from "@/components/hero-section"
import { FaqSection } from "@/components/faq-section"
import { OurTopCasinoChoiceSection } from "@/components/our-top-casino-choice-section"
import { BettingInfoSection } from "@/components/betting-info-section"
import { CookieBanner } from "@/components/cookie-banner"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { BetList } from "@/components/bet-list"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTopOffersModalOpen, setIsTopOffersModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTopOffersModalOpen(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <CookieConsentProvider>
      {/* Fixed full-page background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-sports.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <main className="min-h-screen flex flex-col">
        <SiteHeader />
        <HeroSection
          setIsAgeModalOpen={setIsAgeModalOpen}
          setIsAdvertiserModalOpen={setIsAdvertiserModalOpen}
          setIsTopOffersModalOpen={setIsTopOffersModalOpen}
        />
        <div id="betting-sites">
          <BetList />
        </div>
        <WhyChooseUsSection />
        <BettingInfoSection />
        <OurTopCasinoChoiceSection />
        <FaqSection />
        <SiteFooter />

        <TopOffersModal isOpen={isTopOffersModalOpen} onClose={() => setIsTopOffersModalOpen(false)} />
        <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
        <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
        <CookieBanner />
      </main>
    </CookieConsentProvider>
  )
}
