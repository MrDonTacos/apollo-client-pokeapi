import React from "react";
import {row, list, fullDetail} from './styles/content-layout.module.css'

const ContentLayout = ({layout, children}) => {
    return (
        <div className={layout === 'list' ? list : layout === 'module' ? row : fullDetail}>
            {children}
        </div>
    )
}

export default ContentLayout;