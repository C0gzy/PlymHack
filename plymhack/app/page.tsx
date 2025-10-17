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

export default function PlyHackPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // PlymHack 2026 – 7th - 8th February
  const hackathonStart = new Date("2026-02-07T09:00:00")

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <PlymHackHero />
      <main className="container mx-auto px-4 py-8 pt-24">


        <section className="mb-12">
          <h1 className="text-4xl font-semibold mb-4">Event Information</h1>
          <p className="text-lg mb-4">
            Join us for an exciting 24-hour International hackathon where You will compete against teams from <span className="font-bold">England, Sri Lanka </span> <span>and</span> <span className="font-bold">Malaysia</span>. You'll have the opportunity to innovate, collaborate, and
            create amazing projects! PlyHack is open to all skill levels and backgrounds. Whether you're a seasoned
            coder or just starting out, there's a place for you at PlymHack.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Date: 7th - 8th February 2026</li>
            <li>Location: TBD</li>
            <li>Duration: 24 hours</li>
          </ul>
          <Button asChild size="lg" className="mt-12 w-full text-white sm:w-auto bg-pink-500 hover:bg-pink-600">
            <a style={{pointerEvents: "none"}} href="https://plymhack.com" target="_blank" rel="noopener noreferrer">
              Registration opens soon
            </a>
          </Button>
        </section>


        {mounted && <Countdown targetDate={hackathonStart} />}

        <RegistrationSection />
        <FAQSection />

        
        
      </main>
    </div>
  )
}

