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
			<a href="https://www.facebook.com/"><FacebookOutlinedIcon /></a>
			<a href="https://www.instagram.com/"><InstagramIcon /></a>
			<a href="https://twitter.com/?lang=es"><TwitterIcon /></a>
		</ul>
	</footer>
	)
}

export default Footer