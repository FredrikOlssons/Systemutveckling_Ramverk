
import React, { useEffect, useState} from "react"; 
import { FC, PropsWithChildren } from "react"; 
import { Payment } from '../options/payment'

export interface PaymentContextData {
    payments: Payments
}

export interface Payments {
    swish: boolean,
    card: boolean,
    invoice: boolean
}

const DefaultContextData: Payments = {
    swish: false,
    card: false,
    invoice: false 
}

export const PaymentContext = React.createContext<PaymentContextData>({
    payments: DefaultContextData
})

interface Props {}

const PaymentProvider: FC<PropsWithChildren<Props>> = (props) => {
    const [payments, setPayment] = useState<Payments>(DefaultContextData)



    useEffect(() => {
        const onWindowChange = () => {
            if((window.innerWidth > 1250)) {
                setPayment({ swish: true, card: false, invoice: false })
            } else if((window.innerWidth <= 1250 && window.innerWidth > 820)) {
                setPayment({ swish: false, card: true, invoice: false })
            } else if((window.innerWidth <= 820)) {
                setPayment({ swish: false, card: false, invoice: true} )
            }
        }

        onWindowChange()

        window.addEventListener("resize", onWindowChange)

    }, [])

    useEffect(() => {
    },[payments])

    return (
        <PaymentContext.Provider value={{ payments }}>
            {props.children}
        </PaymentContext.Provider>
    )

}

export default PaymentProvider




/*   { if(isChoosenPayment.title == 'Card')
  <MyCards />
} */