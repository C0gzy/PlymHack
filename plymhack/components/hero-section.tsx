import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Plymouth University Computer Science Society
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Empowering students through technology, community, and innovation
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild size="lg">
            <Link href="https://www.upsu.com/societies/compsoc/">Join PLYCS</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="#events">Upcoming Events</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

