"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChefHat, Bike, Home, PhoneCall, MessageSquare, Mic } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/map"), { ssr: false })

export default function OrderTrackingPage() {
  const { orderId } = useParams()
  const [progress, setProgress] = useState(25)
  const [status, setStatus] = useState("Order Confirmed")
  const [timeRemaining, setTimeRemaining] = useState(35)
  const [deliveryLocation, setDeliveryLocation] = useState({ lat: 12.9716, lng: 77.5946 }) // Example: Bangalore coordinates

  // Simulate order progress and delivery movement
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        const newProgress = progress + 25
        setProgress(newProgress)

        if (newProgress === 50) {
          setStatus("Food Being Prepared")
          setTimeRemaining(25)
        } else if (newProgress === 75) {
          setStatus("Out for Delivery")
          setTimeRemaining(15)
          // Start moving the delivery location
          setDeliveryLocation((prev) => ({ lat: prev.lat + 0.001, lng: prev.lng + 0.001 }))
        } else if (newProgress === 100) {
          setStatus("Delivered")
          setTimeRemaining(0)
          clearInterval(timer)
        }
      }
    }, 10000) // Update every 10 seconds for demo purposes

    return () => clearInterval(timer)
  }, [progress])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-2xl font-bold md:text-3xl">Track Your Order</h1>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium">{status}</span>
                    {timeRemaining > 0 && (
                      <span className="text-sm text-muted-foreground">Estimated arrival in {timeRemaining} mins</span>
                    )}
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-200"></div>

                  {[
                    {
                      icon: ChefHat,
                      title: "Order Confirmed",
                      description: "Your order has been received by the restaurant",
                    },
                    {
                      icon: ChefHat,
                      title: "Food Being Prepared",
                      description: "The restaurant is preparing your food",
                    },
                    { icon: Bike, title: "Out for Delivery", description: "Your order is on the way" },
                    { icon: Home, title: "Delivered", description: "Enjoy your meal!" },
                  ].map((step, index) => (
                    <div key={index} className="relative mb-8 flex items-start gap-4 last:mb-0">
                      <div
                        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full ${
                          progress >= (index + 1) * 25 ? "bg-green-600 text-white" : "bg-gray-200"
                        }`}
                      >
                        <step.icon className="h-3 w-3" />
                      </div>
                      <div>
                        <h4 className="font-medium">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Live Delivery Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full overflow-hidden rounded-md">
                  <Map center={deliveryLocation} zoom={15} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Order ID: {orderId}</h3>
                  <p className="text-sm text-muted-foreground">Spice Garden</p>
                </div>
                <div>
                  <h4 className="font-medium">Items:</h4>
                  <ul className="list-inside list-disc text-sm text-muted-foreground">
                    <li>Butter Chicken x 1</li>
                    <li>Garlic Naan x 2</li>
                    <li>Paneer Tikka x 1</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Total:</h4>
                  <p className="text-sm text-muted-foreground">₹786</p>
                </div>
                <div>
                  <h4 className="font-medium">Delivery Address:</h4>
                  <p className="text-sm text-muted-foreground">
                    123 Main Street, Apartment 4B, Koramangala, Bangalore, 560034
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Delivery Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <PhoneCall className="mr-2 h-4 w-4" /> Call
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <MessageSquare className="mr-2 h-4 w-4" /> Message
                  </Button>
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                    <Mic className="mr-2 h-4 w-4" /> Voice Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

