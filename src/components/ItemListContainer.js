import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";
import { getProductByCategory, getProducts } from "./Products";


const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])

  const { categoria } = useParams()

  useEffect(() => {

    if (categoria) {

      getProductByCategory(categoria)
        .then(res => {
          setItems(res)
          console.log(categoria)
        })
        .catch(err => {
          console.log(err)
        })

    } else {

      getProducts()
        .then((respuesta) => {
          setItems(respuesta)
        })
        .catch((error) => {
          console.log(error)
        })
    }

  }, [categoria])

  return (
    <div>
      <h2>{greeting}</h2>
      <div>
        {items.length === 0 ? <div>Obteniendo productos</div> : <ItemList items={items} />}
      </div>
    </div>
  )
}

export default ItemListContainer