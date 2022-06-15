
import React, { Component } from 'react'
import { Box, Button } from "@mui/material";
import { FC, CSSProperties, useContext } from "react";
import Delivery from "../options/delivery";
import "../../style/hero.css"
import { Payment } from '../options/payment'
import Cartlist from '../functions/cartList'
import { Product, products } from '../../data/products'
import { CartContext } from "../context/cartProvider";
import ValidationSchemaExample from "../formField";
import { paymentList } from "../../data/payment";
import  AlertDialog  from '../dialog'



interface Props {
    products: Product
    
}

/* const openDialog: () => {
   
} */


const CheckOut: FC<Props> = (props) => {
    
    const { totalPrice, cartItems, deliveryAlt, payment, calcVat, confirmPurchase } = useContext(CartContext)

    return (
        <>
        <div>
            <h1 style={title}> Checka-ut sidan </h1>
            
            <div style={Container}>
                <div>
                    <Box style={firstBox}>
                        <h2 style={{textAlign: "center"}}>Varukorg</h2>
                        <hr style={{width: "85%", margin: "auto"}} />
                        <br />
                        {
                        cartItems.length == 0 ? <h4>Kundvagnen är tom 🤷 </h4> : undefined
                        }
                        <Cartlist/>

                    </Box>
                            
                    <Box style={secondBox}>
                    <h3 style={{textAlign: "center"}}>Fyll i dina kontaktuppgifter</h3>
                    <hr style={{width: "85%", margin: "auto"}} />
                    <br />
                    <div style={contactForm}>
                        <ValidationSchemaExample/>

                    </div>
                    </Box>

                    <Box style={secondBox}>
                        <h3 style={{textAlign: "center"}}>Fraktalternativ 📦 💨</h3>
                        <hr style={{width: "85%", margin: "auto"}} />
                        <br />
                        <Delivery />


                    </Box>
                    
                    
                    <Box style={secondBox}>

                        <h3 style={{textAlign: "center"}}>Betalningsalternativ</h3>
                        <hr style={{width: "85%", margin: "auto"}} />
                        <br />
                        <Payment /> 
                    
                    </Box>


                

                </div>
                
                <Box style={litleBox}>


                    <h1 style={{textAlign: "center"}}>Översikt</h1>
                    <hr style={{width: "80%", margin: "auto"}} />
                    <br />

                    <h4>Frakt: {deliveryAlt ? <h3> {deliveryAlt.price} kr </h3> : undefined} kr </h4>
                    
                    <h4>Kostnad för betalning: {payment ? <h3>{payment.price} kr </h3> : undefined }  </h4>

    
                    <h4 style={{margin: "0"}}>Varav Moms: {calcVat()} kr </h4>
                    <h4 style={{margin: "0"}}>Totalsumma: {totalPrice()} kr </h4>
                
                    <h6 style={{margin: "0"}}>(inkl. moms, frakt, betalning)</h6>


                    <div style={buttonStyle}>
                        <AlertDialog/>
                        
                    </div>
                </Box>
            </div>
        </div>
        </>
    )
}



const firstBox: CSSProperties = {
    height: 'fit-content',
    border: "1px solid black",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "15px",
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    padding: "30px",
    backgroundColor: "white",
    minWidth: '300px',
}


const secondBox: CSSProperties = {
    border: "1px solid black",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "15px",
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    padding: "20px",
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
    textAlign: "center"
}

const litleBox: CSSProperties = {
    width: "40%",
    border: "1px solid black",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "15px",
    padding: "40px",
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
    justifyContent: "end",
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