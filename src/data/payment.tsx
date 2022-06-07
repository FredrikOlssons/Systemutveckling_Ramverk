import Swish from '../assets/payment/swish.png'
import Visakort from '../assets/payment/visa.png'
import Faktura from '../assets/payment/faktura.png'



export interface Payment {
    id: number
    title: string
    image: string
    description: string
    price: number
}

export const paymentList: Payment[] = [
    {
        id: 1,
        title: "Swish",
        image: Swish, 
        description: "Betala direkt via Swish utan någon extra kostnad.",
        price: 0

    }, {
        id: 1,
        title: "Visakort",
        image: Visakort,
        description: "Betala med Visa/Kreditkort direkt i samband med ditt köp.",
        price: 0
    }, {
        id: 1,
        title: "Faktura",
        image: Faktura, 
        description: "Betala senare med faktura som skickas efter slutförd köp.",
        price: 29
    }
]