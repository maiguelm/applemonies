import React from "react";
import { Routes , Route } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer";
import Home from "./Home";
import { Carrito } from "../components/Carrito";
import { Compra } from "./Compra";


const Main = () => {
	return (
			<main>
				<Routes>
	
					<Route path='/' element={<Home/>}/>
					
					<Route path="/productos" element={<ItemListContainer greeting="Todos los productos"/>}/>
	
					<Route path="/productos/:categoria" element={<ItemListContainer greeting=""/>}/>

					<Route path="/item/:id" element={<ItemDetailContainer />}/>

					<Route path='/carrito' element={<Carrito />}/> 
					
 					<Route path='/compra' element={<Compra />}/> 
	
					<Route path='*' element={<h4>La página indicada no existe!</h4>}/>
	
				</Routes>
			</main>
		)
	}
export default Main