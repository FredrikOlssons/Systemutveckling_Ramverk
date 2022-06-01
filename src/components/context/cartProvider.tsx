import React, {PropsWithChildren, useState, useEffect} from "react";
import {FC} from "react"
import {product, Products} from "../../data/products"

//import CartItem from "../cartItem"


export interface CartContext {
    cart: Products[],
    setItemsInCart: () => void
}

const cartContentContext = React.createContext<CartContext>({
    cart: product,
    setItemsInCart: () => {}

})


interface Props  {}

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {
    const [cart, setCart] = useState<Products[]>(product)
    
    const setItemsInCart: () => void = () => {
        if(!cart) {
            console.log('cart is empty');
        }
        else {'cart is fully loaded'}
    }
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));}, [cart]); 
    

        useEffect(() => {
        },[cart])

    return(<cartContentContext.Provider value={{cart, setItemsInCart}}>
        {props.children}
    </cartContentContext.Provider>)
    
    
    
}

export default CartProvider

// add to cart funktion
