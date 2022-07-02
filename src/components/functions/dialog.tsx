import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CartContext } from '../context/cartProvider';
import { Link } from 'react-router-dom';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const { confirmPurchase, cartItems, customer, deliveryAlt, payment } = useContext(CartContext)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      {
        (cartItems.length > 0) && customer && deliveryAlt && payment ? <Button variant="outlined" onClick={() => {handleClickOpen(), confirmPurchase() }}>
        Slutför köp
       </Button> : undefined
      }
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tack för din beställning!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Din order är bekräftad & kommer att packas och skickas inom kort! 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Link to={"/"} >
          <Button onClick={() => handleClose()} autoFocus>
            Till startsidan ☞
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}