import React from "react";
import { content } from './styles/content.module.css'

const Content = ({children}) => {
    return (
        <div className={content}>
            {children}
        </div>
    )
}

export default Content