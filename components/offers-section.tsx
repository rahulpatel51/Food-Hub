import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const offers = [
  {
    id: 1,
    title: "50% OFF up to ₹100",
    description: "On orders above ₹299 | Use code WELCOME50",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
  },
  {
    id: 2,
    title: "FREE Delivery",
    description: "On your first order | Min order ₹150",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&q=80",
  },
  {
    id: 3,
    title: "20% Cashback",
    description: "Up to ₹50 using Food Hub Wallet",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&q=80",
  },
  {
    id: 4,
    title: "Buy 1 Get 1 Free",
    description: "On selected restaurant partners",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80",
  },
]

export default function OffersSection() {
  return (
    <section id="offers" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">Hot Offers</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <Link href={`/offer/${offer.id}`} key={offer.id}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative">
                  <img
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title}
                    className="h-48 w-full object-cover"
                    width={500}
                    height={300}
                  />
                  <Badge className="absolute left-2 top-2 bg-orange-600 hover:bg-orange-700">Limited Time</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-xl font-bold">{offer.title}</h3>
                  <p className="text-sm text-gray-600">{offer.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/offers"
            className="inline-block rounded-md bg-orange-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-orange-700"
          >
            View All Offers
          </Link>
        </div>
      </div>
    </section>
  )
}

