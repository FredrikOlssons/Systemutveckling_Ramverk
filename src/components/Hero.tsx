import { Container, Box } from "@mui/material";
import React, { CSSProperties, useContext } from "react";
import { FC } from "react";
import { CssBaseline } from "@material-ui/core";
import lady from '../assets/lady.jpg'
import '../style/hero.css'
import { Device, DeviceContext } from "./context/DeviceProvider";


const Hero: FC = () => {
  const { devices } = useContext(DeviceContext)
  return (
    <React.Fragment>
      <CssBaseline />

      <div style={hero}>
        <div style={heroImg}><img style={img} src={lady} />
          <div style={heroTitle(devices)}>WFA
          </div>
          <div style={heroSubtitle(devices)}>Vi gör spelkvällar med familjen roliga igen
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

const hero: CSSProperties = {
  paddingTop: '40px',
  paddingBottom: '40px',
  justifyContent: 'center',
  display: 'flex',
  borderRadius: '40px',
  maxHeight: '450px'
}

const heroImg: CSSProperties = {
  position: 'relative',
  width: '90%',
  display: 'flex',
  boxShadow: 'rgb(179 98 0 / 75%) 0px 20px 28px, rgb(179 98 0 / 40%) 0px 10px 1000px',
  borderRadius: '40px',

}

const img: CSSProperties = {
  width: '100%',
  borderRadius: '40px',
}

const heroTitle: (devices: Device) => CSSProperties = (devices) => {
  return {
    position: 'absolute',
    left: '31%',
    top: '12%',
    fontFamily: 'Frijole',
    fontSize: devices.isDesktop ? '50px' : devices.isTablet ? '34px' : '25px',
  }
};

const heroSubtitle: (devices: Device) => CSSProperties = (devices) => {
  return {
    position: 'absolute',
    left: '5%',
    bottom: '15px',
    fontSize: devices.isDesktop ? '22px' : devices.isTablet ? '18px' : devices.isMobile ? '14px' : '10px',
    fontFamily: 'Frijole',
    width: '50%',
  }
}

export default Hero