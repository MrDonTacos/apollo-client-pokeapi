import React from "react"
import {header, pokeLogo} from './styles/header.module.css'
import ApolloPokeApiLogo from '../images/apolloPokeapi.png'

const Header = () => {
    return (
        <div className={header}>
            <img className={pokeLogo} src={ApolloPokeApiLogo} alt="" />
        </div>
    )
}

export default Header