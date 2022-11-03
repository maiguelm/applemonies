import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { getProductsById } from "./Products"

function ItemDetailContainer() {

    const [item, setItems] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getProductsById(id)
            .then(res => {
                setItems(res)
				console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <>
            <ItemDetail {...item} />
        </>

    )
}
export default ItemDetailContainer