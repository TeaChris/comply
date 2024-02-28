import { Dispatch, SetStateAction, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'
import { TLoginValidator, loginSchema } from '@/schemas'
import { Loader2 } from 'lucide-react'
import { logIn } from '@/actions/sign-in'
import { toast } from 'sonner'

interface Props {
  log: boolean
  active: boolean
  setLog: Dispatch<SetStateAction<boolean>>
  setActive: Dispatch<SetStateAction<boolean>>
}

export function Login({ active, setActive, log, setLog }: Props) {
  const [isPending, startTransition] = useTransition()

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValidator>({
    resolver: zodResolver(loginSchema),
  })

  const onClick = () => {
    setActive(!active)
    setLog(!log)
  }

  const onSubmit = (values: TLoginValidator) => {
    startTransition(() => {
      logIn(values).then((data) => {
        if (data?.error) {
          toast.error(data.error)
          reset()
        }
        if (data?.success) {
          toast.success(data.success)
          reset()
        }
      })
    })
  }

  return (
    <>
      <div className="w-full space-y-10">
        <div className="space-y-1">
          <h2 className="font-bold text-[30px]">Login</h2>
          <p className="text-[15px] font-semibold text-[#949494]">
            Login to complete your order
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
              type="password"
              placeholder="Password"
              disabled={isPending}
            />

            <button
              className="w-full h-[47px] rounded-[15px] bg-colorPrimary flex items-center justify-center text-white font-semibold text-lg hover:opacity-90 transition-all"
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>Sign in</>
              )}
            </button>
          </form>
          <h6
            className="text-[15px] underline cursor-pointer font-medium text-[#949494]"
            onClick={onClick}
          >
            Continue with Google or Facebook
          </h6>
        </div>
      </div>
    </>
  )
}
