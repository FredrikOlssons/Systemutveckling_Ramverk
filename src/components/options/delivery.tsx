import { FC, useState, CSSProperties, useContext } from "react"
import { deliveryList } from "../../data/delivery"; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { CartContext } from "../context/cartProvider";


interface Props {}

export const Delivery: FC<Props> = (props) => {

    
    const { deliveryAlt, setDeliveryAlt} = useContext(CartContext)

    
    
    
    const getDeliveryDate = (choosenDelivery: number | undefined) => {
        let arrivalDate: Date = new Date();
        arrivalDate = new Date(new Date().setHours(new Date().getHours() + choosenDelivery!))
        
        let newString = arrivalDate.toLocaleDateString(); 
        
        return newString
    
    } 


    return (
        <FormControl>
       
            <FormLabel id="demo-radio-buttons-group-label">Våra fraktalternativ:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                
                name="radio-buttons-group">

                {
                deliveryList.map((choosenDelivery) => {
                    return (
                    
                    <div key={choosenDelivery.id} style={deliveryBox}>
                        <div>

                            <FormControlLabel value={choosenDelivery.price} control={<Radio />} label={choosenDelivery.title} 
                            onChange={() => {setDeliveryAlt(choosenDelivery)}} />

                            <span key={choosenDelivery.price}>Pris: {choosenDelivery.price} kr</span>
                            <br />
                            
                            
                            <span key={choosenDelivery.description}>{choosenDelivery.description}</span>
                        </div>

                        
                        <pre>
                            {
                                
                                deliveryAlt && (deliveryAlt.title == choosenDelivery.title) ? <h4 style={deliveryBox}>Beräknad leveransdag: { getDeliveryDate(choosenDelivery.estimatedDelivery)}</h4> : undefined
                            }

                        </pre>
                    </div>
                    
                    
                    
                    )
                })


                }
                
            </RadioGroup>
            </FormControl>
    )
}



const deliveryBox: CSSProperties = {
    gap: "10px",
    borderRadius: "15px",
    textAlign: "center",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#d3d3d35e",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    
}

export default Delivery 