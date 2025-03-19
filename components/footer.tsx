import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const majorCities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Kochi",
    "Chandigarh",
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-orange-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-orange-400">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-orange-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help-support" className="hover:text-orange-400">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="hover:text-orange-400">
                  Partner with us
                </Link>
              </li>
              <li>
                <Link href="/ride-with-us" className="hover:text-orange-400">
                  Ride with us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-orange-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-orange-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-orange-400">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/rahulpatel51" className="hover:text-orange-400">
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
              <Link href="https://x.com/RahulPatel11131" className="hover:text-orange-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/rahulislost_/" className="hover:text-orange-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/in/rahul-patel231/" className="hover:text-orange-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p>© {new Date().getFullYear()} Food Hub. All rights reserved.</p>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-bold text-white">We deliver to:</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {majorCities.map((city) => (
              <span key={city} className="text-sm hover:text-orange-400">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

