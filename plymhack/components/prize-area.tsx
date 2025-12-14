import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award } from "lucide-react"

const prizes = [
  { 
    place: "1st Place", 
    prize: "TBD",
    winner: "",
    icon: Trophy,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  { 
    place: "2nd Place", 
    prize: "TBD",
    icon: Medal,
    color: "from-green-600 to-green-700",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  { 
    place: "3rd Place", 
    prize: "TBD",
    icon: Award,
    color: "from-green-800 to-green-900",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
]

export function PrizeArea() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-green-500" />
            Prizes & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compete for amazing prizes and recognition. Showcase your skills and creativity!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {prizes.map((prize, index) => {
            const Icon = prize.icon
            return (
              <Card key={index} className={`${prize.bgColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${prize.color} mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{prize.place}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold mb-2">{prize.prize}</p>
                  {prize.winner && (
                    <p className="text-sm text-muted-foreground italic mt-2">
                      {prize.winner}
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Prizes subject to change. More prizes and categories may be added.
        </p>
      </div>
    </section>
  )
}

