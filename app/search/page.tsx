"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  id: number
  name: string
  cuisine: string
  rating: number
  deliveryTime: string
  offer: string
  image: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true)
      // In a real application, you would make an API call here
      // For this example, we'll use dummy data
      const dummyResults: SearchResult[] = [
        {
          id: 1,
          name: "Spice Garden",
          cuisine: "North Indian",
          rating: 4.5,
          deliveryTime: "30-40 min",
          offer: "50% OFF up to ₹100",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80",
        },
        {
          id: 2,
          name: "Pizza Paradise",
          cuisine: "Italian",
          rating: 4.3,
          deliveryTime: "25-35 min",
          offer: "FREE Delivery",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80",
        },
        // Add more dummy results here
      ]

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setResults(dummyResults)
      setLoading(false)
    }

    fetchResults()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">Search Results for "{query}"</h1>
          {loading ? (
            <p>Loading results...</p>
          ) : results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((result) => (
                <Link href={`/restaurant/${result.id}`} key={result.id}>
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative">
                      <img
                        src={result.image || "/placeholder.svg"}
                        alt={result.name}
                        className="h-48 w-full object-cover"
                        width={500}
                        height={300}
                      />
                      <Badge className="absolute right-2 top-2 bg-orange-600 hover:bg-orange-700">{result.offer}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-1 text-xl font-bold">{result.name}</h3>
                      <p className="mb-2 text-sm text-gray-600">{result.cuisine}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center rounded bg-green-600 px-1.5 py-0.5 text-xs text-white">
                            <Star className="mr-0.5 h-3 w-3" /> {result.rating}
                          </span>
                          <span className="flex items-center text-xs text-gray-500">
                            <Clock className="mr-0.5 h-3 w-3" /> {result.deliveryTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p>No results found for "{query}". Try a different search term.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

