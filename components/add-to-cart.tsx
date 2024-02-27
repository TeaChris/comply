'use client'

import { useEffect, useState } from 'react'

import { useCart } from '@/hooks/use-cart'

import { Product } from '@/lib'

interface Props {
  product: Product | undefined
}

export function AddToCart({ product }: Props) {
  const { addItem, increaseItem, items } = useCart()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const itemCount = items.length
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess])

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div className="pt-8 flex space-x-16 items-center">
      <button
        type="button"
        onClick={() => {
          // @ts-ignore
          addItem(product)
          setIsSuccess(true)
        }}
        className="w-[190px] h-[52px] rounded-[10px] bg-colorPrimary text-white text-lg font-[500] flex items-center justify-center hover:opacity-90 transition-all hover:shadow-lg"
      >
        {isSuccess ? 'Added!' : 'Add to cart'}
      </button>

      <div className="flex items-center space-x-3">
        <button
          type="button"
          className="w-fit h-fit bg-transparent text-black font-semibold text-[30px]"
          onClick={() => {
            // @ts-ignore
            increaseItem(product?.id)
            setIsSuccess(true)
          }}
        >
          +
        </button>
        <div className="w-[56px] aspect-square rounded-[10px] border flex items-center justify-center text-lg font-semibold text-[#d8d8d8]">
          {isMounted ? itemCount : 0}
        </div>
        <button
          type="button"
          className="w-fit h-fit bg-transparent text-black font-semibold text-[30px]"
        >
          -
        </button>
      </div>
    </div>
  )
}
