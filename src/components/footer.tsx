import { FC } from "react"
import { CSSProperties } from "react"
import { Colors } from '../data/colors'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { minWidth, textAlign } from "@mui/system";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const Footer: FC = () => {
    return (
        <div style={{...footerStyle}}>
            <div style={socialMedia}>
                <div style={footerLayout}>
                <h4>Kontakta oss</h4>
                <div style={footerRow}><LocationOnIcon style={footerTag}/><h5 style={footerTag}>Närgången 1 417 56 Göteborg</h5></div>
                <div style={footerRow}><MailOutlineIcon style={footerTag}/><h5 style={footerTag}>info@...........se</h5></div>
                <div style={footerRow}><LocalPhoneIcon style={footerTag}/><h5 style={footerTag}>+46 (0) 7 019 400 10</h5></div>
                </div>
                <div style={footerLayout}>
                <h4>Företagets namn</h4>
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

const footerStyle: CSSProperties = {
    position: 'relative',
    left: '0',
    bottom: '0',
    width: '100%',
    background: Colors.secondary,
    color: 'silver',
    height: '200px',
    border: '1px solid black',
  
}

const line: CSSProperties = {
    width:"60vw", 
    margin: "auto",
    borderTop: '1px solid black',
    marginTop: '30px',
    paddingTop: '10px',
    borderColor: 'silver',
    textAlign: 'center',
    fontSize: '8px'
    
    
}

const socialMedia: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '2%',
    marginBottom: '2%',
    height: '70%',
}

const footerLayout: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    //flex: '1',
    minWidth: '200px',
    textAlign: 'center'

}

const footerRow: CSSProperties = {
    display: 'flex',
    gap: '10px',
}

const footerRow2: CSSProperties = {
    display: 'flex',
    gap: '10px',
    textAlign: 'center',
    marginLeft: '30%'
}

const footerTag: CSSProperties = {
    margin: '0',
    fontSize: '13px',
    marginBlock: '0px'
}


export default Footer 