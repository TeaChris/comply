import { signOut } from '@/auth'
import { UserButton } from '@clerk/nextjs'

export function Sign() {
  return (
    <form
      action={async () => {
        'use server'

        await signOut()
      }}
    >
      <button type="submit">sign out</button>
      <UserButton afterSignOutUrl="/" />
    </form>
  )
}
