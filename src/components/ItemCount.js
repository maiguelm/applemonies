import { Button } from "@mui/material";
import { useState } from "react"


function ItemCount() {
	const [count, setCount] = useState(0);

	const handleMore = () => {
		setCount(count + 1)
	}

	const handleLess = () => {
		if (count > 0){
		setCount(count - 1)
		}
	}

	return (<>
		<div>
			<div className="counter__buttons">
			<Button onClick={handleMore}>+</Button>
			<p>{count}</p>
			<Button onClick={handleLess}>-</Button>
			</div>
			<Button>AGREGAR AL CARRITO</Button>
		</div>
	</>)
}

export default ItemCount