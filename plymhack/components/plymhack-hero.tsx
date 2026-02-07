"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PlymHackHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-green-600 to-emerald-500">
      <div dangerouslySetInnerHTML={{ __html: '<!-- she_sells_SEA_SHELLS -->' }} />
      <div className="container mx-auto px-4 pt-72 pb-72 text-center text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
          
          NSBM Green University &#8203; <span className="font-bold text-lg">• 7th - 8th February 2026 • </span> &#8203; Plymouth University  
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            PlymHack 2026
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90">
            24 hours. Teams. Ideas. Build something unforgettable.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
           <Button asChild size="lg" className="w-full text-white sm:w-auto bg-green-500 hover:bg-green-600">
            <a href="https://fixr.co/event/plymhack-2026-tickets-923319410" target="_blank" rel="noopener noreferrer">
              Registration is open
            </a>
          </Button>
            <Button 
              variant="default"
              size="lg" 
              className="bg-white text-black hover:bg-white/90"
              onClick={() => {
                const element = document.querySelector('main');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-20 -z-10" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" viewBox="0 0 500 350">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="url(#g)">
            <circle cx="150" cy="100" r="120" />
            <circle cx="650" cy="120" r="90" />
            <circle cx="400" cy="380" r="120" />
          </g>
        </svg>
      </div>
    </section>
  )
}


