import { useFetch } from '../../../hooks/useFetch/useFetch'
import { ProductItem } from '../../../types/typeApp/typeApp'
import { Product } from './Product/Product'

export const ListProducts = () => {

    const { products, isLoading } = useFetch()

    /* console.log(products) */
    const handleAddToCarr = (product: ProductItem) => {
        console.log('Agregamdo...')
    }
    return (
        <>
            {
                products.map(product => (
                    <Product 
                    key={product.id} 
                    product={product}
                    handleAddToCarr={handleAddToCarr}
                    />
                ))
            }
        </>
    )
}
