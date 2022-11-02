import React from "react";
import Brand from "./Brand";
import Navbar from "./NavBar";
import { NavLink } from "react-router-dom"


const Header = () => {
	return <header>
		<NavLink to="/">
			<h1>LEMONIES</h1>
		</NavLink>
		<Navbar />
		<Brand />
	</header>
}

export default Header