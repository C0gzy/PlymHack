import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CountdownProps {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const targetYear = targetDate.getFullYear()

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeLeft = {}

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

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
      <div key={interval} className="text-center">
        <span className="md:text-8xl text-4xl font-bold">{timeLeft[interval]}</span>
        <span className="md:text-m text-sm uppercase">{interval}</span>
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

