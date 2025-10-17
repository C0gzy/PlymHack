"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex pl-16 pr-16 h-16 items-center justify-between">
        
        <Link href="/" className="flex items-center space-x-2">
          <img
            src='MainImages/PlymouthLogoBlackWhite.webp'
            alt="PLYCS Logo"
            className="h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">

          {/*
          <Link href="/committee" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Committee
          </Link>
          */}          
          <Button asChild variant="default" >
            <Link href="/">PlymHack</Link>
          </Button>
          <Button asChild variant="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
          
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
        
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-sm font-medium hover:text-primary">
                  PlymHack
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-primary">
                  Contact Us
                </Link>
                <ThemeToggle />
              </nav>
              
            </SheetContent>
          </Sheet>
          
        </div>
        
      </div>
    </header>
  )
}

