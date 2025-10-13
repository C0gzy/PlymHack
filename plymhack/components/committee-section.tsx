import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'


import SocialBar from '@/components/socialbar'

export function CommitteeSection() {

  const committee = [
    {
      name: "Mohammad Khazaei",
      role: "Chairmen",
      image: "Committee/Moh.png",
      desc: null,
      socials: {
        insta: "https://www.instagram.com/m7md_cs/",
        linkedin: "https://www.linkedin.com/in/mohammad-khazaei-1b3a97238/",
        github: null,
        web: null,
        email: "mailto: mohd.2132002@gmail.com"
      }
    },
    {
      name: "Joseph Troughton",
      role: "Co-Chair",
      image: "Committee/joe.jpg",
      desc: null,
      socials: {
        insta: null,
        linkedin: "https://www.linkedin.com/in/joseph-troughton-a411512b8/",
        github: null,
        web: null,
        email: null
      }
    },
    {
      name: "Tom Cogzell",
      role: "WebMaster",
      image: "Committee/Tom.jpg",
      desc: "I am a second year Software enginneering student with a passion for web develpoement and exicited to be the webmaster for the computing society. I'm looking forward to working with the rest of the committee to make the society the best it can be.",
      socials: {
        insta: null,
        linkedin: "https://www.linkedin.com/in/tom-cogzell-878bb22b2/",
        github: "https://github.com/C0gzy",
        web: "https://c0gzy.github.io/Portfolio.github.io/",
        email: null
      }
    },
    {
      name: "Nikodem Drabik",
      role: "Secretary",
      image: "Committee/Niko.jpg",
      desc: null,
      socials: {
        insta: null,
        linkedin: "https://www.linkedin.com/in/nikodem-drabik-34a73b2ba/",
        github: null,
        web: null,
        email: null
      }
    },
    {
      name: "Gabriel Marangoci",
      role: "Treasurer",
      image: "Committee/Gabriel.jpg",
      desc: null,
      socials: {
        insta: null,
        linkedin: "https://www.linkedin.com/in/gabriel-marangoci/",
        github: null,
        web: null,
        email: null
      }
    },
    {
      name: "Noel Mathew",
      role: "Media Manager",
      image: "Committee/Noel.jpg",
      desc: null,
      socials: {
        insta: null,
        linkedin: null,
        github: null,
        web: null,
        email: null
      }
    }
    // Add other committee members here
  ]

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="space-y-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Committee</h2>
          <p className="max-w-[700px] text-muted-foreground">
            The dedicated team working to make PLYCS amazing
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:p-60 p-16 pt-3 ">
          {committee.map((member, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-2">{member.role}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{member.name}</p>
                <div className="flex gap-2">
                  <SocialBar linkedin={member.socials.linkedin} github={member.socials.github} email={member.socials.email} website={member.socials.web} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

