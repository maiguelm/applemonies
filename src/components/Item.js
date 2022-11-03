import React from "react"
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";

const images = require.context("./img", true)

const Item = ({ id, nombre, imagen, precio, categoria, }) => {

	return (
		<div className="card__div">
			<h1>{nombre}</h1>
			<h3>$ {precio}</h3>
			<h4>{categoria}</h4>
			<img src={images(`./${imagen}`)} alt={nombre} className="card__img" />
			<Button variant="contained" className="card__button">
				<Link to={"/item/"+id}>Leer más</Link>
			</Button>
			
		</div>
	);
}


export default Item