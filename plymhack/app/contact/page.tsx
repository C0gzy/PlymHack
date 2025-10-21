"use client"

import { useState } from "react"
import { NavBar } from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Instagram, Twitter} from "lucide-react"


export default function ContactPage() {

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground">
                Have a question or want to get involved? Send us a message and we'll get back to you as soon as
                possible.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Email Us</h2>
              <ul className="list-disc list-inside space-y-2">
              <li>
              <a href="mailto:plymhack@gmail.com" className="text-primary hover:underline">
                plymhack@gmail.com
              </a>
              </li>
              <li>
              <a href="mailto:Thomas.Cogzell@students.plymouth.ac.uk" className="text-primary hover:underline">
                Thomas.Cogzell@students.plymouth.ac.uk
              </a>
              </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/PlymHack/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>

                    
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

