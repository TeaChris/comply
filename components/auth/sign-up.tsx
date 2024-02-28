'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Dispatch, SetStateAction, useTransition } from 'react'
import { Input } from '../ui/input'
import { TSignUpValidator, signupSchema } from '@/schemas'
import { cn } from '@/lib/utils'

interface Props {
  sign: boolean
  setSign: Dispatch<SetStateAction<boolean>>
}

export function SignUp({ sign, setSign }: Props) {
  const [isPending, startTransition] = useTransition()

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpValidator>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = (values: TSignUpValidator) => {}
  return (
    <>
      <div className="w-full space-y-10">
        <div className="space-y-1">
          <h2 className="font-bold text-[30px]">Sign Up</h2>
          <p className="text-[15px] font-semibold text-[#949494]">
            Sign up to get started
          </p>
        </div>
        <div className="w-full flex flex-col items-center space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
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
              {...register('password')}
              className={cn(
                'h-[43px] text-[15px] text-[#a3a3a3] rounded-[10px]',
                errors.password && 'focus-visible:ring-red-500'
              )}
              placeholder="Password"
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
            <button
              className="w-full h-[47px] rounded-[15px] bg-colorPrimary flex items-center justify-center text-white font-semibold text-lg hover:opacity-90 transition-all"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <h6
            className="text-[15px] underline cursor-pointer font-medium text-[#949494]"
            onClick={() => setSign(!sign)}
          >
            Continue with Google or Facebook
          </h6>
        </div>
      </div>
    </>
  )
}
