import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function ItemListContainer(prop) {
  
  let saludo = prop.nombre

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	  console.log("hhj")
	};
	return (
		<div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Dinos tu nombre!!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Quien sos?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Introduce tu nombre"
            type="name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Aceptar</Button>
        </DialogActions>
      </Dialog>
	  <p>Hola {saludo}</p>
    </div>

	)
}

export default ItemListContainer