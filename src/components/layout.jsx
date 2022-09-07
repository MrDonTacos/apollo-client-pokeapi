import React from "react";
import Header from './header'
import Footer from "./footer";
import Content from "./content";
import  './styles/layout.css'


const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </div>
    )
}

export default Layout