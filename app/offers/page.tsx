import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const offers = {
  restaurants: [
    {
      id: 1,
      title: "50% OFF up to ₹100",
      description: "On orders above ₹299 | Use code WELCOME50",
      restaurant: "Spice Garden",
      validUntil: "2024-03-31",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
      terms: ["Valid on orders above ₹299", "Maximum discount: ₹100", "Valid once per user"],
    },
    {
      id: 2,
      title: "FREE Delivery",
      description: "On your first order from Pizza Paradise",
      restaurant: "Pizza Paradise",
      validUntil: "2024-03-31",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
      terms: ["Valid on minimum order of ₹200", "First-time customers only", "Maximum discount: ₹150"],
    },
  ],
  newUser: [
    {
      id: 3,
      title: "60% OFF up to ₹150",
      description: "Welcome offer for new users",
      restaurant: "noodles",
      validUntil: "2024-12-31",
      image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500&q=80",
      terms: ["Valid on first order", "Minimum order value: ₹200", "Maximum discount: ₹150"],
    },
  ],
  payment: [
    {
      id: 4,
      title: "10% Cashback",
      description: "Using Food Hub Wallet",
      validUntil: "2024-03-31",
      image: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?w=500&q=80",
      terms: ["Maximum cashback: ₹50", "Valid on all orders"],
    },
    {
      id: 5,
      title: "15% OFF with HDFC Bank",
      description: "On orders above ₹400",
      validUntil: "2024-03-31",
      image: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=500&q=80",
      terms: ["Valid on HDFC credit cards", "Maximum discount: ₹200"],
    },
  ],
}

export default function OffersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Best Offers For You</h1>
            <p className="text-gray-600">Discover amazing deals and save on your favorite food</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
              <TabsTrigger value="all">All Offers</TabsTrigger>
              <TabsTrigger value="restaurants">Restaurant Offers</TabsTrigger>
              <TabsTrigger value="newUser">New User Offers</TabsTrigger>
              <TabsTrigger value="payment">Payment Offers</TabsTrigger>
            </TabsList>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(offers).map(([category, categoryOffers]) =>
                categoryOffers.map((offer) => (
                  <Card key={offer.id} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={offer.image || "/placeholder.svg"}
                        alt={offer.title}
                        className="h-48 w-full object-cover"
                      />
                      <Badge className="absolute left-4 top-4 bg-orange-600">
                        {category === "restaurants"
                          ? "Restaurant Special"
                          : category === "newUser"
                            ? "New User"
                            : "Payment Offer"}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-bold">{offer.title}</h3>
                      <p className="mb-4 text-gray-600">{offer.description}</p>
                      {offer.restaurant && <p className="mb-2 text-sm font-medium">At {offer.restaurant}</p>}
                      <div className="mb-4">
                        <h4 className="mb-2 font-medium">Terms & Conditions:</h4>
                        <ul className="list-inside list-disc text-sm text-gray-600">
                          {offer.terms.map((term, index) => (
                            <li key={index}>{term}</li>
                          ))}
                          <li>Valid until {new Date(offer.validUntil).toLocaleDateString()}</li>
                        </ul>
                      </div>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        {category === "restaurants" ? "Order Now" : "Claim Offer"}
                      </Button>
                    </CardContent>
                  </Card>
                )),
              )}
            </div>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

