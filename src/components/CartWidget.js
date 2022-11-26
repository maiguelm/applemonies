import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from "@mui/material/";
import { contexto, useCarrito } from "./ContextProvider";


const badgeStyle = {
    margin: "10px",
    width: "15px",
    height: "15px",
    padding: "10px",
    color: "#000",
}


const CartWidget = () => {

    const valorDelContexto = useContext(contexto)
    const [carrito] = valorDelContexto.productos
    const [menu, setMenu] = valorDelContexto.menu;

    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        /*         <Link to="./carrito"> */
        <IconButton sx={badgeStyle} onClick={toogleMenu}>
            <Badge anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
                badgeContent={carrito.length}
                color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>

        /*         </Link> */
    )
}

export default CartWidget