import { CSSProperties, FC } from "react";
import Footer from "./footer";
import Header from "./header";
import { bodyContent } from "../style/common";
import RenderView from "./functions/renderView";
import CartProvider from "./context/cartProvider";
import DeviceProvider from "./context/DeviceProvider";




const Layout: FC = () => {

    return (

        <div style={{...bodyContent}}>
            <DeviceProvider>
                <CartProvider>
                    <Header /> 
                    <RenderView />
                    <Footer />
                </CartProvider>
            </DeviceProvider>
        </div>
    )


}







export default Layout 