import { FC, CSSProperties } from "react";
import RenderProduct from "./functions/renderProduct";
import { product } from "../data/products";






const Content: FC = (props) => {
    return ( 
        <>
        <div style={productHeader}>
        <h1>Välkommen till Company Name</h1>
        <h3>Slogan</h3>

        </div>
        <div style={productContainer}>
            {product.map((products) => <RenderProduct key={products.id} product={products} />)}
        </div>
        </>
    )
}



const productContainer: CSSProperties = {
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
    rowGap: '80px',
    columnGap: '50px',
    padding: '50px'
}

const productHeader: CSSProperties = {
    textAlign: 'center'
}


export default Content 