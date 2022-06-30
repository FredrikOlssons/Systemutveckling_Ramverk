
import React, {useContext, CSSProperties, FC} from 'react'
import { CartContext } from '../context/cartProvider'
import { CartItem } from '../interfaces/cartItem'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Props {
    
  }
  
  
  const MiniCart: FC<Props> = (props) => {

    const {cartItems, addToCart, removeFromCart, removeProductFromCart, totalPriceAllProduct } = useContext(CartContext)
    
  
  

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      

      <Grid>
        <List style={cartItemsStyle}>
        
          {
            cartItems.map((cartItem) => {
              return (
                <ListItem key={cartItem.product.id} style={{ ...cartItemStyle }}> 

                
                    <div style={{ ...cartTitleStyle }}>{cartItem.product.title}</div>
                  <ListItemAvatar style={cartImgDiv}><img src={cartItem.product.image} style={cartImageStyle} /></ListItemAvatar>
                  <>
                    <div style={textbox}>
                      <ListItemText style={column} />
                    </div>

                    
                  </>

                    <div style={qtyBox}>
                    <IconButton edge="end" aria-label="delete"><RemoveIcon onClick={() => removeFromCart(cartItem.product)} /></IconButton>
                    <p style={quantity}>Antal: {cartItem.quantity}</p>
                    <IconButton edge="end" aria-label="delete"><AddIcon onClick={() => addToCart(cartItem.product)} /></IconButton>
                    <IconButton edge="end" aria-label="delete"><DeleteIcon onClick={() => removeProductFromCart(cartItem.product)}/></IconButton>
                  
                    
                </div>
                </ListItem>
              )
            })}
        </List>
              
                <div >
                    <p id='totalPrice' onChange={() => {totalPriceAllProduct()}}> Totalsumma: {totalPriceAllProduct()} kr </p>
                </div>
               
      </Grid>
    </Box >
    )
  
  }

const cartItemsStyle: CSSProperties = {
  width: "100%",
  display: 'flex',
  flexDirection: 'column',
  columnGap: '5%',
  marginRight: '70px',
  flexWrap: 'wrap'
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
  width: '70%',
  
}

const quantity: CSSProperties = {
  marginLeft: '15px',
}


const totalPrice: CSSProperties = {
  marginBottom: '100px',
}

const qtyBox: CSSProperties = {
  padding: '0px',
  display: 'flex',
  alignItems: 'space-between',

}


export default MiniCart