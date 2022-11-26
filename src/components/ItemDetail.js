import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Button, Card, Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { toast } from "react-toastify";
import { useContextProvider } from "../hooks/Hooks";



function ItemDetail({ producto }) {
	const [cantidad, setCantidad] = useState(1)
	const { agregarProducto } = useContextProvider()
	const [confirmado, setConfirmado] = useState(false)
	const [habilitado, setHabilitado] = useState(false)

	const habilitar = () => {
		setHabilitado(false)
	}

	const handleOnAdd = (cantidad) => {
		setCantidad(cantidad)
		setConfirmado(true)
	}

	const handleClick = () => {
		agregarProducto(producto, cantidad)
		setHabilitado(true)
		toast.success("Producto agregado al carrito", { autoClose: 1500 })
	}

	return (
		<>
			<Container maxWidth="md">
				<Card>
					<div className="contenedor__detail">
						<div className="div__detail">
							<h1>{producto.nombre}</h1>
							<h2>$ {producto.precio}</h2>
							<img src={producto.imagen} alt={producto.nombre} className="img__detail"></img>
							<CardContent>
								<Typography variant="body2" color="text.secondary">
									{producto.descripcion}
								</Typography>
							</CardContent>
						</div>
						<div className="item__count">
							<ItemCount habilitar={habilitar} handleOnAdd={handleOnAdd} />
							{confirmado && <Button disabled={habilitado} onClick={handleClick}>Agregar al Carrito</Button>}

						</div>
					</div>
				</Card>

			</Container>
		</>
	)
}

export default ItemDetail