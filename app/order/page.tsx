import { MaxWidthWrapper } from '@/components/max-width-wapper'
import { OrderItem } from '@/components/order'
import { ArrowRight, CheckCircle2, Printer } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="w-full flex justify-between">
          <div className="h-96 w-[34%] space-y-12">
            <div className="w-full space-y-2">
              <h1 className="font-semibold text-[33px]">My orders</h1>
              <p className="text-base font-medium text-neutral-400">
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
                  <h3 className="font-semibold text-lg">Order #201</h3>
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
                  <h3 className="font-semibold text-lg">Order #204</h3>
                  <div className="w-60">
                    <p className="text-sm text-[#9a9a9a]">Milky storage bag</p>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-[#9A9A9A] ml-8" />
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <div className="w-full flex items-center justify-center ">
              <div className="w-[70%] flex items-center flex-col space-y-6 pb-20">
                <Image
                  src="/log.png"
                  alt="logo"
                  width={155}
                  height={135}
                  className="object-cover"
                />

                <div className="flex flex-col items-center space-y-1">
                  <h3 className="text-[30px] font-bold">Order #201</h3>
                  <div className="flex items-center space-x-10">
                    <div className="flex space-x-2 items-center">
                      <h6>Status:</h6>
                      <h6 className="text-[#aaaaaa] flex items-center gap-1 text-xs font-medium">
                        <CheckCircle2 className="text-emerald-500 h-3 w-3" />
                        Paid
                      </h6>
                    </div>

                    <div className="flex space-x-2 items-center">
                      <h6>Date:</h6>
                      <h6 className="text-[#aaaaaa] flex items-center gap-1 text-xs font-medium">
                        1-02-2021
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[43px] rounded-[10px] bg-colorPrimary px-4 text-lg text-white font-semibold flex items-center">
                  Order Summary
                </div>

                <div className="w-full">
                  <OrderItem />
                </div>

                <div className="w-full pt-12">
                  <div className="w-full h-[43px] rounded-[10px] bg-colorPrimary px-4 text-lg text-white font-semibold flex items-center">
                    Account Summary
                  </div>
                </div>

                <div className="pt-4 w-full space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-[17px]">First Name</h4>
                    <h6 className="text-sm text-[#8d8d8d]">John</h6>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-[17px]">Last Name</h4>
                    <h6 className="text-sm text-[#8d8d8d]">Stone</h6>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-[17px]">Email</h4>
                    <h6 className="text-sm text-[#8d8d8d]">
                      stonejohn@email.com
                    </h6>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-[17px]">Phone</h4>
                    <h6 className="text-sm text-[#8d8d8d]">+2349049337263</h6>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-[17px]">Address</h4>
                    <h6 className="text-sm text-[#8d8d8d]">
                      7 Sdekunle Ajose Street Lekki Lagos Nigeria
                    </h6>
                  </div>
                </div>

                <div className="pt-20 flex items-center space-x-40">
                  <button className="flex items-center gap-3 text-sm text-[#aaaaaa]">
                    <Printer className="w-4 h-4" />
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
