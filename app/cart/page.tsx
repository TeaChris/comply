'use client'

import { MaxWidthWrapper } from '@/components/max-width-wapper'
import { useCart } from '@/hooks/use-cart'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import { AuthFlow } from '@/components/auth-flow'

interface CartProps {
  // My Custom Props Here
}

const Cart: FC<CartProps> = ({}) => {
  const { items, removeItem } = useCart()
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const itemCount = items.length

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <MaxWidthWrapper>
      <div className="w-full space-y-8">
        <div className="w-[48%] pb-6 border-b-2">
          <Link
            href={'/'}
            className="text-black text-xl font-medium flex space-x-6 bg-transparent transition-all"
          >
            <h3>&lt;</h3> <h3>Continue Shopping</h3>
          </Link>
        </div>

        <div className="w-full flex justify-between">
          <div className="w-[48%] space-y-10">
            <div className="space-y-2">
              <h1 className="text-[33px] font-bold">Cart</h1>
              <p className="font-semibold text-[17px] text-[#949494]">
                You have {isMounted ? itemCount : 0} item(s) in your cart
              </p>
            </div>

            {isMounted && items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center space-y-1">
                <div
                  aria-hidden="true"
                  className="relative mb-4 h-40 w-40 text-muted-foreground"
                >
                  <Image
                    src="/empty-cart.png"
                    fill
                    loading="eager"
                    alt="empty shopping cart image"
                  />
                </div>
                <h3 className="font-semibold text-2xl">Your cart is empty</h3>
                <p className="text-muted-foreground text-center">
                  Whoops! Nothing to show here yet.
                </p>
              </div>
            ) : null}

            <ul className="w-full space-y-4">
              {isMounted &&
                items.map((prod) => (
                  <li
                    key={prod.id}
                    className="py-2.5 px-4 bg-white w-full h-[107px] rounded-[20px] flex items-center justify-between shadow-lg shadow-blacks"
                  >
                    <div className="w-[55%] flex items-center space-x-2">
                      <Image
                        src={prod.img}
                        alt="product image"
                        width={100}
                        height={100}
                        className="w-[83px] aspect-square object-cover rounded-[21px]"
                      />
                      <h6 className="font-medium text-black text-[15px]">
                        {prod.name}
                      </h6>
                    </div>

                    <div className="w-[40%] flex items-center justify-end space-x-8">
                      <div className="flex space-x-2 items-center">
                        <button className="font-medium text-xl text-black">
                          +
                        </button>
                        <div className="font-medium text lg w-[32px] h-[35px] rounded-[10px] flex items-center justify-center border">
                          1
                        </div>
                        <button className="font-medium text-xl text-black">
                          -
                        </button>
                      </div>

                      <div className="flex items-center space-x-8">
                        <h3 className="font-bold text-black text-[15px]">
                          N{prod.price}
                        </h3>

                        <button
                          className="w-fit h-fit text-neutral-400 hover:text-rose-600 transition-all"
                          aria-label="remove product"
                          onClick={() => removeItem(prod.id)}
                        >
                          <Trash2 className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <div className="w-[48%]">
            <AuthFlow />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Cart
