"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search, Clock, TrendingUp, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useClickAway } from "react-use"

interface SearchSuggestion {
  id: string
  name: string
  type: "restaurant" | "cuisine" | "dish"
}

const dummySuggestions: SearchSuggestion[] = [
  { id: "1", name: "Pizza", type: "cuisine" },
  { id: "2", name: "Burger King", type: "restaurant" },
  { id: "3", name: "Chicken Tikka", type: "dish" },
  { id: "4", name: "Sushi", type: "cuisine" },
  { id: "5", name: "McDonald's", type: "restaurant" },
  { id: "6", name: "Pasta", type: "dish" },
  { id: "7", name: "Indian", type: "cuisine" },
  { id: "8", name: "Domino's Pizza", type: "restaurant" },
  { id: "9", name: "Biryani", type: "dish" },
]

export default function SearchBar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useClickAway(searchRef, () => {
    setShowSuggestions(false)
  })

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches")
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches))
    }
  }, [])

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.length > 1) {
        // In a real application, you would make an API call here
        const filteredSuggestions = dummySuggestions.filter((suggestion) =>
          suggestion.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setSuggestions(filteredSuggestions)
        setShowSuggestions(true)
      } else {
        setSuggestions([])
        setShowSuggestions(false)
      }
    }

    fetchSuggestions()
  }, [searchQuery])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setShowSuggestions(false)

    // Add to recent searches
    const updatedRecentSearches = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 5)
    setRecentSearches(updatedRecentSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedRecentSearches))

    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  return (
    <div className="relative flex-1" ref={searchRef}>
      <div className="flex">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search for food, restaurants, cuisines..."
            className="h-12 w-full border-white/20 bg-white/10 pl-10 pr-4 text-white placeholder:text-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-300" />
          {searchQuery && (
            <button
              className="absolute right-3 top-3.5 text-gray-300 hover:text-white"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <Button
          type="button"
          className="ml-2 h-12 bg-orange-500 px-6 hover:bg-orange-600"
          onClick={() => handleSearch(searchQuery)}
        >
          Search
        </Button>
      </div>
      {showSuggestions && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          <div className="max-h-96 overflow-auto py-2">
            {searchQuery.length > 1 && suggestions.length > 0 && (
              <div className="mb-4">
                <h3 className="px-4 py-2 text-sm font-semibold text-gray-500">Suggestions</h3>
                <ul>
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleSearch(suggestion.name)}
                    >
                      <Search className="mr-2 inline-block h-4 w-4 text-gray-400" />
                      <span className="font-medium">{suggestion.name}</span>
                      <span className="ml-2 text-sm text-gray-500">{suggestion.type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {recentSearches.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between px-4 py-2">
                  <h3 className="text-sm font-semibold text-gray-500">Recent Searches</h3>
                  <button className="text-xs text-orange-500 hover:text-orange-600" onClick={clearRecentSearches}>
                    Clear All
                  </button>
                </div>
                <ul>
                  {recentSearches.map((search, index) => (
                    <li
                      key={index}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleSearch(search)}
                    >
                      <Clock className="mr-2 inline-block h-4 w-4 text-gray-400" />
                      <span>{search}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h3 className="px-4 py-2 text-sm font-semibold text-gray-500">Popular Searches</h3>
              <ul>
                {dummySuggestions.slice(0, 5).map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleSearch(suggestion.name)}
                  >
                    <TrendingUp className="mr-2 inline-block h-4 w-4 text-gray-400" />
                    <span>{suggestion.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

