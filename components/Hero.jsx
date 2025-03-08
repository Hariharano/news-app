"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Search } from "lucide-react"
import Loading from "./Loading"

export default function Hero({ topNews, loading }) {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  const mainArticle = topNews && topNews.length > 0 ? topNews[0] : null

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Navigate the News Landscape</h1>
          <p className="text-xl mb-8">
            Discover breaking stories, in-depth analysis, and diverse perspectives from around the world.
          </p>
          <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for news, topics, or sources..."
              className="w-full pl-4 pr-12 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-3 text-gray-600 hover:text-blue-600">
              <Search size={24} />
            </button>
          </form>
        </div>

        {loading ? (
          <Loading />
        ) : mainArticle ? (
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={mainArticle.urlToImage || "/placeholder.svg?height=400&width=600"}
                  alt={mainArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="text-sm font-semibold mb-2">TRENDING</div>
                <h2 className="text-2xl font-bold mb-3">{mainArticle.title}</h2>
                <p className="mb-4 text-white/80">{mainArticle.description}</p>
                <Link
                  href={mainArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-50 transition-colors"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">No trending news available at the moment.</div>
        )}
      </div>
    </div>
  )
}

