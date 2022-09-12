import React from "react";
import Layout from '../../components/layout'
import {Router} from '@reach/router'
import CardList from "../../components/cards";
import Pokemon from "../../components/pokemon";
import Login from "../../components/login";
const App = () => {
    return (
        <Layout>
            <Router basepath="/app">
                <CardList path="/" />
                <Pokemon path="/pokemon/:name" />
                <Login path="/login" />
            </Router>
        </Layout>
    )
}

export default App