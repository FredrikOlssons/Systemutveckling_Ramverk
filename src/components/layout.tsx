import { FC } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import { bodyContent } from "../style/common";




const Layout: FC = () => {

    return (

        <div style={{...bodyContent}}>
            <Header />
            <Content />
            <Footer />
        </div>
    )


}





export default Layout 