import React, {PropsWithChildren, useState, useEffect, FC} from "react";

import {product, Products} from "../../data/products"




export interface CartContext {
    cartItem: Products[],
    addToCart: () => void,
    removeFromCart: () => void
}

export const CartContentContext = React.createContext<CartContext>({
    cartItem: product,
    addToCart: () => {},
    removeFromCart: () => {}

})




interface Props  {}

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {
    const [cartItem, setCart] = useState<Products[]>(product)
    
    const addToCart: () => void = () => {
        
        if(!cartItem || cartItem == []) {
            //
            
           
        }else{
            console.log('hej')
            console.log(cartItem)
            console.log(cartItem.length)
            const allProducts = localStorage.getItem('cart')
            console.log(allProducts)
        }
        
    }
    


    
    const removeFromCart: () => void = () => {
        const filter = cartItem.filter
        
        }
 
    
        localStorage.removeItem('cart')

    
    
    //useEffect(() => {
        //localStorage.setItem('cart', JSON.stringify(cartItem))
    //}, [cartItem])

    return (
        <CartContentContext.Provider value={{cartItem, addToCart, removeFromCart}}>
            {props.children}
        </CartContentContext.Provider>
    )   
}

export default CartProvider


