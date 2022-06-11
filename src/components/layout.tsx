import { CSSProperties, FC } from "react";
import Content from "./allPages/StartPageContent";
import Footer from "./footer";
import Header from "./header";
import { bodyContent } from "../style/common";
import RenderView from "./functions/renderView";
import CartProvider from "./context/cartProvider";
import Admin from "./allPages/admin";





const Layout: FC = () => {

    return (

        <div style={{...bodyContent}}>
            <CartProvider>
                <Header /> 
                <RenderView />
                <Footer />
            </CartProvider>
        </div>
    )


}







export default Layout 