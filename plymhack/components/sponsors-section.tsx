"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, Heart } from "lucide-react"

// Add your sponsors here - you can add logos, links, etc.
const sponsors = [
  {
    name: "Plymouth University",
    tier: "Host",
    logo: "/MainImages/PlymouthLogo.png"
  },
  {
    name: "NSBM Green University",
    tier: "Host",
    logo: "/MainImages/nsbmlogo.png" // Add logo path when available
  },
  // Add more sponsors as they come in
]

const partners : any = [
  // Add more partners
]

export function SponsorsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardContent className="p-6 md:p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Building2 className="h-8 w-8 text-green-500" />
                Sponsors & Partners
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're grateful to our sponsors and partners who make PlymHack possible.
              </p>
            </div>
            
            {sponsors.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center">Our Sponsors</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {sponsors.map((sponsor, index) => (
                    <Card key={index} className="border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:border-green-400">
                      <CardContent className="p-6 flex flex-col items-center justify-center min-h-[150px]">
                        {sponsor.logo ? (
                          <img 
                            src={sponsor.logo} 
                            alt={sponsor.name}
                            className="max-h-24 object-contain mb-2"
                          />
                        ) : (
                          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mb-2">
                            <Building2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                          </div>
                        )}
                        <p className="font-semibold text-center">{sponsor.name}</p>
                        <p className="text-sm text-muted-foreground">{sponsor.tier}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {partners.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
                  <Heart className="h-6 w-6 text-green-500" />
                  Our Partners
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {partners.map((partner :any , index: any) => (
                    <Card key={index} className="border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:border-green-400">
                      <CardContent className="p-6">
                        <p className="font-semibold text-lg mb-2">{partner.name}</p>
                        {partner.description && (
                          <p className="text-muted-foreground text-sm">{partner.description}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Interested in sponsoring PlymHack 2026?
              </p>
              <a 
                href="/contact"
                target="_blank"
                className="text-green-600 dark:text-green-400 hover:underline font-semibold"
              >
                Get in touch with us →
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

