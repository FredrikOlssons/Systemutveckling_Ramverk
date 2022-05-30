
import { FC, CSSProperties } from "react";
import { Products } from "../../data/products";


interface Props {
    product: Products
}

const renderProduct: FC<Props> = (props) => {

    return(
        <div>

            <img src={props.product.image} style={imageStyle} />

            <div style={productInfo}>
                <h2>{props.product.title}</h2>
                <h3>{props.product.price} Kr</h3>
            </div>
        </div>
    ); 
}



const imageStyle: CSSProperties = {
    height: '300px',
    width: '300px'
}

const productInfo: CSSProperties = {
    textAlign: 'center',

}





export default renderProduct