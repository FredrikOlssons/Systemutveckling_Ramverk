import { FC, CSSProperties, useContext } from "react";
import RenderProduct from "../productCard";
import { products } from "../../data/products";
import Hero from "../Hero";
import "../../style/hero.css";
import { width } from "@mui/system";
import {borderColor, borderRadius, fontSize, margin,} from "@material-ui/core/node_modules/@material-ui/system";
import {cartItems, CartItem} from '../cartItem'
import  MiniCart from '../miniCart'

import { Device, DeviceContext } from "../context/DeviceProvider";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";



interface Props {
  cartItems: CartItem
}


const Content: FC<Props> = (props) => {

  const { devices } = useContext(DeviceContext)

  return (
    <>
     {/* <Hero /> */}
      <div style={productHeader}>
        <h1 style={startpageheader(devices)}>
          
          <span style={span(devices)}><h2 style={{...V}}>V</h2></span>
          <span style={span(devices)}><h2 style={{ ...ä}}>ä</h2></span>
          <span style={span(devices)}><h2 style={{ ...l1}}>l</h2></span>
          <span style={span(devices)}><h2 style={{ ...k}}>k</h2></span>
          <span style={span(devices)}><h2 style={{ ...o}}>o</h2></span>
          <span style={span(devices)}><h2 style={{ ...m1}}>m</h2></span>
          <span style={span(devices)}><h2 style={{ ...m2}}>m</h2></span>
          <span style={span(devices)}><h2 style={{ ...e}}>e</h2></span>
          <span style={span(devices)}><h2 style={{ ...n}}>n</h2></span>
          <span style={{ ...space}}>
            
          </span>
          <span style={span(devices)}><h2 style={{ ...t}}>t</h2></span>
          <span style={span(devices)}><h2 style={{ ...i}}>i</h2></span>
          <span style={span(devices)}><h2 style={{ ...l2}}>l</h2></span>
          <span style={span(devices)}><h2 style={{ ...l3}}>l</h2></span>
        </h1>

        <h1 style={startpageheader(devices)}>Wholehearted Family Adventure</h1>
        
        {/* <h2 style={startpagesubHeader}>Tjatar ungarna på att de har tråkigt på helgerna? Brukar släktmiddagarna bara bli artiga och 
            stela, eller har familjen fastnat i en loop av rutiner med sina skärmar på fredagskvällarna? Lösningen är sällskapsspel! 
            Spelkvällar med familjen har inte längre samma status. Stärk familjebanden och med WFA:s hjälp, vill prioritera bort skärmarna
             och satsar helhjärtat på gammal hederlig familjeunderhållning där man faktiskt umgås och spenderar den lediga tiden tillsammans. 
             Gör familjetiden rolig med klassiska och nya brädspel och med roliga aktiviteter som passar för familjer i alla åldrar.</h2> */}
      </div>

      <div style={bigContainer}>
        <div style={productDiv}>
          <div style={productContainer}>
            {products.map((product) => (
              <RenderProduct key={product.id} products={product} />
            ))}
          </div>
        </div>
        <div style={cartDiv}>


          

          <div style={cartContainer}>Cart<MiniCart/></div>
        

         

        </div>
      
    </>
  );
};

const V: CSSProperties = {
  transform: "translate(20px, 30px) rotate(-22deg)",
  
};

const ä: CSSProperties = {
  transform: "translate(13px, 25px) rotate(-18deg)",
};

const l1: CSSProperties = {
  transform: "translate(6px, 20px) rotate(-14deg",
};

const k: CSSProperties = {
  transform: "translate(3px, 15px) rotate(-10deg)",
};

const o: CSSProperties = {
  transform: "translate(2px, 10px) rotate(-6deg)",
};

const m1: CSSProperties = {
  transform: "translate(1px, 5px) rotate(-2deg)",
};

const m2: CSSProperties = {
  transform: "translate(0px, 1px) rotate(0deg)",
};

const e: CSSProperties = {
  transform: "translate(0px, 1px) rotate(0deg)",
};

const n: CSSProperties = {
  transform: "translate(-1px, 5px) rotate(2deg)",
};

const space: CSSProperties = {
  transform: "translate(-2px, 10px) rotate(6deg)",
  marginLeft: "0.5em"
};

const t: CSSProperties = {
  transform: "translate(-3px, 15px) rotate(10deg)",
};

const i: CSSProperties = {
  transform: "translate(-6px, 20px) rotate(14deg)",
};

const l2: CSSProperties = {
  transform: "translate(-13px, 25px) rotate(18deg)",
};

const l3: CSSProperties = {
  transform: "translate(-20px, 30px) rotate(22deg)",
};

const span: (devices: Device) => CSSProperties = (devices) => {
  return {
  display: "inline-block",
  margin: "1px",
  fontSize: "80px",
  marginBottom: "40px",

  }
};



const productHeader: CSSProperties = {
  textAlign: "center",
  margin: "0",
  paddingBottom: "50px",
  color: "silver",
  // font-family: 'Frijole', cursive;
  display: 'flex',
  justifyContent: 'center',
  rowGap: '15%',
  flexDirection: 'column',
};

const startpageheader: (devices: Device) => CSSProperties = (devices) => {
  return {
  fontFamily: "Frijole, cursive",
  margin: "0",
  fontSize: devices.isDesktop ? '2em' : devices.isTablet ? '30px' : devices.isMobile ? '20px' : "18px",

  }
};

const startpagesubHeader: CSSProperties = {
    width: '80%',
  fontSize: "14px",
  marginTop: '30px',
  marginLeft: '10%',
  marginRight: '10%',
  fontFamily: 'Aclonica, sans-serif',
};


const bigContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: 'wrap',
  marginBottom: "100px",
  gap: "2%",
};

const productDiv: CSSProperties = {
  width: "78%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

//// padding i productcontainer
// responsiviteten
//Knappar % margin bottom istället för top

const productContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  textAlign: "center",
  rowGap: "80px",
  columnGap: "50px",
  paddingTop: "50px",
  paddingBottom: "50px",
  paddingLeft: "2%",
  paddingRight: "2%",
  border: "solid",
  borderColor: "silver",
  borderRadius: "30px",
};

const cartContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  columnGap: "20px",
  padding: "20px",
  paddingTop: "50px",
  paddingBottom: "50px",
  borderRadius: "15px",
  border: "solid",
  borderColor: "black",
  minHeight: "300px",
  minWidth: '160px',
  backgroundColor: "white",
};

const cartDiv: CSSProperties = {
  width: "18%",
  paddingTop: "50px",
  paddingBottom: "50px",
};

export default Content;
