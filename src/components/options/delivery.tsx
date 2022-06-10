import { FC, useState, CSSProperties } from "react"
import { deliveryList } from "../../data/delivery"; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import DatePicker from "react-datepicker";  


interface Props {}

export const Delivery: FC<Props> = (props) => {

    const [deliveryAlt, setDeliveryAlt] = useState<String | undefined>()

    const choosenDelivery = (title: string) => {

        if(deliveryAlt) {
            return deliveryAlt
        }
    }

 

    choosenDelivery; 
    
    
    
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
                defaultValue={deliveryList[0].title}
                
                
                name="radio-buttons-group">

                {
                deliveryList.map((choosenDelivery) => {
                    return (
                    <div key={choosenDelivery.id} style={deliveryBox}>
                        <FormControlLabel value={choosenDelivery.estimatedDelivery} control={<Radio />} label={choosenDelivery.title}
                         onChange = {() => getDeliveryDate(choosenDelivery.estimatedDelivery)} />
                        <span key={choosenDelivery.price}>Pris: {choosenDelivery.price} kr</span>
                        <br />
                        
                        
                        <span key={choosenDelivery.description}>{choosenDelivery.description}</span>
                      
                        <h4>Beräknad leveransdag: { getDeliveryDate(choosenDelivery.estimatedDelivery)}</h4>
                        <span></span>
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
    fontWeight: "bold",
    backgroundColor: "#d3d3d35e",
    display: "flex",
    alignItems: "center"
}

export default Delivery 