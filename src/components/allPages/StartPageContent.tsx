import { FC, CSSProperties } from "react";
import RenderProduct from "../productCard";
import { product } from "../../data/products";
import Hero from '../Hero';






const Content: FC = (props) => {
    return ( 
        <>
        <Hero/>
        <div style={productHeader}>
            
        <h1>Välkommen till Company Name</h1>
        <h2>Där spelkvällar med familjen blir roliga igen! </h2>

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
    textAlign: 'center',
    padding: "15px"
}


export default Content 