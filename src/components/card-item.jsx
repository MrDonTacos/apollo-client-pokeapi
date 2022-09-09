import React from "react"
import {card ,topCard ,bottomCard, rowCard, fullCard} from './styles/card.module.css'

const Card = ({pokemon, layout}) => {
    const { image, name, weight, id, abilities } = pokemon
    const nameCard = `${name} card!`
    return (
    <div key={id} className={layout === 'list' ? card : layout === 'module' ? rowCard : fullCard}>
        <div className={topCard}>
            <img src={image} alt={nameCard}/>
        </div>
        <div className={bottomCard}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>weight: {weight}</p>
            {layout === 'quilt' ? <div> 
                <hr />
                <p>Abilities: </p> 
                <ol>
                    {abilities?.map((data, index) => <li key={index}>{data.name}</li>)}
                </ol>
                </div>: ''}
        </div>
    </div>
    )
}


export default Card
