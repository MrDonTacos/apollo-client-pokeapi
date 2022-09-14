import React, {useState} from "react";
import { Alert, FormControl, FormHelperText, Input, InputLabel, Snackbar } from "@mui/material";
import {login, saveButton, cancelButton, header} from './styles/login.module.css'
import { gql, useMutation } from "@apollo/client";
import { validatePassword, validateUser } from "../helper/regex";

const CREATE_USER = gql`
    mutation CreateUser($username: String, $plainPassword: String) {
        createUser(username: $username, plain_password: $plainPassword) {
          user
          plain_password
        }
  }
`

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [estatusRequest, setEstatusRequest] = useState(0)
    const [userError, setUserError] = useState({
        error: false,
        message: "Insert your username or email to login.",

    });
    const [passwordError, setPasswordError] = useState({
        error_password: false,
        message_password: "Insert a password to login"
    })
    const {username, password} = user;
    const {error, message} = userError;
    const {error_password, message_password} = passwordError
    const [createUser] = useMutation(CREATE_USER, {
        variables: {username: username, plainPassword: password},
        onCompleted: data => {
            console.log(data)
            if(data.createUser.user)
                setEstatusRequest(1)
            else
                setEstatusRequest(2)
        }
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setEstatusRequest(0);
        setUser({
            username: "",
            password: ""
        })
      };
    

    const handleChanges = (e) => {
        const _temp = e.target.value

        if(e.target.name === 'username')
            setUserError({
                error: !validateUser(_temp), 
                message: !validateUser(_temp) ? "Insert at least 6 characters for the username."
                : "Insert your username or email to login."
            })
        else if (e.target.name === 'password')
            setPasswordError({
                error_password: !validatePassword(_temp),
                message_password: !validatePassword(_temp) ? "Insert a password with at least 6 character and 2 of them must be an special character (*.,{}()@...)"
                : "Insert a password to login"
            })

        setUser({...user, [e.target.name]: e.target.value})
        e.preventDefault();
    }

    console.log(`username: ${username} \n password: ${password}`)
    return (
        <div className={login}>
            <h1 className={header}>Login</h1>
            <br />
            <FormControl sx={{width: '40%'}}>
                <InputLabel htmlFor="username">Username or mail</InputLabel>
                <Input error={error} name="username" value={username} disabled={estatusRequest !== 0 ? true : false} onChange={handleChanges} id="username" aria-describedby="username-helper-text"/>
                <FormHelperText id="username-helper-text">{message}</FormHelperText>
            </FormControl>
            <br />
            <br />
            <FormControl sx={{width: '40%'}}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input error={error_password} name="password" value={password} disabled={estatusRequest !== 0 ? true : false} onChange={handleChanges} id="password" aria-describedby="password-helper-text" type="password"/>
                <FormHelperText id="password-helper-text">{message_password}</FormHelperText>
            </FormControl>
            <br />
            <button className={saveButton} onClick={createUser}>
                Save
            </button>
            <br />
            <button className={cancelButton}>
                Cancel
            </button>
            <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={estatusRequest === 1 ? true : false} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  ¡Se ha creado el usuario exitosamente!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={estatusRequest === 2 ? true : false} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                ¡Ha habido un problema al crear al usuario :(!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Login;