
import React from 'react'; 

import RenderProduct from "../productCard";

import {product, Products} from '../../data/products'
import {useParams, Navigate } from 'react-router-dom';
import { CSSProperties, FC } from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'; 
import { BorderColor } from '@material-ui/icons';
import { borderColor, height, width } from '@mui/system';
import { minWidth } from '@material-ui/core/node_modules/@material-ui/system';
//import addToCart from '../functions/addToCart';



interface Props {}

const SinglePage: FC<Props> = (props) => {

    const { productId } = useParams(); 

    const foundProduct = product.find((singleProduct) => Number(productId) == singleProduct.id) 

    if(!foundProduct) {
        return <Navigate to="/" />
    }


    return (
        
        <span style={singleProductContainer}>
            <span style={imgDiv}>
                <div style={cover}>
            <img src={foundProduct.image} style={imageStyle}/>
                </div>
            </span>
            <div style={productInfo}>
                <h2>{foundProduct.title}</h2>
                <h3 style={description}>{foundProduct.description}</h3>
                
                <div style={priceDiv}>
                    <h3>Pris: {foundProduct.price} kr</h3>
                    <Button onClick={() => setItemsInCart} variant="contained" color="primary" id='purchaseButton'>Lägg i kundvagn</Button>
                </div>
            </div>
        </span>
    )
}


const singleProductContainer: CSSProperties = {
    height: 'auto',
    width: "70%", 
    display: "flex", 
    flexDirection: "row",
    //justifyContent: "center",
    paddingBottom: "10vh",
    paddingTop: "5vh", 
    margin: "auto",
    flexWrap: "wrap",
    alignItems: "center",
    //gap: "40px",
    minWidth: '300px'
   
}

const imgDiv: CSSProperties = {
    paddingTop: '16px',
    borderLeft: 'solid',
    borderRight: 'solid',
    borderTop: 'solid',
    width: '40%',
    zIndex: '1',
    borderLeftColor: 'silver',
    borderTopColor: 'silver',
    borderRightColor: 'silver',
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    minWidth: '300px'
    
}  

const cover: CSSProperties = {
    width: '100%',
    display: 'flex', 
    justifyContent: 'center',
        height: '100%',
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        marginBottom: '-3px',
        backgroundColor: 'black',
    }
    
const imageStyle: CSSProperties = {
    minHeight: '276px',
    minWidth: '276px',
    width: '90%',
    //borderRadius: "30px",
    borderColor: 'silver',
    border: 'solid',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
   // boxShadow: '5px 10px white',
   
}


const productInfo: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    //borderRadius: "15px",
    padding: "4%",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    border: 'solid',
    borderColor: 'silver',
    color: 'silver',
    width: '80%',
    fontStretch: 'expanded',
    //borderTopRightRadius: "30px",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    borderTopRightRadius: '30px',
    minWidth: '300px',
}


const priceDiv: CSSProperties = {
    display: "flex",
    justifyContent: "end",
    gap: "30px",
    marginTop: "25px",
    flexWrap: "wrap",
    color: 'silver'
}

const description: CSSProperties = {
    width: '70%',
    textAlign: 'justify',
    minWidth: '300px',
}




export default SinglePage 

function setItemsInCart(): void {
    throw new Error('Function not implemented.');
}
