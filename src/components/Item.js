import React from "react"
import ItemDetail from "./ItemDetail";
import Button from '@mui/material/Button'

const images = require.context("./img", true)

const Item = ({ nombre, imagen, precio, categoria, descripcion}) => {

	return (
		<div className="card__div">
			<h1>{nombre}</h1>
			<h3>$ {precio}</h3>
			<h4>{categoria}</h4>
			<img src={images(`./${imagen}`)} alt={nombre} className="card__img"/>
			<Button variant="contained" className="card__button">
			  Leer más
			</Button>   
			<ItemDetail description = {descripcion} />
		</div>
	);
}

export default Item