import logo from '@/public/log.png'
import car from '@/public/cart.png'

// products
import p1 from '@/public/products/p1.png'
import p2 from '@/public/products/p2.png'
import p3 from '@/public/products/p3.png'
import p4 from '@/public/products/p4.png'
import p5 from '@/public/products/p5.png'

import { StaticImageData } from 'next/image'

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

export type Product = {
  id: string
  img: StaticImageData
  name: string
  desc: string
  descip: string
  price: number
  quantity: number
}

export type Products = Product[]

export const products: Products = [
  {
    id: '1bjak-agmgldggagdjknkg',
    img: p1,
    name: 'Milky Lactation Cookies',
    desc: 'Lactation cookies to improve production of breastmilk',
    descip:
      'Imagine being a mother who works every morning and still having to take care of the baby. Our lactation cookies are specially made for you. Available in 2 flavors, you can have more than one kind of cookie because it’s so yummy. You might eat it too fast because it tastes so good',
    price: 3000,
    quantity: 0,
  },
  {
    id: 'bghsf8fsfg-asfwre3asd0-9',
    img: p2,
    name: 'Breast Milk Bag',
    desc: 'Lactation cookies to improve production of breastmilk',
    descip:
      'Imagine being a mother who works every morning and still having to take care of the baby. Our lactation cookies are specially made for you. Available in 2 flavors, you can have more than one kind of cookie because it’s so yummy. You might eat it too fast because it tastes so good',

    price: 4500,
    quantity: 0,
  },
  {
    id: 'basaskmfsa-nsakjnssak7-mkkemn3',
    img: p3,
    name: 'Milky Enrich Shakes',
    desc: 'Lactation cookies to improve production of breastmilk',
    descip:
      'Imagine being a mother who works every morning and still having to take care of the baby. Our lactation cookies are specially made for you. Available in 2 flavors, you can have more than one kind of cookie because it’s so yummy. You might eat it too fast because it tastes so good',
    price: 3500,
    quantity: 0,
  },
  {
    id: 'bjkcsncjks-sjabha-juwye',
    img: p4,
    name: 'Milky Lactation Tea',
    desc: 'Lactation cookies to improve production of breastmilk',
    descip:
      'Imagine being a mother who works every morning and still having to take care of the baby. Our lactation cookies are specially made for you. Available in 2 flavors, you can have more than one kind of cookie because it’s so yummy. You might eat it too fast because it tastes so good',
    price: 6000,
    quantity: 0,
  },
  {
    id: 'hvasbjks-jsajaska-23',
    img: p5,
    name: 'Milky Lactation Granola',
    desc: 'Lactation cookies to improve production of breastmilk',
    descip:
      'Imagine being a mother who works every morning and still having to take care of the baby. Our lactation cookies are specially made for you. Available in 2 flavors, you can have more than one kind of cookie because it’s so yummy. You might eat it too fast because it tastes so good',
    price: 4000,
    quantity: 0,
  },
  {
    id: 'hjbcsakna-sajbsjaa-76GV',
    img: p1,
    name: 'Milky Lactation Cookies',
    desc: 'Lactation cookies to improve production of breastmilk',
    descip:
      'Imagine being a mother who works every morning and still having to take care of the baby. Our lactation cookies are specially made for you. Available in 2 flavors, you can have more than one kind of cookie because it’s so yummy. You might eat it too fast because it tastes so good',
    price: 3000,
    quantity: 0,
  },
]
