import { doc, getDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dataBase } from '../store/Firebase'
import ItemDetail from './ItemDetail'
import { getProductsById } from "../store/Products"


function ItemDetailContainer() {

  const [item, setItems] = useState({})

  const { id } = useParams()

  useEffect(() => {

    const consultaDB = collection(dataBase, "products")
    const consProd = doc(consultaDB, id)

    const pedidoDB = getDoc(consProd)
    pedidoDB
      .then((res) => {
        setItems(res.data())
      })
      .catch((e) => {
        console.log(e)
      })



    // getProductsById(id)
    //     .then(res => {
    //         setItems(res)
    // 		console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
  }, [id])

  return (
    <>
      <ItemDetail producto={{ id, ...item }} />
    </>

  )
}

export default ItemDetailContainer