import { FC, CSSProperties, useContext } from "react";
import { products, Product } from "../../data/products";
import { Device, DeviceContext } from "../context/DeviceProvider";
import RenderProduct from "../productCard";


interface Props {
    products: Product
}

const Admin: FC<Props> = (props) => {

    const { devices } = useContext(DeviceContext)

    return (
        
        <div>
            <h1 style={title}> Admin sida </h1>
                
            <div style={bigDiv(devices)}>
                <div style={productContain(devices)}>
                    <div style={productContainer}>
                        {products.map((product) => (
                        <RenderProduct key={product.id} products={product} />
                        ))}
                    </div>
                </div>       
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


const productContainer: CSSProperties = {
    paddingTop: "10px",
    borderRadius: "15px",
    paddingBottom: '10px',
    minWidth: '250px',
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
    

}

const bigDiv: (devices: Device) => CSSProperties = (devices) => {
    return {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    marginBottom: "100px",
    gap: "2%",
    jusifyContent: devices.isTablet ? 'center' : devices.isMobile ? 'center' : 'center',
    justifyContent: 'center',
  };
  }

  const productContain: (devices: Device) => CSSProperties = (devices) => {
    return {
    width: devices.isTablet ? '80vw' : devices.isMobile ? '90vw' : '78%',
    justifyContent: devices.isTablet ? 'center' : devices.isMobile ? 'center' : undefined,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    
    };
};

export default Admin 