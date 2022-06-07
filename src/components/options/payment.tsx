import { FC, useState, CSSProperties } from "react"
import { payment } from '../../data/payment'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


interface Props {}

export const Payment: FC<Props> = (props) => {

    const [paymentAlt, setPaymentAlt] = useState<String | undefined>()

    const choosePayment = (title: string) => {

        if(paymentAlt) {
            return paymentAlt
        }
    }
    choosePayment; 

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Våra betalningsalternativ:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={payment[0].title}
                
                name="radio-buttons-group">

                {
                payment.map((choosenPayment) => {
                    return (
                    <div style={paymentBox}>
                        <FormControlLabel key={choosenPayment.id} value={choosenPayment.title} control={<Radio />} label={choosenPayment.title} />
                        <span key={choosenPayment.price}>Pris: {choosenPayment.price} kr</span>
                        <br />
                        <img style={paymentImg} src={choosenPayment.image} key={choosenPayment.image}/>
                        <br />
                        <span key={choosenPayment.description}>{choosenPayment.description}</span>

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