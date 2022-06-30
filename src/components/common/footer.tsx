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
                <div style={footerLayout}>
                    <div style={footerLogo(devices)}>
                        <h4>Wholehearted</h4>
                        <h4>Family</h4>
                        <h4>Adventure</h4>
                    </div>
                </div>

            <div style={socialMedia}>
                <div style={footerLayout}>
                <h4>Kontakta oss</h4>
                <div style={footerRow}><LocationOnIcon style={footerTag(devices)}/><h5 style={footerTag(devices)}>Närgången 1 417 56 Göteborg</h5></div>
                <div style={footerRow}><MailOutlineIcon style={footerTag(devices)}/><h5 style={footerTag(devices)}>info@...........se</h5></div>
                <div style={footerRow}><LocalPhoneIcon style={footerTag(devices)}/><h5 style={footerTag(devices)}>+46 (0) 7 019 400 10</h5></div>
                </div>
                <div style={footerLayout}>
                <h4>Sociala media</h4>
                <div style={footerRow2}><FacebookOutlinedIcon style={footerTag(devices)}/><h5 style={footerTag(devices)}>Facebook</h5></div>
                <div style={footerRow2}><TwitterIcon style={footerTag(devices)}/><h5 style={footerTag(devices)}>Twitter</h5></div>
                <div style={footerRow2}><InstagramIcon style={footerTag(devices)}/><h5 style={footerTag(devices)}>Instagram</h5></div>
            </div>                    
        </div>          
            <div>
                <div style={line}>All images and site content &copy; Wholehearted Family Adventure, 2022</div>
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
    paddingBottom: '10px',
    borderColor: 'silver',
    textAlign: 'center',
    fontSize: '10px',
    color: "white"
}

const socialMedia: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '2%',
    marginBottom: '2%',
    height: '70%',
    color: "white",
    fontSize: "15px",
    rowGap: "20px",
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

const footerLogo: (devices: Device) => CSSProperties = (devices) => {
    return {
    display: 'flex',
    minWidth: '200px',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Frijole',
    justifyContent: 'center',
    columnGap: '10px',
    color: 'white',
    fontSize: devices.isDesktop ? '35px' : devices.isTablet ? '28px' : devices.isMobile ? '20px' : '14px',
}
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
    alignItems: "center",
}

const footerTag: (devices: Device) => CSSProperties = (devices) => {
    return {        
    fontSize: devices.isSmallerMobile ? '10px' : '15px',
    margin: '0',
    marginBlock: '0px'
}
}

export default Footer 