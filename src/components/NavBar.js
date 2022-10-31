import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink to="./productos" underline="hover" className="linkNav">Productos</NavLink>
			<NavLink to="./quienesSomos" underline="hover" className="linkNav">Quienes Somos</NavLink>
			<NavLink to="./galeria" underline="hover" className="linkNav">Galeria</NavLink>
			<NavLink to="./contacto" underline="hover" className="linkNav">Contacto</NavLink>
			<CartWidget />
		</nav>
	)
}

export default Navbar