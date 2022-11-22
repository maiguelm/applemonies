import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Button, Card, Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { dataBase } from "./Firebase";
import { contexto, useCarrito } from "./ContextProvider";
import { useContextProvider } from "./hooks/Hooks";



function ItemDetail({producto}) {
	const [cantidad, setCantidad] = useState(1)
	const { agregarProducto } = useCarrito()
	const [confirmado, setConfirmado] = useState(false)
	const [habilitado, setHabilitado] = useState(false)


	const handleOnAdd = (cantidad) => {
        console.log("Se agregaron " + cantidad + " productos")
        console.log(producto)
        setCantidad(cantidad)
		setConfirmado(true)

    }

	const handleClick = () => {
        agregarProducto(producto,cantidad)
		setHabilitado(true)
    }


	return (
		<>
		<Container maxWidth="md">
			<Card>
				<div className="contenedor__detail">
					<div className="div__detail">
						<h1>{producto.nombre}</h1>
						<h2>$ {producto.precio}</h2>
						<img src= {producto.imagen} className="img__detail"></img>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								{producto.descripcion}
							</Typography>
						</CardContent>
					</div>
					<div className="item__count">
						<ItemCount init  handleOnAdd={handleOnAdd}/>
						{confirmado && <button disabled = {habilitado} onClick={handleClick}>Agregar al Carrito</button> }

					</div>
				</div>
			</Card>
		  
		</Container>
		</>
	)
}

export default ItemDetail