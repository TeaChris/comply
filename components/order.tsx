'use client'

import { useCart } from '@/hooks/use-cart'
import { comma } from '@/lib/utils'
import Image from 'next/image'

export function OrderItem() {
  const { items } = useCart()
  const cartTotal = items.reduce((total, product) => total + product.price, 0)
  const shipping = 1500
  const discount = -500

  const total = cartTotal + shipping - discount
  return (
    <div className="w-full space-y-12">
      <div className="w-full space-y-8">
        {items.map((it) => (
          <div className="w-full flex justify-between items-center" key={it.id}>
            <div className="flex items-center space-x-5">
              <Image
                src={it.img}
                alt="product image"
                width={90}
                height={83}
                className="w-[90px] h-[83px] object-cover rounded-[21px]"
              />
              <h5 className="font-medium text-[15px]">{it.name}</h5>
            </div>

            <h4 className="font-semibold text-[15px]">N{comma(it.price)}</h4>
          </div>
        ))}
      </div>
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[17px] font-medium">Subtotal</h3>
          <h3 className="text-[17px] font-medium">N{comma(cartTotal)}</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[17px] font-medium">Shipping</h3>
          <h3 className="text-[17px] font-medium">N{comma(shipping)}</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[17px] font-medium">Discount</h3>
          <h3 className="text-[17px] font-medium">N{comma(discount)}</h3>
        </div>
        <div className="pt-4 flex items-center justify-between">
          <h3 className="text-[24px] font-bold">Total</h3>
          <h3 className="text-[24px] font-bold">N{comma(total)}</h3>
        </div>
      </div>
    </div>
  )
}
