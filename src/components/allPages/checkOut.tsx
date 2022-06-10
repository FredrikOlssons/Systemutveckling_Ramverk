
import { Box, Button } from "@mui/material";
import { height } from "@mui/system";
import { FC, CSSProperties, useContext } from "react";
import ValidationSchemaExample from '.././formField'
import Delivery from "../options/delivery";
import "../../style/hero.css"
import { Payment } from '../options/payment'
import Cartlist, {displayProductsInCart} from '../cartList'
import { CartContext } from "../context/cartProvider";
import { Product, products } from '../../data/products'





interface Props {
    products: Product
    
}

const CheckOut: FC<Props> = (props) => {
    
    const { removeFromCart, cartItems, totalPrice} = useContext(CartContext)

    return (
        <>
        <div>
            <h1 style={title}> Checka-ut sidan </h1>
            
            <div style={Container}>
                <div>
                <Box style={firstBox}>
                    <h2>Varukorg</h2>
                    <Cartlist/>
                    </Box>
                        
                <Box style={secondBox}>
                <h3>Fyll i dina kontaktuppgifter:</h3>
                  <div style={contactForm}>
                    <ValidationSchemaExample/>
                  </div>
                </Box>

                <Box style={secondBox}>
                <h3>Fraktalternativ:</h3>
                <Delivery />
                </Box>
                
                <Button variant="contained" onClick={() => removeFromCart(props.products)} color="primary">remove product </Button>
                <Button variant="contained" onClick={() => totalPrice()} color="primary">product </Button>
                <Box style={secondBox}>)

                <h3>Betalningsalternativ:</h3>

                <Payment /> 

                </Box>
                </div>

                <Box style={litleBox}>
                    <h2>Summa</h2>
                    <h3>Totalsumma (inkl. moms): </h3>
                    <h3>Frakt: </h3>
                    <h3>Betalningssätt: </h3>

                    <div style={buttonStyle}>
                    <Button variant="contained" color="primary">Slutför köp</Button>
                    </div>
                </Box>
            </div>
        </div>
        </>
    )
}



const firstBox: CSSProperties = {
    //width: "60%",
    height: 'fit-content',
    border: "1px solid black",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "15px",
    marginBottom: "20px",
    marginLeft: "10px",
    padding: "10px",
    backgroundColor: "white",
    minWidth: '300px',
}


const secondBox: CSSProperties = {
    //width: "60%",
    border: "1px solid black",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "15px",
    marginBottom: "20px",
    marginLeft: "10px",
    padding: "10px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    minWidth: '300px',
    flexWrap: 'wrap',
}




const title: CSSProperties = {
    display: "flex", 
    justifyContent: "center",
    margin: "40px",
    color: "silver",
    fontFamily: "Frijole, cursive",

}

const litleBox: CSSProperties = {
    width: "30%",
    border: "1px solid black",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "15px",
    padding: "10px",
    backgroundColor: "white",
    minWidth: '300px',
    height: 'fit-content',
    marginBottom: '60px',
}


const Container: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
}




const buttonStyle: CSSProperties = {
    display: "flex", 
    justifyContent: "center",
    marginTop: "40px",
    
}

const contactForm: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: '15px',
    width: '100%',
    marginTop: '5%',
    color: 'darkgray',
}


export default CheckOut 