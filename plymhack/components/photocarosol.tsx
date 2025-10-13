"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  '/EventImages/PlymHack/IMG_1996.JPG',
  '/EventImages/PlymHack/IMG_2013.JPG',
  '/EventImages/PlymHack/IMG_2372.jpeg',
  '/EventImages/PlymHack/IMG_2380.jpeg',
  '/EventImages/PlymHack/IMG_2384.jpeg',
  '/EventImages/PlymHack/IMG_2391.jpeg',
  '/EventImages/PlymHack/IMG_2396.jpeg',
]

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative md:w-1/2 md:h-[400px] w-full h-[350px]  overflow-hidden rounded-lg mx-auto mb-12">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`PlyHack event photo ${index + 1}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-background/80"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-background/80"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

