import React from 'react'
import { useFetch } from '../../../hooks/useFetch/useFetch'

export const ListProducts = () => {

    const { products } = useFetch()

    console.log(products)

    return (
        <div>ListProducts</div>
    )
}
