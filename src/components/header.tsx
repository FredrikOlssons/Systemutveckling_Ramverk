import { FC, CSSProperties } from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { NoEncryption, ThreeSixtyRounded } from "@material-ui/icons";
import { bodyContent } from "../style/common";
import { fontSize, margin } from "@mui/system";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Colors } from '../data/colors';



const Header: FC = () => {
    return (
        <>
        <div style={{...headerStyle, ...bodyContent}}>
            <h1 style={{...companyLogo}}>COMPANY NAME</h1>
            <div style={{...cartDiv}}> 
                < SupervisorAccountIcon style={admiIcon}/>
              
           
                < AddShoppingCartIcon style={cartIcon}/>
                </div>
        </div>
        </>
    )

}


const headerStyle: CSSProperties = {
    display: 'flex',
    width: '100%', 
    color: "black",
    background: Colors.third,
    position: 'relative',
    height: '90px',
    borderBottom: '1px solid black', 
    alignItems: 'stretch',
    fontSize: '1rem',
  
}

const companyLogo: CSSProperties = {
    fontFamily: 'arial',
    cursor: 'pointer',
    marginLeft: '1vw'


}

const cartDiv: CSSProperties = {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    justifyItems: 'flex-end',
    
    
}

const cartIcon: CSSProperties = {
    marginTop: '30px',
    fontSize: '35px',
    marginRight: '1vw'
}


const admiIcon: CSSProperties = {
    marginTop: '30px',
    fontSize: '40px',
    marginRight: '1vw'
}




export default Header 