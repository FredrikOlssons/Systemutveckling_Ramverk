import { useContext, CSSProperties, FC } from 'react'
import { CartContext } from '../context/cartProvider'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


interface Props {

}

const MiniCartStartpage: FC<Props> = (props) => {
  const { cartItems, addToCart, removeFromCart, removeProductFromCart, totalPriceAllProduct } = useContext(CartContext)

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>

      <Grid>
        <List style={cartItemsStyle}>

          {
            cartItems.map((cartItem) => {
              return (
                <ListItem key={cartItem.product.id} style={{ ...cartItemStyle }}>

                  <ListItemAvatar style={cartImgDiv}><img src={cartItem.product.image} style={cartImageStyle} />
                    <div style={{ ...cartTitleStyle }}>{cartItem.product.title}</div>
                  </ListItemAvatar>

                  <div style={textbox}>
                    <div style={qtyBox}>
                      <IconButton style={buttons} edge="end" aria-label="delete"><RemoveIcon onClick={() => removeFromCart(cartItem.product)} /></IconButton>
                      <p style={quantity}>{cartItem.quantity}</p>
                      <IconButton style={buttons} edge="end" aria-label="delete"><AddIcon onClick={() => addToCart(cartItem.product)} /></IconButton>
                      <IconButton style={buttons} edge="end" aria-label="delete"><DeleteIcon onClick={() => removeProductFromCart(cartItem.product)} /></IconButton>
                    </div>
                  </div>
                </ListItem>
              )
            })}
        </List>
        <div >
          <p id='totalPrice' onChange={() => { totalPriceAllProduct() }}>Totalsumma: {totalPriceAllProduct()} kr </p>
        </div>
      </Grid>
    </Box >
  )
}

const cartItemsStyle: CSSProperties = {
  width: "100%",
  display: 'flex',
  flexDirection: 'column',
}

const cartItemStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

const textbox: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
}

const cartImgDiv: CSSProperties = {
  display: 'flex',
  width: '100%',
  minWidth: '50px',
  alignItems: 'center',
  columnGap: '15%',
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
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
}

const buttons: CSSProperties = {
  alignContent: 'center',
}

const qtyBox: CSSProperties = {
  padding: '0px',
  display: 'flex',
  alignContent: 'center',
  textAlign: 'center',
  justifyContent: 'flex-end',
  columnGap: '15px',
}


export default MiniCartStartpage