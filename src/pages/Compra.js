import React, { useContext, useRef, useState } from 'react';
import CompraCard from '../components/CompraCard';
import { contexto } from '../components/ContextProvider';
import { Form } from '../components/Form';

export const Compra = () => {
  const value = useContext(contexto)
  const [carrito, setCarrito] = value.productos


  return (
    <div className='compra__check'>

      {
        carrito.length === 0 ? <h2 className='titulo__error'>Su carrito se ha vaciado. Por favor, inicie nuevamente su compra</h2> :
          <>
            <div>
              <Form />
            </div>
            <div>
              <CompraCard />
            </div>
          </>
      }
    </div>
  )
}

