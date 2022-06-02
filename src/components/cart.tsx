import {CartContext, CartContentContext} from '../components/context/cartProvider'
import { useContext, FC } from 'react'
import CartProvider from '../components/context/cartProvider'




interface Props {

}

const Cart: FC<Props> = (props) => {
    
const { cart } = useContext(CartContentContext)
}

/* export const Cart: FC<Props> = (props) => {
    const [cart, setCart] = useContext(cart)
} */


export default Cart