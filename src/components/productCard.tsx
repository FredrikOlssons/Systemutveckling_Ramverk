
import { FC, CSSProperties } from "react";
import { product, Products } from "../data/products";
import Button from '@material-ui/core/Button'; 
import { Link } from 'react-router-dom';
import addToCart from "./functions/addToCart";


interface Props {
    product: Products
}

const RenderProduct: FC<Props> = (props) => {

    return(
        
        <div style={productContainer}>
            

            <Link style={{textDecoration:'none'}} to={`/${props.product.id}`}>
            <img src={props.product.image} style={imageStyle}/>

            <div style={productInfo}>
                <h2 style={{...title}}>{props.product.title}</h2>
                <h3>{props.product.price} kr</h3>
            </div>
                </Link>
                <Button variant="contained" onClick={() => addToCart(product)} color="primary">Köp</Button>
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
    padding: "15px",
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
    minWidth: '200px'
    

}





export default RenderProduct