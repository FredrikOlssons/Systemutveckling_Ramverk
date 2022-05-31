import { FC } from "react";
import Content from "./allPages/StartPageContent";
import Footer from "./footer";
import Header from "./header";
import { bodyContent } from "../style/common";
import Hero from "./Hero"; 
import RenderView from "./functions/renderView";




const Layout: FC = () => {

    return (

        <div style={{...bodyContent}}>
            <Header /> 
            <RenderView />
            <Footer />
        </div>
    )


}





export default Layout 