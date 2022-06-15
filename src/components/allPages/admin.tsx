import { FC, CSSProperties, useContext } from "react";
import { Product } from "../../data/products";
import { Device, DeviceContext } from "../context/DeviceProvider";
import stopsign from '../../assets/116-1164737_clip-art-not-allowed-symbol-not-allowed-sign.png'
import note from '../../assets/You-re-not-allowed-You-re-not-even-allowed-to-be-a.jpg'


interface Props {
    products: Product
}

const Admin: FC<Props> = (props) => {

    const { devices } = useContext(DeviceContext)

    return (
        
        <div>
            <h1 style={title}> Admin sida </h1>
                
            <div style={bigDiv(devices)}>
                <img style={title} src={stopsign} alt="" />
                <img style={productContainer} src={note} alt="" />
            </div>   
        </div>
    )
}


const title: CSSProperties = {
    width: "30%",
    justifyContent: 'center',
    display: "flex",
    marginLeft: '35%',
    marginRight: '35%'
}


const productContainer: CSSProperties = {
    width: "70%",
    marginLeft: '15%',
    marginRight: '15%'
}

const bigDiv: (devices: Device) => CSSProperties = (devices) => {
    return {
    width: '100vw',
    display: "flex",
    flexDirection: "column",
    marginBottom: "100px",
    gap: "15px",
    justifyContent: 'center',
    alignContent: 'center'
  };
  }

export default Admin 