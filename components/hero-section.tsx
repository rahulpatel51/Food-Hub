"use client"

import { useState, useEffect } from "react"
import { MapPin, Navigation, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"
import SearchBar from "./search-bar"

export default function HeroSection() {
  const [location, setLocation] = useState("Select your location")
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const popularLocations = ["Delhi, India", "Mumbai, India", "Bangalore, India", "Chennai, India", "Kolkata, India"]

  const handleLocationSelect = (loc: string) => {
    setLocation(loc)
    setIsPopoverOpen(false)
  }

  const handleCurrentLocation = () => {
    setLocation("Detecting location...")
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            )
            const data = await response.json()
            if (data.display_name) {
              const formattedLocation = `${data.address.city || data.address.town || data.address.village}, ${data.address.state}, ${data.address.country}`
              setLocation(formattedLocation)
            } else {
              setLocation("Location not found")
            }
          } catch (error) {
            console.error("Error fetching location:", error)
            setLocation("Error detecting location")
          }
        },
        () => {
          setLocation("Location access denied")
        },
      )
    } else {
      setLocation("Geolocation not supported")
    }
    setIsPopoverOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-[calc(var(--vh,1vh)*110)] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
          alt="Food Background"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[calc(var(--vh,1vh)*100)] flex-col items-center justify-center px-4 py-20 text-white md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 animate-fade-in-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Delicious Food <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>
          <p className="mb-12 animate-fade-in-up animation-delay-200 text-lg text-gray-200 md:text-xl lg:text-2xl">
            Order food from the best restaurants in your city and enjoy a delightful meal at your doorstep.
          </p>

          {/* Location and Search Bar */}
          <div className="animate-fade-in-up animation-delay-400 mx-auto mb-12 flex w-full max-w-3xl flex-col gap-4 rounded-lg bg-black/30 p-4 backdrop-blur-md sm:flex-row sm:items-start sm:p-2">
            {/* Location Selector */}
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="flex h-12 w-full justify-between border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto sm:min-w-[200px]"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="truncate">{location}</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <div className="p-4">
                  <h3 className="mb-2 font-medium">Select your location</h3>
                  <div
                    className="mb-4 flex cursor-pointer items-center rounded-md border bg-muted p-2 hover:bg-muted/80"
                    onClick={handleCurrentLocation}
                  >
                    <Navigation className="mr-2 h-4 w-4 text-orange-500" />
                    <span>Use current location</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Popular locations</h4>
                    {popularLocations.map((loc) => (
                      <div
                        key={loc}
                        className="flex cursor-pointer items-center rounded-md p-2 hover:bg-muted"
                        onClick={() => handleLocationSelect(loc)}
                      >
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{loc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Search Bar */}
            <SearchBar />
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-600 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/restaurants"
              className="inline-flex h-12 items-center justify-center rounded-md bg-orange-600 px-6 font-medium text-white shadow-lg transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              Order Now
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white bg-transparent px-6 font-medium text-white shadow-lg transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              How it works
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

