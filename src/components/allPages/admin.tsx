import { Box } from "@mui/system";
import { FC, CSSProperties } from "react";
import { products, Product } from "../../data/products";
import RenderProduct from "../productCard";


interface Props {
    products: Product
}

const Admin: FC<Props> = (props) => {


    return (
        
        <div>
            <h1 style={title}> Admin sida </h1>
            <div style={Container}>
                
                <Box style={productContainer}>
                
                   
                
                </Box>
            </div>
        </div>
        
    )
}


const title: CSSProperties = {
    display: "flex", 
    justifyContent: "center",
    margin: "40px",
    color: "silver",
    fontFamily: "Frijole, cursive",

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


const Container: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
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

export default Admin 