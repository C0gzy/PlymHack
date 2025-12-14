"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FAQSection() {
  return (
    <section id="faq" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-green-500" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about PlymHack 2026. Can't find what you're looking for?{" "}
            <a href="/contact" className="text-green-600 dark:text-green-400 hover:underline">
              Contact us
            </a>
            .
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="what-is-plymhack">
            <AccordionTrigger className="text-left">What is PlymHack?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              PlymHack is a 24-hour international student hackathon hosted at Plymouth University in collaboration with NSBM Green University. 
              Teams from England, Sri Lanka, and Malaysia design and build innovative projects around a theme and present to judges. 
              It's a celebration of creativity, collaboration, and coding!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="who-can-join">
            <AccordionTrigger className="text-left">Who can participate?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Students of all skill levels and backgrounds are welcome! Whether you're a beginner just learning to code 
              or an experienced developer, PlymHack is for you. We encourage diversity and welcome participants from all disciplines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cost">
            <AccordionTrigger className="text-left">How much does it cost?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Attendance is completely free! All meals, refreshments, and event materials are provided at no cost. 
              Just bring yourself, your laptop, and your enthusiasm!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="teams">
            <AccordionTrigger className="text-left">Do I need a team?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You can register solo and form a team at the event, or come with a pre-formed team. 
              Typical team sizes are 3–5 members. We'll have team formation activities at the start of the hackathon 
              to help solo participants find teammates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="what-to-bring">
            <AccordionTrigger className="text-left">What should I bring?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Essential items: A laptop, charger, student ID, and a valid form of identification. 
              Recommended: Headphones, comfortable clothing, a water bottle, and any personal items you need 
              to be comfortable for 24 hours. We'll provide meals, but feel free to bring snacks if you prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sleep-food">
            <AccordionTrigger className="text-left">Is there food and a place to rest?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! Meals (breakfast, lunch, and dinner) and refreshments are provided throughout the event. 
              There will be designated quiet spaces for resting, though we encourage you to get some sleep 
              to stay sharp for your presentation!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="theme">
            <AccordionTrigger className="text-left">What's the hackathon theme?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              The theme will be revealed at the opening ceremony! This keeps things exciting and ensures 
              all teams start on equal footing. Past themes have included sustainability, accessibility, 
              and social impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="judging">
            <AccordionTrigger className="text-left">How are projects judged?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Projects are evaluated based on creativity, technical implementation, design, and presentation. 
              Judges will look at how well you addressed the theme, the quality of your code, user experience, 
              and your ability to communicate your idea effectively.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="previous-experience">
            <AccordionTrigger className="text-left">Do I need previous hackathon experience?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Not at all! PlymHack is perfect for first-time hackers. We'll have mentors available to help, 
              workshops throughout the event, and a supportive community. Many successful projects come from 
              teams with mixed experience levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="international">
            <AccordionTrigger className="text-left">How does the international aspect work?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Teams from England, Sri Lanka, and Malaysia will be competing simultaneously. 
              The event is coordinated across time zones, with shared judging and presentations. 
              This creates a unique global collaboration experience!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}


