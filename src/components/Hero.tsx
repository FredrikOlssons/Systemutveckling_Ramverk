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
        <div style={heroImg(devices)}><img style={img(devices)} src={lady} />
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

const heroImg: (devices: Device) => CSSProperties = (devices) => {
  return {
    position: 'relative',
    width: devices.isSmallerMobile ? '98%' : '90%',
    display: 'flex',
    boxShadow: 'rgb(179 98 0 / 75%) 0px 20px 28px, rgb(179 98 0 / 40%) 0px 10px 1000px',
    borderRadius: devices.isSmallerMobile ? '20px' : '40px',
  }
}

const img: (devices: Device) => CSSProperties = (devices) => {
  return {
    width: '100%',
    borderRadius: devices.isSmallerMobile ? '20px' : '40px',
  }
}


export default Hero