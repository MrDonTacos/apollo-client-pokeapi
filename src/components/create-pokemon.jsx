import React, {useState} from "react";
import {Box, TextField} from "@mui/material"

const CreatePokemon = () => {
    const [pokemon, setPokemon] = useState;

    function handleSubmit(e)
    {
        console.log()
        setPokemon(e.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">    
                <div>
                    <TextField 
                    required
                    defaultValue="Name"
                    />
                    <TextField
                    required
                    defaultValue="Ability"
                    />
                </div>
                <input type="submit" />
            </Box>
        </form>
    )
}

export default CreatePokemon