import { CSSProperties, FC } from "react";
import Footer from "./common/footer";
import Header from "./common/header";
import { bodyContent } from "../style/common";
import RenderView from "./functions/renderView";
import CartProvider from "./context/cartProvider";
import DeviceProvider from "./context/DeviceProvider";
import AlertDialog from "./functions/dialog";




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