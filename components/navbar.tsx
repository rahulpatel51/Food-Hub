"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingCart, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LoginDialog from "./login-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cartItems, setCartItems] = useState(3)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowLoginDialog(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/fluency/48/000000/restaurant.png"
              alt="Food Hub Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-orange-600 md:text-2xl">Food Hub</span>
          </Link>
        </div>
        <nav className="hidden gap-4 md:flex lg:gap-6">
          <Link href="/" className="text-sm font-medium hover:text-orange-600">
            Home
          </Link>
          <Link href="/restaurants" className="text-sm font-medium hover:text-orange-600">
            Restaurants
          </Link>
          <Link href="/offers" className="text-sm font-medium hover:text-orange-600">
            Offers
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-orange-600">
            About Us
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-orange-600">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/cart" className="relative">
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-orange-600">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems > 0 && (
                    <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-orange-600 p-0 text-[10px]">
                      {cartItems}
                    </Badge>
                  )}
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <Link href="/profile">
                    <DropdownMenuItem>My Profile</DropdownMenuItem>
                  </Link>
                  <Link href="/orders">
                    <DropdownMenuItem>My Orders</DropdownMenuItem>
                  </Link>
                  <Link href="/addresses">
                    <DropdownMenuItem>Saved Addresses</DropdownMenuItem>
                  </Link>
                  <Link href="/payments">
                    <DropdownMenuItem>Payment Methods</DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 hover:text-orange-700"
              onClick={() => setShowLoginDialog(true)}
            >
              Sign In
            </Button>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-orange-600">
                  Home
                </Link>
                <Link href="/restaurants" className="hover:text-orange-600">
                  Restaurants
                </Link>
                <Link href="/offers" className="hover:text-orange-600">
                  Offers
                </Link>
                <Link href="/about" className="hover:text-orange-600">
                  About Us
                </Link>
                <Link href="/#contact" className="hover:text-orange-600">
                  Contact
                </Link>
                {!isLoggedIn && (
                  <Button
                    variant="outline"
                    className="mt-4 border-orange-600 text-orange-600 hover:bg-orange-50 hover:text-orange-700"
                    onClick={() => setShowLoginDialog(true)}
                  >
                    Sign In
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {showLoginDialog && <LoginDialog onClose={() => setShowLoginDialog(false)} onLogin={handleLogin} />}
    </header>
  )
}

