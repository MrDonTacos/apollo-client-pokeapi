import * as React from "react"
import Layout from "../components/layout"
import CardList from "../components/cards"

const IndexPage = () => {
  return (
    <Layout>
      <CardList />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Apollo Poke-API</title>
