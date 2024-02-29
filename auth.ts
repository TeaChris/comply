import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import authConfig from './auth.config'
import { db } from './lib/db'
import { getUserById } from './data/user'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user }) {
      // @ts-ignore
      const existingUser = await getUserById(user.id)

      // enabling 2FA authentication

      return true
    },
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.email = existingUser.email
      return token
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (session.user) {
        // @ts-ignore
        session.user.email = token.email
      }
      return session
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
})
