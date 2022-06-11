import { FC, CSSProperties, useContext } from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { bodyContent } from "../style/common";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Link } from 'react-router-dom';

import '../style/hero.css'
import '../style/badge.css'

import { Badge, IconButton } from "@mui/material";
import { CartContext } from '../components/context/cartProvider';




 interface Props {}
 



const Header: FC<Props> = (props) => {
    const { calculateTotalQty } = useContext(CartContext)


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

                    {/* OBS! Får kolla upp detta med Victor  */}
                    <Badge style={styledBadge} className='styledBadge' color="secondary">
                        <div style={styledBadge} id='styledbadge'>{calculateTotalQty()}</div> 
                        
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
    fontSize: "20px"
  
} 



export default Header 