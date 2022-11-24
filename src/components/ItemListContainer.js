import React from "react";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dataBase } from "../store/Firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { getProductByCategory, getProducts, products } from "../store/Products";



const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])

  const { categoria } = useParams()

  useEffect(() => {

    const consultaDB = collection(dataBase, "products")
    console.log(consultaDB)



    if (categoria) {

      const customQuery = query(consultaDB, where("categoria", "==", categoria))
      const pedidoDB = getDocs(customQuery)

      pedidoDB.then((res) => {
        const prods = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        setItems(prods)
      })
        .catch((e) => {
          console.log(e)
        })


    } else {

      const pedidoDB = getDocs(consultaDB)
      pedidoDB
        .then((res) => {
          const prods = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          setItems(prods)
        })
        .catch((e) => {
          console.log(e)
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