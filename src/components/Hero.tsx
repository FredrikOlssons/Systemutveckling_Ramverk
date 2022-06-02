import { Container, Box } from "@mui/material";
import React, { CSSProperties } from "react";
//import LazyHero from 'react-lazy-hero'; 
import { FC } from "react";
import { CssBaseline } from "@material-ui/core";
import { Colors } from '../data/colors';
import lady from '../assets/lady.jpg'
import { width } from "@mui/system";
import { fontSize, fontStyle } from "@material-ui/core/node_modules/@material-ui/system";
import '../style/hero.css'



const Hero: FC = () => {
  return (
        <React.Fragment>
        <CssBaseline />
        
                 <div style={hero}>
                   <div style={heroImg}><img style={img} src={lady}/>
                   <div style={heroTitle}><h1>Company Name</h1>
                   </div>
                   <div style={heroSubtitle}><h3>Vi gör spelkvällar med familjen roliga igen</h3>
                   </div>
                </div>
          </div>
        
        </React.Fragment>
    )
}

const hero: CSSProperties = {
  paddingTop: '40px',
  width: '100vw',
  paddingBottom: '40px',
  justifyContent: 'center',
  display: 'flex'
  }

const heroImg: CSSProperties = {
    position: 'relative',
    width: '90%',
    display: 'flex',
}

const img: CSSProperties = {
width: '100%'
}

const heroTitle: CSSProperties = {
    position: 'absolute',
    left: '6%',
    bottom: '5%',
    fontSize: '20px',
    fontFamily: 'Frijole'
   
    }

    const heroSubtitle: CSSProperties = {
      position: 'absolute',
      left: '11%',
      bottom: '0px',
      fontSize: '14px',
      fontFamily: 'Frijole'
     
      }
  
    


export default Hero