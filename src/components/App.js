import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer";


function App() {
	return(
	<> 
		<Header />
		<ItemListContainer 
			nombre={prompt("Ingrese su nombre")}
		/>
		<Footer />
	</>
	)
}

export default App