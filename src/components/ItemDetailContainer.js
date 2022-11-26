import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { getProductById } from "../store/Products"
import { toast } from 'react-toastify'


function ItemDetailContainer() {
  const [item, setItems] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setItems(res.data())
      })
      .catch((e) => {
        toast.error(e)
      })

  }, [id])

  return (
    <>
      <ItemDetail producto={{ id, ...item }} />
    </>

  )
}

export default ItemDetailContainer