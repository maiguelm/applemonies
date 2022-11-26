import { Card, Container } from '@mui/material'
import React from 'react'
import { useContextProvider } from '../hooks/Hooks'



function CompraCard() {
	const value = useContextProvider()
	const carrito = value.productos
	const total = value.total


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