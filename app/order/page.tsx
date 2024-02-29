import { MaxWidthWrapper } from '@/components/max-width-wapper'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="w-full flex justify-between">
          <div className="h-96 w-[34%] space-y-12">
            <div className="w-full space-y-2">
              <h1 className="font-semibold text-[33px]">My orders</h1>
              <p className="text-base font-medium text-#949494]">
                Input your mail to view your order history
              </p>
            </div>

            <div className="w-full space-y-4">
              <div className="h-[107px] p-2 w-full cursor-pointer flex items-center gap-2 border border-rose-200 rounded-[20px]">
                <Image
                  src={'/pp.png'}
                  alt="product image"
                  width={77}
                  height={77}
                  className="w-[77px] aspect-square rounded-[21px] object-cover"
                />
                <div className="space-y-1">
                  <h3 className="font-medium text-lg">Order #201</h3>
                  <div className="w-60">
                    <p className="text-sm text-[#9a9a9a]">
                      Milky Lactation Cookies, Milky Enrich Shakes, Milky
                      Lactation Tea
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-[#9A9A9A] ml-8" />
              </div>

              <div className="h-[107px] p-2 w-full flex items-center gap-2 rounded-[20px] cursor-pointer">
                <Image
                  src={'/products/p2.png'}
                  alt="product image"
                  width={77}
                  height={77}
                  className="w-[77px] aspect-square rounded-[21px] object-cover"
                />
                <div className="space-y-1">
                  <h3 className="font-medium text-lg">Order #204</h3>
                  <div className="w-60">
                    <p className="text-sm text-[#9a9a9a]">Milky storage bag</p>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-[#9A9A9A] ml-8" />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
