import React from "react";

function ItemListContainer(prop) {
	let saludo = prop.nombre
	return (
		<h2>Hola {saludo}</h2>
	)
}

export default ItemListContainer