import { FC, useState, CSSProperties} from "react"
import { paymentList } from '../../data/payment'
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
    const [query, setQuery] = useState('');

    const changeData: React.ChangeEventHandler | undefined = 
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const paymentPrice = event.target.value;
        setQuery(paymentPrice);
        console.log(paymentPrice)
        return query
    }
 

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Våra betalningsalternativ:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={paymentList[0].title}
                
                name="radio-buttons-group">

                {
                paymentList.map((choosenPayment) => {
                    return (
                    <div style={paymentBox}>
                        <FormControlLabel key={choosenPayment.id} value={choosenPayment.price} control={<Radio />} label={choosenPayment.title} onChange={changeData}/>
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