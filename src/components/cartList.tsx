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
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Title } from '@material-ui/icons';
import { CSSProperties } from "react";


import Potatoes from '../assets/potatis.jpg'
import Valium from '../assets/619RlSBZL4L._SS500_.jpg'
import Self from '../assets/man-with-question-mark.jpg'
import { minWidth, textAlign } from '@material-ui/core/node_modules/@material-ui/system';

export interface Cartitem {
  id: number
  title: string
  image: string
  description: string
  price: number
}

export const items: Cartitem[] = [
  {
    id: 1,
    title: "Sense of self",
    image: Self,
    description: "Självkänsla på burk.",
    price: 247
  },
  {
    id: 2,
    title: "Potatis",
    image: Potatoes,
    description: "Vital föda.",
    price: 16
  },
  {
    id: 3,
    title: "Valium",
    image: Valium,
    description: "Också vital föda.",
    price: 346
  },

]

export default function CartList() {
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
            items.map((cartItems) => {
              return (

                <ListItem style={{ ...cartItemStyle }}> 

                
                  <ListItemAvatar style={cartImgDiv}><img src={cartItems.image} style={cartImageStyle} /></ListItemAvatar>
                  <>
                    <div style={textbox}>
                      <div style={{ ...cartTitleStyle }}>{cartItems.title}</div>
                      <ListItemText style={column} secondary={secondary ? getShortTextVersion(cartItems.description) : null} />
                    </div>

                    <div style={{ ...cartPriceStyle }}>{cartItems.price} kr</div>
                  </>

                    <IconButton edge="end" aria-label="delete"><AddIcon /></IconButton>
                    <p style={quantity}> 10{/* {cartItems.quantity} */} </p>
                    <IconButton edge="end" aria-label="delete"><RemoveIcon /></IconButton>
                    <IconButton edge="end" aria-label="delete"><DeleteIcon /></IconButton>

                
                </ListItem>

              )
            })}
        </List>
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
