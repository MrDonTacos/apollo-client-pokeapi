import React from "react";
import {row, list, fullDetail, loading} from './styles/content-layout.module.css'

const ContentLayout = ({layout, children}) => {
    return (
        <div className={layout === 'list' ? list : layout === 'module' ? row : layout === 'loading' ? loading : fullDetail}>
            {children}
        </div>
    )
}

export default ContentLayout;