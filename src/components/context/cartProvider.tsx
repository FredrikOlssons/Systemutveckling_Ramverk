import { CartItem } from '../cartItem'

import {products, Product} from "../../data/products"


import { UpdateSharp } from "@material-ui/icons";
import React, {PropsWithChildren, useState, useEffect, FC} from "react";


interface Props {}


export interface CartContextData {
    //cartItem: Product[],

    removeFromCart: () => void
    getCart: () => void 
    cartItems: CartItem[],
    addToCart: (product: Product) => void
}

export const CartContext = React.createContext<CartContextData>({
    //cartItem: products,
    removeFromCart: () => {},
    getCart: () => {},
    cartItems: [],
    addToCart: (product) => {}
}

)

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [cartItems, setCart] = useState<CartItem[]> ([])
    
  
     const getCart: () => void = () => {
        const getCartItem = localStorage.getItem('cart')
       //localStorage.removeItem('cart')
    
        if(getCartItem){
            const cart = JSON.parse(getCartItem)
            setCart(cart)
            
            
        }else{
            localStorage.setItem('cart', JSON.stringify(cartItems))
            
        } 

        return getCartItem
    }
     
    

 
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
      

    
    }
    


    
    
    const removeFromCart: () => void = () => {


        //const filter = cartItem.filter
    }
    
        //localStorage.removeItem('cart')

    //useEffect(() => {
        //localStorage.setItem('cart', JSON.stringify(cartItem))
    //}, [cartItem])

        //const filter = allProducts.filter
        
        
 



    
    
    useEffect(() => {
        //getAllProducts(); 
        getCart(); 
    }, []) 




    return (
        <CartContext.Provider value={{cartItems, removeFromCart, getCart, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )   


}
export default CartProvider


