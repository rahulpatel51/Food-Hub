import { Card } from "@/components/ui/card"

export default function CitiesSection() {
  const cities = [
    {
      name: "Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&q=80",
    },
    {
      name: "Mumbai",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500&q=80",
    },
    {
      name: "Bangalore",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=500&q=80",
    },
    {
      name: "Chennai",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&q=80",
    },
    {
      name: "Kolkata",
      image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=500&q=80",
    },
    {
      name: "Hyderabad",
      image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=500&q=80",
    },
    // Add more cities here...
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Cities with Food Delivery
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cities.map((city) => (
            <Card key={city.name} className="overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-48">
                <img src={city.image || "/placeholder.svg"} alt={city.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{city.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

