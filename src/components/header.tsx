import { FC, CSSProperties } from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { bodyContent } from "../style/common";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Colors } from '../data/colors';
import { Link } from 'react-router-dom';

import '../style/hero.css'

import { Badge, IconButton } from "@mui/material";

import CartFunctions from './functions/cartFunctions'





const Header: FC = () => {
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
                    <Badge style={StyledBadge} color="secondary">
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


const StyledBadge: CSSProperties = {
    right: "-3",
    top: "13",
    padding: '0 4px',
  
}



export default Header 