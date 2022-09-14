import React from "react";
import Layout from '../../components/layout'
import {Router} from '@reach/router'
import CardList from "../../components/cards";
import Pokemon from "../../components/pokemon";
import Login from "../../components/login";
import CreatePokemon from "../../components/create-pokemon"
import {wrapper} from "../../components/styles/router.module.css"

const App = () => {
    return (
        <Layout>
            <Router basepath="/app" className={wrapper}>
                <CardList path="/" />
                <Pokemon path="/pokemon/:name" />
                <Login path="/login" />
                <CreatePokemon path="/create" />
            </Router>
        </Layout>
    )
}

export default App