import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";



function App() {

	return (
		<>
			<BrowserRouter>
				<Header />
				<Main />
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App