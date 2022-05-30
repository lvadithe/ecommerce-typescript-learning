export type ProductFetch = {
    products: ProductItem[]
    isLoading: boolean
    isError: boolean
}

export type ProductItem = {
    id: number
    category: string
    title: string
    image: string
    description: string
    price: number
}