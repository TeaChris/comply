import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'

const font = Poppins({
  weight: ['300', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Milky Express',
  description: 'best shop for nutritional milk',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn('relative h-full font-sans antialiased', font.className)}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}
