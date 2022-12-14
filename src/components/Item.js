import React from "react"
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import { Card, Container } from "@mui/material";


const Item = ({ id, nombre, imagen, precio, categoria, }) => {

	return (
		<Container>
			<Card>
				<div className="card__div">
					<h1>{nombre}</h1>
					<h3>$ {precio}</h3>
					<h4>{categoria}</h4>
					<img src={imagen} alt={nombre} className="card__img" />
					<Button variant="outlined" className="card__button">
						<Link to={"/item/" + id}>Leer más</Link>
					</Button>
				</div >
			</Card>
		</Container>
	);
}


export default Item