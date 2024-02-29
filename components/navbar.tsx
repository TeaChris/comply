import Link from 'next/link'
import { MaxWidthWrapper } from './max-width-wapper'
import Image from 'next/image'
import { nav } from '@/lib'
import { Cart } from './cart'
import { Sign } from './button'

export function Navbar() {
  return (
    <header className="w-full h-40">
      <MaxWidthWrapper>
        <nav className="flex h-40 items-center justify-between">
          <div className="flex space-x-12">
            <Link href="/">
              <Image
                src={nav.img}
                alt={nav.alt}
                width={140}
                height={140}
                className="object-cover"
              />
            </Link>
          </div>

          <div className="flex space-x-10 items-center">
            <div className="flex space-x-10">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="uppercase text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Cart />
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  )
}
