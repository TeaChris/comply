import { Suspense, lazy } from 'react'

import { Actions } from '@/components/actions'
import { MaxWidthWrapper } from '@/components/max-width-wapper'

const Products = lazy(() => import('../../components/products'))

export default function Page() {
  return (
    <MaxWidthWrapper>
      <div className="space-y-8">
        <Actions />
        <Products />
      </div>
    </MaxWidthWrapper>
  )
}
