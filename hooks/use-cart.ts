import { Product } from '@/lib'
import { toast } from 'sonner'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type CartItem = {
  product: Product
  quantity: number
}

type CartState = {
  items: Product[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  increaseItem: (productId: string) => void
  clearCart: () => void
}

export const useCart = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentProducts = get().items
        const existingProduct = currentProducts.find(
          (item) => item.id === product.id
        )

        if (existingProduct) {
          return toast.error('Product already in cart')
        }

        set({ items: [...get().items, product] })
        toast.success('Product added to cart.')
      },

      increaseItem: (id: string) => {
        set((state) => {
          const updatedItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 }
            }
            return item
          })
          return { items: updatedItems }
        })
        toast.success('Product quantity increased.')
      },

      removeItem: (id) => {
        const updatedItems = get().items.filter((item) => item.id !== id)
        set({ items: updatedItems })
        toast.success('Product removed from cart')
      },

      decreaseItem: (id: string) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === id)

        if (existingItem) {
          if (existingItem.quantity > 1) {
            // Decrease quantity if it's greater than 1
            const updatedItems = [...currentItems]
            const existingItemIndex = currentItems.findIndex(
              (item) => item.id === id
            )
            updatedItems[existingItemIndex].quantity -= 1
            set({ items: updatedItems })
            toast.success('Product quantity decreased.')
          } else {
            // If quantity is 1, remove the item from cart
            set({ items: currentItems.filter((item) => item.id !== id) })
            toast.success('Product removed from cart')
          }
        }
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
