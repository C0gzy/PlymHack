"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PlymHackHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-purple-600 to-fuchsia-500">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="url(#g)">
            <circle cx="150" cy="100" r="120" />
            <circle cx="650" cy="120" r="90" />
            <circle cx="400" cy="520" r="120" />
          </g>
        </svg>
      </div>
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
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              Registration opens soon
            </Button>
            <Button variant="outline" size="lg" className="border-white/70 text-white hover:bg-white/10">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255, 255, 255, 0.15),transparent_10%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.1),transparent_20%)]" />
    </section>
  )
}


