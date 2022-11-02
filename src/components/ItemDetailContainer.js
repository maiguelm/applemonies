import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { getProductsById } from "./Products"

function ItemDetailContainer() {

    const [item, setItems] = useState([])

    const { elementId } = useParams()

    useEffect(() => {
        getProductsById(elementId)
            .then(res => {
                setItems(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [elementId])

    return (
        <>
            {item.length == 0 ? <p>Cargando...</p> : <ItemDetail item={item} /> }
        </>

    )
}
export default ItemDetailContainer