"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const events = [
  { time: "8:15", description: "Check-in" },
  { time: "8:30", description: "Hackathon Presentation and Introductions"},
  { time: "8:45", description: "Hackathon theme reveal" },
  { time: "9:00", description: "Hackathon Begins" },
  { time: "12:30", description: "Lunch Break" },
  { time: "20:00", description: "Dinner Break" },
  { time: "24:00", description: "Quiet Hours" },
  { time: "08:00", description: "Breakfast" },
  { time: "9:00", description: "Project Submission" },
  { time: "12:00", description: "Closing Ceremony and Winner Announcement" },
]

// Convert GMT time to Sri Lanka time (GMT+5:30)
function convertToSriLankaTime(gmtTime: string): string {
  const [hours, minutes] = gmtTime.split(":").map(Number)
  let totalMinutes = hours * 60 + minutes + 330 // Add 5 hours 30 minutes (330 minutes)
  
  // Handle day rollover
  if (totalMinutes >= 1440) {
    totalMinutes -= 1440
  }
  
  const newHours = Math.floor(totalMinutes / 60)
  const newMinutes = totalMinutes % 60
  
  return `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}`
}

export function Timeline() {
  const [timezone, setTimezone] = useState<"GMT" | "Sri Lanka">("GMT")

  return (
    <Card className="flex flex-col mt-12 border-2 border-green-200 dark:border-green-800 mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl text-center md:text-4xl font-extrabold tracking-tight">
          Event Timeline ({timezone === "GMT" ? "GMT Times" : "Sri Lanka Times"})
        </CardTitle>
        <div className="flex justify-center gap-4 mt-4">
          <Button
            onClick={() => setTimezone("GMT")}
            variant={timezone === "GMT" ? "default" : "outline"}
            className={timezone === "GMT" ? "bg-green-500 hover:bg-green-600" : ""}
          >
            GMT
          </Button>
          <Button
            onClick={() => setTimezone("Sri Lanka")}
            variant={timezone === "Sri Lanka" ? "default" : "outline"}
            className={timezone === "Sri Lanka" ? "bg-green-500 hover:bg-green-600" : ""}
          >
            Sri Lanka
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-400 dark:bg-green-400"></div>
          
          <ol className="relative">
            {events.map((event, index) => {
              const isEven = index % 2 === 0
              return (
                <li key={index} className={`mb-10 relative ${isEven ? 'pr-[50%]' : 'pl-[50%]'}`}>
                  {/* Dot on center line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full border-2 border-green-400 dark:border-green-400 dark:bg-green-400 z-10"></div>
                  
                  {/* Content */}
                  <div className={`${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <time className="mb-1 md:text-5xl text-2xl font-bold leading-none text-green-400 dark:text-green-400 block">
                      {timezone === "GMT" ? event.time : convertToSriLankaTime(event.time)}
                    </time>
                    <h3 className="md:text-2xl text-sm font-semibold text-gray-900 dark:text-white">{event.description}</h3>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}

