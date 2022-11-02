import React from "react";
import { Routes , Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import Home from "./Home";


const Main = () => {
	return (
			<main>
				<Routes>
	
					<Route path='/' element={<Home/>}/>
					
					<Route path="/productos" element={<ItemListContainer greeting="Todos los productos"/>}/>
	
					<Route path="/productos/:categoria" element={<ItemListContainer greeting=""/>}/>

					<Route path="/productos/:elementId" element={<ItemDetailContainer/>}/>
					
					{/* <Route path='/carrito' element={<Carrito/>}/> */}
	
					<Route path='*' element={<h1>404</h1>}/>
	
				</Routes>
			</main>
		)
	}
export default Main