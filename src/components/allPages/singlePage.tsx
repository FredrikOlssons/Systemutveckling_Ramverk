
import React from 'react'; 
import RenderProduct from "../functions/renderProduct";
import {product, Products} from '../../data/products'
import {useParams, Navigate } from 'react-router-dom';
import { CSSProperties, FC } from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'; 



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
                <h4>{foundProduct.description}</h4>
                
                <div style={priceDiv}>
                   
                    <h4>Pris: {foundProduct.price} kr</h4>
                    <Button variant="contained" color="primary">Lägg i kundvagn</Button>

                </div>
            </div>

        <div>
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
    marginBottom: "40px",
    marginTop: "40px", 
    margin: "auto",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "40px"
    
}

const imageStyle: CSSProperties = {
    height: '400px',
    width: '400px',

}


const productInfo: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: "15px",
    padding: "40px",
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"
}


const priceDiv: CSSProperties = {
    display: "flex",
    justifyContent: "end",
    gap: "30px",
    marginTop: "25px",
    flexWrap: "wrap"
}






export default SinglePage 