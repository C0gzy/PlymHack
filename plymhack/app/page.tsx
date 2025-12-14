"use client"

import { useState, useEffect } from "react"
import { NavBar } from "@/components/nav-bar"
import { PlymHackHero } from "@/components/plymhack-hero"
import { FAQSection } from "@/components/faq-section"
import { RegistrationSection } from "@/components/registration-section"
import { Countdown } from "@/components/countdown"
import { Timeline } from "@/components/timeline"
import { PrizeArea } from "@/components/prize-area"
import { Button } from "@/components/ui/button"
import { PhotoCarousel } from "@/components/photocarosol"
import { WhatToExpect } from "@/components/what-to-expect"
import { SponsorsSection } from "@/components/sponsors-section"
import { StatsSection } from "@/components/stats-section"
import { ArrowUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function PlyHackPage() {
  const [mounted, setMounted] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // PlymHack 2026 – 7th - 8th February
  const hackathonStart = new Date("2026-02-07T09:00:00")

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <PlymHackHero />
      <main className="container mx-auto lg:px-50 lg:py-20 md:px-20 md:py-50 px-8 py-16 pt-24">
        {/* Enhanced Event Information Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Event Information
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us for an exciting 24-hour International hackathon where you'll compete against teams from around the world!
            </p>
          </div>
          
          <Card className="mb-8 border-green-200 dark:border-green-800">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg mb-6 leading-relaxed">
                Join us for an exciting 24-hour International hackathon where you will compete against teams from{" "}
                <span className="font-bold text-green-600 dark:text-green-400">England</span>,{" "}
                <span className="font-bold text-green-600 dark:text-green-400">Sri Lanka</span>, and{" "}
                <span className="font-bold text-green-600 dark:text-green-400">Malaysia</span>. 
                You'll have the opportunity to innovate, collaborate, and create amazing projects! 
                PlymHack is open to all skill levels and backgrounds. Whether you're a seasoned coder or just starting out, 
                there's a place for you at PlymHack.
              </p>
              
              <div className="grid content-center md:grid-cols-3 gap-6 mb-8">
                <div className="flex align-center content-center items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Date</h3>
                    <p className="text-muted-foreground">7th - 8th February 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">TBD</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Duration</h3>
                    <p className="text-muted-foreground">24 hours</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white">
                  <a href="https://fixr.co/event/plymhack-2026-tickets-923319410" target="_blank" rel="noopener noreferrer">
                    Registration open now!
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {mounted && <Countdown targetDate={hackathonStart} />}

        <StatsSection />

        <WhatToExpect />

        <RegistrationSection />
        
        <PrizeArea />
        
        <SponsorsSection />
        
        <FAQSection />
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

