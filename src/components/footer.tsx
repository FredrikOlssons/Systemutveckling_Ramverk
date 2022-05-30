import { FC } from "react"
import { CSSProperties } from "react"
import { Colors } from '../data/colors'



const Footer: FC = () => {
    return (
        <div style={{...footerStyle}}>
            <div style={socialMedia}>
                <h3>Kontakta oss</h3>
                <a href="/">Företagets namn</a>
                <h3>Sociala media</h3>
                <a href="/"></a>    
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
    color: 'black',
    textAlign: 'center',
    height: '200px',
    border: '1px solid black',
  
}

const line: CSSProperties = {
    width:"60vw", 
    margin: "auto",
    borderTop: '1px solid black',
    marginTop: '100px',
    paddingTop: '10px',
    
    
}

const socialMedia: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2%',
    marginBottom: '2%'
}



export default Footer 