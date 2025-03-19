import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PartnerWithUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Partner with Us</h1>
          <p className="mb-8 text-lg text-gray-600">
            Join Food Hub and grow your restaurant business. Reach more customers and increase your revenue.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Why Partner with Food Hub?</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>Increase your customer base</li>
                <li>Boost your revenue</li>
                <li>Efficient delivery logistics</li>
                <li>Marketing and promotional support</li>
                <li>Easy-to-use restaurant dashboard</li>
                <li>Dedicated account manager</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Get Started</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="restaurant-name" className="block text-sm font-medium text-gray-700">
                    Restaurant Name
                  </label>
                  <Input id="restaurant-name" placeholder="Enter your restaurant name" />
                </div>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                    Contact Name
                  </label>
                  <Input id="contact-name" placeholder="Enter your name" />
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your restaurant" />
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

