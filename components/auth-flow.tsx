import Image from 'next/image'
import { Checkout } from './auth/checkout'

import { useState } from 'react'
import { SignUp } from './auth/sign-up'
import { Login } from './auth/login'

export function AuthFlow() {
  const [sign, setSign] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(true)
  const [log, setLog] = useState<boolean>(false)
  const user = false

  const onClick = () => {
    setLog(!log)
    setActive(!active)
  }
  return (
    <>
      {user ? (
        <div className="w-full h-max rounded-[11px] bg-[#F9F9F9] pt-6 px-3 pb-16 space-y-8">
          <div className="space-y-2">
            <h2 className="font-bold text-[30px]">Checkout</h2>
            <p className="text-[15px] font-semibold text-[#949494]">
              Complete your purchase by filling the information below
            </p>
          </div>
          <Checkout />
        </div>
      ) : sign ? (
        <SignUp sign={sign} setSign={setSign} />
      ) : (
        <>
          {active && (
            <>
              <div className="w-full space-y-10">
                <div className="space-y-1">
                  <h2 className="font-bold text-[30px]">Login</h2>
                  <p className="text-[15px] font-semibold text-[#949494]">
                    Login to complete your order
                  </p>
                </div>

                <div className="w-full space-y-5 flex flex-col items-center">
                  <button className="w-full h-[51px] flex font-bold text-base text-white justify-center items-center rounded-[15px] bg-colorPrimary gap-4 hover:opacity-90 transition">
                    <Image
                      src="/g.svg"
                      alt="login in with google"
                      width={50}
                      height={50}
                      className="w-[30px] aspect-square object-cover"
                    />
                    Continue with Google
                  </button>
                  <button className="w-full h-[51px] flex font-bold text-base text-white justify-center items-center rounded-[15px] bg-colorPrimary gap-4 hover:opacity-90 transition">
                    <Image
                      src="/f.svg"
                      alt="login in with google"
                      width={50}
                      height={50}
                      className="w-[30px] aspect-square object-cover"
                    />
                    Continue with Facebook
                  </button>
                  <h6 className="text-[15px] font-medium text-[#949494]">
                    Or use your password to{' '}
                    <span
                      className="font-bold underline cursor-pointer"
                      onClick={() => setSign(!sign)}
                    >
                      sign up
                    </span>{' '}
                    or{' '}
                    <span
                      className="font-bold underline cursor-pointer"
                      onClick={onClick}
                    >
                      login
                    </span>
                  </h6>
                </div>
              </div>
            </>
          )}
        </>
      )}
      {log && (
        <Login
          active={active}
          setActive={setActive}
          log={log}
          setLog={setLog}
        />
      )}
    </>
  )
}
