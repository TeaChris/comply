import { currentUserId } from '@/lib/auth'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const userId = await currentUserId()

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      country,
      state,
      city,
      info,
      coupon,
      status,
    } = await req.json()

    const order = await db.order.create({
      data: {
        userId,
        firstName,
        lastName,
        email,
        phone,
        address,
        country,
        state,
        city,
        info,
        coupon,
        status,
      },
    })
    return NextResponse.json(order)
  } catch (error) {
    console.log('[CREATE_ORDER]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
