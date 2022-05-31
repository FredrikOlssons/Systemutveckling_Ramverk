import { FC, CSSProperties } from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { NoEncryption, ThreeSixtyRounded } from "@material-ui/icons";
import { bodyContent } from "../style/common";
import { fontSize, margin } from "@mui/system";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Colors } from '../data/colors';
import { Link } from 'react-router-dom';



const Header: FC = () => {
    return (
        <>
        <div style={{...headerStyle, ...bodyContent}}>
             <Link to={"/"} style={{...companyLogo}}> COMPANY NAME</Link>
            <div style={{...cartDiv}}> 
                <Link to={"/"}>
                < SupervisorAccountIcon style={adminIcon}/>
                </Link>
                
                <Link to={"/"}>
                < AddShoppingCartIcon style={cartIcon}/>
                
                </Link>
                </div>
        </div>
        </>
    )

}


const headerStyle: CSSProperties = {
    display: 'flex',
    width: '100%', 
    color: "white",
    background: Colors.fourth,
    position: 'relative',
    height: '150px',
    borderBottom: '1px solid black', 
    alignItems: 'stretch',
    fontSize: '1rem',
  
}

const companyLogo: CSSProperties = {
    fontFamily: 'arial',
    cursor: 'pointer',
    marginLeft: '1vw',
    color: "white",
    textDecoration: 'none',
    fontSize: '2em',



}

const cartDiv: CSSProperties = {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    justifyItems: 'flex-end',
    marginTop: '70px',
  

    
    
}

const cartIcon: CSSProperties = {
    marginTop: '30px',
    fontSize: '45px',
    marginRight: '1vw',
    textDecoration: 'none',
    color: 'white',
}


const adminIcon: CSSProperties = {
    marginTop: '30px',
    fontSize: '45px',
    marginRight: '1vw',
    textDecoration: 'none',
    color: 'white',
}




export default Header 