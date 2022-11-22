import React, { useContext, useState } from 'react'
import { dataBase } from './Firebase';
import { useContextProvider } from './hooks/Hooks';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import Lemonies from "./img/lemonies.jpg"
import ContextProvider, { contexto } from './ContextProvider';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


export const Carrito = ({producto}) => {

  const value = useContext(contexto)
  const [menu, setMenu] = value.menu
  const [id, setId] = useState("")
  const carrito = value.productos

   const menuFalse = () =>{
    setMenu(false)
  }

  const show = menu ? "carritos show" : "carritos"
	const show__dos = menu ? "carrito show" : "carrito" 

  const handleSubmit = (e) => {
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
    .catch((error) =>{
      console.log(error)
    })
  } 

  return (
    <div className={show}>
      <div className={show__dos}>
        <div  onClick={menuFalse}>
          <CloseIcon className='carrito__close'></CloseIcon>
        </div>
        <h2>Este es su carrito </h2>
        
        
        <div className='carrito__center'>


{    
          carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "2rem"}}>Carrito Vacio</h2> :
          carrito.map((producto) =>(<>
          <div key={producto.id} className='carrito__item'>
            <img scr={producto.imagen} />             
            <h3>{producto.nombre}</h3>
            <p className='precio__producto'>{producto.precio}</p>
          </div>
          <div >
            <ArrowDropUpIcon fontSize="large" className='flechas__cantidad'/>
            <p className='cantidad__producto'>{producto.cantidad}</p>
            <ArrowDropDownIcon fontSize="large" className='flechas__cantidad'/>
          </div>
          <div className='remove__item'>
            <DeleteIcon className='delete__item'/>
          </div></>
     ))
} 
          <div className='carrito__footer'>
            <h3>Total: $ 1000</h3>
            <IconButton color="primary" className='btn'  onClick={handleSubmit}>Comprar</IconButton>
          </div>
        </div>
      </div>
    </div>

  )};
