import React from "react";
import Brand from "../components/Brand";
import Navbar from "./NavBar";
import { NavLink } from "react-router-dom"


const Header = () => {
	return <header>
		<NavLink to="/" className="linkNav">
			<h1>LEMONIES</h1>
		</NavLink>
		<Navbar />
		<Brand />
	</header>
}

export default Header