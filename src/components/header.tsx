import { FC, CSSProperties } from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { NoEncryption, ThreeSixtyRounded } from "@material-ui/icons";
import { bodyContent } from "../style/common";
import { fontSize, margin } from "@mui/system";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Colors } from '../data/colors';
import { Link } from 'react-router-dom';
import '../style/hero.css'



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
                < AddShoppingCartIcon style={cartIcon}/>
                
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
    fontSize: '45px',
    marginRight: '2.5vw',
    textDecoration: 'none',
    color: 'silver',
}


const adminIcon: CSSProperties = {
    marginTop: '25px',
    fontSize: '50px',
    marginRight: '1vw',
    textDecoration: 'none',
    color: 'silver',
}




export default Header 