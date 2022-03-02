import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "prismjs/themes/prism-dark.css"
import "../components/codeblock.css"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <time>{post.frontmatter.date}</time>
      <div style={{marginTop: 16}} dangerouslySetInnerHTML={{ __html: post.html }} />

      {previous && (
        <Link to={previous.fields.slug} rel="prev">
          &laquo; Prev
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug} rel="next">
          Next &raquo;
        </Link>
      )}
    </Layout>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query BlogPostSlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`
