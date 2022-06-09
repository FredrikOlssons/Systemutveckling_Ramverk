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


import Potatoes from '../assets/potatis.jpg'
import Valium from '../assets/619RlSBZL4L._SS500_.jpg'
import Self from '../assets/man-with-question-mark.jpg'

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
        description: "Sense of self.",
        price: 247
    },
    {
        id: 2,
        title: "Potatis",
        image: Potatoes,
        description: "Potatis.",
        price: 16
    },
    {
        id: 3,
        title: "Valium",
        image: Valium,
        description: "Valium.",
        price: 346
    },

]


/* function generate(element: React.ReactElement) {
  return [product].map((value) =>
  
    React.cloneElement(element, {
      title: value,

    }),
  );
}
 */


/* 
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
})); */

export default function CartList() {
    /*  const [dense, setDense] = React.useState(false); */
    const [secondary, setSecondary] = React.useState(false);

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
            <Grid container spacing={2}>
   <Grid item xs={12} md={6}>
     <Demo>
       <List>
            {
                items.map((cartItems) => {
                    return (
                        <div>
                            <div>{cartItems.id}</div>
                            <div>{cartItems.title}</div>
                            <div>{cartItems.price}</div>
                            <div>{cartItems.description}</div>
                            <div>{cartItems.image}</div>
                        </div>
                    )
                })}
            </Box>)


      }




















/*  <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
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
 <Grid container spacing={2}>
   <Grid item xs={12} md={6}>
     <Demo>
       <List>

       
         {generate(
           <ListItem
        
           secondaryAction={
               <IconButton edge="end" aria-label="delete">
                 <DeleteIcon />
               </IconButton>
             }
           >
             <ListItemAvatar> {/* lägg in bild }
               <Avatar>
                 <FolderIcon />
               </Avatar>
             </ListItemAvatar>
             
             <ListItemText /* lägg in description 
               primary= {title}
               secondary={secondary ? 'Secondary text' : null}
             />
           </ListItem>,
         )}
       </List>
     </Demo>
   </Grid>
 </Grid>
</Box>
*/