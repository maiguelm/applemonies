import { Button } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { contexto } from '../components/ContextProvider';

export const Compra = () => {
	// const { register, handleSubmit, watch, formState: { errors } } = useForm();
	// const onSubmit = data => console.log(data);


	/*   const handleSubmit = (e) => {
    e.preventDefault()
    const pedido = {
      usuario: {
        name: "Roque",
        phone: "2223355"
      },
      products: [],
      total: 500,
      date: serverTimestamp(),
      nroOrden: Math.random()
    }


    const ordersCollection = collection(dataBase, "ordenes")
    const consulta = addDoc(ordersCollection, pedido)

    consulta
      .then((docRef) => {
        console.log(docRef)
        setId(docRef.id)
      })
      .catch((error) => {
        console.log(error)
      })
  } */
  const value = useContext(contexto)
  const { carrito, setCarrito } = value.productos
  const [mailValido, setMailValido] = useState(false)

  const refNombre = useRef()
  const refMail = useRef()
  const refMailDos = useRef()
  const refDireccion = useRef()

  const validacion = () => {
    if (refMail.current.value===refMailDos.current.value) {
      setMailValido(true)
    } else
    setMailValido(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Funciona")
  }

  return (

    <form noValidate onSubmit={handleSubmit}>
      <div>
        <input required ref={refNombre} type="text" placeholder="Ingrese su nombre y apellido" />
        <label>Nombre y Apellido</label>
      </div>
      <div>
        <input ref={refMail} onChange={validacion} type="email" placeholder="Ingrese su dirección de email..." required />
        <label>Email</label>
      </div>
      <div>
        <input ref={refMailDos} onChange={validacion} type="email" placeholder="Confirme su dirección de email..." required />
        <label>Confirme email</label>
      </div>
      <div>
        <input ref={refDireccion} type="address" placeholder="Ingrese su dirección..." required />
        <label>Direccion de envío</label>
      </div>
      <Button disabled={!validacion} >
        Confirmar pedido
      </Button>
    </form>
  )
}

