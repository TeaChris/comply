'use client'

import { useCart } from '@/hooks/use-cart'

export function calculateCartTotal(): number {
  const { items } = useCart()
  const cartTotal = items.reduce((total, product) => total + product.price, 0)
  return cartTotal
}
