import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export default function PopularDishes() {
  const dishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic delight with 100% real mozzarella cheese",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.8,
      isVeg: true,
      isBestseller: true,
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.9,
      isVeg: false,
      isBestseller: true,
    },
    {
      id: 3,
      name: "Paneer Butter Masala",
      description: "Cottage cheese cubes in a rich and creamy tomato gravy",
      price: 279,
      image:
        "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.7,
      isVeg: true,
      isBestseller: false,
    },
    {
      id: 4,
      name: "Chocolate Brownie",
      description: "Rich chocolate brownie with a gooey center, served with vanilla ice cream",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4.6,
      isVeg: true,
      isBestseller: false,
    },
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Popular Dishes</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="h-48 w-full object-cover"
                  width={300}
                  height={200}
                />
                <div className="absolute right-2 top-2 flex flex-col gap-2">
                  {dish.isBestseller && <Badge className="bg-orange-600 hover:bg-orange-700">Bestseller</Badge>}
                  <Badge className={dish.isVeg ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}>
                    {dish.isVeg ? "Veg" : "Non-veg"}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">{dish.name}</h3>
                <p className="mb-2 text-sm text-gray-500 line-clamp-2">{dish.description}</p>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-lg font-bold">₹{dish.price}</span>
                  <span className="flex items-center rounded bg-green-600 px-1.5 py-0.5 text-xs text-white">
                    {dish.rating} ★
                  </span>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

