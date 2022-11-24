import React from "react";
import imgLogo from "../img/lemonies.jpg";
import { NavLink } from "react-router-dom"



function Brand (){
	return (
		<NavLink to="/">
		<img src={imgLogo} alt="logo de Lemonies" />
		</NavLink>
	)
}

export default Brand