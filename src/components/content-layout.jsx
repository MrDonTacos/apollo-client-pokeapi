import React from "react";
import {column, list, fullDetail} from './styles/content-layout.module.css'
import CardList from "./cards";

const ContentLayout = () => {
    const Layout = 0;
    return (
        <div className={Layout === 0 ? list : Layout === 1 ? column : fullDetail}>
            <CardList />
        </div>
    )
}

export default ContentLayout;