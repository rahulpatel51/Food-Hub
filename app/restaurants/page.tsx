import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock } from "lucide-react"
import Link from "next/link"

const restaurants = [
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
  {
    id: 3,
    name: "Sushi Sensation",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "35-45 min",
    offer: "Buy 1 Get 1 Free",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80",
  },
  {
    id: 4,
    name: "Burger Bliss",
    cuisine: "American",
    rating: 4.2,
    deliveryTime: "20-30 min",
    offer: "20% OFF on all orders",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80",
  },
  // Add more restaurants here...
]

export default function RestaurantsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl">All Restaurants</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {restaurants.map((restaurant) => (
              <Link href={`/restaurant/${restaurant.id}`} key={restaurant.id}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative">
                    <img
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      className="h-48 w-full object-cover"
                      width={500}
                      height={300}
                    />
                    <Badge className="absolute right-2 top-2 bg-orange-600 hover:bg-orange-700">
                      {restaurant.offer}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold">{restaurant.name}</h3>
                    <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center rounded bg-green-600 px-1.5 py-0.5 text-xs text-white">
                          <Star className="mr-0.5 h-3 w-3" /> {restaurant.rating}
                        </span>
                        <span className="flex items-center text-xs text-gray-500">
                          <Clock className="mr-0.5 h-3 w-3" /> {restaurant.deliveryTime}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

