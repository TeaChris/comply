import { signOut } from '@/auth'

export function Sign() {
  return (
    <form
      action={async () => {
        'use server'

        await signOut()
      }}
    >
      <button type="submit">sign out</button>
    </form>
  )
}
