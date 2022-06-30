import { CartItem } from '../interfaces/cartItem'
import { Product } from "../../data/products"
import React, { PropsWithChildren, useState, useEffect, FC } from "react";
import { Payment, Swish, Invoice, Card } from '../../data/payment';
import { Delivery } from '../../data/delivery';
import { Customer } from '../interfaces/customer';


interface Props { }

export interface CartContextData {

    removeFromCart: (product: Product) => void
    removeProductFromCart: (product: Product) => void
    cartItems: CartItem[],
    customer?: Customer,

    payment?: Payment,
    swish?: Swish,
    invoice?: Invoice,
    card?: Card,
    deliveryAlt?: Delivery

    setCustomer: React.Dispatch<React.SetStateAction<Customer | undefined>>
    setPayment: React.Dispatch<React.SetStateAction<Payment | undefined>>
    setSwish: React.Dispatch<React.SetStateAction<Swish | undefined>>
    setInvoice: React.Dispatch<React.SetStateAction<Invoice | undefined>>
    setCard: React.Dispatch<React.SetStateAction<Card | undefined>>
    setDeliveryAlt: React.Dispatch<React.SetStateAction<Delivery | undefined>>


    addToCart: (product: Product) => void
    totalPriceAllProduct: () => number
    calculateTotalQty: () => number
    totPricePerProduct: (product: Product) => number
    totalPrice: () => number
    calcVat: () => number
    confirmPurchase: () => void
}

export const CartContext = React.createContext<CartContextData>({

    removeFromCart: (product) => { },
    removeProductFromCart: (product) => { },
    cartItems: [],
    addToCart: (product) => { },
    totalPriceAllProduct: () => 0,
    calculateTotalQty: () => 0,
    totPricePerProduct: (product) => 0,
    totalPrice: () => 0,
      
    setCustomer: () => { },
    setPayment: () => { },
    setSwish: () => { },
    setInvoice: () => { },
    setCard: () => { },
    setDeliveryAlt: () => { },

    calcVat: () => 0,
    confirmPurchase: () => { }
}
)

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {


    const [cartItems, setCart] = useState<CartItem[]>([])
    const [customer, setCustomer] = useState<Customer | undefined>()
 

    let [deliveryAlt, setDeliveryAlt] = useState<Delivery | undefined>()
    const [payment, setPayment] = useState<Payment | undefined>()
    const [swish, setSwish] = useState<Swish | undefined>()
    const [card, setCard] = useState<Card | undefined>()
    const [invoice, setInvoice] = useState<Invoice | undefined>()

    


    const addToCart = (product: Product) => {
        const updatedCart = [...cartItems]
        const found = updatedCart.findIndex((item) => item.product.id == product.id)

        if (found == -1) {
            updatedCart.push({ product, quantity: 1 });
        } else {
            updatedCart[found].quantity++
        }
        setCart(updatedCart)

    }


    const removeFromCart = (product: Product) => {

        const updatedCart = [...cartItems]
        const updatedCartIndex = updatedCart.findIndex(item => item.product.id == product.id);

        const updatedItem = {
            ...updatedCart[updatedCartIndex]
        }
        updatedItem.quantity--;
        if (updatedItem.quantity <= 0) {
            updatedCart.splice(updatedCartIndex, 1)

        }else{
            updatedCart[updatedCartIndex] = updatedItem
        }
        setCart(updatedCart)
    }


    const removeProductFromCart = (product: Product) => {
        const listOfProducts = [...cartItems]
        let updatedList = listOfProducts.filter((item) => item.product.id !== product.id);
        setCart(updatedList)

    }

    const calculateTotalQty: () => number = () => {
        let total: number = 0
        const listOfProducts = [...cartItems]
        listOfProducts.forEach((item) => {
            total += item.quantity
        })
        return total
    }

    

    // display total price for single product 
    const totPricePerProduct = (product: Product) => {

        const listOfProducts = [...cartItems]
        let updatedList = listOfProducts.filter((item) => item.product.id == product.id);
        let totalPrice = updatedList.reduce((sum, product) => sum + product.product.price * product.quantity, 0);
        return totalPrice
    }

    const calcVat: () => number = () => {
        let price = totalPriceAllProduct();
        var result = price * 1.25;
        let vat = result - price; 
      
        return vat
    }

    // displays total price for all items in cart
    const totalPriceAllProduct: () => number = () => {
        const listOfProducts = [...cartItems]
        let amount = listOfProducts.reduce((sum, product) => sum + product.product.price * product.quantity, 0);

        return amount
    }

    

        const confirmPurchase: () => void = () => {
        
            if(customer && deliveryAlt && payment){
                
                localStorage.removeItem('cart')
                let clearedCart = [...cartItems]
                clearedCart = [];
                
        
            setCart(clearedCart)
            setDeliveryAlt(undefined)
            setPayment(undefined)
            setCustomer(undefined)
            
            

            } 
        
        }

    const totalPrice: () => number = () => {

        
        let totPrice = totalPriceAllProduct();  
        if(customer)
        
        if(deliveryAlt) {
            
            totPrice += deliveryAlt.price
           
            
            if(payment && card || payment && swish || payment && invoice)

            totPrice += payment.price

       }  
        
      
    
        return totPrice
    } 
    

    useEffect(() => {
        calculateTotalQty();
    }, [cartItems])


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])


    useEffect(() => {
        const getCart: () => void = () => {
            const getCartItem = localStorage.getItem('cart')

            if (getCartItem) {
                const cart = JSON.parse(getCartItem)
                setCart(cart)
            }
        }

        getCart();
    }, [])

    return (
        <CartContext.Provider value={{
            cartItems, removeFromCart, addToCart, removeProductFromCart, totalPriceAllProduct,
            calculateTotalQty, totPricePerProduct, customer,
            payment, card, invoice, swish, totalPrice, setCustomer, setPayment, setSwish, setInvoice, setCard,
            setDeliveryAlt, deliveryAlt, calcVat, confirmPurchase
        }}>
            {props.children}
        </CartContext.Provider>
    )
}



export default CartProvider


