import { FC, useState, CSSProperties } from "react"
import { delivery } from "../../data/delivery"; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


interface Props {}

export const Delivery: FC<Props> = (props) => {

    const [deliveryAlt, setDeliveryAlt] = useState<String | undefined>()

    const choosenDelivery = (title: string) => {

        if(deliveryAlt) {
            return deliveryAlt
        }
    }
    choosenDelivery; 

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Våra fraktalternativ:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={delivery[0].title}
                
                name="radio-buttons-group">

                {
                delivery.map((choosenDelivery) => {
                    return (
                    <div style={deliveryBox}>
                        <FormControlLabel key={choosenDelivery.id} value={choosenDelivery.title} control={<Radio />} label={choosenDelivery.title} />
                        <span key={choosenDelivery.price}>Pris: {choosenDelivery.price} kr</span>
                        <br />
                        <span key={choosenDelivery.description}>{choosenDelivery.description}</span>

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