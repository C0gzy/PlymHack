"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Code, Globe, Trophy } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Participants",
    description: "Expected"
  },
  {
    icon: Code,
    value: "24",
    label: "Hours",
    description: "Of coding"
  },
  {
    icon: Globe,
    value: "3",
    label: "Countries",
    description: "England, Sri Lanka, Malaysia"
  },
  {
    icon: Trophy,
    value: "3+",
    label: "Prizes",
    description: "Amazing rewards"
  },
]

export function StatsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                      <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

