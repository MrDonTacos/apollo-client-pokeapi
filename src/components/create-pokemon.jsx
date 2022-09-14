import React, {useState} from "react";
import {Box, TextField} from "@mui/material"

const CreatePokemon = () => {
    const [pokemon, setPokemon] = useState({
        name: "",
        ability: "",
        weight: 0,
        picture_url: "",
    });

    const {name, ability, weight, picture_url} = pokemon;

    const handleSubmit = (e) =>
    {
        e.preventDefault();
    }
    
    const handleChanges = (e, nextEvent) => {
        setPokemon({...pokemon, [e.target.name]: e.target.value})
        e.preventDefault();
    }

    console.log(pokemon)
    return (
        <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">    
            <div>
                <br />
                <br />
                <TextField 
                required
                sx={{'margin': '5px'}}
                type='text'
                name="name"
                value={name}
                onChange={handleChanges}
                />
                <br />
                <TextField
                required
                sx={{'margin': '5px'}}
                type='text'
                name="ability"
                value={ability}
                onChange={handleChanges}
                />
            </div>
            <button>submit</button>
        </Box>
    )
}

export default CreatePokemon