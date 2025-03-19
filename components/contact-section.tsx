import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">Contact Us</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input type="tel" placeholder="Your Phone" />
              </div>
              <div>
                <Textarea placeholder="Your Message" />
              </div>
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-orange-600" />
                <span>123 Food Street, Tasty City, 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-600" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-600" />
                <span>contact@foodhub.com</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="mb-2 font-bold">Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

