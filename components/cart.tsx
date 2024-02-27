'use client'

import { useEffect, useState } from 'react'

import { useCart } from '@/hooks/use-cart'

import Image from 'next/image'

import { nav } from '@/lib'

export function Cart() {
  const { items } = useCart()
  const itemCount = items.length
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="flex items-center space-x-2">
      <div className="w-[62px] aspect-square rounded-full bg-colorPrimary flex items-center justify-center">
        <Image
          src={nav.cart.img}
          alt={nav.cart.tit}
          width={40}
          height={40}
          className="object-cover"
        />
      </div>

      <div>
        <h2 className="font-bold text-lg">{nav.cart.tit}</h2>
        <p className="text-xs font-medium">{isMounted ? itemCount : 0} items</p>
      </div>
    </div>
  )
}
