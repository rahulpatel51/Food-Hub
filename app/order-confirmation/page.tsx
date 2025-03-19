import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function OrderConfirmationPage() {
  const orderDetails = {
    orderId: "FH8273648",
    restaurant: "Spice Garden",
    items: [
      { name: "Butter Chicken", quantity: 1, price: 349 },
      { name: "Garlic Naan", quantity: 2, price: 49 },
      { name: "Paneer Tikka", quantity: 1, price: 299 },
    ],
    subtotal: 746,
    deliveryFee: 40,
    total: 786,
    address: "123 Main Street, Apartment 4B, Koramangala, Bangalore, 560034",
    estimatedDelivery: "30-40 minutes",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-500" />
            <h1 className="mb-2 text-3xl font-bold">Order Confirmed!</h1>
            <p className="mb-6 text-muted-foreground">Thank you for your order. We'll update you on its progress.</p>
          </div>

          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Order ID:</span>
                <span>{orderDetails.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Restaurant:</span>
                <span>{orderDetails.restaurant}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Items:</h3>
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{orderDetails.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>₹{orderDetails.deliveryFee}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹{orderDetails.total}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 h-5 w-5 text-orange-600" />
                  <div>
                    <h3 className="font-medium">Delivery Address</h3>
                    <p className="text-sm text-muted-foreground">{orderDetails.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <div>
                    <h3 className="font-medium">Estimated Delivery Time</h3>
                    <p className="text-sm text-muted-foreground">{orderDetails.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                <Link href="/order-tracking">Track Order</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

