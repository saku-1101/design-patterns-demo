import { Product } from 'types'
import { Card } from '../card'
import { withFetchingState } from '@/libs/withFetchingState'

export default function ProductGalleryWithFetchingState({
  products,
  isLoading,
  error,
}: {
  products: Product[]
  isLoading: boolean
  error: Error | null
}) {
  const ProductGalleryWithFetchingState = withFetchingState<{
    data: Product[]
  }>(Gallery)
  return (
    <ProductGalleryWithFetchingState
      isLoading={isLoading}
      error={error}
      whichSkelton="card"
      data={{ data: products }}
    />
  )
}

function Gallery({ data }: { data: Product[] }) {
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>Product Gallery</h2>
      <div className="grid grid-cols-3 gap-5">
        {data.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  )
}