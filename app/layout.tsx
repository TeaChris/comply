import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import { Toaster } from 'sonner'

const font = Inter({
  weight: ['100', '300', '500', '700', '900'],
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
        className={cn(
          'relative h-full font-sans antialiased bg-neutral-50',
          font.className
        )}
      >
        <Navbar />
        <div className="w-full pt-12">{children}</div>
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
