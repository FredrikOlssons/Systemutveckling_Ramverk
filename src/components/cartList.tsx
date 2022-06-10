import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Title } from '@material-ui/icons';

import { CSSProperties, useContext } from "react";


import Potatoes from '../assets/potatis.jpg'
import Valium from '../assets/619RlSBZL4L._SS500_.jpg'
import Self from '../assets/man-with-question-mark.jpg'
import { minWidth, textAlign } from '@material-ui/core/node_modules/@material-ui/system';

import CartProvider from '../components/context/cartProvider'
import { CartContext } from '../components/context/cartProvider';
import {CartItem} from './cartItem'






export function displayProductsInCart() {
  const { cartItems } = useContext(CartContext)
  console.log(cartItems)


}






interface Props {
  cartItems: CartItem
}


export default function CartList() {
  const {cartItems, addToCart, removeFromCart, removeProductFromCart, totalPrice, totPricePerProduct} = useContext(CartContext)
  const [secondary, setSecondary] = React.useState(false);

  const getShortTextVersion: (text: string) => string = (text) => {
    let splittedText = text.substring(0, 100) + "..."
    return splittedText
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Visa produktbeskrivning"
        />
        
      </FormGroup>

      <Grid>
        <List style={cartItemsStyle}>
        
          {
            cartItems.map((cartItem) => {
              return (
                <ListItem key={cartItem.product.id} style={{ ...cartItemStyle }}> 

                
                  <ListItemAvatar style={cartImgDiv}><img src={cartItem.product.image} style={cartImageStyle} /></ListItemAvatar>
                  <>
                    <div style={textbox}>
                      <div style={{ ...cartTitleStyle }}>{cartItem.product.title}</div>
                      <ListItemText style={column} secondary={secondary ? getShortTextVersion(cartItem.product.description) : null} />
                    </div>

                    <div style={{ ...cartPriceStyle }}> Pris: {totPricePerProduct(cartItem.product)}kr</div>
                  </>


                    <IconButton edge="end" aria-label="delete"><AddIcon onClick={() => addToCart(cartItem.product)}/></IconButton>
                    <p style={quantity}>Antal: {cartItem.quantity}</p>
                    <IconButton edge="end" aria-label="delete"><RemoveIcon onClick={() => removeFromCart(cartItem.product)} /></IconButton>
                    <IconButton edge="end" aria-label="delete"><DeleteIcon onClick={() => removeProductFromCart(cartItem.product)}/></IconButton>
                
                    
                </ListItem>
              )
            })}
        </List>
              
                <div >
                    <p id='totalPrice' onChange={() => {totalPrice()}}>Totalsumma: {totalPrice()} kr </p>
                </div>
               
      </Grid>
    </Box >)
}


const cartItemsStyle: CSSProperties = {
  width: "100%",
  display: 'flex',
  flexDirection: 'column',
  columnGap: '5%'
}

const cartItemStyle: CSSProperties = {
  display: 'flex',
  
}

const textbox: CSSProperties = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

}

const column: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap'
}

const cartImgDiv: CSSProperties = {
  width: '15%',
  minWidth: '50px',
}

const cartImageStyle: CSSProperties = {
  width: "50px",
  height: '50px',
  borderRadius: '15px',
  flex: '1',
}

const cartTitleStyle: CSSProperties = {
  width: '50%',
  
}

const cartPriceStyle: CSSProperties = {
  color: 'darkgray',
  minWidth: '50px'
}

const quantity: CSSProperties = {
  marginLeft: '10px'
}
