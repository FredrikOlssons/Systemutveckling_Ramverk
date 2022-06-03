import {CartContext, CartContentContext} from '../components/context/cartProvider'
import { useContext, FC, useEffect } from 'react'
import CartProvider from '../components/context/cartProvider'




interface Props {


}

const Cart: FC<Props> = (props) => {
    
    const { cartItem, addToCart } = useContext(CartContentContext)

    if( cartItem ) {


    }

    
    
    
    
    
    
    return (
        <div>

            {/* <button onClick={addToCart}>add to cart </button> */}
            
        </div>
    )


}




export default Cart