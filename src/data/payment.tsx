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

export interface Swish { 
    phoneNumber: string
}

export interface Card {
    
    cardNr: string,
    name: string,
    dateYear: string,
    dateMonth: string,
    cvc: string
}

export interface Invoice {
    streetAdress: string, 
    postalCode: string,
    town: string,
    country: string, 
}


export const paymentList: Payment[] = [
    {
        id: 1,
        title: "Swish",
        image: Swish,
        description: "Betala direkt via Swish utan någon extra kostnad.",
        price: 0

    }, {
        id: 2,
        title: "Visakort",
        image: Visakort,
        description: "Betala med Visa/Kreditkort direkt i samband med ditt köp.",
        price: 25

    }, {
        id: 3,
        title: "Faktura",
        image: Faktura,
        description: "Betala senare med faktura som skickas efter slutförd köp.",
        price: 29
    }
]