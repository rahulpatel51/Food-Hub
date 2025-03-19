import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Star } from "lucide-react"

export default function RestaurantOffers() {
  const restaurants = [
    {
      id: 1,
      name: "Spice Garden",
      cuisine: "North Indian",
      rating: 4.5,
      deliveryTime: "30-40 min",
      offer: "50% OFF up to ₹100",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      name: "Pizza Paradise",
      cuisine: "Italian",
      rating: 4.3,
      deliveryTime: "25-35 min",
      offer: "FREE Delivery",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      name: "Biryani House",
      cuisine: "Mughlai",
      rating: 4.7,
      deliveryTime: "35-45 min",
      offer: "Buy 1 Get 1 Free",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 4,
      name: "Chinese Wok",
      cuisine: "Chinese",
      rating: 4.2,
      deliveryTime: "20-30 min",
      offer: "20% OFF on all orders",
      image:
        "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ]

  return (
    <section id="restaurants" className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Discover Best Restaurants on Dineout</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative">
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  width={300}
                  height={200}
                />
                <Badge className="absolute right-2 top-2 bg-orange-600 hover:bg-orange-700">{restaurant.offer}</Badge>
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
          ))}
        </div>
      </div>
    </section>
  )
}

