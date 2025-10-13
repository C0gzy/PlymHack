import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  { time: "10:30", description: "Check-in" },
  { time: "11:30", description: "Hackathon theme reveal" },
  { time: "12:00", description: "Hackathon Begins" },
  { time: "14:00", description: "Lunch Break" },
  { time: "15:30", description: "Spaghetti tower challenge" },
  { time: "17:15", description: "Chess Tournament" },
  { time: "20:00", description: "Dinner Break" },
  { time: "22:00", description: "Worst Pitch Idea Challenge" },
  { time: "24:00", description: "Quiet Hours" },
  { time: "08:00", description: "Breakfast" },
  { time: "10:00", description: "Video Submission" },
  { time: "12:00", description: "Project Submission" },
  { time: "13:30", description: "Closing Ceremony and Winner Announcement" },
]

export function Timeline() {
  return (
    <Card className="mt-12 border-pink-400">
      <CardHeader>
        <CardTitle>Event Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="relative border-l border-pink-400 dark:border-pink-400">
          {events.map((event, index) => (
            <li key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-pink-400 rounded-full mt-1.5 -left-1.5 border border-pink-400 dark:border-pink-400 dark:bg-pink-400"></div>
              <time className="mb-1 text-sm font-normal leading-none text-pink-400 dark:text-pink-400">
                {event.time}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.description}</h3>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

