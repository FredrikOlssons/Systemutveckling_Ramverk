import { CSSProperties, FC } from "react";
import Content from "./allPages/StartPageContent";
import Footer from "./footer";
import Header from "./header";
import { bodyContent } from "../style/common";
import RenderView from "./functions/renderView";
import CartProvider from "./context/cartProvider";
import Cart from "./cart";




const Layout: FC = () => {

    return (

        <div style={{...bodyContent}}>
            <CartProvider>
                <Header /> 
                <Cart />
                <RenderView />
                <Footer />
            </CartProvider>
        </div>
    )


}







export default Layout 