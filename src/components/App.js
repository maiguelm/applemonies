import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import { app, dataBase } from "./Firebase"
import ContextProvider from "./ContextProvider"
import { Carrito } from "./Carrito";
import CartContext from "./CartContext";


function App() {

	return (
		<>
				<ContextProvider>
					<BrowserRouter>
						<Header />
						<Main />
						<Carrito />
						<Footer />
					</BrowserRouter>
				</ContextProvider>
		</>
	)
}

export default App