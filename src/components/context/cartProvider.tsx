import { CartItem } from '../cartItem'

import {products, Product} from "../../data/products"


import { UpdateSharp } from "@material-ui/icons";
import React, {PropsWithChildren, useState, useEffect, FC} from "react";


interface Props {}


export interface CartContextData {
    //cartItem: Product[],

    removeFromCart: (product: Product) => void
    removeProductFromCart: (product: Product) => void
    cartItems: CartItem[],
    addToCart: (product: Product) => void
    totalPrice: () => void
    calculateTotalQty: () => void
}

export const CartContext = React.createContext<CartContextData>({
    //cartItem: products,
    removeFromCart: (product) => {},
    removeProductFromCart: (product) => {},
    cartItems: [],
    addToCart: (product) => {},
    totalPrice: () => {},
    calculateTotalQty: () => {}
}

)

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [cartItems, setCart] = useState<CartItem[]> ([])
    
  
    
     
    

 
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
    

    const calculateTotalQty: () => void = () => {
        let total: number = 0
        const listOfProducts = [...cartItems]
        listOfProducts.forEach((item) => {
            total += item.quantity
        })
        console.log(total)
        let element = document.getElementById("styledBadge")
        

        if(element)
        element.textContent = total.toString();

        return total 
        

    }


// displays total price for all items in cart
const totalPrice: () => void  = () => {
    const listOfProducts = [...cartItems]
    let amount = listOfProducts.reduce((sum,product) => sum + product.product.price * product.quantity, 0);
    
    console.log(amount)
    return amount
    
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
        <CartContext.Provider value={{cartItems, removeFromCart, addToCart, removeProductFromCart, totalPrice, calculateTotalQty}}>
            {props.children}
        </CartContext.Provider>
    )   


}
export default CartProvider


