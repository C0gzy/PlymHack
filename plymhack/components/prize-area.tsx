import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

const prizes = [
  { place: "1st Place", prize: "Rasberry Pi Zero 2 for each member - WINNER : Chartmaps" },
  { place: "2nd Place", prize: "Sparks and AR Piano Teaching" },
  { place: "3rd Place", prize: "Board Game Master" },

]

export function PrizeArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          Prize!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {prizes.map((prize, index) => (
            <li key={index} className="flex items-start">
              <span className="font-semibold min-w-[100px]">{prize.place}:</span>
              <span>{prize.prize}</span>

            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

