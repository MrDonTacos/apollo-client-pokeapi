import React from "react";
import { content } from './styles/content.module.css'
import CardList from "./cards";

const Content = ({children}) => {
    return (
        <div className={content}>
            {children}
        </div>
    )
}

export default Content