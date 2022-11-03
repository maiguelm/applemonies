import React from "react";
import ItemCount from "./ItemCount";
import Wallpaper from "./img/wallpaper.jpg"



function ItemDetail({ ...item }) {

	const images = require.context("./img", true)

	return (
		<>
		<div className="contenedor__detail">
			<div className="div__detail">
				<h1>{item.nombre}</h1>
				<h2>$ {item.precio}</h2>
				<img src={Wallpaper} className="img__detail"></img>
				<p>{item.descripcion}</p>
			</div>
			<div className="item__count">
				<ItemCount />
			</div>
		</div>
		</>
	)
}

export default ItemDetail