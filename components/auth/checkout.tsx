'use client'

import { useState, useTransition } from 'react'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

import { TCheckoutValidator, checkoutSchema } from '@/schemas'
import { cn, comma } from '@/lib/utils'

import { useCart } from '@/hooks/use-cart'
import { LockKeyhole } from 'lucide-react'

export function Checkout() {
  const { items } = useCart()
  const [isPending, startTransition] = useTransition()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCheckoutValidator>({
    resolver: zodResolver(checkoutSchema),
  })

  const cartTotal = items.reduce((total, product) => total + product.price, 0)
  const shipping = 1500
  const discount = -500

  const total = cartTotal + shipping - discount
  return (
    <div className="w-full">
      <form onSubmit={() => {}} className="w-full space-y-6">
        <div className="w-full flex items-center justify-between h-[43px]">
          <Input
            {...register('firstName')}
            className={cn(
              'w-[47%] h-full text-[15px] text-[#a3a3a3] rounded-[10px]',
              errors.firstName && 'focus-visible:ring-red-500'
            )}
            placeholder="First Name"
            disabled={isPending}
          />
          <Input
            {...register('lastName')}
            className={cn(
              'w-[47%] h-full text-[15px] text-[#a3a3a3] rounded-[10px]',
              errors.lastName && 'focus-visible:ring-red-500'
            )}
            placeholder="Last Name"
            disabled={isPending}
          />
        </div>
        <Input
          {...register('email')}
          className={cn(
            'h-[43px] text-[15px] text-[#a3a3a3] rounded-[10px]',
            errors.email && 'focus-visible:ring-red-500'
          )}
          placeholder="Email"
          disabled={isPending}
        />
        <Input
          {...register('phone')}
          className={cn(
            'h-[43px] text-[15px] text-[#a3a3a3] rounded-[10px]',
            errors.phone && 'focus-visible:ring-red-500'
          )}
          placeholder="Phone"
          disabled={isPending}
        />

        <div className="w-full space-y-6">
          <h2 className="font-medium text-[17px]">Shipping Address</h2>
          <Input
            {...register('address')}
            className={cn(
              'h-[43px] text-[15px] text-[#a3a3a3] rounded-[10px]',
              errors.address && 'focus-visible:ring-red-500'
            )}
            placeholder="Address"
            disabled={isPending}
          />
          <Input
            {...register('country')}
            className={cn(
              'h-[43px] text-[15px] text-[#a3a3a3] rounded-[10px]',
              errors.country && 'focus-visible:ring-red-500'
            )}
            placeholder="Country"
            disabled={isPending}
          />
          <div className="w-full flex items-center justify-between h-[43px]">
            <Input
              {...register('state')}
              className={cn(
                'w-[47%] h-full text-[15px] text-[#a3a3a3] rounded-[10px]',
                errors.state && 'focus-visible:ring-red-500'
              )}
              placeholder="State"
              disabled={isPending}
            />
            <Input
              {...register('city')}
              className={cn(
                'w-[47%] h-full text-[15px] text-[#a3a3a3] rounded-[10px]',
                errors.city && 'focus-visible:ring-red-500'
              )}
              placeholder="City"
              disabled={isPending}
            />
          </div>
          <Textarea
            {...register('info')}
            className={cn(
              'w-full h-[108px] text-[15px] text-[#a3a3a3] rounded-[10px]',
              errors.info && 'focus-visible:ring-red-500'
            )}
            placeholder="Additional Information"
            disabled={isPending}
          />
          <div className="w-full space-y-6">
            <h6 className="text-sm">Coupon (Optional)</h6>
            <Input
              {...register('coupon')}
              className={cn(
                'h-[43px] text-[15px] text-[#a3a3a3] rounded-[10px]'
              )}
              disabled={isPending}
            />
          </div>
        </div>

        <div className="mt-4 space-y-10">
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

          <div className="w-full flex flex-col items-center space-y-3">
            <button
              className="w-full h-[51px] rounded-[10px] bg-colorPrimary flex items-center justify-center text-white font-semibold text-lg hover:opacity-90 transition-all"
              type="submit"
            >
              Pay N{comma(total)}
            </button>
            <div className=" text-xs text-[#a7a7a7] flex space-x-2 items-center">
              <LockKeyhole className="w-3 h-3" />
              <h6>Payment are secured and encrypted</h6>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
