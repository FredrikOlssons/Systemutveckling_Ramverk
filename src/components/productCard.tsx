
import { FC, CSSProperties, useContext } from "react";
import { products, Product } from "../data/products";
import Button from '@material-ui/core/Button'; 
import { Link } from 'react-router-dom';
import { CartContext } from "./context/cartProvider";
import { Alert, AlertTitle, Snackbar, Stack } from "@mui/material";
import React from "react";





interface Props {
    products: Product
}

const RenderProduct: FC<Props> = (props) => {

    const { addToCart } = useContext(CartContext)

  
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

     
    return(
        
        <div style={productContainer}>
            

            <Link style={{textDecoration:'none'}} to={`/${props.products.id}`}>
                <img src={props.products.image} style={imageStyle}/>
            
                <div style={productInfo}>
                    <h2 style={{...title}}>{props.products.title}</h2>
                    <h3>{props.products.price} kr</h3>
                </div>
            </Link>
                <Stack spacing={2} sx={{ width: '100%' }}>
                <div onClick={handleClick} >

                <Button variant="contained"  onClick={() => addToCart(props.products)} color="primary">Köp</Button>
                </div>
                
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Produkten har lagts i kundkorgen!
                    </Alert>
                </Snackbar>
                </Stack>
               
        </div>

    ); 
}



const title: CSSProperties = {
    height: '60px', 
    fontSize: '20px', 
    
    
}

const imageStyle: CSSProperties = {
    height: '50%',
    width: '90%',
    cursor: "pointer",
    borderRadius: "15px",
    minWidth: '150px',
}

const productInfo: CSSProperties = {
    textAlign: 'center',
    padding: "3%",
    cursor: "pointer",
    fontSize: '12px',
    color: 'black'
    
}

const productContainer: CSSProperties = {
    width: "25%",
    paddingTop: "10px",
    border: "3px solid black",
    borderRadius: "15px",
    boxShadow: "rgb(254 254 254) 0px 20px 30px -10px",
    paddingBottom: '10px',
    backgroundColor: 'white',
    minWidth: '250px'
    

}





export default RenderProduct

function setItemsInCart(): void {
    throw new Error("Function not implemented.");
}
