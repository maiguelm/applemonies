import React, { useState } from "react";
import Header from "../pages/Header"
import Footer from "../pages/Footer"
import { BrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import ContextProvider from "./ContextProvider"
import { Carrito } from "./Carrito";
import { Compra } from "../pages/Compra";


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