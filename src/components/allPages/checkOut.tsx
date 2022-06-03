
import { Box, Button } from "@mui/material";
import { height } from "@mui/system";
import { FC, CSSProperties } from "react";
import ValidationSchemaExample from '.././formField'



interface Props {}

const CheckOut: FC<Props> = (props) => {
    return (
        <div>
            <h1 style={title}> Checka-ut sidan </h1>
            
            <div style={Container}>
                <Box style={firstBox}>
                
                    <h2>Varukorg</h2>
                        
                    </Box>

                <Box style={litleBox}>
                    <h2>Totalsumma</h2>

                    <h3>Totalsumman (inkl. moms): </h3>

                    <h3>Frakt: </h3>

                    <h3>Betalningssätt: </h3>

                    <div style={buttonStyle}>

                    <Button variant="contained" color="primary">Slutför köp</Button>
                    </div>

                </Box>

                </div>

                <Box style={secondBox}>
                
                <h3>Fyll i dina kontaktuppgifter:</h3>
                  <div style={contactForm}>

                    <ValidationSchemaExample/>
                  </div>

                </Box>

                <Box style={secondBox}>
                
                <h3>Fraktalternativ:</h3>
                    
                </Box>

                <Box style={secondBox}>
                
                <h3>betalningsalternativ:</h3>
                    
                </Box>
                

          


        </div>
    )
}



const firstBox: CSSProperties = {
    width: "60%",
    height: "200px",
    border: "1px solid black",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "15px",
    marginBottom: "20px",
    marginLeft: "10px",
    padding: "10px",
    backgroundColor: "white"
}

const secondBox: CSSProperties = {
    width: "60%",
    border: "1px solid black",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "15px",
    marginBottom: "20px",
    marginLeft: "10px",
    padding: "10px",
    backgroundColor: "white"
}




const title: CSSProperties = {
    display: "flex", 
    justifyContent: "center",
    margin: "40px",
    color: "white"
}

const litleBox: CSSProperties = {
    width: "30%",
    border: "1px solid black",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderRadius: "15px",
    padding: "10px",
    backgroundColor: "white"
}


const Container: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px"
}


const buttonStyle: CSSProperties = {
    display: "flex", 
    justifyContent: "flex-end",
    marginTop: "40px",
    
}

const contactForm: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}


export default CheckOut 