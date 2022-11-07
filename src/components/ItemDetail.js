import React from "react";
import ItemCount from "./ItemCount";
import Wallpaper from "./img/wallpaper.jpg"
import { Card } from "@mui/material";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


function ItemDetail({ ...item }) {

	const images = require.context("./img", true)

	return (
		<>
			<Card>
				<div className="contenedor__detail">
					<div className="div__detail">
						<h1>{item.nombre}</h1>
						<h2>$ {item.precio}</h2>
						<img src= {item.imagen} className="img__detail"></img>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								{item.descripcion}
							</Typography>
						</CardContent>
						{/* <p>{item.descripcion}</p> */}
					</div>
					<div className="item__count">
						<ItemCount />

					</div>
				</div>
			</Card>
		</>
	)
}

export default ItemDetail