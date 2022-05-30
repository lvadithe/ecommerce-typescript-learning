import { useEffect, useState } from "react"
import { getProducts } from "../../helpers/getData/getData"
import { ProductFetch, ProductItem } from "../../types/typeApp/typeApp"

export const useFetch = () => {

    //useState se va a encargar de manejar la data tambien va a manejar 
    //una propiedad llamada isLoading para cuando cargue la data y 
    //otra propiedad que me indique si hay un error 
    //lo que vamos a tener es un objeto donde vamos a tener nuestro arreglo 
    //de productos, vamos a tneer un objeto isLoading y se va a iniciar en true y
    //vamos a tener un objeto error que va a ser un booleano y va a ser false
    const [data, setData] = useState<ProductFetch>({
        products: [],
        isLoading: true,                // este estado se encarga de administrar la 
        isError: false                   // carga de datos de la api
    })

    useEffect(() => {
        getProducts()
            .then(data => {

                const customData = data.map((product: ProductItem) => ({
                    ...product, description: product.description.substring(0, 55)
                }));

                setData({
                    products: customData,
                    isLoading: false,
                    isError: false
                })
            })
            .catch(err => {
                setData({
                    products: [],
                    isLoading: false,
                    isError: true
                })
            })
    }, [])
    //luego vamos a tener un useEfecct vamos a hacer la peticion, a llamar a nuestro getData

    return data
}
