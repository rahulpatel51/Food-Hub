import { CheckCircle2, Search, ShoppingBag, MapPin } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="h-10 w-10 text-orange-600" />,
      title: "Set Your Location",
      description: "Choose your location to find the best restaurants near you",
    },
    {
      icon: <Search className="h-10 w-10 text-orange-600" />,
      title: "Choose a Restaurant",
      description: "Browse menus and reviews to find your perfect meal",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-orange-600" />,
      title: "Place Your Order",
      description: "Customize your meal and place your order with just a few taps",
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-orange-600" />,
      title: "Fast Delivery",
      description: "Track your order in real-time as it makes its way to you",
    },
  ]

  return (
    <section id="how-it-works" className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">How It Works</h2>
          <p className="mb-12 text-gray-600">
            Getting your favorite food delivered to your doorstep is easy and convenient with Food Hub
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-10 hidden h-0.5 w-full -translate-y-1/2 bg-orange-200 lg:block"></div>
              )}

              {/* Step number */}
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50">
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white">
                  {index + 1}
                </div>
                {step.icon}
              </div>

              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

