import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function RideWithUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Ride with Us</h1>
          <p className="mb-8 text-lg text-gray-600">
            Join our team of delivery partners and enjoy flexible working hours and competitive earnings.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Why Ride with Food Hub?</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>Flexible working hours</li>
                <li>Competitive earnings</li>
                <li>Weekly payments</li>
                <li>Incentives and bonuses</li>
                <li>Support and training provided</li>
                <li>Opportunity for growth</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Apply Now</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input id="full-name" placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label htmlFor="vehicle-type" className="block text-sm font-medium text-gray-700">
                    Vehicle Type
                  </label>
                  <Input id="vehicle-type" placeholder="e.g., Bicycle, Motorcycle, Car" />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Delivery Experience
                  </label>
                  <Textarea id="experience" placeholder="Tell us about your delivery experience (if any)" />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

