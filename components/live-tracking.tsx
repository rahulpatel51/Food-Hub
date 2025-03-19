"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, MapPin, ChefHat, Bike, Home } from "lucide-react"

export default function LiveTracking() {
  const [progress, setProgress] = useState(25)
  const [status, setStatus] = useState("Order Confirmed")
  const [timeRemaining, setTimeRemaining] = useState(35)

  // Simulate order progress
  useEffect(() => {
    const timer = setTimeout(() => {
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
        }
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Live Order Tracking</h2>

          <Card className="overflow-hidden border-2 border-orange-100">
            <div className="bg-orange-600 p-4 text-white">
              <h3 className="text-xl font-bold">Track Your Order</h3>
              <p className="text-orange-100">Order #FH8273648</p>
            </div>

            <CardContent className="p-6">
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium">{status}</span>
                  {timeRemaining > 0 && (
                    <span className="flex items-center text-sm text-gray-500">
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
                    <p className="text-sm text-gray-500">Your order has been received by the restaurant</p>
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
                    <p className="text-sm text-gray-500">The restaurant is preparing your food</p>
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
                    <p className="text-sm text-gray-500">Your order is on the way</p>
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
                    <p className="text-sm text-gray-500">Enjoy your meal!</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-gray-50 p-4">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 h-5 w-5 text-orange-600" />
                  <div>
                    <h4 className="font-medium">Delivery Address</h4>
                    <p className="text-sm text-gray-500">
                      123 Main Street, Apartment 4B, Koramangala, Bangalore, 560034
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

