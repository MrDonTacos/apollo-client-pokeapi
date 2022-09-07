import React, {useState} from "react";
import Card from "./card-item";
import PaginationOptions from "./pagination-options";
import { gql, useQuery } from "@apollo/client";
import ContentLayout from './content-layout'

const GET_ALL_POKEMONS = gql`
    query Query($limit: Int, $offset: Int) {
        allPokemons(limit: $limit, offset: $offset) {
          count
          pokemonResource {
            name
            pokemon {
              id
              name
              weight
              image
              abilities {
                id
                name
              }
            }
          }
        }
    }
`
const CardList = () => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(0);
    const [layout, setLayout] = useState('list');

    const { data, loading, error } = useQuery(GET_ALL_POKEMONS, {
        variables: {limit: limit, offset: offset},
        onCompleted: (data) => {
            let numberRegisters = 0;
            if(numberRegisters > 0)
                return
            numberRegisters = data?.allPokemons?.count;
            setCount(numberRegisters);
        }
    });

    function handleEventPageSize(e)
    {
        setLimit(e.target.value)
    }

    function handleEventOffSet(e)
    {
        setOffset(e.target.value)
    }

    function handleEventLayout(e, nextEvent)
    {
        let value = nextEvent ?? 'list'
        setLayout(value)
    }

    if (loading) return <div>...Loading</div>
    if (error) return <div>¡ERROR!</div>

    return (
        <div>
            <PaginationOptions view={layout} total={count} offset={offset} limit={limit} handleEventOffSet={handleEventOffSet} handleEventPageSize={handleEventPageSize} handleEventLayout={handleEventLayout}/> 
            <ContentLayout layout={layout}>
                {data?.allPokemons?.pokemonResource?.map((data) => <Card key={data.pokemon.id.toString()} pokemon={data.pokemon} layout={layout}/>)}
            </ContentLayout>           
        </div>
    )
}

export default CardList