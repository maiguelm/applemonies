import { Button } from "@mui/material";
import { useState } from "react"
import { useContextProvider } from "./hooks/Hooks";


function ItemCount({handleOnAdd}) {
	const contextValue = useContextProvider()

	const [count, setCount] = useState(0);

	const handleMore = () => {
		setCount(count + 1)
	}

	const handleLess = () => {
		if (count > 0){
		setCount(count - 1)
		}
	}

	const addCart = () =>{
		handleOnAdd(count)
		console.log("Agregar al carrito")
	}

	return (<>
		<div>
			<div className="counter__buttons">
			<Button onClick={handleMore}>+</Button>
			<p>{count}</p>
			<Button onClick={handleLess}>-</Button>
			</div>
			<Button onClick={addCart}>Confirmá la Cantidad!!</Button>
		</div>
	</>)
}

export default ItemCount