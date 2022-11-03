import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink to="./productos" underline="hover" className="linkNav">Productos</NavLink>
			<NavLink to="./productos/Viennoiseries" underline="hover" className="linkNav">Viennoiseries</NavLink>
			<NavLink to="./productos/Masitas" underline="hover" className="linkNav">Masitas</NavLink>
			<NavLink to="./productos/Postres" underline="hover" className="linkNav">Postres</NavLink>
			<NavLink to="./contacto" underline="hover" className="linkNav">Contacto</NavLink>
			<CartWidget />
		</nav>
	)
}

export default Navbar