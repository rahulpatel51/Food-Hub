import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Truck, Users } from "lucide-react"
import Link from "next/link"

export default function AboutUsSection() {
  return (
    <section id="about" className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">About Food Hub</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Utensils className="mb-4 h-12 w-12 text-orange-600" />
              <h3 className="mb-2 text-xl font-bold">Quality Food</h3>
              <p className="text-gray-600">We partner with the best restaurants to deliver you top quality food</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Truck className="mb-4 h-12 w-12 text-orange-600" />
              <h3 className="mb-2 text-xl font-bold">Fast Delivery</h3>
              <p className="text-gray-600">Our efficient delivery network ensures your food arrives hot and fresh</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Users className="mb-4 h-12 w-12 text-orange-600" />
              <h3 className="mb-2 text-xl font-bold">Customer First</h3>
              <p className="text-gray-600">We prioritize customer satisfaction in everything we do</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-block rounded-md bg-orange-600 px-6 py-3 text-white transition-colors hover:bg-orange-700"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

