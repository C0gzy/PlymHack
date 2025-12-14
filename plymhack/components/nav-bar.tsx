"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed py-2 top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex pl-4 md:pl-16 pr-4 md:pr-16 h-16 items-center justify-between">
        
        <Link href="/" className="flex items-center space-x-2">
          {mounted && theme.theme === "light" ? (
            <img src='MainImages/PlymHackLogoLight.webp' alt="PlymHack Logo" className="h-12 md:h-16" />
          ) : (
            <img src='MainImages/PlymHackLogoDark.webp' alt="PlymHack Logo" className="h-12 md:h-16" />
          )}
        </Link>
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-sm font-medium"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </Button>
          <Button asChild variant="default" className="text-white bg-green-500 hover:bg-green-600">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => scrollToSection("faq")}
                >
                  FAQ
                </Button>
                <Button asChild variant="default" className="justify-start bg-green-500 hover:bg-green-600 text-white">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
      </div>
    </header>
  )
}

