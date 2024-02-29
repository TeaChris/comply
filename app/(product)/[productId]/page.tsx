'use client'

import { AddToCart } from '@/components/add-to-cart'
import { MaxWidthWrapper } from '@/components/max-width-wapper'
import Product from '@/components/product'
import { products } from '@/lib'
import Image from 'next/image'

export default function Page({ params }: { params: { productId: string } }) {
  const prod = products.find((pro) => pro.id === params.productId)

  return (
    <>
      <MaxWidthWrapper>
        <div className="w-full space-y-3">
          <div className="w-full h-[670px] flex space-x-[4%]">
            <div className="w-[48%] h-full rounded-[10px] flex items-center justify-center border shadow-sm shadow-[#c4c4c4]">
              <Image
                // @ts-expect-error
                src={prod?.img}
                alt="product image"
                width={10000}
                height={100000}
                className="w-[547px] h-[626px] object-cover"
              />
            </div>
            <div className="w-[48%] space-y-6 pt-6">
              <h1 className="font-semibold text-black text-[40px]">
                {prod?.name}
              </h1>
              <h3 className="font-medium text-[36px]">{prod?.price} NGN</h3>
              <p className="text-[21px] text-[#9E9E9E]">{prod?.descip}</p>

              <button className="w-[232px] h-[49px] rounded-[10px] border border-[#FF1A71] text-[#FF1A71] text-lg bg-transparent">
                Choose a flavour &gt;
              </button>

              <AddToCart product={prod} />
            </div>
          </div>

          <div className="w-fit flex items-center gap-4 pt-1">
            {['/pp.png', '/pp.png', '/pp.png'].map((it, i) => (
              <Image
                src={it}
                key={i}
                alt="image"
                width={194}
                height={194}
                className="object-cover w-[194px] aspect-square"
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="w-full pt-28">
        <div className=" bg-[#FFEAF2]">
          <MaxWidthWrapper>
            <div className="w-full h-max py-24 flex flex-col items-center gap-8">
              <h2 className="font-medium text-[36px]">Related Products</h2>
              <Product />
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  )
}
