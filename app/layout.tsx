import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Toaster } from 'sonner'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

// import { ClerkProvider } from '@clerk/nextjs'

const font = Inter({
  weight: ['100', '300', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Milky Express',
  description: 'best shop for nutritional milk',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      {/* <ClerkProvider> */}
      <html lang="en">
        <body
          className={cn(
            'relative h-full text-black font-sans antialiased bg-neutral-50',
            font.className
          )}
        >
          <Navbar />
          <div className="w-full pt-12">{children}</div>
          <Toaster position="bottom-right" />
        </body>
      </html>
      {/* </ClerkProvider> */}
    </SessionProvider>
  )
}
