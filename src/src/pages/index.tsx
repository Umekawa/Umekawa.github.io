import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "prismjs/themes/prism-dark.css"
import "../components/codeblock.css"

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      nodes {
        id
        frontmatter {
          date
          id
          title
        }
      }
    }
  }
`

const IndexPage = ({data}: {data: any}) => (
  <Layout>
    {data.allMarkdownRemark.nodes.reverse().map((node: { frontmatter: { id: any; title: any } },i: React.Key | null | undefined)=>{
      return <div key={i}>
        <a href={`/diary/${node.frontmatter.id}`} dangerouslySetInnerHTML={{__html: node.frontmatter.title}}/>
      </div>
    })}
  </Layout>
)

export default IndexPage
