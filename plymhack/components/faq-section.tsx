"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Quick answers to common questions about PlymHack 2026.
        </p>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="what-is-plymhack">
            <AccordionTrigger>What is PlymHack?</AccordionTrigger>
            <AccordionContent>
              PlymHack is a 24-hour student hackathon hosted at Plymouth University. Teams design and build projects around a theme and present to judges.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="who-can-join">
            <AccordionTrigger>Who can participate?</AccordionTrigger>
            <AccordionContent>
              Students of all skill levels and backgrounds are welcome. Beginners are encouraged.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cost">
            <AccordionTrigger>How much does it cost?</AccordionTrigger>
            <AccordionContent>
              Attendance is free. Registration details will be announced soon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="teams">
            <AccordionTrigger>Do I need a team?</AccordionTrigger>
            <AccordionContent>
              You can register solo and form a team at the event. Typical team sizes are 3–5.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="what-to-bring">
            <AccordionTrigger>What should I bring?</AccordionTrigger>
            <AccordionContent>
              A laptop, charger, student ID, and anything you need to be comfortable for 24 hours (snacks, headphones, etc.).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sleep-food">
            <AccordionTrigger>Is there food and a place to rest?</AccordionTrigger>
            <AccordionContent>
              Yes meals and refreshments are provided, and there will be quiet spaces to rest.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}


