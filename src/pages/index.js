import * as React from "react"
import Layout from "../components/layout"
import ContentLayout from "../components/content-layout"

const IndexPage = () => {
  return (
    <Layout>
      <ContentLayout />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Apollo Poke-API</title>
