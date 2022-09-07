import React from 'react'
import { footer } from './styles/footer.module.css'

const Footer = () => {
    return (
        <div className={footer}>
            <div>Home</div>
            <div>About</div>
            <div>Apollo GraphQL</div>
            <div>Saul CC!</div>
            <div>Poke-API</div>
        </div>
    )
}

export default Footer