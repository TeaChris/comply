import { products } from '@/lib'
import { comma } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ProductsProps {
  // My Custom Props Here
}

const Products: FC<ProductsProps> = ({}) => {
  return (
    <section className="w-full grid grid-cols-1 gap-x-3 gap-y-5 sm:gap-x-3 md:grid-cols-2 lg:grid-cols-4 md:gap-y-3 lg:gap-x-6">
      {products.map((pro) => (
        <div
          key={pro.id}
          className="w-[302px] h-[465px] border rounded-[5px] space-y-1 pb-3"
        >
          <div className="w-full h-[60%] flex items-center justify-center">
            <Image
              src={pro.img}
              alt={pro.name}
              width={200}
              height={200}
              className="w-[187px] h-[222px] object-cover"
            />
          </div>
          <div className="space-y-4 px-4">
            <h2 className="font-medium text-black text-[17px]">{pro.name}</h2>
            <p className="text-[#838383] text-[15px] font-[300]">{pro.desc}</p>

            <div className="w-full flex items-center justify-between pt-4">
              <h2 className="font-bold text-black text-lg">
                {comma(pro.price)} NGN
              </h2>
              <Link href={`/${pro.id}`}>
                <button
                  type="button"
                  className="w-[126px] h-[37px] rounded-[10px] bg-colorPrimary text-white text-sm font-[300] flex items-center justify-center hover:opacity-90 transition-all hover:shadow-lg"
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Products
