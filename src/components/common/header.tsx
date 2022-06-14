import { FC, CSSProperties, useContext } from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { bodyContent } from "../../style/common";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Link } from 'react-router-dom';
import { Badge, IconButton } from "@mui/material";
import { CartContext } from '../context/cartProvider';
import { Device, DeviceContext } from '../context/DeviceProvider'



 interface Props {}
 



const Header: FC<Props> = (props) => {

    const { devices } = useContext(DeviceContext)

    const { calculateTotalQty } = useContext(CartContext)


    return (
        <>
        <div style={{...headerStyle, ...bodyContent}}>
            
             <Link to={"/"} style={companyLogo(devices)}> Wholehearted Family Adventure</Link>
            <div style={{...cartDiv}}> 
                <Link to={"/admin"}>
                < SupervisorAccountIcon style={adminIcon}/>
                </Link>
                
                <Link to={"/checkOut"}>
                 
                <IconButton style={cartIcon} aria-label="cart">

                    <Badge style={styledBadge} badgeContent={calculateTotalQty()} color="secondary">               
                        
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

const companyLogo: (devices: Device) => CSSProperties = (devices) => {
    return {
    cursor: 'pointer',
    marginLeft: '2.5vw',
    color: 'silver',
    textDecoration: 'none',
    fontSize: devices.isDesktop ? '2em' : devices.isTablet ? '30px' : devices.isMobile ? '20px' : "11px",
    display: "flex",
    alignItems: "center",
    fontFamily: 'Frijole',

    }

}

const cartDiv: CSSProperties = {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    justifyItems: 'flex-end',
    gap: "5px"
  

    
    
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