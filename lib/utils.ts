import { useCart } from '@/hooks/use-cart'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function comma(num: number): string {
  return num.toLocaleString()
}

export function Total(): number {
  const { items } = useCart()
  const cartTotal = items.reduce((total, product) => total + product.price, 0)
  return cartTotal
}
