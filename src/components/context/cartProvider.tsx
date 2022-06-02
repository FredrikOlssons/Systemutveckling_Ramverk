import React, {PropsWithChildren, useState, useEffect} from "react";
import {FC} from "react"
import {product, Products} from "../../data/products"

//import CartItem from "../cartItem"


export interface CartContext {
    cart: Products[],
    setItemsInCart: () => void
}

export const CartContentContext = React.createContext<CartContext>({
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
        if(!cart || cart == []) {
            setCart(product)
        }else{
            console.log('hej')
        }
    }

    
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContentContext.Provider value={{cart, setItemsInCart}}>
            {props.children}
        </CartContentContext.Provider>
    )   
}

export default CartProvider


