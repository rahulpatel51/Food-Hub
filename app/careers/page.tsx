import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const jobOpenings = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Customer Support Specialist",
    department: "Customer Experience",
    location: "Remote",
    type: "Part-time",
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "Chicago, IL",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Careers at Food Hub</h1>
          <p className="mb-8 text-lg text-gray-600">
            Join our team and help revolutionize the food delivery industry. We're always looking for talented
            individuals who are passionate about food, technology, and customer service.
          </p>
          <h2 className="mb-4 text-2xl font-bold">Current Openings</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {jobOpenings.map((job) => (
              <Card key={job.title}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{job.title}</h3>
                  <p className="mb-4 text-gray-600">
                    {job.department} • {job.location} • {job.type}
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">Why Work at Food Hub?</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Competitive salary and benefits package</li>
              <li>Opportunities for growth and career development</li>
              <li>Flexible work arrangements</li>
              <li>Collaborative and innovative work environment</li>
              <li>Employee discounts on food orders</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

