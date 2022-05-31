import { FC } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import { bodyContent } from "../style/common";
import Hero from "./Hero"; 




const Layout: FC = () => {

    return (

        <div style={{...bodyContent}}>
            <Header />
            <Hero /> 
            <Content />
            <Footer />
        </div>
    )


}





export default Layout 