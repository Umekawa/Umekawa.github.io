/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children }:{children: any}) => {
  return (
    <>
        <header>

        </header>
        <main style={{marginTop: 16, padding: 24}}>{children}</main>
        <footer
          style={{
            margin: 24,
          }}
        >
          <a href="/">Top</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
