import { Container, Box } from "@mui/material";
import React from "react";
//mport LazyHero from 'react-lazy-hero'; 
import { FC } from "react";
import { CssBaseline } from "@material-ui/core";
import { Colors } from '../data/colors';


const Hero: FC = () => {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container>
          <Box  component="img" sx={{ bgcolor: Colors.primary, width: '100%', height: '50vh', border: '1px solid black' }}
          src="../assets/nastyGrandma.jpg" /> 
        </Container>
      </React.Fragment>
    )
}

export default Hero