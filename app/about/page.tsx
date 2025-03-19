import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">About Food Hub</h1>
          <div className="prose max-w-none">
            <p>
              Food Hub is a leading food delivery platform connecting food lovers with their favorite restaurants. Our
              mission is to bring delicious meals from local eateries straight to your doorstep, making dining
              convenient and enjoyable for everyone.
            </p>
            <h2>Our Story</h2>
            <p>
              Founded in 2020, Food Hub started as a small startup with a big dream: to revolutionize the way people
              experience food delivery. What began as a local service in one city has now grown into a nationwide
              platform, serving millions of customers across the country.
            </p>
            <h2>Our Values</h2>
            <ul>
              <li>Customer Satisfaction: We put our customers first in everything we do.</li>
              <li>Quality: We partner with the best restaurants to ensure top-quality meals.</li>
              <li>Innovation: We continuously improve our technology to enhance user experience.</li>
              <li>Community: We support local businesses and contribute to the communities we serve.</li>
            </ul>
            <h2>Our Team</h2>
            <p>
              Behind Food Hub is a dedicated team of food enthusiasts, tech experts, and customer service professionals.
              Together, we work tirelessly to ensure that every order is a delightful experience for our customers.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

