import React from "react";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import {login} from './styles/login.module.css'

const Login = () => {
    return (
        <div className={login}>
            <FormControl>
                <InputLabel htmlFor="username">Username or mail</InputLabel>
                <Input id="username" aria-describedby="username-helper-text"/>
                <FormHelperText id="username-helper-text">Insert your username or email to login.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" aria-describedby="password-helper-text"/>
                <FormHelperText id="password-helper-text">Insert your password to login.</FormHelperText>
            </FormControl>
        </div>
    )
}

export default Login;