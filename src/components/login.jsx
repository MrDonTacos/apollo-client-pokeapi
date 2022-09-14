import React, {useState} from "react";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import {login, saveButton, cancelButton} from './styles/login.module.css'
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
    mutation CreateUser($user: String, $plainPassword: String) {
        createUser(user: $user, plain_password: $plainPassword) {
          user
          plain_password
        }
  }
`

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        plain_password: "",
    });

    const [createUser] = useMutation(CREATE_USER, {
        variables: {user: user.username, plain_password: user.plain_password}
    })

    const handleChanges = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        e.preventDefault();
    }

    return (
        <div className={login}>
            <FormControl sx={{width: '40%'}}>
                <InputLabel htmlFor="username">Username or mail</InputLabel>
                <Input onChange={handleChanges} id="username" aria-describedby="username-helper-text"/>
                <FormHelperText id="username-helper-text">Insert your username or email to login.</FormHelperText>
            </FormControl>
            <br />
            <br />
            <FormControl sx={{width: '40%'}}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input onChange={handleChanges} id="password" aria-describedby="password-helper-text" type="password"/>
                <FormHelperText id="password-helper-text">Insert your password to login.</FormHelperText>
            </FormControl>
            <br />
            <button className={saveButton} onClick={createUser}>
                Save
            </button>
            <br />
            <button className={cancelButton}>
                Cancel
            </button>
        </div>
    )
}

export default Login;