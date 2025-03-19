import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const offers = [
  {
    id: 1,
    title: "50% OFF up to ₹100",
    description: "Get 50% off on your order up to ₹100. Valid on all restaurants.",
    code: "WELCOME50",
    terms: [
      "Valid on orders above ₹299",
      "Maximum discount: ₹100",
      "Valid once per user",
      "Not valid on already discounted items",
    ],
    expiryDate: "2023-12-31",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
  },
  // Add more offers here...
]

export default function OfferPage({ params }: { params: { id: string } }) {
  const offer = offers.find((o) => o.id === Number.parseInt(params.id))

  if (!offer) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src={offer.image || "/placeholder.svg"} alt={offer.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 md:w-1/2">
                <h1 className="mb-4 text-3xl font-bold">{offer.title}</h1>
                <p className="mb-4 text-gray-600">{offer.description}</p>
                <div className="mb-4">
                  <h2 className="mb-2 text-xl font-semibold">How to use:</h2>
                  <p>
                    Use code <span className="font-bold text-orange-600">{offer.code}</span> at checkout
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="mb-2 text-xl font-semibold">Terms and Conditions:</h2>
                  <ul className="list-inside list-disc">
                    {offer.terms.map((term, index) => (
                      <li key={index}>{term}</li>
                    ))}
                  </ul>
                </div>
                <p className="mb-4">Valid until: {offer.expiryDate}</p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Order Now</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

