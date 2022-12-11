import { Button } from "@mui/material";
import { useState } from "react"

function ItemCount({ handleOnAdd, habilitar }) {
	const [count, setCount] = useState(1)

	const handleMore = () => {
		setCount(count + 1)
		habilitar(false)
	}

	const handleLess = () => {
		if (count > 1) {
			setCount(count - 1)
			habilitar(false)
		}
	}

	const addCart = () => {
		handleOnAdd(count)
		habilitar(true)
	}

	return (

		<div>
			<div className="counter__buttons">
				<Button onClick={handleMore}>+</Button>
				<p>{count}</p>
				<Button onClick={handleLess}>-</Button>
			</div>
			<Button onClick={addCart}>Confirmá la Cantidad!!</Button>
		</div>
	)
}

export default ItemCount