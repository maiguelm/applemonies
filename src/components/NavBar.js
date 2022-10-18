<<<<<<< HEAD
import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "@mui/material";



const Navbar = () => {
	return (
		<nav>
			<Link href="#" underline="hover" className="linkNav">Productos</Link>
			<Link href="#" underline="hover" className="linkNav">Quienes Somos</Link>
			<Link href="#" underline="hover" className="linkNav">Galeria</Link>
			<Link href="#" underline="hover" className="linkNav">Contacto</Link>
			<CartWidget />
		</nav>
	)
}

=======
import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "@mui/material";



const Navbar = () => {
	return (
		<nav>
			<Link href="#" underline="hover" className="linkNav">Productos</Link>
			<Link href="#" underline="hover" className="linkNav">Quienes Somos</Link>
			<Link href="#" underline="hover" className="linkNav">Galeria</Link>
			<Link href="#" underline="hover" className="linkNav">Contacto</Link>
			<CartWidget />
		</nav>
	)
}

>>>>>>> 3895d08b2a16e4fa6e10f5b7fa15eb4e6507101c
export default Navbar