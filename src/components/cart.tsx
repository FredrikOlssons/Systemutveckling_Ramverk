import {CartContextData, CartContext} from '../components/context/cartProvider'
import { useContext, FC, useEffect } from 'react'
import CartProvider from '../components/context/cartProvider'

interface Props {

}

const Cart: FC<Props> = (props) => {
    
    const { allProducts, addToCart } = useContext(CartContext)

    if( allProducts ) {

    }

    return (
        <div>
            {/* <button onClick={addToCart}>add to cart </button> */}
        </div>
    )

}

export default Cart