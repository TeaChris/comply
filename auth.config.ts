import type { NextAuthConfig } from 'next-auth'

import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'

import { loginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import bcrypt from 'bcryptjs'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const user = await getUserByEmail(email) // check if email exists
          if (!user || !user.password) return null

          const passwordsMatch = await bcrypt.compare(password, user.password) // check if password match

          if (passwordsMatch) return user
        }

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
