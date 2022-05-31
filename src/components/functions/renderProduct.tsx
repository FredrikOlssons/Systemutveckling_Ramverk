
import { FC, CSSProperties } from "react";
import { Products } from "../../data/products";
import Button from '@material-ui/core/Button'; 


interface Props {
    product: Products
}

const renderProduct: FC<Props> = (props) => {

    return(
        <div style={productContainer}>

            <img src={props.product.image} style={imageStyle}/>

            <div style={productInfo}>
                <h2>{props.product.title}</h2>
                <h3>{props.product.price} kr</h3>
                <Button variant="contained" color="primary">Köp</Button>
            </div>
        </div>
    ); 
}



const imageStyle: CSSProperties = {
    height: '250px',
    width: '250px',
    cursor: "pointer",
    borderRadius: "15px"
}

const productInfo: CSSProperties = {
    textAlign: 'center',
    padding: "15px",
    cursor: "pointer"

}

const productContainer: CSSProperties = {
    width: "300px",
    paddingTop: "10px",
    border: "3px solid black",
    borderRadius: "15px",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
}





export default renderProduct