import logo from '@/public/log.png'
import car from '@/public/cart.png'

export const nav = {
  img: logo,
  alt: 'milky logo',
  links: [
    {
      href: '/',
      label: 'home',
    },
    {
      href: 'order',
      label: 'my order',
    },
  ],
  cart: {
    img: car,
    tit: 'Cart',
  },
} as const
