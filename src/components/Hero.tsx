import { Container, Box } from "@mui/material";
import React, { CSSProperties } from "react";
//mport LazyHero from 'react-lazy-hero'; 
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
        {/* <Container>
          <div style={heroImg}><img style={img} src={lady}/><h1 style={heroTitle}>Company Name</h1>
          </div>
        </Container> */}
      </React.Fragment>
    )
}

const heroImg: CSSProperties = {
    paddingTop: '40px',
    width: '80vw',
    display: 'flex',
    justifyContent: 'center',
}

const img: CSSProperties = {
width: '100%'
}

const heroTitle: CSSProperties = {
    position: 'absolute',
    left: '5%',
    top: '10%',
    fontSize: '20px',
    fontFamily: 'Frijole'
   
    }





export default Hero