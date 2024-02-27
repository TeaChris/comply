import React from 'react'

export default function Page({ params }: { params: { productId: string } }) {
  return <div>{params.productId}</div>
}
