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
    <Card className="mb-12 border-green-200 dark:border-green-800">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl md:text-3xl font-bold">
          Countdown to PlymHack {targetYear}
        </CardTitle>
        <p className="text-muted-foreground mt-2">
          The adventure begins in...
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-around gap-2 md:gap-8">
          {timerComponents.length ? (
            timerComponents.map((component, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg min-w-[80px] md:min-w-[120px]">
                {component}
              </div>
            ))
          ) : (
            <span className="md:text-4xl text-2xl text-center font-bold py-8">
              The hackathon has Ended! Come Back Next Year!
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

