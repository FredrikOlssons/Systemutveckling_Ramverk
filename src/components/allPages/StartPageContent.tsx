import { FC, CSSProperties } from "react";
import RenderProduct from "../productCard";
import { product } from "../../data/products";
import Hero from '../Hero';
import { width } from "@mui/system";
import '../../style/hero.css';
import { borderColor, borderRadius, fontSize, margin } from "@material-ui/core/node_modules/@material-ui/system";





const Content: FC = (props) => {
    return ( 
        <>
        <Hero/>
        <div style={productHeader}>
            
        <h1 style={header}>
        <span style={{...V, ...span}}>V</span>
        <span style={{...ä, ...span}}>ä</span>
        <span style={{...l1, ...span}}>l</span>
        <span style={{...k, ...span}}>k</span>
        <span style={{...o, ...span}}>o</span>
        <span style={{...m1, ...span}}>m</span>
        <span style={{...m2, ...span}}>m</span>
        <span style={{...e, ...span}}>e</span>
        <span style={{...n, ...span}}>n</span>
        <span style={{...space, ...span}}><pre> </pre></span>
        <span style={{...t, ...span}}>t</span>
        <span style={{...i, ...span}}>i</span>
        <span style={{...l2, ...span}}>l</span>
        <span style={{...l3, ...span}}>l</span> 
            </h1>

        <h1 style={header}>Wholehearted Family Adventure</h1>
        <h2 style={subHeader}>Stärk banden med dina familjemedlemmar! </h2>
 
        </div>

        <div style={bigContainer}>
            <div style={productDiv}>

        <div style={productContainer}>
            {product.map((products) => <RenderProduct key={products.id} product={products} />)}
            </div>
        </div>
            <div style={cartDiv}>
                <div style={cartContainer}>Cart</div>

            </div>
            
        </div>
        </>
    )
}

const header: CSSProperties = {
margin: '0'
}

const subHeader: CSSProperties = {
    fontSize: '16px'
}


const V: CSSProperties = {
    transform: 'translate(20px, 30px) rotate(-22deg)',
    fontSize: '40px'
}

const ä: CSSProperties = {
    transform: 'translate(13px, 25px) rotate(-18deg)',
}

const l1: CSSProperties = {
    transform: 'translate(6px, 20px) rotate(-14deg',
}

const k: CSSProperties = {
    transform: 'translate(3px, 15px) rotate(-10deg)',
}

const o: CSSProperties = {
    transform: 'translate(2px, 10px) rotate(-6deg)',
}

const m1: CSSProperties = {
    transform: 'translate(1px, 5px) rotate(-2deg)',
}

const m2: CSSProperties = {
    transform: 'translate(0px, 1px) rotate(0deg)',
}

const e: CSSProperties = {
    transform: 'translate(0px, 1px) rotate(0deg)',
}

const n: CSSProperties = {
    transform: 'translate(-1px, 5px) rotate(2deg)',
}

const space: CSSProperties = {
    transform: 'translate(-2px, 10px) rotate(6deg)',
}

const t: CSSProperties = {
    transform: 'translate(-3px, 15px) rotate(10deg)',
}

const i: CSSProperties = {
    transform: 'translate(-6px, 20px) rotate(14deg)',
}

const l2: CSSProperties = {
    transform: 'translate(-13px, 25px) rotate(18deg)',
}

const l3: CSSProperties = {
    transform: 'translate(-20px, 30px) rotate(22deg)',
}


const span: CSSProperties = {
    display: 'inline-block',
    margin: '1px',
    fontSize: '60px',
    marginBottom: '40px'
}


const bigContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '100px',
    gap: '2%'
    
    }

    //// padding i productcontainer
    // responsiviteten
    //Knappar % margin bottom istället för top

const productContainer: CSSProperties = {
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
    rowGap: '80px',
    columnGap: '50px',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '2%',
    paddingRight: '2%',
    border: 'solid',
    borderColor: 'silver',
    borderRadius: '30px',
}

const productHeader: CSSProperties = {
    textAlign: 'center',
    margin: '0',
    paddingBottom: "50px",
    color: 'silver',
    fontFamily: 'Frijole',
}

const productDiv: CSSProperties = {
    width: '78%',
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    
}

const cartContainer: CSSProperties = {
  
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    textAlign: 'center',
    columnGap: '20px',
    padding: '20px',
    paddingTop: '50px',
    paddingBottom: '50px',
    borderRadius: '15px',
    border: 'solid',
    borderColor: 'black',
    minHeight: '300px',
    backgroundColor: 'white',
    
}

const cartDiv: CSSProperties = {

    width: '18%',
    paddingTop: '50px',
    paddingBottom: '50px',
    

}

export default Content 