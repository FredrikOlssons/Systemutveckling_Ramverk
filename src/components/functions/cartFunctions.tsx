import { FC, useContext } from "react";
import { CartContext } from "../context/cartProvider";


interface Props {}



const CartFunctions: FC<Props> = (props) => {


    const { cartItems } = useContext(CartContext)

    console.log(cartItems)
    
    let cart = localStorage.getItem('cart'); 
    cart = JSON.parse(cart!)


        return (
            <div></div>
        )

        }






export default CartFunctions 