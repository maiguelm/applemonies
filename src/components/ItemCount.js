import { Button } from "@mui/material";
import { useState } from "react"

function ItemCount() {
	const [count, setCount] = useState(0);



	return (<>
		<div>
			<div>
			<Button onClick={() => setCount(count => count + 1)}>+</Button>
			<p>{count}</p>
			<Button onClick={() => setCount(count => count - 1)}>-</Button>
			</div>
			<Button>AGREGAR AL CARRITO</Button>
		</div>
	</>)
}

export default ItemCount