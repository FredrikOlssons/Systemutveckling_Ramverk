import React, {PropsWithChildren, useState, useEffect} from "react";
import {FC} from "react"
import {product, Products} from "../../data/products"




export interface CartContext {
    cartItem: Products[],
    addToCart: () => void,
    removeFromCart: () => void
}

export const CartContentContext = React.createContext<CartContext>({
    cartItem: [],
    addToCart: () => {},
    removeFromCart: () => {}

})




interface Props  {}

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {
    const [cartItem, setCart] = useState<Products[]>(product)
    
    const addToCart: () => void = () => {
        
        if(!cartItem || cartItem == []) {
            setCart(product)
            
            console.log(cartItem)
            console.log("Helloooo")
        }else{
            console.log('hej')
        }
        
    }
    


    
    const removeFromCart: () => void = () => {



    }



    
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem))
    }, [cartItem])

    return (
        <CartContentContext.Provider value={{cartItem, addToCart, removeFromCart}}>
            {props.children}
        </CartContentContext.Provider>
    )   
}

export default CartProvider


