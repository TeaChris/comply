import { MaxWidthWrapper } from '@/components/max-width-wapper'
import { OrderItem } from '@/components/order'
import { currentUserId } from '@/lib/auth'
import { db } from '@/lib/db'
import { ArrowLeft, CheckCircle2, Printer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: { successId: string }
}) {
  const userId = await currentUserId()

  if (!userId) {
    return redirect('/')
  }

  const order = await db.order.findUnique({
    where: {
      userId,
      id: params.successId,
    },
  })

  return (
    <>
      <MaxWidthWrapper>
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
                <h6 className="text-sm text-[#8d8d8d]">{order?.firstName}</h6>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-[17px]">Last Name</h4>
                <h6 className="text-sm text-[#8d8d8d]">{order?.lastName}</h6>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-[17px]">Email</h4>
                <h6 className="text-sm text-[#8d8d8d]">{order?.email}</h6>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-[17px]">Phone</h4>
                <h6 className="text-sm text-[#8d8d8d]">{order?.phone}</h6>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-[17px]">Address</h4>
                <h6 className="text-sm text-[#8d8d8d]">{order?.address}</h6>
              </div>
            </div>

            <div className="pt-20 flex items-center space-x-40">
              <Link
                href={'/'}
                className="flex gap-3 items-center text-[#aaaaaa] text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to shop
              </Link>

              <button className="flex items-center gap-3 text-sm text-[#aaaaaa]">
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
