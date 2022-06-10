import { FC, useState, CSSProperties} from "react"
import { paymentList } from '../../data/payment'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


interface Props {}

export const Payment: FC<Props> = (props) => {


    const [isChoosenPayment, setIsChoosenPayment] = useState("")
  



    return (
        <FormControl>
            <h2>{isChoosenPayment}</h2>
            <FormLabel id="demo-radio-buttons-group-label">Våra betalningsalternativ:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group">

                {
                paymentList.map((choosenPayment) => {
            

                    return (

                    
                        <div key={choosenPayment.id} style={paymentBox}>
                            
                        <FormControlLabel value={choosenPayment.title} control={<Radio />} onChange={() => {
                            setIsChoosenPayment(choosenPayment.title)
                        }} label={choosenPayment.title} />
                            
                            
                            
                            <span key={choosenPayment.price}>Pris: {choosenPayment.price} kr</span>
                            <br />
                            <img style={paymentImg} src={choosenPayment.image} key={choosenPayment.image}/>
                            <br />
                            <span key={choosenPayment.description}>{choosenPayment.description}</span>

                            {
                                isChoosenPayment == choosenPayment.title ? <h1>{choosenPayment.title} VALD</h1> : undefined
                            }
                            
                        </div>

                
                    )
                    
            

                })
            
                }
               
    
                
            </RadioGroup>
            </FormControl>
    )
}



const paymentImg: CSSProperties = {
    width: "80px",
    height: "50px"
}

const paymentBox: CSSProperties = {
    gap: "10px",
    borderRadius: "15px",
    textAlign: "center",
    marginBottom: "10px",
    padding: "10px",
    fontWeight: "bold",
    backgroundColor: "#d3d3d35e"
}

export default Payment 