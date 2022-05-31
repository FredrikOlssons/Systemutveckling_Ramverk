
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

        <Link style={{textDecoration:'none'}} to={"/"}>
        <img src={foundProduct.image} style={imageStyle}/>

        <div style={productInfo}>
            <h2 style={{...title}}>{foundProduct.title}</h2>
            <h3>{foundProduct.price} kr</h3>
        </div>
            </Link>
            <Button variant="contained" color="primary">Lägg i kundvagn</Button>
    </div>
    )
}


const singleProductContainer: CSSProperties = {
    height: '600px',
    width: '600px', 
}

const imageStyle: CSSProperties = {
    height: '400px',
    width: '400px',

}


const productInfo: CSSProperties = {
    
}


const title: CSSProperties = {
    
}








export default SinglePage 