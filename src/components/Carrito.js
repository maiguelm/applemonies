import React, { useContext, useState } from 'react'
import { dataBase } from '../store/Firebase';
import { useContextProvider } from '../hooks/Hooks';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import ContextProvider, { contexto, useCarrito } from './ContextProvider';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Compra } from '../pages/Compra';
import { Link, NavLink } from 'react-router-dom';


export const Carrito = () => {

  const value = useContext(contexto)
  const [menu, setMenu] = value.menu
  const [id, setId] = useState("")
  const [carrito, setCarrito] = value.productos
  const { borrarProducto, calculoPrecio, vaciarCarrito } = useCarrito()
  const [total] = value.total
  const [cantidadTotal, setCantidadTotal]= value.cantidadTotal
  

  const menuFalse = () => {
    setMenu(false)
  }

  const show = menu ? "carritos show" : "carritos"
  const show__dos = menu ? "carrito show" : "carrito"

  const removeProducto = id => {
    borrarProducto(id)
    calculoPrecio()
  }


  const remProd = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
        calculoPrecio(item, item.cantidad)
        setCantidadTotal(cantidadTotal-1)
			}
			setCarrito([...carrito])
		})
	}
	const addProd = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad +=1;
        calculoPrecio(item, item.cantidad)
        setCantidadTotal(cantidadTotal + 1)
			}
			setCarrito([...carrito])

		})
	}


  return (
    <div className={show}>
      <div className={show__dos}>
        <div onClick={menuFalse}>
          <CloseIcon className='carrito__close'></CloseIcon>
        </div>
        <h2>Este es su carrito </h2>


        <div className='carrito__center'>

          {
            carrito.length === 0 ? <h2 className="titulo__error">Carrito Vacio</h2> :
              carrito.map((producto) => (<div key={producto.id}>
                <div className='carrito__item'>
                  <img src={producto.imagen} alt={producto.nombre}></img>
                  <h3>{producto.nombre}</h3>
                  <p className='precio__producto'>$ {producto.precio}</p>
                  <div >
                    <ArrowDropUpIcon fontSize="large" className='flechas__cantidad' onClick={()=> addProd(producto.id)}/>
                    <p className='cantidad__producto'>{producto.cantidad}</p>
                    <ArrowDropDownIcon fontSize="large" className='flechas__cantidad' onClick={()=> remProd(producto.id)}/>
                  </div>
                  <div className='remove__item'>
                    <DeleteIcon className='delete__item' onClick={() => removeProducto(producto.id)} />
                  </div>
                </div></div>
              ))
          }
          <div className='carrito__footer'>
            {carrito.length === 0 ? null : <>
            <h3>Total: $ {total}</h3>
            <NavLink
             to="./compra" onClick={menuFalse}> <IconButton color="primary" className='btn'>Comprar</IconButton></NavLink>
             <IconButton color="primary" className='btn' onClick={vaciarCarrito}>Vaciar Carrito</IconButton>
             </>
            }
            
          </div>
        </div>
      </div>
    </div>

  )
};
