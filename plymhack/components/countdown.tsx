import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CountdownProps {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  type TimeUnit = "days" | "hrs" | "mins" | "secs"
  type TimeLeft = Partial<Record<TimeUnit, number>>

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())
  const targetYear = targetDate.getFullYear()

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date()
    let timeLeft: TimeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const units: TimeUnit[] = ["days", "hrs", "mins", "secs"]
  const timerComponents = units.map((unit) => {
    const value = timeLeft[unit]
    if (value == null) return null
    return (
      <div key={unit} className="text-center">
        <span className="md:text-8xl text-2xl font-bold">{value}</span>
        <span className="md:text-m text-sm uppercase">{unit}</span>
      </div>
    )
  })

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>Countdown to PlymHack {targetYear}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around">
          {timerComponents.length ? timerComponents : <span className="md:text-4xl text-2xl text-center font-bold">The hackathon has Ended! Come Back Next Year!</span>}
        </div>
      </CardContent>
    </Card>
  )
}

