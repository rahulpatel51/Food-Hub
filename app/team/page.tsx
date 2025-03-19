import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Jane Smith",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Mike Johnson",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Lee",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
  },
  {
    name: "David Chen",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Wang",
    role: "Head of Customer Experience",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
  },
]

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Our Team</h1>
          <p className="mb-8 text-lg text-gray-600">
            Meet the passionate individuals behind Food Hub who are dedicated to bringing you the best food delivery
            experience.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="mb-4 h-48 w-full rounded-md object-cover"
                    width={400}
                    height={400}
                  />
                  <h2 className="text-xl font-bold">{member.name}</h2>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

