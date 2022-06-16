import { FC, CSSProperties, useContext} from "react"
import { paymentList } from '../../data/payment'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { CardPayment } from './paymentForm'
import ValidationInvoice from './invoice'
import ValidationSwish from './swish'
import { CartContext } from '../context/cartProvider'


interface Props {}

export const Payment: FC<Props> = (props) => {
    const { payment, setPayment} = useContext(CartContext)

   return (
        <FormControl>
          
            <FormLabel id="demo-radio-buttons-group-label">Våra betalningsalternativ:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group">
                
                {
                paymentList.map((choosenPayment) => {
                    return (

                        <div key={choosenPayment.id} style={paymentBox}>
                            
                            <FormControlLabel value={choosenPayment.price} control={<Radio />} onChange={() => {
                                setPayment(choosenPayment)

                                }} label={choosenPayment.title} />
                                
                
                                <span key={choosenPayment.price}>Pris: {choosenPayment.price} kr</span>
                                <br />
                                <img style={paymentImg} src={choosenPayment.image} key={choosenPayment.image}/>
                                <br />
                                <span key={choosenPayment.description}>{choosenPayment.description}</span>
                                <pre />
                            
                            <div>
                                    {
                                        payment && (payment.title == choosenPayment.title && choosenPayment.title) == "Visakort" ? <CardPayment /> : undefined
                                    }{
                                        payment && (payment.title == choosenPayment.title && choosenPayment.title) == "Swish" ?< ValidationSwish /> : undefined
                                    }{
                                        payment && (payment.title == choosenPayment.title && choosenPayment.title) == "Faktura" ? < ValidationInvoice /> : undefined                                       
                                    }                
                            </div>
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
    backgroundColor: "#d3d3d35e"
}

export default Payment 