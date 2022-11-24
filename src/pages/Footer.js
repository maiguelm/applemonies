import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

function Footer() {
	return (<footer>
		<p><CopyrightOutlinedIcon /> Todos los derechos reservados</p>
		<p>Seguinos en nuestras redes</p>
		<ul className="icons__footer"> 
			<a href="#"><FacebookOutlinedIcon /></a>
			<a href="#"><InstagramIcon /></a>
			<a href="#"><TwitterIcon /></a>
		</ul>
	</footer>
	)
}

export default Footer