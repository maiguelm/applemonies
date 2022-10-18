import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {IconButton,Badge} from "@mui/material/";


const badgeStyle={
    margin: "10px",
    width:"15px",
    height:"15px",
    padding: "10px",
    color:"#000",
}


const CartWidget = () => {
	return (
        <IconButton sx={badgeStyle}>
            <Badge anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                badgeContent={1} 
                color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
	)
}

export default CartWidget