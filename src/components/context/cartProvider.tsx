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


/* const addToCart = () => {
    let cartButton = document.getElementById('purchaseButton').
    cartButton.addEventListener
}
 */

interface Props  {}

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {
    const [cart, setCart] = useState<Products[]>(product)
    
    const setItemsInCart: () => void = () => {
        //const cart: boolean = true;  
        if(!cart) {
            console.log('cart is empty');
        }
        else {'cart is fully loaded'}
    }

    setItemsInCart();

    

        window.addEventListener("click", setItemsInCart)
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));}, [cart]); 
    

        useEffect(() => {
        },[cart])

    return(<cartContentContext.Provider value={{cart, setItemsInCart}}>
        {props.children}
    </cartContentContext.Provider>)
    
    
    
}

export default CartProvider

