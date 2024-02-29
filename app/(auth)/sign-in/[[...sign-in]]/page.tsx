import { Suspense } from 'react'

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignIn />
    </Suspense>
  )
}
