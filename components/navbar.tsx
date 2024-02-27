import Link from 'next/link'
import { MaxWidthWrapper } from './max-width-wapper'
import Image from 'next/image'
import { nav } from '@/lib'

export function Navbar() {
  return (
    <header className="w-full h-40">
      <MaxWidthWrapper>
        <nav className="flex h-40 items-center justify-between">
          <div className="flex">
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

            <div className="flex items-center space-x-2">
              <div className="w-[62px] aspect-square rounded-full bg-colorPrimary flex items-center justify-center">
                <Image
                  src={nav.cart.img}
                  alt={nav.cart.tit}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="font-bold text-lg">{nav.cart.tit}</h2>
                <p className="text-xs font-medium">3 items</p>
              </div>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  )
}
