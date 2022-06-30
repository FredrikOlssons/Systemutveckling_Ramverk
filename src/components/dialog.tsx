import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CartContext } from './context/cartProvider';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const { confirmPurchase, customer, deliveryAlt, payment } = useContext(CartContext)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      {
        customer && deliveryAlt && payment ? <Button variant="outlined" onClick={() => {handleClickOpen(), confirmPurchase() }}>
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
          {"Tack!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Din order är bekräftad
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={() => {handleClose(), confirmPurchase()}} autoFocus>
            Tack för att jag fick handla av er
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}