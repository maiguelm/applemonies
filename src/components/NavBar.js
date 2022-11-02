import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink to="./productos" underline="hover" className="linkNav">Productos</NavLink>
			<NavLink to="./productos/viennoiseries" underline="hover" className="linkNav">Viennoiseries</NavLink>
			<NavLink to="./productos/masitas" underline="hover" className="linkNav">Masitas</NavLink>
			<NavLink to="./productos/postres" underline="hover" className="linkNav">Postres</NavLink>
			<NavLink to="./contacto" underline="hover" className="linkNav">Contacto</NavLink>
			<CartWidget />
		</nav>
	)
}

export default Navbar