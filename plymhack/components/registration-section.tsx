"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RegistrationSection() {
  return (
    <section id="register" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardHeader className="text-center text-white">
            <CardTitle className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to build something unforgettable?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <p className="md:text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Registration opens soon. Save your spot and join us this February.
            </p>
            <div className="inline-flex rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-semibold bg-pink-500 text-white hover:bg-pink-600 transition-transform active:scale-[0.98]"
                asChild
              >
                <a href="#" onClick={(e) => e.preventDefault()}>Register Soon</a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Limited capacity — act fast when registration opens
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


