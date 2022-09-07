import React from 'react'
import { footer } from './styles/footer.module.css'
import {Link} from 'gatsby' 

const Footer = () => {
    return (
        <div className={footer}>
            <Link to='/home/'>Home</Link>
            <div>About</div>
            <div>Apollo GraphQL</div>
            <div>Saul CC!</div>
            <div>Poke-API</div>
        </div>
    )
}

export default Footer