import React from 'react'; 
import {products, Product} from '../../data/products'
import {useParams, Navigate } from 'react-router-dom';
import { CSSProperties, FC, useContext } from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'; 
import "../../style/hero.css";
import { CartContext } from '../context/cartProvider';
import { Alert, Snackbar, Stack } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Device, DeviceContext } from "../context/DeviceProvider";


  
interface Props {
    products: Product
}

const SinglePage: FC<Props> = (props) => {

    const { devices } = useContext(DeviceContext)

    const { addToCart } = useContext(CartContext)

    const { productId } = useParams(); 

    const foundProduct = products.find((singleProduct) => Number(productId) == singleProduct.id) 

    if(!foundProduct) {
        return <Navigate to="/" />
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
        <div style={{...breadcrumbs}}>
            <KeyboardDoubleArrowLeftIcon sx={{ mr: 0.5 }} fontSize="inherit" style={{fontSize: "20px"}}/>
            <Link to={"/"} style={{color: "silver", textDecoration: "none"}}>
            Fortsätt handla
            </Link>
        </div>
        
        <span style={singleProductContainer(devices)}>
            <span style={imgDiv}>
                <div style={cover}>
            <img src={foundProduct.image} style={imageStyle}/>
                </div>
            </span>
            <div style={productInfo(devices)}>
                <h2 style={productHeader}>{foundProduct.title}</h2>
                <h3 style={description}>{foundProduct.description}</h3>
                
                <div style={priceDiv}>

                    <Stack spacing={2} sx={{ width: '100%' }} style={priceBox}>
                    <h3>Pris: {foundProduct.price} kr</h3>
                        <div onClick={handleClick} >
                        <Button onClick={() => addToCart(foundProduct)} variant="contained" color="primary" id='purchaseButton'>Lägg i kundvagn</Button>
                        </div>

                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Produkten har lagts i kundkorgen!
                            </Alert>
                        </Snackbar>
                    </Stack>
                </div>
            </div>
        </span>
    </>
    )
}

const singleProductContainer: (devices: Device) => CSSProperties = (devices) => {
    return {
    height: 'auto',
    width: devices.isSmallerMobile ? '90vw' : "70%", 
    display: "flex", 
    flexDirection: "row",
    paddingBottom: "10vh",
    paddingTop: "2vh", 
    margin: devices.isSmallerMobile ? '2%' : "auto",
    flexWrap: "wrap",
    alignItems: "center",
    minWidth: '300px',
    justifyContent: devices.isSmallerMobile ? 'center' : undefined,
    }
}

const breadcrumbs: CSSProperties = {
    color: "silver",
    paddingTop: "40px",
    display: "flex",
    flexDirection: "row",
    paddingLeft: "16%",
    fontFamily: "Aclonica, sans-serif"


}

const imgDiv: CSSProperties = {
    paddingTop: '16px',
    borderLeft: 'solid',
    borderRight: 'solid',
    borderTop: 'solid',
    width: '40%',
    zIndex: '1',
    borderLeftColor: 'silver',
    borderTopColor: 'silver',
    borderRightColor: 'silver',
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    minWidth: '300px'
    
}  

const cover: CSSProperties = {
    width: '100%',
    display: 'flex', 
    justifyContent: 'center',
    height: '100%',
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    marginBottom: '-3px',
    backgroundColor: 'black',
    }
    
const imageStyle: CSSProperties = {
    minHeight: '276px',
    minWidth: '276px',
    width: '90%',
    borderColor: 'silver',
    border: 'solid',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',   
}


const productInfo: (devices: Device) => CSSProperties = (devices) => {
    return {
    display: "flex",
    flexDirection: "column",
    padding: "4%",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    border: 'solid',
    borderColor: 'silver',
    color: 'silver',
    fontStretch: 'expanded',
    minWidth: '300px',
    borderBottomLeftRadius: devices.isSmallerMobile ? '0px' : '30px',
    borderTopRightRadius: devices.isSmallerMobile ? '0px' : '30px',
    borderBottomRightRadius: devices.isSmallerMobile ? '0px' : '30px',
}
}

const productHeader: CSSProperties = {
    fontFamily: "Frijole, cursive",
}


const priceDiv: CSSProperties = {
    display: "flex",
    justifyContent: "end",
    gap: "30px",
    marginTop: "25px",
    flexWrap: "wrap",
    color: 'silver',    
}

const description: CSSProperties = {
    width: '100%',
    textAlign: 'justify',  
    fontFamily: 'Aclonica, sans-serif',
    fontSize: '14px',
}

const priceBox: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "inherit",
    justifyContent: "end",    
}


export default SinglePage 

