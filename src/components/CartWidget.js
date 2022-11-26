import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from "@mui/material/";
import { useContextProvider } from "../hooks/Hooks";


const badgeStyle = {
    margin: "10px",
    width: "15px",
    height: "15px",
    padding: "10px",
    color: "#000",
}


const CartWidget = () => {

    const value = useContextProvider()
    const carrito = value.productos
    const [menu, setMenu] = value.menu;

    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
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
    )
}

export default CartWidget