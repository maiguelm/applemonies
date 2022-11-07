import React, { createContext } from "react";
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

export const contexto = createContext()

const { Provider } = contexto

function App() {

	return (
		<>
			<Provider>
				<BrowserRouter>
					<Header />
					<Main />
					<Footer />
				</BrowserRouter>
			</Provider>
		</>
	)
}

export default App