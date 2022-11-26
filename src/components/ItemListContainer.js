import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList";
import { getProductByCategory, getProducts } from "../store/Products";
import { toast } from "react-toastify";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
  const { categoria } = useParams()

  useEffect(() => {
    if (categoria) {
      getProductByCategory(categoria)
        .then((res) => {
          const prods = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          setItems(prods)
        })
        .catch((e) => {
          toast(e)
        })
    } else {
      getProducts()
        .then((res) => {
          const prods = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          setItems(prods)
        })
        .catch((e) => {
          toast(e)
        })
    }

  }, [categoria])

  return (
    <div>
      <div>
      {categoria ? <h2>{categoria}</h2> : <h2>{greeting}</h2>}
      </div>
      <div>
        <ItemList items={items} />
      </div>
    </div>
  )
}

export default ItemListContainer