import Link from "next/link"
import { Briefcase, Cpu, Heart, FlaskRoundIcon as Flask, Landmark, Gamepad2, Film, Plane } from "lucide-react"

const categories = [
  { name: "Business", icon: <Briefcase size={24} />, slug: "business" },
  { name: "Technology", icon: <Cpu size={24} />, slug: "technology" },
  { name: "Health", icon: <Heart size={24} />, slug: "health" },
  { name: "Science", icon: <Flask size={24} />, slug: "science" },
  { name: "Politics", icon: <Landmark size={24} />, slug: "politics" },
  { name: "Entertainment", icon: <Film size={24} />, slug: "entertainment" },
  { name: "Sports", icon: <Gamepad2 size={24} />, slug: "sports" },
  { name: "Travel", icon: <Plane size={24} />, slug: "travel" },
]

export default function PopularCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all"
            >
              <div className="text-blue-600 mb-3">{category.icon}</div>
              <span className="font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

