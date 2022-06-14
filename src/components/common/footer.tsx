import { FC, useContext } from "react"
import { CSSProperties } from "react"
import { Colors } from '../../data/colors'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Device, DeviceContext } from "../context/DeviceProvider";

interface Props {}

const Footer: FC<Props> = (props) => {

    const { devices } = useContext(DeviceContext)

    return (
        <div style={footerStyle(devices)}>
            <div style={socialMedia}>
                <div style={footerLayout}>
                <h4>Kontakta oss</h4>
                <div style={footerRow}><LocationOnIcon style={footerTag}/><h5 style={footerTag}>Närgången 1 417 56 Göteborg</h5></div>
                <div style={footerRow}><MailOutlineIcon style={footerTag}/><h5 style={footerTag}>info@...........se</h5></div>
                <div style={footerRow}><LocalPhoneIcon style={footerTag}/><h5 style={footerTag}>+46 (0) 7 019 400 10</h5></div>
                </div>
                <div style={footerLayout}>
                    <div style={footerLogo}>
                        <h4>Wholehearted</h4>
                        <h4>Family</h4>
                        <h4>Adventure</h4>
                    </div>
                </div>
                <div style={footerLayout}>
                <h4>Sociala media</h4>
                <div style={footerRow2}><FacebookOutlinedIcon style={footerTag}/><h5 style={footerTag}>Facebook</h5></div>
                <div style={footerRow2}><TwitterIcon style={footerTag}/><h5 style={footerTag}>Twitter</h5></div>
                <div style={footerRow2}><InstagramIcon style={footerTag}/><h5 style={footerTag}>Instagram</h5></div>

                </div>
                    
            </div>
          
            <div>
            
            <div style={line}>All images and site content &copy; Company name, 2022</div>
            
            </div>
        </div>

    )

}

const footerStyle: (devices: Device) => CSSProperties = (devices) => {
    return {
    position: 'relative',
    left: '0',
    bottom: '0',
    width: '100%',
    background: Colors.secondary,
    color: 'silver',
    
    
    }
}

const line: CSSProperties = {
    width:"60vw", 
    margin: "auto",
    borderTop: '0.5px solid black',
    marginTop: '30px',
    paddingTop: '10px',
    borderColor: 'silver',
    textAlign: 'center',
    fontSize: '10px',
    color: "white"
    
    
}



const socialMedia: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '2%',
    marginBottom: '2%',
    height: '70%',
    color: "white",
    fontSize: "15px",
    flexWrap: "wrap",
    rowGap: "20px",
    paddingTop: "20px"
}

const footerLayout: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    minWidth: '200px',
    textAlign: 'center',
    height: '100%',
    justifyContent: 'center'

}

const footerLogo: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    /* rowGap: '10px', */
    minWidth: '200px',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Frijole'

}

const footerRow: CSSProperties = {
    display: 'flex',
    gap: '10px',
    alignItems: "center"
}

const footerRow2: CSSProperties = {
    display: 'flex',
    gap: '10px',
    textAlign: 'center',
    marginLeft: '30%',
    alignItems: "center"
}

const footerTag: CSSProperties = {
    margin: '0',
    fontSize: '15px',
    marginBlock: '0px'
}


export default Footer 