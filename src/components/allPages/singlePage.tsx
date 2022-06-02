
import React from 'react'; 
//import RenderProduct from "../productCard";
import {product, Products} from '../../data/products'
import {useParams, Navigate } from 'react-router-dom';
import { CSSProperties, FC } from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'; 
import addToCart from '../functions/addToCart';



interface Props {}

const SinglePage: FC<Props> = (props) => {

    const { productId } = useParams(); 

    const foundProduct = product.find((singleProduct) => Number(productId) == singleProduct.id) 

    if(!foundProduct) {
        return <Navigate to="/" />
    }


    return (
        
        <div style={singleProductContainer}>

            <img src={foundProduct.image} style={imageStyle}/>

            <div style={productInfo}>
                <h2>{foundProduct.title}</h2>
                <h3>{foundProduct.description}</h3>
                
                <div style={priceDiv}>
                   
                    <h3>Pris: {foundProduct.price} kr</h3>
                    <Button onClick={() => addToCart(foundProduct)} variant="contained" color="primary" id='purchaseButton'>Lägg i kundvagn</Button>

                </div>
            </div>

        </div>
    )
}


const singleProductContainer: CSSProperties = {
    height: 'auto',
    width: "70%", 
    display: "flex", 
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: "40px",
    paddingTop: "40px", 
    margin: "auto",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "40px"
    
}

const imageStyle: CSSProperties = {
    height: '400px',
    width: '400px',
    borderRadius: "30px"

}


const productInfo: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    padding: "35px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
}


const priceDiv: CSSProperties = {
    display: "flex",
    justifyContent: "end",
    gap: "30px",
    marginTop: "25px",
    flexWrap: "wrap"
}






export default SinglePage 