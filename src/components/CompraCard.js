import { Card, Container } from '@mui/material'
import React, { useContext } from 'react'
import { contexto } from './ContextProvider'



function CompraCard() {

	const value = useContext(contexto)
	const [carrito] = value.productos
	const [total] = value.total
	const [cantidadTotal] = value.cantidadTotal


	return (
		<Container maxWidth="md">
			<Card>
				{
					carrito.map((producto) => (
						<div key={producto.id}>
							<div className='item__Check'>
								<img src={producto.imagen} alt={producto.nombre}></img>
								<h3>{producto.nombre}</h3>
								<p className='precio__productoCheck'>Cantidad: {producto.cantidad}</p>
								<p className='precio__productoCheck'>$ {producto.cantidad * producto.precio}</p>

							</div>
						</div>
					)
					)}
				<div>
					<h2 className='precio__producto'>Total: $ {total} </h2>
				</div>
			</Card>
		</Container>
	)
}





export default CompraCard