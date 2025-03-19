"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus } from "lucide-react"

interface AddToCartButtonProps {
  initialQuantity?: number
  onAddToCart: (quantity: number) => void
}

export default function AddToCartButton({ initialQuantity = 0, onAddToCart }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleAddToCart = () => {
    if (quantity === 0) {
      setQuantity(1)
      onAddToCart(1)
    } else {
      onAddToCart(quantity)
    }
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1)
    onAddToCart(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      onAddToCart(quantity - 1)
    } else {
      setQuantity(0)
      onAddToCart(0)
    }
  }

  return (
    <div className="flex items-center">
      {quantity === 0 ? (
        <Button onClick={handleAddToCart} className="bg-orange-600 hover:bg-orange-700">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      ) : (
        <div className="flex items-center space-x-2">
          <Button onClick={handleDecrement} variant="outline" size="icon">
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button onClick={handleIncrement} variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

