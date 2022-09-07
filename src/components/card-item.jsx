import React from "react"
import {card ,topCard ,bottomCard} from './styles/card.module.css'

const Card = ({pokemon}) => {
    const { image, name, weight, id } = pokemon
    const nameCard = `${name} card!`
    return (
    <div key={id} className={card}>
        <div className={topCard}>
            <img src={image} alt={nameCard}/>
        </div>
        <div className={bottomCard}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>weight: {weight}</p>
        </div>
    </div>
    )
}

export default Card
