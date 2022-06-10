import { FC, CSSProperties, useContext } from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { bodyContent } from "../style/common";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Colors } from '../data/colors';
import { Link } from 'react-router-dom';

import '../style/hero.css'
import '../style/badge.css'

import { Badge, IconButton } from "@mui/material";

import CartFunctions from './functions/cartFunctions'

import { CartContext } from '../components/context/cartProvider';
import {CartItem} from './cartItem'




 interface Props {
    /* cartQty: CartContextData */
}
 



const Header: FC<Props> = (props) => {
    const { calculateTotalQty, cartItems } = useContext(CartContext)




    return (
        <>
        <div style={{...headerStyle, ...bodyContent}}>
            
             <Link to={"/"} style={{...companyLogo}}> Wholehearted Family Adventure</Link>
            <div style={{...cartDiv}}> 
                <Link to={"/admin"}>
                < SupervisorAccountIcon style={adminIcon}/>
                </Link>
                
                <Link to={"/checkOut"}>
                 
                <IconButton style={cartIcon} aria-label="cart">

                    <Badge style={styledBadge} className='styledBadge' color="secondary">
                        <div id='styledbadge'>{calculateTotalQty()}</div> 
                        
                       

                        <AddShoppingCartIcon />
                    </Badge>
                </IconButton>

                
                </Link>
                </div>
        </div>
        </>
    )

}


const headerStyle: CSSProperties = {
    //backgroundColor: 'black',
    display: 'flex',
    width: '100%', 
    color: "silver",
    position: 'relative',
    height: '100px',
    alignItems: 'stretch',
    fontSize: '1rem',
    zIndex: '1',
    
}

const companyLogo: CSSProperties = {
    
    cursor: 'pointer',
    marginLeft: '2.5vw',
    color: 'silver',
    textDecoration: 'none',
    fontSize: '2em',
    display: "flex",
    alignItems: "center",
    fontFamily: 'Frijole'


}

const cartDiv: CSSProperties = {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    justifyItems: 'flex-end',
    gap: "15px"
  

    
    
}

const cartIcon: CSSProperties = {
    marginTop: '30px',
    fontSize: '50px',
    marginRight: '2.5vw',
    textDecoration: 'none',
    color: 'silver',
}


const adminIcon: CSSProperties = {
    marginTop: '28px',
    fontSize: '40px',
    marginRight: '1vw',
    textDecoration: 'none',
    color: 'silver',
}


 const styledBadge: CSSProperties = {
    right: "-3",
    top: "13",
    height: '2px',
    padding: '0 4px',
  
} 



export default Header 