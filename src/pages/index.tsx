import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "prismjs/themes/prism-dark.css"
import "../components/codeblock.css"

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
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

const IndexPage = ({data}) => (
  <Layout>
    {data.allMarkdownRemark.nodes.reverse().map((node,i)=>{
      return <div key={i}>
        <a href={`/${node.frontmatter.id}`} dangerouslySetInnerHTML={{__html: node.frontmatter.title}}/>
      </div>
    })}
    
  </Layout>
)

export default IndexPage