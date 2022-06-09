import { CartItem } from '../cartItem'

import {products, Product} from "../../data/products"


import { UpdateSharp } from "@material-ui/icons";
import React, {PropsWithChildren, useState, useEffect, FC} from "react";


interface Props {}

export interface CartContext {
    //cartItem: Product[],
    addToCart: () => void,

}


export interface CartContextData {
    //cartItem: Product[],

    removeFromCart: () => void
    getCart: () => void 
    allProducts: Product[],
    //addToCart: Product[],
}

export const CartContext = React.createContext<CartContextData>({
    //cartItem: products,
    removeFromCart: () => {},
    getCart: () => {},
    allProducts: products,
    //addToCart: products
}

)

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [allProducts, setAllProducts] = useState<Product[]>(products)
    const [cartItems, setCart] = useState<Product[]> ([])
    
  
     const getCart: () => void = () => {
        const getCartItem = localStorage.getItem('cart')
       //localStorage.removeItem('cart')
    
        if(getCartItem){
            const cart = JSON.parse(getCartItem)
            setCart(cart)
            console.log(typeof(cart), 'cart')
            console.log(cart)
            //console.log(cart)
        }else{
            localStorage.setItem('cart', JSON.stringify(cartItems))
            /* console.log(cartItem, allProducts, 'tomato')
            console.log(typeof(cartItem), 'cartitem')
            console.log(typeof(allProducts), 'allProducts')
            console.log(typeof(products), 'products') */
        } 
    }
     
    

 
     //const addToCart = (product: Product) => {

        //const found = allProducts.find((item) => item.id == product.id)
        //console.log(product.id, 'product')
        

        //console.log(allProducts)
        //console.log(found, 'found')

       
        //const copy = [...cartItems]
        /* if(!found){

            console.log('hej')
        }else{
            console.log('potato')
            
        } */
     //}
        /* copy.push(found!)
        console.log(copy) */
        //getCart() */

     

 
    /*  const addToCart: () => void = () => {
      
           console.log('hej')
            //console.log(product.id)
        }
    } */
    


        /* const updatedCart = [...allProducts];
        const updatedItemIndex = updatedCart.findIndex(
        item => item.id == product[0].id)
        
        if (updatedItemIndex < 0) {
            updatedCart.push({...product});
          }  */
    
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
        <CartContext.Provider value={{allProducts, removeFromCart, getCart}}>
            {props.children}
        </CartContext.Provider>
    )   


}
export default CartProvider


