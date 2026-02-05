import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CountdownProps {
  targetDate: Date
  eventDurationHours?: number
  announcementDurationSeconds?: number
}

type Phase = "countdown" | "announcement" | "event" | "ended"
type TimeUnit = "days" | "hrs" | "mins" | "secs"
type TimeLeft = Partial<Record<TimeUnit, number>>

export function Countdown({ 
  targetDate, 
  eventDurationHours = 24,
  announcementDurationSeconds = 30 
}: CountdownProps) {
  const [phase, setPhase] = useState<Phase>("countdown")
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({})
  const targetYear = targetDate.getFullYear()

  useEffect(() => {
    function calculateState() {
      const now = new Date()
      const startTime = +targetDate
      const announcementEnd = startTime + (announcementDurationSeconds * 1000)
      const eventEnd = startTime + (eventDurationHours * 60 * 60 * 1000)
      const currentTime = +now

      // Before hackathon starts
      if (currentTime < startTime) {
        const difference = startTime - currentTime
        setPhase("countdown")
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        })
      }
      // Announcement phase (first 30 seconds after start)
      else if (currentTime < announcementEnd) {
        setPhase("announcement")
        setTimeLeft({})
      }
      // Event is running (24 hour countdown)
      else if (currentTime < eventEnd) {
        const difference = eventEnd - currentTime
        setPhase("event")
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        })
      }
      // Event has ended
      else {
        setPhase("ended")
        setTimeLeft({})
      }
    }

    calculateState()
    const timer = setInterval(calculateState, 1000)
    return () => clearInterval(timer)
  }, [targetDate, eventDurationHours, announcementDurationSeconds])

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

  const getTitle = () => {
    switch (phase) {
      case "countdown":
        return `Countdown to PlymHack ${targetYear}`
      case "announcement":
        return "PlymHack Has Begun!"
      case "event":
        return "Time Remaining"
      case "ended":
        return `PlymHack ${targetYear}`
    }
  }

  const getSubtitle = () => {
    switch (phase) {
      case "countdown":
        return "The adventure begins in..."
      case "announcement":
        return "Good luck hackers!"
      case "event":
        return "Keep hacking!"
      case "ended":
        return "Thank you for participating!"
    }
  }

  return (
    <Card className="mb-12 border-green-200 dark:border-green-800">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl md:text-3xl font-bold">
          {getTitle()}
        </CardTitle>
        <p className="text-muted-foreground mt-2">
          {getSubtitle()}
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-around gap-2 md:gap-8">
          {phase === "announcement" ? (
            <span className="md:text-4xl text-2xl text-center font-bold py-8 animate-pulse">
              🎉 The Hackathon Has Begun! 🎉
            </span>
          ) : phase === "ended" ? (
            <span className="md:text-4xl text-2xl text-center font-bold py-8">
              The hackathon has ended! Great work everyone!
            </span>
          ) : timerComponents.length ? (
            timerComponents.map((component, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg min-w-[80px] md:min-w-[120px]">
                {component}
              </div>
            ))
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}

