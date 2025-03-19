import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Ghost Kitchens in the Food Delivery Industry",
    excerpt:
      "Explore how ghost kitchens are changing the landscape of food delivery and what it means for restaurants and consumers.",
    date: "2023-05-15",
    author: "Jane Smith",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&q=80",
  },
  {
    id: 2,
    title: "5 Tips for Taking Instagram-Worthy Food Photos",
    excerpt:
      "Learn how to capture stunning food photos that will make your followers' mouths water and boost your social media presence.",
    date: "2023-05-10",
    author: "Mike Johnson",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&q=80",
  },
  {
    id: 3,
    title: "The Environmental Impact of Food Delivery: Challenges and Solutions",
    excerpt:
      "Dive into the environmental concerns surrounding food delivery and discover innovative solutions for a more sustainable future.",
    date: "2023-05-05",
    author: "Sarah Lee",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80",
  },
  {
    id: 4,
    title: "Behind the Scenes: A Day in the Life of a Food Hub Delivery Partner",
    excerpt:
      "Get an insider's look at what it's like to be a Food Hub delivery partner and the challenges they face on a daily basis.",
    date: "2023-04-30",
    author: "David Chen",
    image: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=500&q=80",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Food Hub Blog</h1>
          <p className="mb-8 text-lg text-gray-600">
            Stay up to date with the latest trends in food delivery, restaurant insights, and culinary inspiration.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-0">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                    width={500}
                    height={300}
                  />
                  <div className="p-6">
                    <h2 className="mb-2 text-xl font-bold">
                      <Link href={`/blog/${post.id}`} className="hover:text-orange-600">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mb-4 text-gray-600">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.author}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog/archive"
              className="inline-block rounded-md bg-orange-600 px-6 py-3 text-white transition-colors hover:bg-orange-700"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

