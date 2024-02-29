import React, { createContext, useContext, useState } from 'react'

// Define the types for the form and cart items
interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  country: string
  state: string
  city: string
  info: string
  coupon?: string
}

interface CartItem {
  id: string
  name: string
  price: number
  img: string
}

// Define the context type
interface CartContextType {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  cartItems: CartItem[]
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
}

// Create the context
export const CartContext = createContext<CartContextType | undefined>(undefined)

// Export the custom hook to use the context
export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }
  return context
}

// Export the provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    state: '',
    city: '',
    info: '',
    coupon: '',
  })
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return (
    <CartContext.Provider
      value={{ formData, setFormData, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  )
}
