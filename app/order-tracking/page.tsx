"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, MapPin, ChefHat, Bike, Home, PhoneCall } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function OrderTrackingPage() {
  const [progress, setProgress] = useState(25)
  const [status, setStatus] = useState("Order Confirmed")
  const [timeRemaining, setTimeRemaining] = useState(35)

  // Simulate order progress
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
          <h1 className="mb-6 text-3xl font-bold">Track Your Order</h1>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium">{status}</span>
                      {timeRemaining > 0 && (
                        <span className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" /> Estimated arrival in {timeRemaining} mins
                        </span>
                      )}
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="relative">
                    <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-200"></div>

                    <div className="relative mb-8 flex items-start gap-4">
                      <div
                        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full ${progress >= 25 ? "bg-green-600 text-white" : "bg-gray-200"}`}
                      >
                        <Clock className="h-3 w-3" />
                      </div>
                      <div>
                        <h4 className="font-medium">Order Confirmed</h4>
                        <p className="text-sm text-muted-foreground">Your order has been received by the restaurant</p>
                      </div>
                    </div>

                    <div className="relative mb-8 flex items-start gap-4">
                      <div
                        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full ${progress >= 50 ? "bg-green-600 text-white" : "bg-gray-200"}`}
                      >
                        <ChefHat className="h-3 w-3" />
                      </div>
                      <div>
                        <h4 className="font-medium">Food Being Prepared</h4>
                        <p className="text-sm text-muted-foreground">The restaurant is preparing your food</p>
                      </div>
                    </div>

                    <div className="relative mb-8 flex items-start gap-4">
                      <div
                        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full ${progress >= 75 ? "bg-green-600 text-white" : "bg-gray-200"}`}
                      >
                        <Bike className="h-3 w-3" />
                      </div>
                      <div>
                        <h4 className="font-medium">Out for Delivery</h4>
                        <p className="text-sm text-muted-foreground">Your order is on the way</p>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div
                        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full ${progress >= 100 ? "bg-green-600 text-white" : "bg-gray-200"}`}
                      >
                        <Home className="h-3 w-3" />
                      </div>
                      <div>
                        <h4 className="font-medium">Delivered</h4>
                        <p className="text-sm text-muted-foreground">Enjoy your meal!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Order ID: FH8273648</h3>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 h-5 w-5 text-orange-600" />
                    <p className="text-sm text-muted-foreground">
                      123 Main Street, Apartment 4B, Koramangala, Bangalore, 560034
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <PhoneCall className="mr-2 h-4 w-4" /> Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

