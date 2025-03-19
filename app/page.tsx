import FoodCategories from "@/components/food-categories"
import RestaurantSection from "@/components/restaurant-section"
import OffersSection from "@/components/offers-section"
import AboutUsSection from "@/components/about-us-section"
import ContactSection from "@/components/contact-section"
import CitiesSection from "@/components/cities-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import PopularDishes from "@/components/popular-dishes"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FoodCategories />
        <PopularDishes />
        <RestaurantSection />
        <OffersSection />
        <HowItWorks />
        <AboutUsSection />
        <ContactSection />
        <CitiesSection />
      </main>
      <Footer />
    </div>
  )
}

