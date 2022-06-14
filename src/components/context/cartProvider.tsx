import { CartItem } from '../cartItem'

import {products, Product} from "../../data/products"



import React, {PropsWithChildren, useState, useEffect, FC} from "react";
import { Payment } from '../../data/payment';
import { Delivery } from '../../data/delivery';
import { Customer } from '../customer';




interface Props {}


export interface CartContextData {

    removeFromCart: (product: Product) => void
    removeProductFromCart: (product: Product) => void
    cartItems: CartItem[],
    customer?: Customer,
    shipper?: Delivery,
    payment?: Payment,

    addToCart: (product: Product) => void
    totalPriceAllProduct: () => number
    calculateTotalQty: () => number
    totPricePerProduct: (product: Product) => number
    totalPrice: () => number
}

export const CartContext = React.createContext<CartContextData>({
    
    removeFromCart: (product) => {},
    removeProductFromCart: (product) => {},
    cartItems: [],
    addToCart: (product) => {},
    totalPriceAllProduct: () => 0,
    calculateTotalQty: () => 0,
    totPricePerProduct: (product) => 0,
    totalPrice: () => 0
   
}

)

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [cartItems, setCart] = useState<CartItem[]> ([])
    

    const [customer, setCustomer] = useState<Customer | undefined> ()

    const [shipper, setShipper] = useState<Delivery | undefined> ()

    const [payment, setPayment] = useState<Payment | undefined> ()
     
    

  const addToCart = (product: Product) => {
    const updatedCart = [...cartItems]
    const found = updatedCart.findIndex((item) => item.product.id == product.id)

        if(found == -1){
            updatedCart.push({product, quantity: 1 });
        }else{

            
            updatedCart[found].quantity++ 
            
        }   

        setCart(updatedCart)
        console.log(updatedCart)

    }


    // removes one product at a time
    const removeFromCart = (product: Product) => {

        const updatedCart = [...cartItems]
        const updatedCartIndex = updatedCart.findIndex(item => item.product.id == product.id);

        const updatedItem = {
            ...updatedCart[updatedCartIndex]
        }
        updatedItem.quantity--; 
        if(updatedItem.quantity <= 0) {
            updatedCart.splice(updatedCartIndex, 1)
            console.log(updatedCart)
        }else{
            updatedCart[updatedCartIndex] = updatedItem
        }
        setCart(updatedCart)

       
    }


    // removes the entire product regardless how many in cart 
    const removeProductFromCart = (product: Product) =>  {
        const listOfProducts = [...cartItems]
        let updatedList = listOfProducts.filter((item) => item.product.id !== product.id); 
        setCart(updatedList)
        console.log(updatedList)
      
    
    }
    

    const calculateTotalQty: () => number = () => {
        let total: number = 0
        const listOfProducts = [...cartItems]
        listOfProducts.forEach((item) => {
            total += item.quantity
        })
       
        let element = document.getElementById("styledBadge")
        

        if(element)
        element.textContent = total.toString();

        return total 
        
    }


    // display total price for single product 
    const totPricePerProduct = (product: Product) => {
        
        const listOfProducts = [...cartItems]

        let updatedList = listOfProducts.filter((item) => item.product.id == product.id); 
        let totalPrice = updatedList.reduce((sum,product) => sum + product.product.price * product.quantity, 0);
        return totalPrice
        
    }


    // displays total price for all items in cart
    const totalPriceAllProduct: () => number  = () => {
        const listOfProducts = [...cartItems]
        let amount = listOfProducts.reduce((sum,product) => sum + product.product.price * product.quantity, 0);
        
        return amount
    }

    // display total price incl. payment/delivery

    const totalPrice: () => number = () => {
        
        let totPrice: number = 0

        // Lägga till funktionen ovan och inkludera nya variabler som tar in pris för frakt/betalning


        return totPrice
    } 


    useEffect(()=>{
        calculateTotalQty();   
    }, [cartItems])
        

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])



    
    
    useEffect(() => {
        const getCart: () => void = () => {
            const getCartItem = localStorage.getItem('cart')
        
            if(getCartItem){
                const cart = JSON.parse(getCartItem)
                setCart(cart)   
            }
            
        }
        
        getCart(); 


    }, []) 




    return (
        <CartContext.Provider value={{cartItems, removeFromCart, addToCart, removeProductFromCart, totalPriceAllProduct, calculateTotalQty, totPricePerProduct, customer, shipper, payment, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )   


}
export default CartProvider


