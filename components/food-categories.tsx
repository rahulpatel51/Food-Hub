export default function FoodCategories() {
  const categories = [
    {
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Biryani",
      image:
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Rolls",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Thali",
      image:
        "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Chinese",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "South Indian",
      image:
        "https://images.unsplash.com/photo-1630383249896-483b1fbbc442?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Desserts",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ]

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Popular Food Categories</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-8">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center">
              <div className="mb-3 overflow-hidden rounded-full">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="h-24 w-24 object-cover transition-transform hover:scale-110"
                  width={120}
                  height={120}
                />
              </div>
              <span className="text-center font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

