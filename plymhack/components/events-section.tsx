"use client"

import { useEffect, useState } from 'react'
import { CalendarDays, MapPin } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { events, type Event, type EventType } from "@/lib/events-data"


export function EventsSection() {
  const [mounted, setMounted] = useState(false)
  const [upcomingEvents, setUpcomingEvents] = useState<typeof events>([])

  useEffect(() => {
    setMounted(true)
    // Compute on client to avoid SSR/CSR time zone and current-time divergence
    const now = new Date()
    const filtered = events
      .filter((event) => {
        const eventDate = new Date(event.date)
        return !isNaN(eventDate.getTime()) && eventDate >= now
      })
      .sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA.getTime() - dateB.getTime()
      })
      .slice(0, 6)
    setUpcomingEvents(filtered)
  }, [])

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        return dateString
      }
      // Use a fixed locale/timeZone for deterministic output
      return date.toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/London',
        hour12: false,
      })
    } catch {
      return dateString
    }
  }

  return (
    <section id="events" className="py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-950/20">
      <div className="space-y-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Join us for exciting events, workshops, and social gatherings throughout the year
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-8">
        {mounted && upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {formatDate(event.date)}
                  </CardDescription>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              No upcoming events at the moment. Check back soon!
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

