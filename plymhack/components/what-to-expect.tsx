"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Coffee, Lightbulb, Presentation, PartyPopper } from "lucide-react"

const expectations = [
  {
    icon: Code,
    title: "Build Something Amazing",
    description: "Work on innovative projects using cutting-edge technologies. No limits, just creativity!"
  },
  {
    icon: Users,
    title: "Network & Collaborate",
    description: "Meet like-minded developers from around the world."
  },
  {
    icon: Coffee,
    title: "Free Food & Drinks",
    description: "Enjoy complimentary meals, snacks, and beverages throughout the event to keep you energized."
  },
  {
    icon: Lightbulb,
    title: "Learn & Grow",
    description: "Attend workshops, get mentorship from industry experts, and learn new skills."
  },
  {
    icon: Presentation,
    title: "Showcase Your Work",
    description: "Present your project to judges and peers. Get feedback and recognition for your hard work."
  },
  {
    icon: PartyPopper,
    title: "Win Prizes",
    description: "Compete for amazing prizes and bragging rights."
  },
]

export function WhatToExpect() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What to Expect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A jam-packed 24 hours of coding, learning, networking, and fun!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-green-400">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                      <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

