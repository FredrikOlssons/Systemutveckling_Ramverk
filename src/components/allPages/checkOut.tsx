import { Box } from "@mui/material";
import { FC, CSSProperties, useContext } from "react";
import Delivery from "../options/delivery";
import "../../style/hero.css"
import { Payment } from '../options/payment'
import Cartlist from '../functions/cartList'
import { Product } from '../../data/products'
import { CartContext } from "../context/cartProvider";
import ValidationSchemaExample from "../formField";
import  AlertDialog  from '../functions/dialog'


import { Device, DeviceContext } from "../context/DeviceProvider";



interface Props {
    products: Product
}

const CheckOut: FC<Props> = (props) => {

    const { devices } = useContext(DeviceContext)
    
    const { totalPrice, cartItems, deliveryAlt, payment, calcVat } = useContext(CartContext)


    return (
        <>
            <div>
                <h1 style={title}> Checka-ut sidan </h1>

                <div style={Container}>
                    <div>
                        <Box style={firstBox(devices)}>
                            <h2 style={{ textAlign: "center" }}>Varukorg</h2>
                            <hr style={{ width: "85%", margin: "auto" }} />
                            <br />
                            {cartItems.length == 0 ? <h4>Kundvagnen är tom 🤷 </h4> : undefined}
                            <Cartlist />
                        </Box>

                        <Box style={secondBox(devices)}>
                            <h3 style={{ textAlign: "center" }}>Fyll i dina kontaktuppgifter</h3>
                            <hr style={{ width: "85%", margin: "auto" }} />
                            <br />
                            <div style={contactForm}>
                                <ValidationSchemaExample />
                            </div>
                        </Box>

                        <Box style={secondBox(devices)}>
                            <h3 style={{ textAlign: "center" }}>Fraktalternativ 📦 💨</h3>
                            <hr style={{ width: "85%", margin: "auto" }} />
                            <br />
                            <Delivery />
                        </Box>

                        <Box style={secondBox(devices)}>
                            <h3 style={{ textAlign: "center" }}>Betalningsalternativ</h3>
                            <hr style={{ width: "85%", margin: "auto" }} />
                            <br />
                            <Payment />
                        </Box>
                    </div>

                
                <Box style={litleBox(devices)}>

                    <h1 style={{textAlign: "center"}}>Översikt</h1>
                    <hr style={{width: "80%", margin: "auto"}} />
                    <br />

                    <div style={litleBoxDivided}>
                    <div >
                    <h4>Frakt:</h4>
                    <h4>Kostnad för betalning:</h4>
                    <h4 style={{margin: "0"}}>Totalsumma:</h4>
                    <h6 style={{margin: "0"}}>(inkl. moms, frakt, betalning)</h6>
                    <h4 style={{marginTop: "10px"}}>Varav Moms:</h4>
                    </div>
                    <div >
                    {deliveryAlt ? <h4> {deliveryAlt.price} kr </h4> : <h4>0 kr</h4>}
                    {payment ? <h4>{payment.price} kr </h4> : <h4>0 kr</h4> }
                    <h4>{totalPrice()} kr</h4>
                    {calcVat() > 0 ? <h4>{calcVat()} kr </h4> : <h4>0 kr</h4>}
                    </div>
                    </div>

                    <div style={buttonStyle}>
                        <AlertDialog/>
                    </div>
                </Box>
                </div>
            </div>
        </>
    )
}



const firstBox: (devices: Device) => CSSProperties = (devices) => {
    return {
        height: 'fit-content',
        border: "1px solid black",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        borderRadius: "15px",
        marginBottom: "20px",
        marginLeft: "10px",
        marginRight: "10px",
        padding: devices.isSmallerMobile ? '0px' : "30px",
        backgroundColor: "white",
        minWidth: devices.isSmallerMobile ? '0px' : '300px',
    }
}

const secondBox: (devices: Device) => CSSProperties = (devices) => {
    return {
        border: "1px solid black",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        borderRadius: "15px",
        marginBottom: "20px",
        marginLeft: "10px",
        marginRight: "10px",
        padding: devices.isSmallerMobile ? '0px' : "20px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        flexWrap: 'wrap',
    }
}

const title: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    margin: "40px",
    color: "silver",
    fontFamily: "Frijole, cursive",
    textAlign: "center"
}

const litleBox: (devices: Device) => CSSProperties = (devices) => {
    return {
        width: devices.isSmallerMobile ? "90%" : devices.isMobile ? '70%' : devices.isTablet ? '30%' : '40%',
        border: "1px solid black",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        borderRadius: "15px",
        backgroundColor: "white",
        height: 'fit-content',
        marginBottom: '60px',
        padding: devices.isSmallerMobile ? '0px' : devices.isDesktop ? "40px" : devices.isTablet ? "20px" : '40px',
        minWidth: '300px',
    }
}

const litleBoxDivided: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '15%',
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