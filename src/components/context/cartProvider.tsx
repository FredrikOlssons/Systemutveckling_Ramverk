import { CartItem } from '../cartItem'

import {products, Product} from "../../data/products"


import { UpdateSharp } from "@material-ui/icons";
import React, {PropsWithChildren, useState, useEffect, FC} from "react";


interface Props {}


export interface CartContextData {
    //cartItem: Product[],

    removeFromCart: () => void
    cartItems: CartItem[],
    addToCart: (product: Product) => void
}

export const CartContext = React.createContext<CartContextData>({
    //cartItem: products,
    removeFromCart: () => {},
    cartItems: [],
    addToCart: (product) => {}
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
            console.log('potato')
            
            
        }

        setCart(updatedCart)
        console.log(updatedCart)
      

    
    }
    


    
    
    const removeFromCart: () => void = () => {


        //const filter = cartItem.filter
    }
    
       

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
        <CartContext.Provider value={{cartItems, removeFromCart, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )   


}
export default CartProvider


