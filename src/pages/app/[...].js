import React from "react";
import Layout from '../../components/layout'
import {Router} from '@reach/router'
import CardList from "../../components/cards";
import Pokemon from "../../components/pokemon";
const App = () => {
    return (
        <Layout>
            <Router basepath="/app">
                <CardList path="/" />
                <Pokemon path="/:name" />
            </Router>
        </Layout>
    )
}

export default App