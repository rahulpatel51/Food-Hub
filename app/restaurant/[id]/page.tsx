"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Star, Clock, MapPin, Info, MenuIcon, MessageSquare } from "lucide-react"
import AddToCartButton from "@/components/add-to-cart-button"

const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "North Indian",
    rating: 4.5,
    deliveryTime: "30-40 min",
    offer: "50% OFF up to ₹100",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80",
    description:
      "Authentic North Indian cuisine with a modern twist. Our chefs use traditional recipes and fresh ingredients to create a memorable dining experience.",
    address: "123 Foodie Lane, Gourmet District, City",
    menu: {
      appetizers: [
        {
          id: 1,
          name: "Paneer Tikka",
          price: 249,
          description: "Grilled cottage cheese marinated in spices",
          image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&q=80",
        },
        {
          id: 2,
          name: "Veg Spring Rolls",
          price: 199,
          description: "Crispy rolls filled with vegetables",
          image: "https://images.unsplash.com/photo-1606335543042-57c525922933?w=500&q=80",
        },
      ],
      mainCourse: [
        {
          id: 3,
          name: "Butter Chicken",
          price: 349,
          description: "Tender chicken in a rich, creamy tomato sauce",
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80",
        },
        {
          id: 4,
          name: "Dal Makhani",
          price: 249,
          description: "Creamy black lentils slow-cooked to perfection",
          image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
        },
      ],
      breads: [
        {
          id: 5,
          name: "Garlic Naan",
          price: 49,
          description: "Soft bread with a garlic flavor",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
        },
      ],
      desserts: [
        {
          id: 6,
          name: "Gulab Jamun",
          price: 99,
          description: "Sweet milk dumplings in sugar syrup",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
        },
      ],
    },
    reviews: [
      {
        id: 1,
        user: "John D.",
        rating: 5,
        comment: "Amazing food and quick delivery!",
        date: "2024-03-01",
      },
      // Add more reviews...
    ],
  },
  // Add more restaurants...
]

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const restaurant = restaurants.find((r) => r.id === Number.parseInt(params.id))
  const [activeCategory, setActiveCategory] = useState("all")

  if (!restaurant) {
    notFound()
  }

  const renderMenuItem = (item: any) => (
    <Card key={item.id} className="flex overflow-hidden">
      <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-24 w-24 object-cover sm:h-32 sm:w-32" />
      <CardContent className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="mt-2 text-lg font-bold">₹{item.price}</p>
        </div>
        <div className="mt-4">
          <AddToCartButton onAddToCart={(quantity) => console.log(`Added ${quantity} ${item.name}`)} />
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Restaurant Header */}
        <div className="relative h-[300px]">
          <img
            src={restaurant.image || "/placeholder.svg"}
            alt={restaurant.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <h1 className="mb-2 text-4xl font-bold">{restaurant.name}</h1>
              <p className="mb-2 text-lg">{restaurant.cuisine}</p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center">
                  <Star className="mr-1 h-5 w-5 text-yellow-400" />
                  {restaurant.rating}
                </span>
                <span className="flex items-center">
                  <Clock className="mr-1 h-5 w-5" />
                  {restaurant.deliveryTime}
                </span>
                <Badge className="bg-orange-600">{restaurant.offer}</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="menu" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="menu" className="flex items-center gap-2">
                <MenuIcon className="h-4 w-4" /> Menu
              </TabsTrigger>
              <TabsTrigger value="info" className="flex items-center gap-2">
                <Info className="h-4 w-4" /> Restaurant Info
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="menu">
              <div className="flex gap-8">
                <div className="w-full lg:w-3/4">
                  {/* Menu Categories */}
                  <div className="mb-6 flex gap-2 overflow-x-auto">
                    <Button
                      variant={activeCategory === "all" ? "default" : "outline"}
                      onClick={() => setActiveCategory("all")}
                    >
                      All
                    </Button>
                    {Object.keys(restaurant.menu).map((category) => (
                      <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        onClick={() => setActiveCategory(category)}
                        className="whitespace-nowrap"
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Button>
                    ))}
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-4">
                    {activeCategory === "all" ? (
                      Object.entries(restaurant.menu).map(([category, items]) => (
                        <div key={category}>
                          <h2 className="mb-4 text-xl font-bold">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </h2>
                          <div className="space-y-4">{(items as any[]).map(renderMenuItem)}</div>
                        </div>
                      ))
                    ) : (
                      <div className="space-y-4">
                        {(restaurant.menu[activeCategory as keyof typeof restaurant.menu] as any[]).map(renderMenuItem)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Cart Section */}
                <div className="sticky top-20 hidden h-fit w-1/4 lg:block">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="mb-4 text-xl font-bold">Your Order</h2>
                      {/* Add cart items here */}
                      <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700">Proceed to Checkout</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="info">
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-bold">About {restaurant.name}</h2>
                  <p className="mb-4">{restaurant.description}</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 h-5 w-5 text-gray-400" />
                    <p>{restaurant.address}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-4">
                {restaurant.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">{review.user}</span>
                        <span className="flex items-center">
                          <Star className="mr-1 h-4 w-4 text-yellow-400" />
                          {review.rating}
                        </span>
                      </div>
                      <p className="mt-2">{review.comment}</p>
                      <p className="mt-2 text-sm text-gray-500">{review.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

